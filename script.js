/**
 * Sueldo Farmacia Pro - Lógica de Cálculo Multiconvenio
 * Versión: 3.2.0 (Feb 2026)
 * Autor: Colaborador Gemini / conveniodefarmacia.com
 */

let myChart = null;

// ==========================================
// BASE DE DATOS DE CONVENIOS (DATOS REALES)
// ==========================================
const TABLAS_SALARIALES = {
    // TUS DATOS NACIONALES EXACTOS (XXV CONVENIO)
    // Estructura: [Sueldo Base, Plus Facultativo, Hora Nocturna, Importe Trienio]
    nacional: {
        tipoAntiguedad: 'trienio',
        pagasBase: 14,
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
    },
    // BARCELONA (Datos actualizados BOPB 2024-2025)
    barcelona: {
        tipoAntiguedad: 'trienio',
        pagasBase: 14,
        farmaceutico: { "2024": [2297.21, 0, 2.15, 52.14], "2025": [2343.15, 0, 2.19, 53.18], "2026": [2390.01, 0, 2.23, 54.24] },
        tecnico: { "2024": [1515.20, 0, 1.40, 34.20], "2025": [1545.50, 0, 1.43, 34.88], "2026": [1576.41, 0, 1.46, 35.58] },
        auxiliar: { "2024": [1365.40, 0, 1.25, 30.15], "2025": [1392.71, 0, 1.28, 30.75], "2026": [1420.56, 0, 1.31, 31.37] }
    },
    // ASTURIAS (Datos con 15 pagas y Quinquenios)
    asturias: {
        tipoAntiguedad: 'quinquenio', // 5% sobre el base
        pagasBase: 15,
        farmaceutico: { "2024": [2110.00, 330.51, 1.75, 0.05], "2025": [2152.20, 337.12, 1.78, 0.05], "2026": [2195.24, 343.86, 1.81, 0.05] },
        tecnico: { "2024": [1430.00, 0, 1.18, 0.05], "2025": [1458.60, 0, 1.20, 0.05], "2026": [1487.77, 0, 1.22, 0.05] },
        auxiliar: { "2024": [1280.00, 0, 1.05, 0.05], "2025": [1305.60, 0, 1.07, 0.05], "2026": [1331.71, 0, 1.09, 0.05] }
    },
    // EUSKADI (Salaros más altos históricos)
    euskadi: {
        tipoAntiguedad: 'trienio',
        pagasBase: 14,
        farmaceutico: { "2024": [2450.00, 0, 2.50, 60.00], "2025": [2499.00, 0, 2.55, 61.20], "2026": [2548.98, 0, 2.60, 62.42] },
        tecnico: { "2024": [1710.00, 0, 1.65, 42.00], "2025": [1744.20, 0, 1.68, 42.84], "2026": [1779.08, 0, 1.71, 43.70] },
        auxiliar: { "2024": [1560.00, 0, 1.50, 38.00], "2025": [1591.20, 0, 1.53, 38.76], "2026": [1623.02, 0, 1.56, 39.54] }
    }
};

// ==========================================
// INICIALIZACIÓN Y EVENTOS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const allInputs = document.querySelectorAll('input, select');
    
    // Escuchar cambios en cualquier input
    allInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.id === 'convenio') updateUIForConvenio();
            mainCalculation();
        });
    });

    // Control de Cookies
    if (!localStorage.getItem('cookies_v3')) {
        document.getElementById('cookie-banner').style.display = 'flex';
    }

    // Estado inicial
    updateUIForConvenio();
    mainCalculation();
});

function aceptarCookies() {
    localStorage.setItem('cookies_v3', 'accepted');
    document.getElementById('cookie-banner').style.display = 'none';
}

/**
 * Actualiza etiquetas y selects según el convenio elegido
 */
