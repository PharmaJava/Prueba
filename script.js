let myChart = null;

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => input.addEventListener('input', calcularSalario));
    
    if (!localStorage.getItem('cookiesAceptadas')) {
        document.getElementById('cookie-banner').style.display = 'flex';
    }
    calcularSalario();
});

function aceptarCookies() {
    localStorage.setItem('cookiesAceptadas', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}

function calcularSalario() {
    // ESTRUCTURA: [Sueldo Base, Plus, Nocturnidad Hora, Valor 1 Trienio]
    const convenios = {
        nacional: {
            "2024": { farmaceutico: [2064.16, 330.51, 1.70, 46.40], tecnico: [1400.26, 0, 1.15, 31.48], auxiliar: [1251.49, 0, 1.03, 28.14] },
            "2025": { farmaceutico: [2105.44, 337.12, 1.73, 47.33], tecnico: [1428.27, 0, 1.17, 32.11], auxiliar: [1276.52, 0, 1.05, 28.70] },
            "2026": { farmaceutico: [2147.55, 343.86, 1.76, 48.28], tecnico: [1456.84, 0, 1.19, 32.75], auxiliar: [1302.05, 0, 1.07, 29.27] }
        },
        barcelona: { // Datos 2024 base. 2025/26 aplican +2%
            "2024": { farmaceutico: [2215.30, 485.20, 2.10, 52.10], tecnico: [1485.40, 0, 1.35, 35.20], auxiliar: [1350.20, 0, 1.20, 30.50] }
        },
        asturias: { // Asturias tiene pluses por antigüedad potentes
            "2024": { farmaceutico: [2090.40, 340.20, 1.75, 49.80], tecnico: [1410.50, 0, 1.18, 33.60], auxiliar: [1260.30, 0, 1.05, 30.10] }
        },
        paisvasco: { // El convenio más alto de España
            "2024": { farmaceutico: [2550.00, 520.00, 2.50, 65.00], tecnico: [1750.00, 0, 1.60, 45.00], auxiliar: [1550.00, 0, 1.45, 40.00] }
        },
        gironatarragona: {
            "2024": { farmaceutico: [2180.15, 450.10, 2.05, 51.00], tecnico: [1450.30, 0, 1.30, 34.50], auxiliar: [1320.50, 0, 1.15, 29.80] }
        }
    };

    const conv = document.getElementById("convenio").value;
    const prof = document.getElementById("profesion").value;
    const anio = document.getElementById("anio").value;
    const jornPct = parseFloat(document.getElementById("porcentaje").value) / 100;
    const numPagas = parseInt(document.getElementById("numPagas").value);
    const nTrienios = parseInt(document.getElementById("numTrienios").value) || 0;
    const irpfPct = parseFloat(document.getElementById("porcentajeIRPF").value) / 100;

    // Lógica de obtención de datos con subida del 2% para convenios sin tablas publicadas
    let base, plus, precioHora, valTrienio;
    
    if (convenios[conv][anio]) {
        [base, plus, precioHora, valTrienio] = convenios[conv][anio][prof];
    } else {
        const d2024 = convenios[conv]["2024"][prof];
        const factor = Math.pow(1.02, (parseInt(anio) - 2024));
        base = d2024[0] * factor;
        plus = d2024[1] * factor;
        precioHora = d2024[2] * factor;
        valTrienio = d2024[3] * factor;
    }

    // Conceptos Brutos
    const mejoraB = parseFloat(document.getElementById("mejoraSalarial").value) || 0;
    const hNoc = parseFloat(document.getElementById("numHoras").value) || 0;
    
    const sueldoBaseM = base * jornPct;
    const plusFaculM = plus * jornPct;
    const trieniosM = (valTrienio * nTrienios) * jornPct;
    const nocturnidadM = hNoc * precioHora;
    
    // El Bruto Extra se compone de Base + Plus + Trienios (La mejora suele ser 12 pagas)
    const brutoPagaExtra = sueldoBaseM + plusFaculM + trieniosM;
    const brutoNominaMes = brutoPagaExtra + mejoraB + nocturnidadM;

    // Impuestos (SS)
    const totalSSPct = (parseFloat(document.getElementById("cotizacionContComu").value) +
                        parseFloat(document.getElementById("cotizacionDesempleo").value) +
                        parseFloat(document.getElementById("cotizacionMEI").value) +
                        parseFloat(document.getElementById("cotizacionFormacion").value)) / 100;

    let netoM, netoE, brutoAnual, irpfA, ssA;

    if (numPagas === 12) {
        // Todo a una bolsa común dividida entre 12
        brutoAnual = (brutoPagaExtra * 14) + (mejoraB * 12) + (nocturnidadM * 12);
        const bMensualProrrateado = brutoAnual / 12;
        netoM = bMensualProrrateado * (1 - (totalSSPct + irpfPct));
        ssA = brutoAnual * totalSSPct;
        irpfA = brutoAnual * irpfPct;
    } else {
        // 14 pagas: SS prorrateada, IRPF sobre el bruto real del mes
        const prorrataE = (brutoPagaExtra * 2) / 12;
        const baseCotiza = brutoNominaMes + prorrataE;
        netoM = brutoNominaMes - (baseCotiza * totalSSPct) - (brutoNominaMes * irpfPct);
        netoE = brutoPagaExtra * (1 - irpfPct);
        brutoAnual = baseCotiza * 12;
        ssA = brutoAnual * totalSSPct;
        irpfA = (brutoNominaMes * 12 * irpfPct) + (brutoPagaExtra * 2 * irpfPct);
    }

    const netoAnual = brutoAnual - ssA - irpfA;

    updateChart(netoAnual, irpfA, ssA);
    renderResults(numPagas, netoM, netoE, netoAnual, brutoAnual);
}

function renderResults(pagas, nm, ne, na, ba) {
    let res = `<div class="result-item"><span>Neto Mensual:</span><span class="neto-big">${nm.toFixed(2)}€</span></div>`;
    if (pagas === 14) {
        res += `<div class="result-item"><span>Paga Extra (Jun/Dic):</span><span class="neto-big" style="color:var(--primary)">${ne.toFixed(2)}€</span></div>`;
    }
    res += `<hr style="margin:12px 0; border:0; border-top:1px solid #eee">
            <div class="result-item"><span>Bruto Anual:</span><span>${ba.toFixed(2)}€</span></div>
            <div class="result-item"><span>Neto Anual:</span><span class="neto-big" style="font-size:1.1rem">${na.toFixed(2)}€</span></div>`;
    document.getElementById("resultados").innerHTML = res;
}

function updateChart(n, i, s) {
    const ctx = document.getElementById('salaryChart').getContext('2d');
    if (myChart) myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Neto', 'IRPF', 'SS'],
            datasets: [{ data: [n, i, s], backgroundColor: ['#10b981', '#ef4444', '#f59e0b'], borderWidth: 0 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
    });
}

async function exportarImagen() {
    const area = document.getElementById('capture-area');
    const canvas = await html2canvas(area, { scale: 2 });
    const image = canvas.toDataURL("image/png");
    if (navigator.share) {
        const blob = await (await fetch(image)).blob();
        const file = new File([blob], 'mi-nomina.png', { type: 'image/png' });
        navigator.share({ files: [file], title: 'Calculadora Farmacia Pro' });
    } else {
        const link = document.createElement('a');
        link.download = 'nomina.png'; link.href = image; link.click();
    }
}
