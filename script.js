let myChart = null;

// DATOS BASE 2024 y LÓGICA DE CONVENIO
// Nacional: Datos exactos proporcionados por usuario.
// Provinciales: Estimaciones conservadoras base 2024 para aplicar subida posterior.
const dbConvenios = {
    nacional: {
        pagas: 14,
        tipoAntiguedad: 'trienio', // Importe fijo aprox
        "2024": { farmaceutico: [2064.16, 330.51, 1.70, 42.00], tecnico: [1400.26, 0, 1.15, 30.00], auxiliar: [1251.49, 0, 1.03, 26.00] },
        "2025": { farmaceutico: [2105.44, 337.12, 1.73, 43.00], tecnico: [1428.27, 0, 1.17, 31.00], auxiliar: [1276.52, 0, 1.05, 27.00] },
        "2026": { farmaceutico: [2147.55, 343.86, 1.76, 44.00], tecnico: [1456.84, 0, 1.19, 32.00], auxiliar: [1302.05, 0, 1.07, 28.00] }
    },
    // Para convenios provinciales sin tabla futura, usamos base 2024 y aplicamos +2% anual en el código
    barcelona: { 
        pagas: 14, tipoAntiguedad: 'trienio',
        "2024": { farmaceutico: [2180.00, 200.00, 2.00, 50.00], tecnico: [1450.00, 0, 1.30, 35.00], auxiliar: [1300.00, 0, 1.15, 30.00] }
    },
    asturias: { 
        pagas: 15, tipoAntiguedad: 'quinquenio', // % del base
        "2024": { farmaceutico: [2090.00, 300.00, 1.75, 0.06], tecnico: [1410.00, 0, 1.20, 0.06], auxiliar: [1260.00, 0, 1.10, 0.06] }
    },
    paisvasco: { 
        pagas: 14, tipoAntiguedad: 'trienio',
        "2024": { farmaceutico: [2400.00, 350.00, 2.30, 60.00], tecnico: [1650.00, 0, 1.50, 40.00], auxiliar: [1500.00, 0, 1.40, 35.00] }
    },
    gironatarragona: { 
        pagas: 14, tipoAntiguedad: 'trienio',
        "2024": { farmaceutico: [2150.00, 300.00, 1.90, 48.00], tecnico: [1430.00, 0, 1.25, 33.00], auxiliar: [1290.00, 0, 1.10, 29.00] }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Restaurar Cookies
    if (!localStorage.getItem('cookiesAceptadas')) {
        document.getElementById('cookie-banner').style.display = 'flex';
    }

    // Event Listeners
    document.querySelectorAll('input, select').forEach(el => {
        el.addEventListener('input', calcularSalario);
    });
    
    // Listener especial para cambiar etiqueta Trienio/Quinquenio
    document.getElementById('convenio').addEventListener('change', () => {
        const conv = document.getElementById('convenio').value;
        const label = document.getElementById('labelAntiguedad');
        label.innerText = (dbConvenios[conv].tipoAntiguedad === 'quinquenio') ? "Nº Quinquenios" : "Nº Trienios";
        calcularSalario();
    });

    calcularSalario();
});