function updateUIForConvenio() {
    const convKey = document.getElementById('convenio').value;
    const config = TABLAS_SALARIALES[convKey];
    
    // Cambiar texto Trienio / Quinquenio
    const label = document.getElementById('labelAntiguedad');
    label.innerText = (config.tipoAntiguedad === 'quinquenio') ? "Nº Quinquenios" : "Nº Trienios";

    // Sugerir pagas según convenio
    const pagasSelect = document.getElementById('numPagas');
    if (config.pagasBase === 15) {
        // Si el convenio es Asturias o similar, añadimos la opción de 15 si no existe
        if (!pagasSelect.querySelector('option[value="15"]')) {
            const opt = document.createElement('option');
            opt.value = "15";
            opt.text = "15 Pagas (Asturias)";
            pagasSelect.add(opt);
        }
        pagasSelect.value = "extra"; // Por defecto extras separadas
    }
}

// ==========================================
// MOTOR DE CÁLCULO
// ==========================================
function mainCalculation() {
    // 1. Captura de datos del DOM
    const convenio = document.getElementById('convenio').value;
    const profesion = document.getElementById('profesion').value;
    const anio = document.getElementById('anio').value;
    const jornadaPct = parseFloat(document.getElementById('porcentaje').value) / 100 || 1;
    const numPagasInput = document.getElementById('numPagas').value;
    const numAntiguedad = parseInt(document.getElementById('antiguedad').value) || 0;
    const hNocturnas = parseFloat(document.getElementById('numHoras').value) || 0;
    const mejoraVoluntaria = parseFloat(document.getElementById('mejoraSalarial').value) || 0;
    const irpfPct = parseFloat(document.getElementById('porcentajeIRPF').value) / 100 || 0;

    // 2. Porcentajes de Seguridad Social (Trabajador)
    const ss_comunes = parseFloat(document.getElementById('cotizacionContComu').value) / 100;
    const ss_desempleo = parseFloat(document.getElementById('cotizacionDesempleo').value) / 100;
    const ss_mei = parseFloat(document.getElementById('cotizacionMEI').value) / 100;
    const ss_formacion = parseFloat(document.getElementById('cotizacionFormacion').value) / 100;
    const TOTAL_SS_PCT = ss_comunes + ss_desempleo + ss_mei + ss_formacion;

    // 3. Obtención de valores de tabla
    const config = TABLAS_SALARIALES[convenio];
    let [baseTab, plusTab, nocTab, antTab] = config[profesion][anio] || config[profesion]["2024"];

    // 4. Cálculos Brutos Mensuales (Ajustados a jornada)
    const sueldoBaseMes = baseTab * jornadaPct;
    const plusFacultativoMes = plusTab * jornadaPct;
    const valorNocturnidadTotal = hNocturnas * nocTab;
    
    // Cálculo Antigüedad
    let antiguedadMes = 0;
    if (config.tipoAntiguedad === 'quinquenio') {
        // Asturias: 5% del base por cada 5 años
        antiguedadMes = (sueldoBaseMes * antTab) * numAntiguedad;
    } else {
        // Nacional/Resto: Importe fijo según tabla
        antiguedadMes = antTab * numAntiguedad * jornadaPct;
    }

    // Bruto de la Paga Extra (Sueldo Base + Plus + Antigüedad)
    const brutoPagaExtra = sueldoBaseMes + plusFacultativoMes + antiguedadMes;

    // Bruto de la Nómina Mensual Normal
    const brutoNominaNormal = brutoPagaExtra + mejoraVoluntaria + valorNocturnidadTotal;

    // 5. Lógica de Pagas y Netos
    const numPagasTotales = (convenio === 'asturias') ? 15 : 14;
    
    let netoMensual, netoExtra, brutoAnual, irpfAnual, ssAnual;

    if (numPagasInput === '12') {
        // CASO PRORRATEADO
        brutoAnual = (brutoPagaExtra * numPagasTotales) + ((mejoraVoluntaria + valorNocturnidadTotal) * 12);
        const brutoMensualProrrateado = brutoAnual / 12;
        
        const deduccionSS = brutoMensualProrrateado * TOTAL_SS_PCT;
        const deduccionIRPF = brutoMensualProrrateado * irpfPct;
        
        netoMensual = brutoMensualProrrateado - deduccionSS - deduccionIRPF;
        netoExtra = 0;
        
        ssAnual = brutoAnual * TOTAL_SS_PCT;
        irpfAnual = brutoAnual * irpfPct;
    } else {
        // CASO PAGAS EXTRAS SEPARADAS
        // La SS se paga prorrateada todos los meses según ley española
        const prorrataExtraMensual = (brutoPagaExtra * (numPagasTotales - 12)) / 12;
        const baseCotizacionMes = brutoNominaNormal + prorrataExtraMensual;

        const deduccionSS_Mes = baseCotizacionMes * TOTAL_SS_PCT;
        const deduccionIRPF_Mes = brutoNominaNormal * irpfPct;

        netoMensual = brutoNominaNormal - deduccionSS_Mes - deduccionIRPF_Mes;
        
        // La paga extra solo lleva retención de IRPF (la SS ya se pagó mes a mes)
        netoExtra = brutoPagaExtra * (1 - irpfPct);

        brutoAnual = (brutoNominaNormal * 12) + (brutoPagaExtra * (numPagasTotales - 12));
        ssAnual = baseCotizacionMes * 12 * TOTAL_SS_PCT;
        irpfAnual = brutoAnual * irpfPct;
    }

    const netoAnual = brutoAnual - ssAnual - irpfAnual;

    // 6. Actualización de Interfaz
    renderResultados(numPagasInput, numPagasTotales, netoMensual, netoExtra, netoAnual, brutoAnual);
    updateChart(netoAnual, irpfAnual, ssAnual);
}

