document.addEventListener('DOMContentLoaded', () => {
    // Escuchar cambios en todos los inputs para cálculo en tiempo real
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', calcularSalario);
    });
    
    // Cálculo inicial
    calcularSalario();
});

function calcularSalario() {
    // 1. Datos del Convenio (Sueldo Base, Plus, Hora Nocturna)
    const tablas = {
        farmaceutico: {
            "2022": [1985.35, 81.70, 2.48],
            "2023": [2064.76, 84.97, 2.48],
            "2024": [2137.03, 87.94, 2.56],
            "2025": [2180.77, 89.70, 2.61],
            "2026": [2224.39, 91.49, 2.66]
        },
        tecnico: {
            "2022": [1345.92, 0, 1.62],
            "2023": [1399.75, 0, 1.69],
            "2024": [1448.74, 0, 1.75],
            "2025": [1477.71, 0, 1.79],
            "2026": [1507.26, 0, 1.83]
        },
        auxiliar: {
            "2022": [1223.91, 0, 1.61],
            "2023": [1272.87, 0, 1.68],
            "2024": [1316.58, 0, 1.73],
            "2025": [1342.91, 0, 1.76],
            "2026": [1369.77, 0, 1.80]
        }
    };

    const profesion = document.getElementById("profesion").value;
    const anioAct = document.getElementById("anio").value;
    const numPagas = parseInt(document.getElementById("numPagas").value);
    
    // Función auxiliar para obtener bruto anual según año
    const getBrutoAnual = (anio) => {
        const [base, plus, hora] = tablas[profesion][anio];
        const jornada = parseFloat(document.getElementById("porcentaje").value) / 100;
        const mejora = parseFloat(document.getElementById("mejoraSalarial").value) || 0;
        const hNocturnas = parseFloat(document.getElementById("numHoras").value) || 0;
        
        return (base * jornada * 14) + (plus * 12) + (mejora * 12) + (hNocturnas * hora * 12);
    };

    const brutoAnual = getBrutoAnual(anioAct);
    
    // 2. Impuestos
    const irpf = parseFloat(document.getElementById("porcentajeIRPF").value) / 100;
    const ss = (parseFloat(document.getElementById("cotizacionContComu").value) +
               parseFloat(document.getElementById("cotizacionDesempleo").value) +
               parseFloat(document.getElementById("cotizacionMEI").value) + 0.1) / 100;

    // Cálculo Maestro: El Neto Anual es el mismo siempre
    const ssAnual = (brutoAnual / 12) * ss * 12;
    const irpfAnual = brutoAnual * irpf;
    const netoAnual = brutoAnual - ssAnual - irpfAnual;

    // 3. Distribución de resultados
    let html = "";
    if (numPagas === 12) {
        html = `
            <div class="result-item"><span>Bruto mensual:</span><span>${(brutoAnual/12).toFixed(2)}€</span></div>
            <div class="result-item"><span><strong>Neto mensual:</strong></span><span class="neto">${(netoAnual/12).toFixed(2)}€</span></div>
        `;
    } else {
        const extraNeta = (brutoAnual/14) - (brutoAnual/14 * irpf);
        const nominaNeta = (netoAnual - (extraNeta * 2)) / 12;
        html = `
            <div class="result-item"><span>Bruto mensual (x14):</span><span>${(brutoAnual/14).toFixed(2)}€</span></div>
            <div class="result-item"><span><strong>Neto mensual:</strong></span><span class="neto">${nominaNeta.toFixed(2)}€</span></div>
            <div class="result-item"><span><strong>Paga Extra netas:</strong></span><span class="neto">${extraNeta.toFixed(2)}€</span></div>
        `;
    }

    // 4. Comparativa (Diferencia con año anterior)
    let diffHtml = "";
    if (anioAct > "2022") {
        const anioPrev = (parseInt(anioAct) - 1).toString();
        const netoPrev = getBrutoAnual(anioPrev) * (1 - (ss + irpf)); // Aproximado
        const subida = netoAnual - netoPrev;
        if(subida > 0) {
            diffHtml = `<div class="diferencia"><i class="fas fa-arrow-up"></i> +${subida.toFixed(2)}€/año respecto a ${anioPrev}</div>`;
        }
    }

    html += `
        <hr style="border:0; border-top:1px solid #d1d5db; margin:1rem 0;">
        <div class="result-item"><span>Bruto Anual:</span><span class="bruto-anual">${brutoAnual.toFixed(2)}€</span></div>
        <div class="result-item"><span><strong>Neto Anual:</strong></span><span class="neto">${netoAnual.toFixed(2)}€</span></div>
        ${diffHtml}
    `;

    document.getElementById("resultados").innerHTML = html;
}
