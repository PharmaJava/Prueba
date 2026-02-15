let myChart = null;

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => input.addEventListener('input', calcularSalario));
    
    // Lógica de Cookies
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
    // Tablas actualizadas según convenio XXV (2022-2026)
    // [Sueldo Base, Plus Facultativo, Precio Hora Nocturna]
    const tablas = {
        farmaceutico: { 
            "2022": [1908.43, 305.58, 1.57], 
            "2023": [1984.77, 317.80, 1.63], 
            "2024": [2064.16, 330.51, 1.70], 
            "2025": [2105.44, 337.12, 1.73], 
            "2026": [2147.55, 343.86, 1.76] 
        },
        tecnico: { 
            "2022": [1294.62, 0, 1.07], 
            "2023": [1346.40, 0, 1.11], 
            "2024": [1400.26, 0, 1.15], 
            "2025": [1428.27, 0, 1.17], 
            "2026": [1456.84, 0, 1.19] 
        },
        auxiliar: { 
            "2022": [1157.08, 0, 0.95], 
            "2023": [1203.36, 0, 0.99], 
            "2024": [1251.49, 0, 1.03], 
            "2025": [1276.52, 0, 1.05], 
            "2026": [1302.05, 0, 1.07] 
        }
    };

    // 1. Obtener entradas del usuario
    const prof = document.getElementById("profesion").value;
    const anio = document.getElementById("anio").value;
    const numPagas = parseInt(document.getElementById("numPagas").value);
    const jornPct = parseFloat(document.getElementById("porcentaje").value) / 100;
    const irpfPct = parseFloat(document.getElementById("porcentajeIRPF").value) / 100;
    
    // Porcentajes de Seguridad Social (Trabajador)
    const ccPct = parseFloat(document.getElementById("cotizacionContComu").value) / 100;
    const desempPct = parseFloat(document.getElementById("cotizacionDesempleo").value) / 100;
    const meiPct = parseFloat(document.getElementById("cotizacionMEI").value) / 100;
    const formacionPct = parseFloat(document.getElementById("cotizacionFormacion").value) / 100;
    const totalSSPct = ccPct + desempPct + meiPct + formacionPct;

    // Datos Base del Convenio
    const [base, plus, precioHora] = tablas[prof][anio];
    const hNoc = parseFloat(document.getElementById("numHoras").value) || 0;
    const mejoraBruta = parseFloat(document.getElementById("mejoraSalarial").value) || 0;

    // 2. Cálculos de conceptos Brutos (Ajustados a jornada)
    const sueldoBaseMes = base * jornPct;
    const plusFacultativoMes = plus * jornPct;
    const valorNocturnidadMes = hNoc * precioHora; 

    // El Bruto de la Paga Extra (Sueldo Base + Plus, sin mejora ni nocturnidad)
    const brutoExtra = sueldoBaseMes + plusFacultativoMes;

    // El Bruto Mensual de la nómina (Base + Plus + Mejora + Nocturnidad)
    const brutoMesNormal = sueldoBaseMes + plusFacultativoMes + mejoraBruta + valorNocturnidadMes;

    // 3. Lógica de deducciones y Netos
    let netoMensual = 0;
    let netoExtra = 0;
    let baseCalculoSS_Anual = 0;
    let irpfAnual = 0;
    let ssAnual = 0;

    if (numPagas === 12) {
        // --- CASO 12 PAGAS (Todo prorrateado) ---
        // Bruto anual = (14 pagas de sueldo/plus) + (12 mejoras) + (12 nocturnidades estimadas)
        const brutoAnualTotal = (brutoExtra * 14) + (mejoraBruta * 12) + (valorNocturnidadMes * 12);
        const brutoMensualProrrateado = brutoAnualTotal / 12;

        const deduccionSS = brutoMensualProrrateado * totalSSPct;
        const deduccionIRPF = brutoMensualProrrateado * irpfPct;

        netoMensual = brutoMensualProrrateado - deduccionSS - deduccionIRPF;
        
        baseCalculoSS_Anual = brutoAnualTotal;
        ssAnual = brutoAnualTotal * totalSSPct;
        irpfAnual = brutoAnualTotal * irpfPct;

    } else {
        // --- CASO 14 PAGAS ---
        // La Seguridad Social se paga prorrateada cada mes (Base Cotización incluye 1/6 de las extras)
        const prorrataExtraMensual = (brutoExtra * 2) / 12;
        const baseCotizacionMes = brutoMesNormal + prorrataExtraMensual;

        const deduccionSS_Mes = baseCotizacionMes * totalSSPct;
        const deduccionIRPF_Mes = brutoMesNormal * irpfPct;

        netoMensual = brutoMesNormal - deduccionSS_Mes - deduccionIRPF_Mes;

        // Paga Extra (Solo se descuenta IRPF, la SS ya se pagó mes a mes)
        netoExtra = brutoExtra - (brutoExtra * irpfPct);

        // Totales Anuales
        baseCalculoSS_Anual = baseCotizacionMes * 12;
        ssAnual = baseCalculoSS_Anual * totalSSPct;
        irpfAnual = (brutoMesNormal * 12 * irpfPct) + (brutoExtra * 2 * irpfPct);
    }

    const netoAnualTotal = baseCalculoSS_Anual - irpfAnual - ssAnual;

    // 4. Actualizar Gráfico
    updateChart(netoAnualTotal, irpfAnual, ssAnual);

    // 5. Renderizar Resultados en el HTML
    renderizarResultados(numPagas, netoMensual, netoExtra, netoAnualTotal, baseCalculoSS_Anual);
}