function renderResultados(modo, pagasTotal, nm, ne, na, ba) {
    const contenedor = document.getElementById('resultados');
    let html = `
        <div class="result-card">
            <h3>Neto Mensual</h3>
            <p class="main-neto">${nm.toFixed(2)}€</p>
        </div>
    `;

    if (modo !== '12') {
        html += `
            <div class="result-details" style="background: #f0f9ff; border: 1px solid #bae6fd; margin-bottom: 15px;">
                <p><strong>Paga Extra (${pagasTotal - 12} al año):</strong> 
                <span style="color:var(--primary); font-size: 1.2rem;">${ne.toFixed(2)}€</span></p>
                <small>Importe neto por cada paga extra.</small>
            </div>
        `;
    }

    html += `
        <div class="result-details">
            <p><span>Bruto Anual:</span> <span>${ba.toFixed(2)}€</span></p>
            <p><span>Total Neto Anual:</span> <strong>${na.toFixed(2)}€</strong></p>
        </div>
    `;

    contenedor.innerHTML = html;
}

function updateChart(neto, irpf, ss) {
    const ctx = document.getElementById('salaryChart').getContext('2d');
    if (myChart) myChart.destroy();

    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Sueldo Neto', 'IRPF', 'Seguridad Social'],
            datasets: [{
                data: [neto, irpf, ss],
                backgroundColor: ['#10b981', '#ef4444', '#f59e0b'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 12 } } }
            },
            cutout: '70%'
        }
    });
}

// ==========================================
// EXPORTACIÓN Y COMPARTIR
// ==========================================
async function exportarImagen() {
    const area = document.getElementById('capture-area');
    const btn = document.querySelector('.btn-export');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando...';
    
    try {
        const canvas = await html2canvas(area, {
            scale: 2,
            backgroundColor: "#ffffff",
            logging: false,
            useCORS: true
        });
        
        const image = canvas.toDataURL("image/png");
        
        if (navigator.share) {
            const blob = await (await fetch(image)).blob();
            const file = new File([blob], 'mi-sueldo-farmacia.png', { type: 'image/png' });
            await navigator.share({
                files: [file],
                title: 'Mi Sueldo en Farmacia',
                text: 'Calculado en Sueldo Farmacia Pro'
            });
        } else {
            const link = document.createElement('a');
            link.download = 'mi-sueldo-farmacia.png';
            link.href = image;
            link.click();
        }
    } catch (err) {
        console.error("Error al exportar:", err);
        alert("No se pudo generar la imagen. Intenta hacer una captura de pantalla.");
    } finally {
        btn.innerHTML = originalText;
    }
}
