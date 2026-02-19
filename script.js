/**

Sueldo Farmacia Pro - Versión 2026.4
Integración GTM + Lógica de Consentimiento de Cookies
*/

let myChart = null;
const DATA_CONVENIOS = {
nacional: {
nombre: "Nacional (XXV Convenio)",
tipoAnt: 'ninguno',
tablas: {
farmaceutico: {
"2022": [1985.35, 81.70, 2.48, 0],
"2023": [2064.76, 84.97, 2.48, 0],
"2024": [2137.03, 87.94, 2.56, 0],
"2025": [2180.77, 89.70, 2.61, 0],
"2026": [2224.39, 91.49, 2.66, 0]
},
tecnico: {
"2022": [1345.92, 0, 1.62, 0],
"2023": [1399.75, 0, 1.69, 0],
"2024": [1448.74, 0, 1.75, 0],
"2025": [1477.71, 0, 1.79, 0],
"2026": [1507.26, 0, 1.83, 0]
},
auxiliar: {
"2022": [1223.91, 0, 1.61, 0],
"2023": [1272.87, 0, 1.68, 0],
"2024": [1316.58, 0, 1.73, 0],
"2025": [1342.91, 0, 1.76, 0],
"2026": [1369.77, 0, 1.80, 0]
}
}
},
barcelona: {
nombre: "Barcelona (Provincial)",
tipoAnt: 'ninguno',
tablas: {
farmaceutico: {
"2024": [2297.21, 0, 2.15, 0],
"2025": [2343.15, 0, 2.19, 0],
"2026": [2390.01, 0, 2.23, 0]
},
tecnico: {
"2024": [1515.20, 0, 1.40, 0],
"2025": [1545.50, 0, 1.43, 0],
"2026": [1576.41, 0, 1.46, 0]
},
auxiliar: {
"2024": [1365.40, 0, 1.25, 0],
"2025": [1392.71, 0, 1.28, 0],
"2026": [1420.56, 0, 1.31, 0]
}
}
},
gironatarragona: {
nombre: "Girona / Tarragona",
tipoAnt: 'ninguno',
tablas: {
farmaceutico: {
"2024": [2180.50, 220.00, 1.95, 0],
"2025": [2224.11, 224.40, 1.98, 0],
"2026": [2268.59, 228.89, 2.02, 0]
},
tecnico: {
"2024": [1460.30, 0, 1.30, 0],
"2025": [1489.50, 0, 1.32, 0],
"2026": [1519.29, 0, 1.35, 0]
},
auxiliar: {
"2024": [1310.15, 0, 1.15, 0],
"2025": [1336.35, 0, 1.17, 0],
"2026": [1363.08, 0, 1.19, 0]
}
}
},
asturias: {
nombre: "Asturias",
tipoAnt: 'ninguno',
tablas: {
farmaceutico: {
"2024": [2110.00, 330.51, 1.75, 0],
"2025": [2152.20, 337.12, 1.78, 0],
"2026": [2195.24, 343.86, 1.81, 0]
},
tecnico: {
"2024": [1430.00, 0, 1.18, 0],
"2025": [1458.60, 0, 1.20, 0],
"2026": [1487.77, 0, 1.22, 0]
},
auxiliar: {
"2024": [1280.00, 0, 1.05, 0],
"2025": [1305.60, 0, 1.07, 0],
"2026": [1331.71, 0, 1.09, 0]
}
}
},
euskadi: {
nombre: "País Vasco (Euskadi)",
tipoAnt: 'quinquenio',
tablas: {
farmaceutico: {
"2024": [2450.00, 0, 2.50, 60.00],
"2025": [2499.00, 0, 2.55, 61.20],
"2026": [2548.98, 0, 2.60, 62.42]
},
tecnico: {
"2024": [1710.00, 0, 1.65, 42.00],
"2025": [1744.20, 0, 1.68, 42.84],
"2026": [1779.08, 0, 1.71, 43.70]
},
auxiliar: {
"2024": [1560.00, 0, 1.50, 38.00],
"2025": [1591.20, 0, 1.53, 38.76],
"2026": [1623.02, 0, 1.56, 39.54]
}
}
}
};
function establecerCotizacionesOficiales() {
document.getElementById("cotizacionContComu").value = "4.7";
document.getElementById("cotizacionDesempleo").value = "1.55";
document.getElementById("cotizacionFormacion").value = "0.1";
document.getElementById("cotizacionMEI").value = "0.13";
}
document.addEventListener('DOMContentLoaded', () => {
establecerCotizacionesOficiales();
document.querySelectorAll('input, select').forEach(input => {
input.addEventListener('input', () => {
if (input.id === 'convenio') updateUIForConvenio();
calcularSalario();
});
});
// Comprobar si ya aceptó cookies antes
if (!localStorage.getItem('cookiesAceptadas')) {
const banner = document.getElementById('cookie-banner');
if (banner) banner.style.display = 'flex';
} else {
// Si ya aceptó antes, notificamos a GTM al cargar
enviarEventoGTM('revisit_pague_view', { status: 'already_accepted' });
}
updateUIForConvenio();
calcularSalario();
});
// FUNCIÓN CLAVE PARA LAS COOKIES
function aceptarCookies() {
localStorage.setItem('cookiesAceptadas', 'true');
const banner = document.getElementById('cookie-banner');
if (banner) banner.style.display = 'none';
// Disparamos un evento especial para que GTM sepa que ahora puede activar Analytics/Ads
if (window.dataLayer) {
window.dataLayer.push({
'event': 'cookie_consent_granted',
'consent_level': 'full'
});
}
}
// Función auxiliar para enviar datos solo si hay permiso
function enviarEventoGTM(nombreEvento, parametros = {}) {
if (localStorage.getItem('cookiesAceptadas') === 'true' && window.dataLayer) {
window.dataLayer.push({
'event': nombreEvento,
...parametros
});
}
}
function updateUIForConvenio() {
const convKey = document.getElementById('convenio').value;
const config = DATA_CONVENIOS[convKey];
const pagasSelect = document.getElementById('numPagas');
const antiguedadInput = document.getElementById('antiguedad');
const antiguedadGroup = antiguedadInput.closest('.input-group');
const labelAnt = document.getElementById('labelAntiguedad');
// 1. MOSTRAR/OCULTAR Y HABILITAR/DESHABILITAR campo de antigüedad
if (config.tipoAnt === 'ninguno') {
// Deshabilitar y atenuar visualmente
antiguedadInput.disabled = true;
antiguedadInput.value = 0;
antiguedadGroup.style.opacity = '0.5';
antiguedadGroup.style.pointerEvents = 'none';
if(labelAnt) labelAnt.innerText = "Antigüedad (No disponible)";
} else if (config.tipoAnt === 'quinquenio') {
// Habilitar para quinquenios (País Vasco)
antiguedadInput.disabled = false;
antiguedadGroup.style.opacity = '1';
antiguedadGroup.style.pointerEvents = 'auto';
if(labelAnt) labelAnt.innerText = "Nº Quinquenios";
}
// 2. RESTRINGIR PAGAS DINÁMICAMENTE según convenio
const currentVal = pagasSelect.value;
pagasSelect.innerHTML = '';
// Todos tienen 12 pagas como opción
pagasSelect.options.add(new Option("12 pagas", "12"));
if (convKey === 'asturias') {
// Asturias: 12 o 15 pagas
pagasSelect.options.add(new Option("15 pagas", "15"));
pagasSelect.value = (currentVal === "12" || currentVal === "15") ? currentVal : "15";
} else {
// Resto de convenios: 12 o 14 pagas
pagasSelect.options.add(new Option("14 pagas", "14"));
pagasSelect.value = (currentVal === "12" || currentVal === "14") ? currentVal : "14";
}
}
function calcularSalario() {
// 1. Capturar inputs
const convKey = document.getElementById("convenio").value;
const prof = document.getElementById("profesion").value;
const anio = document.getElementById("anio").value;
const numPagas = parseInt(document.getElementById("numPagas").value);
const irpfPct = parseFloat(document.getElementById("porcentajeIRPF").value) / 100;
// Seguridad Social total
const totalSSPct = (
parseFloat(document.getElementById("cotizacionContComu").value) +
parseFloat(document.getElementById("cotizacionDesempleo").value) +
parseFloat(document.getElementById("cotizacionMEI").value) +
parseFloat(document.getElementById("cotizacionFormacion").value)
) / 100;
// 2. Obtener datos del convenio
const convData = DATA_CONVENIOS[convKey];
const tablaCat = convData.tablas[prof];
// Fallback a 2024 si el año no existe en convenios provinciales
const [base, plus, precioHora, valAnt] = tablaCat[anio] || tablaCat["2024"];
// 3. Variables de usuario
const jornPct = parseFloat(document.getElementById("porcentaje").value) / 100;
const hNoc = parseFloat(document.getElementById("numHoras").value) || 0;
const mejora = parseFloat(document.getElementById("mejoraSalarial").value) || 0;
const numAntiguedad = parseInt(document.getElementById("antiguedad").value) || 0;
// 4. Calcular antigüedad según tipo
let importeAntiguedadMes = 0;
if (convData.tipoAnt === 'quinquenio') {
// Quinquenio País Vasco = importe fijo por quinquenio
importeAntiguedadMes = (valAnt * numAntiguedad) * jornPct;
}
// 5. Cálculo de conceptos mensuales
// IMPORTANTE: El plus solo se paga en las 12 nóminas mensuales, NO en pagas extras
const sueldoBaseMes = (base * jornPct) + (plus * jornPct) + mejora + importeAntiguedadMes;
const valorNocturnidadMes = hNoc * precioHora;
const brutoMes = sueldoBaseMes + valorNocturnidadMes;
// Bruto Paga Extra: Base + Antigüedad + Mejora (SIN plus, SIN nocturnidad)
const brutoExtra = (base * jornPct) + mejora + importeAntiguedadMes;
// 6. Determinar número real de pagas del convenio para prorrateo
const pagasRealesConvenio = (convKey === 'asturias') ? 15 : 14;
let netoMensual, netoExtra, brutoAnualTotal, irpfAnual, ssAnual;
if (numPagas === 12) {
// CASO 12 PAGAS: Todo prorrateado
// Base de cotización anual = 12 meses con plus + pagas extras sin plus
const brutoAnualMensual = brutoMes * 12; // 12 meses con plus
const brutoAnualExtras = brutoExtra * (pagasRealesConvenio - 12); // Extras sin plus
brutoAnualTotal = brutoAnualMensual + brutoAnualExtras;
const brutoMesProrrateado = brutoAnualTotal / 12;
const descuentoSS = brutoMesProrrateado * totalSSPct;
const descuentoIRPF = brutoMesProrrateado * irpfPct;
netoMensual = brutoMesProrrateado - descuentoSS - descuentoIRPF;
netoExtra = 0; // No hay pagas separadas
irpfAnual = brutoAnualTotal * irpfPct;
ssAnual = brutoAnualTotal * totalSSPct;
} else {
// CASO 14 o 15 PAGAS: Pagas separadas
// Base cotización incluye prorrata de extras (sin plus)
const prorrataExtra = (brutoExtra * (numPagas - 12)) / 12;
const baseCotizacion = brutoMes + prorrataExtra;
const descuentoSS = baseCotizacion * totalSSPct;
const descuentoIRPF_Mes = brutoMes * irpfPct;
netoMensual = brutoMes - descuentoSS - descuentoIRPF_Mes;
netoExtra = brutoExtra - (brutoExtra * irpfPct);
brutoAnualTotal = baseCotizacion * 12;
irpfAnual = (brutoMes * 12 * irpfPct) + (brutoExtra * (numPagas - 12) * irpfPct);
ssAnual = brutoAnualTotal * totalSSPct;
}
const netoAnual = brutoAnualTotal - irpfAnual - ssAnual;
// Al final del cálculo, enviamos el evento pero filtrado por la función de cookies
enviarEventoGTM('calculo_realizado', {
'convenio': document.getElementById("convenio").value,
'sueldo_neto': netoAnual.toFixed(2)
});
updateChart(netoAnual, irpfAnual, ssAnual);
renderizarResultados(numPagas, netoMensual, netoExtra, netoAnual, brutoAnualTotal, pagasRealesConvenio, irpfAnual, ssAnual);
renderizarComparativa(prof, anio, numPagas, irpfPct, totalSSPct, jornPct, hNoc, mejora);
}
// ── Utilidad: animación de conteo numérico ──
function animarNumero(elemento, valorFinal, duracion = 500) {
    const inicio = parseFloat(elemento.dataset.valorActual || 0);
    elemento.dataset.valorActual = valorFinal;
    const rango = valorFinal - inicio;
    const startTime = performance.now();
    function step(now) {
        const elapsed = now - startTime;
        const progreso = Math.min(elapsed / duracion, 1);
        // Easing: ease-out cúbico
        const ease = 1 - Math.pow(1 - progreso, 3);
        const valorActual = inicio + rango * ease;
        elemento.textContent = valorActual.toLocaleString('es-ES', {minimumFractionDigits:2, maximumFractionDigits:2}) + ' €';
        if (progreso < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

function renderizarResultados(numPagas, netoMensual, netoExtra, netoAnual, brutoAnualTotal, pagasConvenio, irpfAnual, ssAnual) {
    let tarjetasMensuales = "";

    if (numPagas === 12) {
        tarjetasMensuales = `
            <div class="result-card result-card--mensual">
                <div class="result-card__icon">📅</div>
                <div class="result-card__label">Neto Mensual</div>
                <div class="result-card__value anim-num" id="anim-mensual"></div>
                <div class="result-card__sub">✓ ${pagasConvenio} pagas prorrateadas</div>
            </div>
        `;
    } else {
        tarjetasMensuales = `
            <div class="result-card result-card--mensual">
                <div class="result-card__icon">📅</div>
                <div class="result-card__label">Neto Mensual</div>
                <div class="result-card__value anim-num" id="anim-mensual"></div>
                <div class="result-card__sub">Nómina ordinaria</div>
            </div>
            <div class="result-card result-card--extra">
                <div class="result-card__icon">🎁</div>
                <div class="result-card__label">Paga Extra (neta)</div>
                <div class="result-card__value anim-num" id="anim-extra"></div>
                <div class="result-card__sub">${numPagas} pagas · sin plus/noct.</div>
            </div>
        `;
    }

    const porcentajeNeto = ((netoAnual / brutoAnualTotal) * 100).toFixed(1);
    const fmt = v => v.toLocaleString('es-ES', {minimumFractionDigits:2, maximumFractionDigits:2});

    const html = `
        <div class="results-grid">
            ${tarjetasMensuales}
        </div>
        <div class="result-anual">
            <div class="result-anual__top">
                <span class="result-anual__label">💰 Total Neto Anual</span>
                <span class="result-anual__value anim-num" id="anim-anual"></span>
            </div>
            <div class="result-anual__bar-wrap">
                <div class="result-anual__bar" id="barra-neto" style="width:0%"></div>
            </div>
            <div class="result-anual__bottom">
                <span class="result-anual__bruto">Bruto anual: <strong>${fmt(brutoAnualTotal)} €</strong></span>
                <span class="result-anual__pct">Te quedas el <strong>${porcentajeNeto}%</strong></span>
            </div>
        </div>
        <div class="desglose-deducciones">
            <div class="desglose-item desglose-item--neto">
                <span class="desglose-dot"></span>
                <span class="desglose-label">Neto</span>
                <span class="desglose-valor">${fmt(netoAnual)} €</span>
                <span class="desglose-pct">${porcentajeNeto}%</span>
            </div>
            <div class="desglose-item desglose-item--irpf">
                <span class="desglose-dot"></span>
                <span class="desglose-label">IRPF</span>
                <span class="desglose-valor">${fmt(irpfAnual)} €</span>
                <span class="desglose-pct">${((irpfAnual/brutoAnualTotal)*100).toFixed(1)}%</span>
            </div>
            <div class="desglose-item desglose-item--ss">
                <span class="desglose-dot"></span>
                <span class="desglose-label">Seg. Social</span>
                <span class="desglose-valor">${fmt(ssAnual)} €</span>
                <span class="desglose-pct">${((ssAnual/brutoAnualTotal)*100).toFixed(1)}%</span>
            </div>
        </div>
    `;

    document.getElementById("resultados").innerHTML = html;

    // Lanzar animaciones
    requestAnimationFrame(() => {
        animarNumero(document.getElementById('anim-mensual'), netoMensual);
        if (document.getElementById('anim-extra')) animarNumero(document.getElementById('anim-extra'), netoExtra);
        animarNumero(document.getElementById('anim-anual'), netoAnual);
        // Animar barra
        setTimeout(() => {
            const barra = document.getElementById('barra-neto');
            if (barra) barra.style.width = porcentajeNeto + '%';
        }, 50);
    });
}

// ── Comparativa de convenios ──
function calcularNetoAnualParaConvenio(convKey, prof, anio, numPagas, irpfPct, totalSSPct, jornPct, hNoc, mejora) {
    const convData = DATA_CONVENIOS[convKey];
    if (!convData.tablas[prof]) return null;
    const tablaCat = convData.tablas[prof];
    const rowData = tablaCat[anio] || tablaCat["2024"];
    if (!rowData) return null;
    const [base, plus, precioHora, valAnt] = rowData;

    const sueldoBaseMes = (base * jornPct) + (plus * jornPct) + mejora;
    const valorNocturnidadMes = hNoc * precioHora;
    const brutoMes = sueldoBaseMes + valorNocturnidadMes;
    const brutoExtra = (base * jornPct) + mejora;
    const pagasRealesConvenio = (convKey === 'asturias') ? 15 : 14;
    const pagasEfectivas = (convKey === 'asturias' && numPagas === 14) ? 15 : numPagas;

    let brutoAnualTotal, irpfAnual, ssAnual;
    if (pagasEfectivas === 12) {
        const brutoAnualMensual = brutoMes * 12;
        const brutoAnualExtras = brutoExtra * (pagasRealesConvenio - 12);
        brutoAnualTotal = brutoAnualMensual + brutoAnualExtras;
    } else {
        const prorrataExtra = (brutoExtra * (pagasEfectivas - 12)) / 12;
        brutoAnualTotal = (brutoMes + prorrataExtra) * 12;
    }
    irpfAnual = brutoAnualTotal * irpfPct;
    ssAnual = brutoAnualTotal * totalSSPct;
    return brutoAnualTotal - irpfAnual - ssAnual;
}

function renderizarComparativa(prof, anio, numPagas, irpfPct, totalSSPct, jornPct, hNoc, mejora) {
    const convActual = document.getElementById("convenio").value;
    const resultados = Object.entries(DATA_CONVENIOS).map(([key, conv]) => {
        const neto = calcularNetoAnualParaConvenio(key, prof, anio, numPagas, irpfPct, totalSSPct, jornPct, hNoc, mejora);
        return { key, nombre: conv.nombre, neto };
    }).filter(r => r.neto !== null).sort((a, b) => b.neto - a.neto);

    const maxNeto = resultados[0].neto;
    const fmt = v => v.toLocaleString('es-ES', {minimumFractionDigits:2, maximumFractionDigits:2});

    const filas = resultados.map(r => {
        const esActual = r.key === convActual;
        const pct = ((r.neto / maxNeto) * 100).toFixed(1);
        return `
            <div class="comp-row ${esActual ? 'comp-row--active' : ''}">
                <div class="comp-row__nombre">${esActual ? '📍 ' : ''}${r.nombre}</div>
                <div class="comp-row__bar-wrap">
                    <div class="comp-row__bar" style="width:${pct}%"></div>
                </div>
                <div class="comp-row__valor">${fmt(r.neto)} €</div>
            </div>
        `;
    }).join('');

    document.getElementById("comparativa-container").innerHTML = `
        <details class="comparativa-details">
            <summary class="comparativa-summary">
                <i class="fas fa-chart-bar"></i> ¿Y con otro convenio? Comparar todos
            </summary>
            <div class="comparativa-body">
                <p class="comparativa-nota">Neto anual estimado · misma categoría, jornada e IRPF</p>
                ${filas}
            </div>
        </details>
    `;
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
legend: {
position: 'bottom',
labels: {
boxWidth: 12,
padding: 15,
font: { size: 11 }
}
}
}
}
});
}
async function exportarImagen() {
const area = document.getElementById('capture-area');
const btn = document.querySelector('.btn-export');
const originalText = btn.innerHTML;
btn.innerHTML = ' Generando...';
btn.disabled = true;
try {
const canvas = await html2canvas(area, {
scale: 2,
backgroundColor: "#ffffff",
logging: false
});
const image = canvas.toDataURL("image/png");
// Registramos la descarga como conversión solo si aceptó cookies
enviarEventoGTM('descarga_imagen', { 'formato': 'png' });
// Intentar compartir si está disponible (móviles)
if (navigator.share && navigator.canShare) {
try {
const blob = await (await fetch(image)).blob();
const file = new File([blob], 'mi-sueldo-farmacia.png', { type: 'image/png' });
await navigator.share({
files: [file],
title: 'Mi Sueldo Farmacia Pro',
text: 'Calcula tu sueldo neto en farmacia'
});
} catch (shareError) {
// Si falla el share, descargar
descargarImagen(image);
}
} else {
// Navegadores de escritorio: descargar directamente
descargarImagen(image);
}
} catch (error) {
console.error('Error al exportar:', error);
alert("Error al generar la imagen. Intenta hacer una captura de pantalla.");
} finally {
btn.innerHTML = originalText;
btn.disabled = false;
}
}
function descargarImagen(dataURL) {
const link = document.createElement('a');
link.download = 'mi-sueldo-farmacia-' + new Date().getTime() + '.png';
link.href = dataURL;
link.click();
}
