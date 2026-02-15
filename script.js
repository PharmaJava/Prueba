let myChart = null;

const conveniosData = {
    nacional: {
        pagas: 14,
        antiguedadTipo: 'trienio', // Cada 3 años
        "2024": {
            farmaceutico: { base: 2137.03, plus: 330.51, nocturna: 1.70, antiguedad: 46.40 },
            tecnico: { base: 1448.74, plus: 0, nocturna: 1.15, antiguedad: 31.48 },
            auxiliar: { base: 1317.42, plus: 0, nocturna: 1.03, antiguedad: 28.14 }
        }
    },
    barcelona: {
        pagas: 14,
        antiguedadTipo: 'trienio',
        "2024": {
            farmaceutico: { base: 2297.21, plus: 0, nocturna: 2.10, antiguedad: 52.10 }, // Incluye plus sustituto medio
            tecnico: { base: 1515.20, plus: 0, nocturna: 1.35, antiguedad: 35.20 },
            auxiliar: { base: 1365.40, plus: 0, nocturna: 1.20, antiguedad: 30.50 }
        }
    },
    asturias: {
        pagas: 15, // 12 + Junio + Diciembre + Beneficios (Marzo)
        antiguedadTipo: 'quinquenio', // Cada 5 años = 6% del salario base
        "2024": {
            farmaceutico: { base: 2137.03, plus: 330.51, nocturna: 1.70, antiguedad: 0.06 }, // 6%
            tecnico: { base: 1448.74, plus: 0, nocturna: 1.15, antiguedad: 0.06 },
            auxiliar: { base: 1317.42, plus: 0, nocturna: 1.03, antiguedad: 0.06 }
        }
    },
    euskadi: {
        pagas: 14,
        antiguedadTipo: 'trienio',
        "2024": {
            farmaceutico: { base: 2350.00, plus: 350.00, nocturna: 2.50, antiguedad: 55.00 },
            tecnico: { base: 1600.00, plus: 0, nocturna: 1.60, antiguedad: 38.00 },
            auxiliar: { base: 1450.00, plus: 0, nocturna: 1.45, antiguedad: 32.00 }
        }
    },
    gironatarragona: {
        pagas: 14,
        antiguedadTipo: 'trienio',
        "2024": {
            farmaceutico: { base: 2180.15, plus: 335.00, nocturna: 1.85, antiguedad: 48.00 },
            tecnico: { base: 1465.30, plus: 0, nocturna: 1.20, antiguedad: 32.50 },
            auxiliar: { base: 1335.50, plus: 0, nocturna: 1.10, antiguedad: 29.20 }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input, select').forEach(input => input.addEventListener('input', calcularSalario));
    calcularSalario();
});

function actualizarAntiguedadLabel() {
    const conv = document.getElementById("convenio").value;
    const label = document.getElementById("labelAntiguedad");
    label.innerText = (conveniosData[conv].antiguedadTipo === 'quinquenio') ? "Nº Quinquenios" : "Nº Trienios";
    calcularSalario();
}

function calcularSalario() {
    const conv = document.getElementById("convenio").value;
    const prof = document.getElementById("profesion").value;
    const anio = parseInt(document.getElementById("anio").value);
    const jornPct = parseFloat(document.getElementById("porcentaje").value) / 100;
    const nAntiguedad = parseInt(document.getElementById("antiguedad").value) || 0;
    const irpfPct = parseFloat(document.getElementById("porcentajeIRPF").value) / 100;
    const modoPagas = document.getElementById("numPagas").value;

    let { base, plus, nocturna, antiguedad } = conveniosData[conv]["2024"][prof];
    const pagasConvenio = conveniosData[conv].pagas;

    // Aplicar subida del 2% anual si el año es > 2024
    if (anio > 2024) {
        const factor = Math.pow(1.02, anio - 2024);
        base *= factor;
        plus *= factor;
        nocturna *= factor;
        if (conveniosData[conv].antiguedadTipo === 'trienio') antiguedad *= factor;
    }

    // Cálculos mensuales
    const sueldoBaseM = base * jornPct;
    const plusM = plus * jornPct;
    const nocturnidadM = (parseFloat(document.getElementById("numHoras").value) || 0) * nocturna;
    const mejoraM = parseFloat(document.getElementById("mejoraSalarial").value) || 0;

    let antiguedadM;
    if (conveniosData[conv].antiguedadTipo === 'quinquenio') {
        antiguedadM = (sueldoBaseM * antiguedad) * nAntiguedad; // 6% por quinquenio
    } else {
        antiguedadM = antiguedad * nAntiguedad * jornPct;
    }

    // El bruto de las pagas extras suele ser Base + Plus + Antigüedad
    const brutoPagaExtra = sueldoBaseM + plusM + antiguedadM;
    const brutoNominaMes = brutoPagaExtra + nocturnidadM + mejoraM;

    // Cotizaciones SS (Ajustadas 2026: 4.8 + 1.55 + 0.15 + 0.1)
    const ssPct = 0.066; 

    let netoM, netoExtra, brutoAnual, ssAnual, irpfAnual;

    if (modoPagas === "12") {
        brutoAnual = (brutoPagaExtra * pagasConvenio) + ((nocturnidadM + mejoraM) * 12);
        const mensualProrrateado = brutoAnual / 12;
        ssAnual = brutoAnual * ssPct;
        irpfAnual = brutoAnual * irpfPct;
        netoM = mensualProrrateado - (mensualProrrateado * ssPct) - (mensualProrrateado * irpfPct);
    } else {
        // Prorrata de extras para cotización (Las extras cotizan mes a mes)
        const prorrataExtraM = (brutoPagaExtra * (pagasConvenio - 12)) / 12;
        const baseCotizacion = brutoNominaMes + prorrataExtraM;
        
        ssAnual = baseCotizacion * 12 * ssPct;
        irpfAnual = ((brutoNominaMes * 12) + (brutoPagaExtra * (pagasConvenio - 12))) * irpfPct;
        
        netoM = brutoNominaMes - (baseCotizacion * ssPct) - (brutoNominaMes * irpfPct);
        netoExtra = brutoPagaExtra * (1 - irpfPct);
        brutoAnual = (brutoNominaMes * 12) + (brutoPagaExtra * (pagasConvenio - 12));
    }

    const netoAnual = brutoAnual - ssAnual - irpfAnual;

    updateChart(netoAnual, irpfAnual, ssAnual);
    renderResults(modoPagas, pagasConvenio, netoM, netoExtra, netoAnual, brutoAnual);
}

function renderResults(modo, totalPagas, nm, ne, na, ba) {
    let res = `<div class="result-item"><span>Neto Nómina Mensual:</span><span class="neto-big">${nm.toFixed(2)}€</span></div>`;
    if (modo === "extra") {
        res += `<div class="result-item"><span>Neto Paga Extra (${totalPagas - 12} al año):</span><span class="neto-big" style="color:var(--primary)">${ne.toFixed(2)}€</span></div>`;
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
    const link = document.createElement('a');
    link.download = 'mi-sueldo-farmacia.png'; link.href = image; link.click();
}
