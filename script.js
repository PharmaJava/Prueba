let myChart = null;

// BASE DE DATOS DE CONVENIOS
const DATA_CONVENIOS = {
    nacional: {
        tipoAnt: 'trienio',
        tablas: {
            farmaceutico: { 
                "2022": [1908.43, 305.58, 1.57, 43.60], 
                "2023": [1984.77, 317.80, 1.63, 45.00], 
                "2024": [2064.16, 330.51, 1.70, 46.40], 
                "2025": [2105.44, 337.12, 1.73, 47.33], 
                "2026": [2147.55, 343.86, 1.76, 48.28] 
            },
            tecnico: { 
                "2022": [1294.62, 0, 1.07, 29.58], 
                "2023": [1346.40, 0, 1.11, 30.50], 
                "2024": [1400.26, 0, 1.15, 31.48], 
                "2025": [1428.27, 0, 1.17, 32.11], 
                "2026": [1456.84, 0, 1.19, 32.75] 
            },
            auxiliar: { 
                "2022": [1157.08, 0, 0.95, 26.44], 
                "2023": [1203.36, 0, 0.99, 27.50], 
                "2024": [1251.49, 0, 1.03, 28.14], 
                "2025": [1276.52, 0, 1.05, 28.70], 
                "2026": [1302.05, 0, 1.07, 29.27] 
            }
        }
    },
    barcelona: {
        tipoAnt: 'trienio',
        tablas: {
            farmaceutico: { "2024": [2297.21, 0, 2.15, 52.14], "2025": [2343.15, 0, 2.19, 53.18], "2026": [2390.01, 0, 2.23, 54.24] },
            tecnico: { "2024": [1515.20, 0, 1.40, 34.20], "2025": [1545.50, 0, 1.43, 34.88], "2026": [1576.41, 0, 1.46, 35.58] },
            auxiliar: { "2024": [1365.40, 0, 1.25, 30.15], "2025": [1392.71, 0, 1.28, 30.75], "2026": [1420.56, 0, 1.31, 31.37] }
        }
    },
    gironatarragona: {
        tipoAnt: 'trienio',
        tablas: {
            farmaceutico: { "2024": [2180.50, 220.00, 1.95, 49.50], "2025": [2224.11, 224.40, 1.98, 50.49], "2026": [2268.59, 228.89, 2.02, 51.50] },
            tecnico: { "2024": [1460.30, 0, 1.30, 32.80], "2025": [1489.50, 0, 1.32, 33.45], "2026": [1519.29, 0, 1.35, 34.12] },
            auxiliar: { "2024": [1310.15, 0, 1.15, 29.20], "2025": [1336.35, 0, 1.17, 29.78], "2026": [1363.08, 0, 1.19, 30.38] }
        }
    },
    asturias: {
        tipoAnt: 'quinquenio', // 5% del salario base
        tablas: {
            farmaceutico: { "2024": [2110.00, 330.51, 1.75, 0.05], "2025": [2152.20, 337.12, 1.78, 0.05], "2026": [2195.24, 343.86, 1.81, 0.05] },
            tecnico: { "2024": [1430.00, 0, 1.18, 0.05], "2025": [1458.60, 0, 1.20, 0.05], "2026": [1487.77, 0, 1.22, 0.05] },
            auxiliar: { "2024": [1280.00, 0, 1.05, 0.05], "2025": [1305.60, 0, 1.07, 0.05], "2026": [1331.71, 0, 1.09, 0.05] }
        }
    },
    euskadi: {
        tipoAnt: 'trienio',
        tablas: {
            farmaceutico: { "2024": [2450.00, 0, 2.50, 60.00], "2025": [2499.00, 0, 2.55, 61.20], "2026": [2548.98, 0, 2.60, 62.42] },
            tecnico: { "2024": [1710.00, 0, 1.65, 42.00], "2025": [1744.20, 0, 1.68, 42.84], "2026": [1779.08, 0, 1.71, 43.70] },
            auxiliar: { "2024": [1560.00, 0, 1.50, 38.00], "2025": [1591.20, 0, 1.53, 38.76], "2026": [1623.02, 0, 1.56, 39.54] }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input, select').forEach(el => el.addEventListener('input', calcularSalario));
    document.getElementById('convenio').addEventListener('change', actualizarUI);
    if (!localStorage.getItem('cookiesAceptadas')) document.getElementById('cookie-banner').style.display = 'flex';
    actualizarUI();
});

function actualizarUI() {
    const conv = document.getElementById('convenio').value;
    const tipo = DATA_CONVENIOS[conv].tipoAnt;
    document.getElementById('labelAntiguedad').innerText = (tipo === 'quinquenio') ? "Nº Quinquenios" : "Nº Trienios";
    
    // Sugerir pagas
    if (conv === 'asturias') document.getElementById('numPagas').value = "15";
    else if (document.getElementById('numPagas').value === "15") document.getElementById('numPagas').value = "14";
    
    calcularSalario();
}

function aceptarCookies() {
    localStorage.setItem('cookiesAceptadas', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}

function calcularSalario() {
    const conv = document.getElementById("convenio").value;
    const prof = document.getElementById("profesion").value;
    const anio = document.getElementById("anio").value;
    const numPagas = parseInt(document.getElementById("numPagas").value);
    const jornPct = parseFloat(document.getElementById("porcentaje").value) / 100;
    const irpfPct = parseFloat(document.getElementById("porcentajeIRPF").value) / 100;
    const nAnt = parseInt(document.getElementById("antiguedad").value) || 0;

    // Cotizaciones SS
    const totalSSPct = (
        parseFloat(document.getElementById("cotizacionContComu").value) + 
        parseFloat(document.getElementById("cotizacionDesempleo").value) + 
        parseFloat(document.getElementById("cotizacionMEI").value) + 
        parseFloat(document.getElementById("cotizacionFormacion").value)
    ) / 100;

    // Obtener datos de tabla (Si el año no existe en ese convenio, coge 2024)
    const tablaConvenio = DATA_CONVENIOS[conv].tablas[prof];
    const [base, plus, precioHora, valAnt] = tablaConvenio[anio] || tablaConvenio["2024"];

    const hNoc = parseFloat(document.getElementById("numHoras").value) || 0;
    const mejoraBruta = parseFloat(document.getElementById("mejoraSalarial").value) || 0;

    // Cálculos Brutos
    const sueldoBaseMes = base * jornPct;
    const plusFacultativoMes = plus * jornPct;
    const valorNocturnidadMes = hNoc * precioHora; 
    
    let antiguedadMes = 0;
    if (DATA_CONVENIOS[conv].tipoAnt === 'quinquenio') {
        antiguedadMes = (sueldoBaseMes * valAnt) * nAnt;
    } else {
        antiguedadMes = valAnt * nAnt * jornPct;
    }

    // Bruto Paga Extra (Base + Plus + Antigüedad)
    const brutoExtra = sueldoBaseMes + plusFacultativoMes + antiguedadMes;
    const brutoMesNormal = brutoExtra + mejoraBruta + valorNocturnidadMes;

    // Determinación de pagas totales reales del convenio
    const pagasTotalesReal = (conv === 'asturias') ? 15 : 14;

    let netoMensual, netoExtra, brutoAnualTotal, irpfAnual, ssAnual, baseSS;

    if (numPagas === 12) {
        brutoAnualTotal = (brutoExtra * pagasTotalesReal) + ((mejoraBruta + valorNocturnidadMes) * 12);
        const brutoMensualProrrateado = brutoAnualTotal / 12;
        netoMensual = brutoMensualProrrateado * (1 - totalSSPct - irpfPct);
        ssAnual = brutoAnualTotal * totalSSPct;
        irpfAnual = brutoAnualTotal * irpfPct;
        baseSS = brutoAnualTotal;
    } else {
        // Cálculo 14 o 15 pagas
        const prorrataExtra = (brutoExtra * (numPagas - 12)) / 12;
        const baseCotizacionMes = brutoMesNormal + prorrataExtra;
        netoMensual = brutoMesNormal - (baseCotizacionMes * totalSSPct) - (brutoMesNormal * irpfPct);
        netoExtra = brutoExtra * (1 - irpfPct);
        
        brutoAnualTotal = (brutoMesNormal * 12) + (brutoExtra * (numPagas - 12));
        ssAnual = baseCotizacionMes * 12 * totalSSPct;
        irpfAnual = brutoAnualTotal * irpfPct;
        baseSS = brutoAnualTotal;
    }

    const netoAnualTotal = brutoAnualTotal - ssAnual - irpfAnual;

    updateChart(netoAnualTotal, irpfAnual, ssAnual);
    renderizarResultados(numPagas, netoMensual, netoExtra, netoAnualTotal, brutoAnualTotal);
}

function renderizarResultados(pagas, nm, ne, na, ba) {
    let h = `<div class="result-item"><span>Neto Mensual:</span><span class="neto-big">${nm.toFixed(2)}€</span></div>`;
    if (pagas !== 12) {
        h += `<div class="result-item"><span>Neto Paga Extra:</span><span class="neto-big" style="color:var(--primary)">${ne.toFixed(2)}€</span></div>`;
    }
    h += `<hr style="border:0; border-top:1px solid #cbd5e1; margin:12px 0;">
          <div class="result-item"><span>Total Neto Anual:</span><span class="neto-big" style="font-size:1.1rem">${na.toFixed(2)}€</span></div>
          <div class="result-item"><span>Bruto Anual Total:</span><span>${ba.toFixed(2)}€</span></div>`;
    document.getElementById("resultados").innerHTML = h;
}

function updateChart(n, i, s) {
    const ctx = document.getElementById('salaryChart').getContext('2d');
    if (myChart) myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Sueldo Neto', 'IRPF', 'Seguridad Social'],
            datasets: [{ data: [n, i, s], backgroundColor: ['#10b981', '#ef4444', '#f59e0b'], borderWidth: 2 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
    });
}

async function exportarImagen() {
    const canvas = await html2canvas(document.getElementById('capture-area'), { scale: 2 });
    const link = document.createElement('a');
    link.download = 'mi-sueldo-farmacia.png';
    link.href = canvas.toDataURL();
    link.click();
}