function aceptarCookies() {
    localStorage.setItem('cookiesAceptadas', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}

function calcularSalario() {
    // 1. Obtener Inputs
    const conv = document.getElementById('convenio').value;
    const prof = document.getElementById('profesion').value;
    const anio = parseInt(document.getElementById('anio').value);
    const pagasInput = document.getElementById('numPagas').value;
    const jornada = parseFloat(document.getElementById('porcentaje').value) / 100;
    const nAntiguedad = parseFloat(document.getElementById('antiguedad').value) || 0;
    const hNoc = parseFloat(document.getElementById('numHoras').value) || 0;
    const mejora = parseFloat(document.getElementById('mejoraSalarial').value) || 0;
    const irpf = parseFloat(document.getElementById('porcentajeIRPF').value) / 100;

    // Cotizaciones SS
    const ssTotal = (
        parseFloat(document.getElementById('cotizacionContComu').value) +
        parseFloat(document.getElementById('cotizacionDesempleo').value) +
        parseFloat(document.getElementById('cotizacionMEI').value) +
        parseFloat(document.getElementById('cotizacionFormacion').value)
    ) / 100;

    // 2. Obtener Datos Base y aplicar "Regla del 2%" si no hay tabla
    let datosBase, datosPlus, datosNoc, datosAntig;
    const dataConv = dbConvenios[conv];

    if (dataConv[anio]) {
        // Año existe en tablas (Ej: Nacional 2025/2026)
        [datosBase, datosPlus, datosNoc, datosAntig] = dataConv[anio][prof];
    } else {
        // Año no existe (Ej: Barcelona 2026), usamos 2024 y aplicamos 2%
        const base24 = dataConv["2024"][prof];
        const factor = Math.pow(1.02, anio - 2024);
        datosBase = base24[0] * factor;
        datosPlus = base24[1] * factor;
        datosNoc = base24[2] * factor;
        // Si es trienio fijo, sube. Si es porcentaje, se mantiene el %
        datosAntig = (dataConv.tipoAntiguedad === 'quinquenio') ? base24[3] : base24[3] * factor;
    }

    // 3. Cálculos Mensuales (Brutos ajustados a jornada)
    const baseMes = datosBase * jornada;
    const plusMes = datosPlus * jornada;
    const nocturnidadTotal = hNoc * datosNoc;
    
    // Cálculo Antigüedad
    let antiguedadTotal = 0;
    if (dataConv.tipoAntiguedad === 'quinquenio') {
        antiguedadTotal = (baseMes * datosAntig) * nAntiguedad; // % sobre Base
    } else {
        antiguedadTotal = datosAntig * nAntiguedad * jornada; // Importe fijo prorrateado
    }

    // Conceptos
    const brutoFijoMes = baseMes + plusMes + antiguedadTotal; // Base de pagas extras
    const brutoNominaMes = brutoFijoMes + nocturnidadTotal + mejora; // Lo que entra en el mes corriente

    // 4. Cálculo Anual y Netos
    const numPagasReal = dataConv.pagas; // 14 o 15
    let netoMensual, netoExtra, brutoAnual, irpfAnual, ssAnual;

    if (pagasInput === '12') {
        // Todo en 12 pagas
        // Bruto Anual = (Fijo * PagasReales) + (Variables * 12)
        brutoAnual = (brutoFijoMes * numPagasReal) + ((nocturnidadTotal + mejora) * 12);
        const brutoMensualProrrateado = brutoAnual / 12;
        
        irpfAnual = brutoAnual * irpf;
        ssAnual = brutoAnual * ssTotal;
        
        netoMensual = brutoMensualProrrateado - (brutoMensualProrrateado * ssTotal) - (brutoMensualProrrateado * irpf);
    } else {
        // Pagas separadas (14 o 15)
        // La SS se paga mes a mes prorrateada
        const prorrataExtra = (brutoFijoMes * (numPagasReal - 12)) / 12;
        const baseCotizacion = brutoNominaMes + prorrataExtra;

        const ssMes = baseCotizacion * ssTotal;
        const irpfMes = brutoNominaMes * irpf;

        netoMensual = brutoNominaMes - ssMes - irpfMes;
        netoExtra = brutoFijoMes * (1 - irpf); // La extra limpia de SS, solo IRPF

        brutoAnual = (brutoFijoMes * numPagasReal) + ((nocturnidadTotal + mejora) * 12);
        ssAnual = baseCotizacion * 12 * ssTotal;
        irpfAnual = brutoAnual * irpf;
    }

    const netoAnual = brutoAnual - ssAnual - irpfAnual;

    // 5. Renderizar
    renderResultados(pagasInput, numPagasReal, netoMensual, netoExtra, netoAnual, brutoAnual);
    updateChart(netoAnual, irpfAnual, ssAnual);
}

function renderResultados(modo, pagasReales, nm, ne, na, ba) {
    const div = document.getElementById('resultados');
    let html = `
        <div class="result-card">
            <h3>Neto Nómina Mes</h3>
            <p class="main-neto">${nm.toFixed(2)}€</p>
        </div>
    `;
    
    if (modo === 'extra') {
        html += `
            <div class="result-details" style="margin-top:10px; background:#f0fdf4; border:1px solid #bbf7d0;">
                <p><strong>Paga Extra:</strong> <span style="color:#15803d; font-size:1.2rem;">${ne.toFixed(2)}€</span></p>
                <small>Recibes ${pagasReales - 12} pagas extras al año.</small>
            </div>
        `;
    }

    html += `
        <div class="result-details">
            <hr>
            <p><span>Bruto Anual:</span> <span>${ba.toFixed(2)}€</span></p>
            <p><span>Neto Anual:</span> <strong>${na.toFixed(2)}€</strong></p>
        </div>
    `;
    div.innerHTML = html;
}

function updateChart(neto, irpf, ss) {
    const ctx = document.getElementById('salaryChart').getContext('2d');
    if (myChart) myChart.destroy();
    
    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Neto', 'IRPF', 'Seguridad Social'],
            datasets: [{
                data: [neto, irpf, ss],
                backgroundColor: ['#10b981', '#ef4444', '#f59e0b'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } },
            cutout: '65%'
        }
    });
}

async function exportarImagen() {
    const area = document.getElementById('capture-area');
    const btn = document.querySelector('.btn-export');
    const original = btn.innerHTML;
    btn.innerHTML = 'Generando...';
    
    try {
        const canvas = await html2canvas(area, { scale: 2, backgroundColor: "#ffffff" });
        const image = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.download = 'mi-sueldo-farmacia.png';
        link.href = image;
        link.click();
    } catch (e) {
        alert("Error al generar imagen");
    } finally {
        btn.innerHTML = original;
    }
}
