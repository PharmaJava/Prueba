let myChart = null;

// BASE DE DATOS DE CONVENIOS
const datosConvenios = {
    // TUS DATOS EXACTOS DEL NACIONAL
    nacional: {
        tipoAntiguedad: 'trienio', // Importe fijo por tabla
        pagasPorDefecto: 14,
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
    // PROVINCIALES (Base 2024 real aprox + Fórmula 2% para futuro)
    // Estructura: [Base, Plus, HoraNoc, ValorTrienio]
    barcelona: {
        tipoAntiguedad: 'trienio',
        pagasPorDefecto: 14,
        base2024: { 
            farmaceutico: [2250.00, 250.00, 2.10, 52.00],
            tecnico: [1510.00, 0, 1.35, 35.00],
            auxiliar: [1350.00, 0, 1.20, 30.00]
        }
    },
    gironatarragona: {
        tipoAntiguedad: 'trienio',
        pagasPorDefecto: 14,
        base2024: { 
            farmaceutico: [2180.00, 220.00, 1.90, 49.00],
            tecnico: [1460.00, 0, 1.25, 33.00],
            auxiliar: [1310.00, 0, 1.15, 29.00]
        }
    },
    paisvasco: { // Referencia Bizkaia/Gipuzkoa (Son más altos)
        tipoAntiguedad: 'trienio',
        pagasPorDefecto: 14,
        base2024: { 
            farmaceutico: [2450.00, 300.00, 2.50, 60.00],
            tecnico: [1700.00, 0, 1.60, 42.00],
            auxiliar: [1550.00, 0, 1.45, 38.00]
        }
    },
    asturias: {
        tipoAntiguedad: 'quinquenio', // 5% del Salario Base
        pagasPorDefecto: 15, // Asturias suele tener paga beneficios
        base2024: { 
            // Asturias suele partir del Nacional pero con antigüedad distinta
            // Usamos base nacional 2024 + pequeño ajuste regional
            farmaceutico: [2064.16, 330.51, 1.70, 0.05], // 0.05 = 5%
            tecnico: [1400.26, 0, 1.15, 0.05],
            auxiliar: [1251.49, 0, 1.03, 0.05]
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => input.addEventListener('input', calcularSalario));
    
    // Listener especial para cambiar texto Trienio/Quinquenio
    document.getElementById('convenio').addEventListener('change', (e) => {
        const conv = e.target.value;
        const tipo = datosConvenios[conv].tipoAntiguedad;
        document.getElementById('labelAntiguedad').innerText = (tipo === 'quinquenio') ? "Nº Quinquenios" : "Nº Trienios";
        
        // Ajustar nº pagas por defecto si cambia convenio
        const pagasDefecto = datosConvenios[conv].pagasPorDefecto;
        document.getElementById('numPagas').value = pagasDefecto === 15 ? "15" : "14";
        
        calcularSalario();
    });

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
    const conv = document.getElementById("convenio").value;
    const prof = document.getElementById("profesion").value;
    const anio = parseInt(document.getElementById("anio").value);
    const numPagas = parseInt(document.getElementById("numPagas").value);
    const jornPct = parseFloat(document.getElementById("porcentaje").value) / 100;
    const irpfPct = parseFloat(document.getElementById("porcentajeIRPF").value) / 100;
    const nAntiguedad = parseInt(document.getElementById("antiguedad").value) || 0;
    
    // SS
    const totalSSPct = (
        parseFloat(document.getElementById("cotizacionContComu").value) + 
        parseFloat(document.getElementById("cotizacionDesempleo").value) + 
        parseFloat(document.getElementById("cotizacionMEI").value) + 
        parseFloat(document.getElementById("cotizacionFormacion").value)
    ) / 100;

    let base, plus, precioHora, valAntiguedad;
    const dataConv = datosConvenios[conv];

    // OBTENCIÓN DE DATOS
    if (conv === 'nacional') {
        // Usar datos exactos del array
        // [Base, Plus, Hora, Trienio]
        if (dataConv[prof][anio]) {
            [base, plus, precioHora, valAntiguedad] = dataConv[prof][anio];
        } else {
            // Fallback si el año no está en el array nacional (raro)
            [base, plus, precioHora, valAntiguedad] = dataConv[prof]["2026"];
        }
    } else {
        // PROVINCIALES: Usar base 2024 y proyectar si es futuro
        const base24 = dataConv.base2024[prof];
        let factor = 1;
        if (anio > 2024) {
            factor = Math.pow(1.02, anio - 2024); // Subida técnica 2%
        }
        
        base = base24[0] * factor;
        plus = base24[1] * factor;
        precioHora = base24[2] * factor;
        
        // Si es quinquenio (porcentaje), no se multiplica por factor, es fijo (0.05)
        // Si es trienio (importe), sí sube con el IPC
        if (dataConv.tipoAntiguedad === 'quinquenio') {
            valAntiguedad = base24[3]; 
        } else {
            valAntiguedad = base24[3] * factor;
        }
    }

    // CÁLCULOS
    const hNoc = parseFloat(document.getElementById("numHoras").value) || 0;
    const mejoraBruta = parseFloat(document.getElementById("mejoraSalarial").value) || 0;

    const sueldoBaseMes = base * jornPct;
    const plusFacultativoMes = plus * jornPct;
    const valorNocturnidadMes = hNoc * precioHora;

    // Calculo Antigüedad
    let antiguedadMes = 0;
    if (dataConv.tipoAntiguedad === 'quinquenio') {
        // Asturias: % sobre el Sueldo Base
        antiguedadMes = (sueldoBaseMes * valAntiguedad) * nAntiguedad;
    } else {
        // Nacional/Otros: Importe fijo * numTrienios * Jornada
        antiguedadMes = valAntiguedad * nAntiguedad * jornPct;
    }

    // Bruto Paga Extra (Base + Plus + Antigüedad)
    const brutoExtra = sueldoBaseMes + plusFacultativoMes + antiguedadMes;

    // Bruto Mes Normal (Extra + Mejora + Nocturnidad)
    const brutoMesNormal = brutoExtra + mejoraBruta + valorNocturnidadMes;

    let netoMensual, netoExtra, brutoAnualTotal, irpfAnual, ssAnual;

    if (numPagas === 12) {
        // Prorrateo Total
        brutoAnualTotal = (brutoExtra * 14) + (mejoraBruta * 12) + (valorNocturnidadMes * 12);
        
        // Si hay 15 pagas (Asturias) sumar una extra más
        if (conv === 'asturias' && numPagas === 15) { // Si el usuario forzó 15 pagas en el select
             // Esto es complejo si seleccionan 12 pagas en el select pero es asturias.
             // Asumimos que si pone 12, quiere prorratear las 14 o 15 que le toquen.
             // Usamos un factor de pagas real
             const pagasReales = (conv === 'asturias') ? 15 : 14;
             brutoAnualTotal = (brutoExtra * pagasReales) + (mejoraBruta * 12) + (valorNocturnidadMes * 12);
        }

        const brutoMensualProrrateado = brutoAnualTotal / 12;
        netoMensual = brutoMensualProrrateado - (brutoMensualProrrateado * totalSSPct) - (brutoMensualProrrateado * irpfPct);
        
        ssAnual = brutoAnualTotal * totalSSPct;
        irpfAnual = brutoAnualTotal * irpfPct;
        baseCalculoSS_Anual = brutoAnualTotal; // Para display
    } else {
        // Pagas Separadas (14 o 15)
        const pagasReales = (numPagas === 15) ? 15 : 14;
        
        // SS se paga mes a mes prorrateada
        const prorrataExtraMensual = (brutoExtra * (pagasReales - 12)) / 12;
        const baseCotizacionMes = brutoMesNormal + prorrataExtraMensual;

        netoMensual = brutoMesNormal - (baseCotizacionMes * totalSSPct) - (brutoMesNormal * irpfPct);
        
        // Paga Extra (Limpia de SS)
        netoExtra = brutoExtra - (brutoExtra * irpfPct);

        // Anuales
        brutoAnualTotal = (brutoMesNormal * 12) + (brutoExtra * (pagasReales - 12));
        ssAnual = baseCotizacionMes * 12 * totalSSPct;
        irpfAnual = brutoAnualTotal * irpfPct;
    }

    const netoAnualTotal = brutoAnualTotal - ssAnual - irpfAnual;

    updateChart(netoAnualTotal, irpfAnual, ssAnual);
    renderizarResultados(numPagas, netoMensual, netoExtra, netoAnualTotal, brutoAnualTotal);
}

function renderizarResultados(pagas, netoMes, netoEx, netoAnual, brutoAnual) {
    let html = "";
    if (pagas === 12) {
        html = `
            <div class="result-item">
                <span>Neto Mensual (Todo incluido):</span>
                <span class="neto-big">${netoMes.toFixed(2)}€</span>
            </div>
            <div class="result-item"><span class="concepto-extra">Incluye pagas extras y antigüedad prorrateadas.</span></div>
        `;
    } else {
        html = `
            <div class="result-item">
                <span>Neto Nómina Mes:</span>
                <span class="neto-big">${netoMes.toFixed(2)}€</span>
            </div>
            <div class="result-item">
                <span>Neto Paga Extra:</span>
                <span class="neto-big" style="color:var(--primary)">${netoEx.toFixed(2)}€</span>
            </div>
            <div class="result-item"><span class="concepto-extra">*La antigüedad se incluye en las extras.</span></div>
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
            labels: ['Sueldo Neto', 'IRPF', 'Seguridad Social'],
            datasets: [{
                data: [neto, irpf, ss],
                backgroundColor: ['#10b981', '#ef4444', '#f59e0b'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
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
            await navigator.share({ files: [file], title: 'Mi Sueldo Farmacia Pro' });
        } else {
            const link = document.createElement('a');
            link.download = 'sueldo-farmacia.png'; link.href = image; link.click();
        }
    } catch (e) { alert("Error al compartir."); } finally { btn.innerHTML = originalText; }
}