function renderizarResultados(pagas, netoMes, netoEx, netoAnual, brutoAnual) {
    let html = "";
    if (pagas === 12) {
        html = `
            <div class="result-item">
                <span>Neto Mensual (12 pagas):</span>
                <span class="neto-big">${netoMes.toFixed(2)}€</span>
            </div>
            <div class="result-item"><span class="concepto-extra">Incluye pagas extras prorrateadas mensualmente.</span></div>
        `;
    } else {
        html = `
            <div class="result-item">
                <span>Neto Nómina Mes:</span>
                <span class="neto-big">${netoMes.toFixed(2)}€</span>
            </div>
            <div class="result-item">
                <span>Neto Paga Extra (Jun/Dic):</span>
                <span class="neto-big" style="color:var(--primary)">${netoEx.toFixed(2)}€</span>
            </div>
            <div class="result-item"><span class="concepto-extra">*La mejora se incluye en la nómina mensual.</span></div>
        `;
    }

    html += `
        <hr style="border:0; border-top:1px solid #cbd5e1; margin:12px 0;">
        <div class="result-item">
            <span>Total Neto Anual:</span>
            <span class="neto-big" style="font-size:1.1rem">${netoAnual.toFixed(2)}€</span>
        </div>
        <div class="result-item">
            <span>Bruto Anual Total:</span>
            <span>${brutoAnual.toFixed(2)}€</span>
        </div>
    `;

    document.getElementById("resultados").innerHTML = html;
}

function updateChart(neto, irpf, ss) {
    const ctx = document.getElementById('salaryChart').getContext('2d');
    if (myChart) myChart.destroy();
    
    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Sueldo Neto', 'IRPF (Hacienda)', 'Seguridad Social'],
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
                legend: { 
                    position: 'bottom', 
                    labels: { boxWidth: 12, padding: 15, font: { size: 11 } } 
                } 
            },
            layout: { padding: 10 }
        }
    });
}

async function exportarImagen() {
    const area = document.getElementById('capture-area');
    const btn = document.querySelector('.btn-export');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando...';
    
    try {
        const canvas = await html2canvas(area, { scale: 2, backgroundColor: "#ffffff" });
        const image = canvas.toDataURL("image/png");
        
        if (navigator.share) {
            const blob = await (await fetch(image)).blob();
            const file = new File([blob], 'sueldo-farmacia.png', { type: 'image/png' });
            await navigator.share({ 
                files: [file], 
                title: 'Mi Sueldo Farmacia Pro',
                text: 'Calculado en conveniodefarmacia.com'
            });
        } else {
            const link = document.createElement('a');
            link.download = 'sueldo-farmacia.png';
            link.href = image;
            link.click();
        }
    } catch (e) {
        alert("Error al compartir. Intenta hacer una captura de pantalla.");
    } finally {
        btn.innerHTML = originalText;
    }
}
