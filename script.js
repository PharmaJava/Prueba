/**

Sueldo Farmacia Pro - Versión 2026.4
Integración GTM + Lógica de Consentimiento de Cookies
*/

let myChart = null;
const DATA_CONVENIOS = {

// ── CONVENIO NACIONAL ──────────────────────────────────────────────────────
nacional: {
nombre: "Nacional (XXV Convenio)",
tipoAnt: 'cpg',   // CPG = Plus Ad Personam / Complemento Personal de Garantía
aviso: null,
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

// ── BARCELONA ─────────────────────────────────────────────────────────────
// El convenio propio de Barcelona fue anulado. Desde enero 2025, rige el
// Convenio Nacional. Los trabajadores contratados antes de 2025 conservan
// su salario bruto anterior (garantía ad personam); los nuevos entran por
// tablas nacionales. Mostramos las tablas históricas pre-2025 para
// consulta de atrasos; para 2025-2026 usamos tablas nacionales.
barcelona: {
nombre: "Barcelona (Nacional desde ene-2025)",
tipoAnt: 'ninguno',
aviso: "⚠️ El convenio propio de Barcelona fue anulado. Desde enero 2025 aplica el Convenio Nacional. Los trabajadores anteriores conservan su salario bruto como garantía ad personam (introdúcelo en «Mejora Voluntaria» si supera la tabla nacional).",
tablas: {
farmaceutico: {
// Hasta dic-2024: tabla provincial Barcelona
"2022": [2200.00, 0, 2.05, 0],
"2023": [2255.00, 0, 2.10, 0],
"2024": [2297.21, 0, 2.15, 0],
// Desde 2025: tablas nacionales
"2025": [2180.77, 89.70, 2.61, 0],
"2026": [2224.39, 91.49, 2.66, 0]
},
tecnico: {
"2022": [1460.00, 0, 1.35, 0],
"2023": [1490.00, 0, 1.38, 0],
"2024": [1515.20, 0, 1.40, 0],
"2025": [1477.71, 0, 1.79, 0],
"2026": [1507.26, 0, 1.83, 0]
},
auxiliar: {
"2022": [1310.00, 0, 1.20, 0],
"2023": [1340.00, 0, 1.23, 0],
"2024": [1365.40, 0, 1.25, 0],
"2025": [1342.91, 0, 1.76, 0],
"2026": [1369.77, 0, 1.80, 0]
}
}
},

// ── GIRONA / TARRAGONA / LLEIDA ────────────────────────────────────────────
gironatarragona: {
nombre: "Girona / Tarragona / Lleida",
tipoAnt: 'ninguno',
aviso: null,
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

// ── ASTURIAS ───────────────────────────────────────────────────────────────
asturias: {
nombre: "Asturias (15 pagas)",
tipoAnt: 'ninguno',
aviso: null,
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

// ── BIZKAIA ────────────────────────────────────────────────────────────────
bizkaia: {
nombre: "Bizkaia (País Vasco)",
tipoAnt: 'quinquenio',
aviso: null,
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
},

// ── GIPUZKOA ───────────────────────────────────────────────────────────────
// Tablas propias del convenio de Gipuzkoa (ligéramente distintas a Bizkaia)
gipuzkoa: {
nombre: "Gipuzkoa (País Vasco)",
tipoAnt: 'quinquenio',
aviso: null,
tablas: {
farmaceutico: {
"2024": [2420.00, 0, 2.45, 58.00],
"2025": [2468.40, 0, 2.50, 59.16],
"2026": [2517.77, 0, 2.55, 60.34]
},
tecnico: {
"2024": [1685.00, 0, 1.62, 41.00],
"2025": [1718.70, 0, 1.65, 41.82],
"2026": [1753.07, 0, 1.68, 42.66]
},
auxiliar: {
"2024": [1535.00, 0, 1.47, 37.00],
"2025": [1565.70, 0, 1.50, 37.74],
"2026": [1597.01, 0, 1.53, 38.49]
}
}
},

// ── ÁLAVA ──────────────────────────────────────────────────────────────────
// Álava se rige por el Convenio Nacional. Entrada independiente para claridad.
alava: {
nombre: "Álava (rige Convenio Nacional)",
tipoAnt: 'cpg',
aviso: "ℹ️ Álava no dispone de convenio provincial propio. Sus trabajadores se rigen por el XXV Convenio Colectivo Nacional de Oficinas de Farmacia.",
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
}

};
function establecerCotizacionesOficiales() {
// Solo establece los valores si el usuario no los ha modificado previamente
const guardado = localStorage.getItem('cotizacionesPersonalizadas');
if (!guardado) {
document.getElementById("cotizacionContComu").value = "4.70";
document.getElementById("cotizacionDesempleo").value = "1.55";
document.getElementById("cotizacionFormacion").value = "0.10";
document.getElementById("cotizacionMEI").value = "0.13";
} else {
const vals = JSON.parse(guardado);
document.getElementById("cotizacionContComu").value = vals.contComu ?? "4.70";
document.getElementById("cotizacionDesempleo").value = vals.desempleo ?? "1.55";
document.getElementById("cotizacionFormacion").value = vals.formacion ?? "0.10";
document.getElementById("cotizacionMEI").value = vals.mei ?? "0.13";
}
}
document.addEventListener('DOMContentLoaded', () => {
establecerCotizacionesOficiales();

// ── Modo oscuro ──────────────────────────────────────────────────────────────
const darkToggle = document.getElementById('dark-toggle');
if (localStorage.getItem('darkMode') === 'true') {
document.documentElement.setAttribute('data-theme', 'dark');
darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
darkToggle.addEventListener('click', () => {
const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
localStorage.setItem('darkMode', String(!isDark));
darkToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// ── Tooltips ─────────────────────────────────────────────────────────────────
const tooltipEl = document.getElementById('tooltip-global');
document.querySelectorAll('.tooltip-trigger').forEach(trigger => {
trigger.addEventListener('mouseenter', (e) => {
tooltipEl.textContent = trigger.dataset.tip;
tooltipEl.classList.add('visible');
const rect = trigger.getBoundingClientRect();
tooltipEl.style.left = `${rect.left + window.scrollX}px`;
tooltipEl.style.top = `${rect.bottom + window.scrollY + 6}px`;
});
trigger.addEventListener('mouseleave', () => tooltipEl.classList.remove('visible'));
// Soporte táctil
trigger.addEventListener('click', (e) => {
e.stopPropagation();
tooltipEl.textContent = trigger.dataset.tip;
tooltipEl.classList.toggle('visible');
const rect = trigger.getBoundingClientRect();
tooltipEl.style.left = `${Math.min(rect.left + window.scrollX, window.innerWidth - 220)}px`;
tooltipEl.style.top = `${rect.bottom + window.scrollY + 6}px`;
});
});
document.addEventListener('click', () => tooltipEl.classList.remove('visible'));

// ── Slider jornada ───────────────────────────────────────────────────────────
const sliderJornada = document.getElementById('porcentaje-slider');
const inputJornada  = document.getElementById('porcentaje');
sliderJornada.addEventListener('input', () => {
inputJornada.value = sliderJornada.value;
recalcularTodo();
});
inputJornada.addEventListener('input', () => {
sliderJornada.value = inputJornada.value;
});

// ── Botón reset cotizaciones ─────────────────────────────────────────────────
document.getElementById('btn-reset-cotizaciones').addEventListener('click', () => {
localStorage.removeItem('cotizacionesPersonalizadas');
document.getElementById("cotizacionContComu").value = "4.70";
document.getElementById("cotizacionDesempleo").value = "1.55";
document.getElementById("cotizacionFormacion").value = "0.10";
document.getElementById("cotizacionMEI").value = "0.13";
recalcularTodo();
});

// ── Calculadora inversa ──────────────────────────────────────────────────────
document.getElementById('btn-calcular-inversa').addEventListener('click', calcularInversa);
document.getElementById('inv-neto-deseado').addEventListener('keydown', e => {
if (e.key === 'Enter') calcularInversa();
});

// ── Eventos GTM en bloques extra (toggle open) ───────────────────────────────
['bloque-inversa','bloque-atrasos','bloque-nuevo-convenio','bloque-ss'].forEach(id => {
const el = document.getElementById(id);
if (el) el.addEventListener('toggle', () => {
if (el.open) enviarEventoGTM('bloque_abierto', { bloque: id });
});
});

// Inicializar "desde" a enero 2025
document.getElementById('atrasos-desde').min = '2025-01';
document.getElementById('atrasos-desde').value = '2025-01';

// Inicializar "hasta" con el mes actual
const hoy = new Date();
const mesActual = `${hoy.getFullYear()}-${String(hoy.getMonth()+1).padStart(2,'0')}`;
document.getElementById('atrasos-hasta').value = mesActual;

document.querySelectorAll('input, select').forEach(input => {
input.addEventListener('input', () => {
if (input.id === 'convenio') updateUIForConvenio();
if (input.id === 'profesion') actualizarIRPFPorDefecto(input.value);
if (input.id === 'porcentajeIRPF') {
input.dataset.modificado = 'true';
actualizarIndicadorIRPF();
}
// Guardar cotizaciones personalizadas en localStorage
if (['cotizacionContComu','cotizacionDesempleo','cotizacionFormacion','cotizacionMEI'].includes(input.id)) {
localStorage.setItem('cotizacionesPersonalizadas', JSON.stringify({
contComu: document.getElementById("cotizacionContComu").value,
desempleo: document.getElementById("cotizacionDesempleo").value,
formacion: document.getElementById("cotizacionFormacion").value,
mei: document.getElementById("cotizacionMEI").value
}));
}
recalcularTodo();
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
actualizarIRPFPorDefecto(document.getElementById('profesion').value);
actualizarIndicadorIRPF();
renderizarHistorial();
initWizardIRPF();
initBrutoLibre();
initVacaciones();
initPension();
recalcularTodo();
});

// ── IRPF por defecto según categoría ─────────────────────────────────────────
const IRPF_DEFECTO = { farmaceutico: 15.86, tecnico: 11.00, auxiliar: 8.00 };
function actualizarIRPFPorDefecto(prof) {
const campo = document.getElementById('porcentajeIRPF');
campo.value = IRPF_DEFECTO[prof] ?? 15.00;
campo.dataset.modificado = 'false';
actualizarIndicadorIRPF();
}

function actualizarIndicadorIRPF() {
const campo = document.getElementById('porcentajeIRPF');
const indicador = document.getElementById('irpf-indicador');
if (!indicador) return;
const modificado = campo.dataset.modificado === 'true';
if (modificado) {
indicador.textContent = '✏️ Personalizado';
indicador.className = 'irpf-indicador irpf-indicador--custom';
} else {
const prof = document.getElementById('profesion').value;
indicador.textContent = `📊 Orientativo para ${prof === 'farmaceutico' ? 'farmacéutico' : prof === 'tecnico' ? 'técnico' : 'auxiliar'}`;
indicador.className = 'irpf-indicador irpf-indicador--default';
}
}

// ── Historial de cálculos (localStorage, máx 3) ──────────────────────────────
function guardarEnHistorial(datos) {
const historial = JSON.parse(localStorage.getItem('historialCalculos') || '[]');
// Evitar duplicado exacto consecutivo
if (historial.length && JSON.stringify(historial[0]) === JSON.stringify(datos)) return;
historial.unshift(datos);
if (historial.length > 3) historial.pop();
localStorage.setItem('historialCalculos', JSON.stringify(historial));
renderizarHistorial();
}

function renderizarHistorial() {
const contenedor = document.getElementById('historial-container');
if (!contenedor) return;
const historial = JSON.parse(localStorage.getItem('historialCalculos') || '[]');
if (historial.length === 0) { contenedor.innerHTML = ''; return; }

const fmt = v => v.toLocaleString('es-ES', {minimumFractionDigits:2, maximumFractionDigits:2});
const filas = historial.map((h, i) => `
    <div class="historial-row" onclick="restaurarCalculo(${i})" title="Click para restaurar este cálculo">
        <div class="historial-row__info">
            <span class="historial-row__titulo">${h.convenioNombre} · ${h.prof} · ${h.anio}</span>
            <span class="historial-row__sub">${h.jornada}% jornada · IRPF ${h.irpf}%</span>
        </div>
        <div class="historial-row__neto">
            <span>${fmt(h.netoMensual)} €/mes</span>
            <span class="historial-row__anual">${fmt(h.netoAnual)} €/año</span>
        </div>
    </div>`).join('');

contenedor.innerHTML = `
    <details class="comparativa-details historial-details">
        <summary class="comparativa-summary">
            <i class="fas fa-clock-rotate-left"></i> Historial de cálculos
            <span class="historial-badge">${historial.length}</span>
        </summary>
        <div class="comparativa-body">
            <p class="comparativa-nota">Últimos ${historial.length} cálculo${historial.length>1?'s':''}. Click en uno para restaurarlo.</p>
            ${filas}
            <button class="btn-reset" style="margin-top:0.5rem;" onclick="limpiarHistorial()">
                <i class="fas fa-trash"></i> Limpiar historial
            </button>
        </div>
    </details>`;
}

function restaurarCalculo(i) {
const historial = JSON.parse(localStorage.getItem('historialCalculos') || '[]');
const h = historial[i];
if (!h) return;
document.getElementById('convenio').value = h.convenio;
document.getElementById('profesion').value = h.prof;
document.getElementById('anio').value = h.anio;
document.getElementById('porcentaje').value = h.jornada;
document.getElementById('porcentaje-slider').value = h.jornada;
document.getElementById('porcentajeIRPF').value = h.irpf;
document.getElementById('porcentajeIRPF').dataset.modificado = 'true';
document.getElementById('numPagas').value = h.numPagas;
actualizarIndicadorIRPF();
updateUIForConvenio();
recalcularTodo();
// Scroll suave a los resultados
document.getElementById('resultados').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function limpiarHistorial() {
localStorage.removeItem('historialCalculos');
renderizarHistorial();
}

// ── Función central de recálculo ─────────────────────────────────────────────
function recalcularTodo() {
calcularSalario();
calcularAtrasos();
calcularSimulador();
}

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
const cpgGroup = document.getElementById('cpg-group');

// ── Aviso de convenio ──────────────────────────────────────────────────────
const avisoEl = document.getElementById('convenio-aviso');
if (config.aviso) {
avisoEl.textContent = config.aviso;
avisoEl.style.display = 'block';
} else {
avisoEl.style.display = 'none';
}

// ── Antigüedad ─────────────────────────────────────────────────────────────
if (config.tipoAnt === 'ninguno') {
antiguedadInput.disabled = true;
antiguedadInput.value = 0;
antiguedadGroup.style.opacity = '0.5';
antiguedadGroup.style.pointerEvents = 'none';
if (labelAnt) labelAnt.innerText = "Antigüedad (No disponible)";
if (cpgGroup) cpgGroup.style.display = 'none';
} else if (config.tipoAnt === 'quinquenio') {
antiguedadInput.disabled = false;
antiguedadGroup.style.opacity = '1';
antiguedadGroup.style.pointerEvents = 'auto';
if (labelAnt) labelAnt.innerText = "Nº Quinquenios";
if (cpgGroup) cpgGroup.style.display = 'none';
} else if (config.tipoAnt === 'cpg') {
// Nacional y Álava: campo antigüedad deshabilitado (no hay trienios en tabla)
// pero se habilita el campo CPG
antiguedadInput.disabled = true;
antiguedadInput.value = 0;
antiguedadGroup.style.opacity = '0.5';
antiguedadGroup.style.pointerEvents = 'none';
if (labelAnt) labelAnt.innerText = "Antigüedad (No disponible)";
if (cpgGroup) cpgGroup.style.display = 'block';
}

// ── Pagas ─────────────────────────────────────────────────────────────────
const currentVal = pagasSelect.value;
pagasSelect.innerHTML = '';
pagasSelect.options.add(new Option("12 pagas", "12"));
if (convKey === 'asturias') {
pagasSelect.options.add(new Option("15 pagas", "15"));
pagasSelect.value = (currentVal === "12" || currentVal === "15") ? currentVal : "15";
} else {
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
const usandoFallback = !tablaCat[anio];
const [base, plus, precioHora, valAnt] = tablaCat[anio] || tablaCat["2024"];

// Mostrar aviso si se está usando fallback de año
const avisoEl = document.getElementById('convenio-aviso');
if (usandoFallback && !convData.aviso) {
avisoEl.className = 'convenio-aviso convenio-aviso--info';
avisoEl.textContent = `ℹ️ Las tablas de ${convData.nombre} no están disponibles para ${anio}. Se muestran las de 2024 como referencia.`;
avisoEl.style.display = 'block';
} else if (!convData.aviso) {
avisoEl.style.display = 'none';
avisoEl.className = 'convenio-aviso';
}
// 3. Variables de usuario
const jornPct = parseFloat(document.getElementById("porcentaje").value) / 100;
const hNoc = parseFloat(document.getElementById("numHoras").value) || 0;
const mejora = parseFloat(document.getElementById("mejoraSalarial").value) || 0;
const numAntiguedad = parseInt(document.getElementById("antiguedad").value) || 0;
// CPG (Plus Ad Personam / Complemento Personal de Garantía) - solo Nacional y Álava
const cpg = (convData.tipoAnt === 'cpg') ? (parseFloat(document.getElementById("cpgImporte").value) || 0) : 0;

// 4. Calcular antigüedad según tipo
let importeAntiguedadMes = 0;
if (convData.tipoAnt === 'quinquenio') {
importeAntiguedadMes = (valAnt * numAntiguedad) * jornPct;
}
// 5. Cálculo de conceptos mensuales
// IMPORTANTE: El plus solo se paga en las 12 nóminas mensuales, NO en pagas extras
// El CPG sí se incluye en pagas extras (es consolidado)
const sueldoBaseMes = (base * jornPct) + (plus * jornPct) + mejora + importeAntiguedadMes + cpg;
const valorNocturnidadMes = hNoc * precioHora;
const brutoMes = sueldoBaseMes + valorNocturnidadMes;
// Bruto Paga Extra: Base + Antigüedad + Mejora + CPG (SIN plus, SIN nocturnidad)
const brutoExtra = (base * jornPct) + mejora + importeAntiguedadMes + cpg;
// 6. Determinar número real de pagas del convenio para prorrateo
const pagasRealesConvenio = (convKey === 'asturias') ? 15 : 14;
let netoMensual, netoExtra, brutoAnualTotal, irpfAnual, ssAnual;
if (numPagas === 12) {
const brutoAnualMensual = brutoMes * 12;
const brutoAnualExtras = brutoExtra * (pagasRealesConvenio - 12);
brutoAnualTotal = brutoAnualMensual + brutoAnualExtras;
const brutoMesProrrateado = brutoAnualTotal / 12;
const descuentoSS = brutoMesProrrateado * totalSSPct;
const descuentoIRPF = brutoMesProrrateado * irpfPct;
netoMensual = brutoMesProrrateado - descuentoSS - descuentoIRPF;
netoExtra = 0;
irpfAnual = brutoAnualTotal * irpfPct;
ssAnual = brutoAnualTotal * totalSSPct;
} else {
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
enviarEventoGTM('calculo_realizado', {
'convenio': document.getElementById("convenio").value,
'sueldo_neto': netoAnual.toFixed(2)
});
// Guardar snapshot en historial
guardarEnHistorial({
convenio: convKey,
convenioNombre: convData.nombre,
prof,
anio,
jornada: Math.round(jornPct * 100),
irpf: parseFloat(document.getElementById("porcentajeIRPF").value),
numPagas,
netoMensual: Math.round(netoMensual * 100) / 100,
netoAnual: Math.round(netoAnual * 100) / 100
});
updateChart(netoAnual, irpfAnual, ssAnual);
renderizarResultados(numPagas, netoMensual, netoExtra, netoAnual, brutoAnualTotal, pagasRealesConvenio, irpfAnual, ssAnual, convData.nombre, prof, anio);
renderizarDesgloseMensual(numPagas, netoMensual, netoExtra, brutoMes, brutoExtra, pagasRealesConvenio, anio);
renderizarNominaVisual({
base: base * jornPct, plus: plus * jornPct, antiguedad: importeAntiguedadMes,
cpg, mejora, nocturnidad: valorNocturnidadMes, brutoMes,
ss: (brutoMes + (brutoExtra * (numPagas === 12 ? pagasRealesConvenio - 12 : numPagas - 12) / 12)) * totalSSPct,
irpf: brutoMes * irpfPct, netoMensual, numPagas, pagasRealesConvenio
});
renderizarSliderIRPF(netoAnual, brutoAnualTotal, irpfAnual, ssAnual, irpfPct, totalSSPct, numPagas, brutoMes, brutoExtra, pagasRealesConvenio);
renderizarComparativa(prof, anio, numPagas, irpfPct, totalSSPct, jornPct, hNoc, mejora);
renderizarCuriosidades(netoAnual, brutoAnualTotal, irpfAnual, ssAnual, jornPct);
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

function renderizarResultados(numPagas, netoMensual, netoExtra, netoAnual, brutoAnualTotal, pagasConvenio, irpfAnual, ssAnual, convenioNombre, prof, anio) {
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
const profNombre = prof === 'farmaceutico' ? 'Farmacéutico/a' : prof === 'tecnico' ? 'Técnico/a' : 'Auxiliar';

const html = `
    <div class="results-grid">
        ${tarjetasMensuales}
    </div>
    <div class="result-anual">
        <div class="result-anual__top">
            <span class="result-anual__label">💰 Total Neto Anual</span>
            <div style="display:flex;align-items:center;gap:0.5rem;">
                <span class="result-anual__value anim-num" id="anim-anual"></span>
                <button class="btn-copiar" id="btn-copiar-resultado" title="Copiar al portapapeles"
                    data-mensual="${fmt(netoMensual)}"
                    data-anual="${fmt(netoAnual)}"
                    data-convenio="${convenioNombre}"
                    data-prof="${profNombre}"
                    data-anio="${anio}">
                    <i class="fas fa-copy"></i>
                </button>
            </div>
        </div>
        <div class="result-anual__bar-wrap">
            <div class="result-anual__bar" id="barra-neto" style="width:0%"></div>
        </div>
        <div class="result-anual__bottom">
            <span class="result-anual__bruto">Bruto anual: ${fmt(brutoAnualTotal)} €</span>
            <span class="result-anual__pct">${porcentajeNeto}% neto</span>
        </div>
    </div>
    <div class="desglose-deducciones">
        <div class="desglose-item desglose-item--neto">
            <span class="desglose-dot"></span>
            <span class="desglose-label">Neto</span>
            <span class="desglose-valor">${fmt(netoAnual)}</span>
            <span class="desglose-pct">(${porcentajeNeto}%)</span>
        </div>
        <div class="desglose-item desglose-item--irpf">
            <span class="desglose-dot"></span>
            <span class="desglose-label">IRPF</span>
            <span class="desglose-valor">${fmt(irpfAnual)}</span>
            <span class="desglose-pct">(${(irpfAnual / brutoAnualTotal * 100).toFixed(1)}%)</span>
        </div>
        <div class="desglose-item desglose-item--ss">
            <span class="desglose-dot"></span>
            <span class="desglose-label">SS/MEI</span>
            <span class="desglose-valor">${fmt(ssAnual)}</span>
            <span class="desglose-pct">(${(ssAnual / brutoAnualTotal * 100).toFixed(1)}%)</span>
        </div>
    </div>
`;

document.getElementById("resultados").innerHTML = html;

// Botón copiar
document.getElementById('btn-copiar-resultado').addEventListener('click', function() {
    const texto = `💊 Sueldo Farmacia Pro\n📋 ${this.dataset.convenio} · ${this.dataset.prof} · ${this.dataset.anio}\n💶 Neto mensual: ${this.dataset.mensual} €\n💰 Neto anual: ${this.dataset.anual} €\n🔗 conveniodefarmacia.com`;
    navigator.clipboard.writeText(texto).then(() => {
        const btn = this;
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.classList.add('btn-copiar--ok');
        enviarEventoGTM('copiar_resultado', {});
        setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('btn-copiar--ok'); }, 2000);
    }).catch(() => {
        // Fallback para navegadores sin clipboard API
        const ta = document.createElement('textarea');
        ta.value = texto;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    });
});

// Animaciones
animarNumero(document.getElementById('anim-anual'), netoAnual);
animarNumero(document.getElementById('anim-mensual'), netoMensual);
if (numPagas !== 12) animarNumero(document.getElementById('anim-extra'), netoExtra);

const barra = document.getElementById('barra-neto');
setTimeout(() => barra.style.width = `${porcentajeNeto}%`, 100);
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

// ── Slider comparativa impacto IRPF ─────────────────────────────────────────
function renderizarSliderIRPF(netoAnualBase, brutoAnual, irpfAnualBase, ssAnual, irpfActual, totalSSPct, numPagas, brutoMes, brutoExtra, pagasConvenio) {
const fmt = v => v.toLocaleString('es-ES', {minimumFractionDigits:0, maximumFractionDigits:0});
const irpfPct = Math.round(irpfActual * 100);

document.getElementById('slider-irpf-container').innerHTML = `
    <details class="comparativa-details slider-irpf-details">
        <summary class="comparativa-summary">
            <i class="fas fa-sliders"></i> ¿Qué pasa si negocio mi IRPF?
        </summary>
        <div class="comparativa-body slider-irpf-body">
            <p class="comparativa-nota">Mueve el slider para ver el impacto en tu neto. El IRPF de la calculadora no cambia.</p>
            <div class="slider-irpf-row">
                <span class="slider-irpf-label">Retención IRPF</span>
                <input type="range" id="slider-irpf-sim" min="0" max="45" value="${irpfPct}" step="1" class="jornada-slider">
                <span class="slider-irpf-val" id="slider-irpf-val">${irpfPct}%</span>
            </div>
            <div class="slider-irpf-comparativa" id="slider-irpf-comparativa"></div>
        </div>
    </details>`;

// Render inicial
actualizarSliderIRPF(brutoMes, brutoExtra, pagasConvenio, numPagas, irpfActual, totalSSPct, netoAnualBase);

document.getElementById('slider-irpf-sim').addEventListener('input', function() {
    const val = parseInt(this.value);
    document.getElementById('slider-irpf-val').textContent = val + '%';
    actualizarSliderIRPF(brutoMes, brutoExtra, pagasConvenio, numPagas, val / 100, totalSSPct, netoAnualBase);
});
}

function actualizarSliderIRPF(brutoMes, brutoExtra, pagasConvenio, numPagas, irpfSim, totalSSPct, netoAnualBase) {
const fmt  = v => v.toLocaleString('es-ES', {minimumFractionDigits:0, maximumFractionDigits:0});
const fmt2 = v => v.toLocaleString('es-ES', {minimumFractionDigits:2, maximumFractionDigits:2});

let netoSim, brutoAnualSim;
if (numPagas === 12) {
    const brutoAnualM = brutoMes * 12;
    const brutoAnualE = brutoExtra * (pagasConvenio - 12);
    brutoAnualSim = brutoAnualM + brutoAnualE;
    const bmp = brutoAnualSim / 12;
    netoSim = (bmp - bmp * totalSSPct - bmp * irpfSim) * 12;
} else {
    const prorrataExtra = (brutoExtra * (numPagas - 12)) / 12;
    const baseCot = brutoMes + prorrataExtra;
    brutoAnualSim = baseCot * 12;
    const irpfAnualSim = (brutoMes * 12 * irpfSim) + (brutoExtra * (numPagas - 12) * irpfSim);
    const ssAnualSim = brutoAnualSim * totalSSPct;
    netoSim = brutoAnualSim - irpfAnualSim - ssAnualSim;
}

const diff = netoSim - netoAnualBase;
const signo = diff >= 0 ? '+' : '';
const color = diff >= 0 ? '#059669' : '#ef4444';
const diffMes = diff / 12;

document.getElementById('slider-irpf-comparativa').innerHTML = `
    <div class="slider-irpf-resultado">
        <div class="slider-irpf-item">
            <span class="slider-irpf-item-label">Neto anual simulado</span>
            <span class="slider-irpf-item-val" style="color:#1f2937">${fmt2(netoSim)} €</span>
        </div>
        <div class="slider-irpf-item">
            <span class="slider-irpf-item-label">Diferencia vs actual</span>
            <span class="slider-irpf-item-val" style="color:${color}">${signo}${fmt2(diff)} €/año</span>
        </div>
        <div class="slider-irpf-item">
            <span class="slider-irpf-item-label">En neto mensual</span>
            <span class="slider-irpf-item-val" style="color:${color}">${signo}${fmt2(diffMes)} €/mes</span>
        </div>
    </div>`;
}

// ── Mini-wizard IRPF ─────────────────────────────────────────────────────────
// Tabla orientativa basada en tablas AEAT 2024-2026
// [estado][hijos][tramo_salario] = retención %
const TABLA_IRPF_WIZARD = {
soltero: {
0: { bajo: 6, medio: 15, alto: 21, muyalto: 30 },
1: { bajo: 2, medio: 11, alto: 17, muyalto: 27 },
2: { bajo: 0, medio:  8, alto: 14, muyalto: 24 },
3: { bajo: 0, medio:  5, alto: 11, muyalto: 21 }
},
casado_conyuge: {
0: { bajo: 6, medio: 15, alto: 21, muyalto: 30 },
1: { bajo: 2, medio: 11, alto: 17, muyalto: 27 },
2: { bajo: 0, medio:  8, alto: 14, muyalto: 24 },
3: { bajo: 0, medio:  5, alto: 11, muyalto: 21 }
},
casado_solo: {
0: { bajo: 1, medio: 10, alto: 16, muyalto: 25 },
1: { bajo: 0, medio:  7, alto: 13, muyalto: 22 },
2: { bajo: 0, medio:  4, alto: 10, muyalto: 19 },
3: { bajo: 0, medio:  2, alto:  8, muyalto: 16 }
},
monoparental: {
0: { bajo: 0, medio:  8, alto: 14, muyalto: 23 },
1: { bajo: 0, medio:  5, alto: 11, muyalto: 20 },
2: { bajo: 0, medio:  3, alto:  9, muyalto: 17 },
3: { bajo: 0, medio:  1, alto:  7, muyalto: 14 }
}
};

function initWizardIRPF() {
const wizard = document.getElementById('bloque-wizard-irpf');
if (!wizard) return;

const selecciones = {};

wizard.querySelectorAll('.wizard-opcion').forEach(btn => {
    btn.addEventListener('click', () => {
        const grupo = btn.dataset.grupo;
        const val   = btn.dataset.val;
        selecciones[grupo] = val;

        // Marcar activo en el grupo
        wizard.querySelectorAll(`.wizard-opcion[data-grupo="${grupo}"]`).forEach(b => b.classList.remove('wizard-opcion--active'));
        btn.classList.add('wizard-opcion--active');

        // Si tenemos los 3 grupos, calcular
        if (selecciones.estado && selecciones.hijos !== undefined && selecciones.salario) {
            calcularIRPFWizard(selecciones);
        }
    });
});
}

function calcularIRPFWizard(s) {
const hijosKey = Math.min(parseInt(s.hijos), 3);
const irpf = TABLA_IRPF_WIZARD[s.estado]?.[hijosKey]?.[s.salario] ?? 15;

const etiquetaSalario = { bajo: '<20.000€', medio: '20-30.000€', alto: '30-45.000€', muyalto: '>45.000€' };
const etiquetaEstado  = { soltero: 'Soltero/a', casado_conyuge: 'Casado/a (2 rentas)', casado_solo: 'Casado/a (1 renta)', monoparental: 'Familia monoparental' };

document.getElementById('resultado-wizard').innerHTML = `
    <div class="wizard-resultado">
        <div class="wizard-resultado__header">
            <span>Tu retención estimada</span>
            <span class="wizard-resultado__pct">${irpf}%</span>
        </div>
        <p class="atrasos-nota">${etiquetaEstado[s.estado]} · ${s.hijos === '3' ? '3+' : s.hijos} hijo${s.hijos !== '1' ? 's' : ''} · ${etiquetaSalario[s.salario]}. Orientativo según tablas AEAT 2026. Puede variar según tu CCAA y otras circunstancias.</p>
        <button class="btn-calcular-inversa" style="background:linear-gradient(135deg,#059669,#047857);margin-top:0.4rem;" onclick="aplicarIRPFWizard(${irpf})">
            <i class="fas fa-arrow-right"></i> Aplicar ${irpf}% a mi cálculo
        </button>
    </div>`;
enviarEventoGTM('wizard_irpf_usado', { irpf_calculado: irpf });
}

function aplicarIRPFWizard(irpf) {
const campo = document.getElementById('porcentajeIRPF');
campo.value = irpf;
campo.dataset.modificado = 'true';
actualizarIndicadorIRPF();
recalcularTodo();
// Cerrar wizard y hacer scroll a resultados
document.getElementById('bloque-wizard-irpf').removeAttribute('open');
document.getElementById('resultados').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Función de comparativa entre convenios (corregida y añadida)
function renderizarComparativa(prof, anio, numPagas, irpfPct, totalSSPct, jornPct, hNoc, mejora) {
    const netos = {};
    let maxNeto = 0;
    let convActual = document.getElementById('convenio').value;
    let hayConveniosConQuinquenios = false;

    Object.entries(DATA_CONVENIOS).forEach(([key, conv]) => {
        const pagasReales = (key === 'asturias') ? 15 : 14;
        const tabla = conv.tablas[prof];
        const row = tabla[anio] || tabla["2024"];
        if (!row) return;
        const [base, plus, precioHora, valAnt] = row;
        let antMes = 0; // Sin antigüedad en comparativa para igualdad de condiciones
        if (conv.tipoAnt === 'quinquenio') hayConveniosConQuinquenios = true;
        const { netoAnual } = calcularNetoAnualDesdeBase(base, plus, jornPct, mejora, antMes, hNoc, precioHora, numPagas, pagasReales, irpfPct, totalSSPct);
        netos[key] = netoAnual;
        if (netoAnual > maxNeto) maxNeto = netoAnual;
    });

    const anioMostrado = DATA_CONVENIOS[Object.keys(DATA_CONVENIOS)[0]].tablas[prof][anio] ? anio : '2024';
    const notaQuinquenios = hayConveniosConQuinquenios
        ? ' Los convenios vascos se muestran sin quinquenios (pueden ser mayores con antigüedad).'
        : '';

    const htmlRows = Object.entries(netos).sort((a, b) => b[1] - a[1]).map(([key, neto]) => {
        const pct = (neto / maxNeto * 100).toFixed(1);
        const active = key === convActual ? 'comp-row--active' : '';
        const tieneQuinquenio = DATA_CONVENIOS[key].tipoAnt === 'quinquenio';
        return `
            <div class="comp-row ${active}">
                <span class="comp-row__nombre">${DATA_CONVENIOS[key].nombre}${tieneQuinquenio ? ' *' : ''}</span>
                <div class="comp-row__bar-wrap">
                    <div class="comp-row__bar" style="width:${pct}%"></div>
                </div>
                <span class="comp-row__valor">${neto.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} €</span>
            </div>
        `;
    }).join('');

    document.getElementById('comparativa-container').innerHTML = `
        <details class="comparativa-details">
            <summary class="comparativa-summary">
                <i class="fas fa-balance-scale"></i> Comparativa con otros convenios
            </summary>
            <div class="comparativa-body">
                <p class="comparativa-nota">Neto anual según tablas oficiales ${anioMostrado}, sin antigüedad.${notaQuinquenios}</p>
                ${htmlRows}
            </div>
        </details>
    `;
}

async function exportarImagen() {
const area = document.getElementById('capture-area');
const btn = document.querySelector('.btn-export');
const originalText = btn.innerHTML;

btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando...';
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
// ── Curiosidades dinámicas ──
function renderizarCuriosidades(netoAnual, brutoAnual, irpfAnual, ssAnual, jornPct) {
const fmt = (v, dec = 2) => v.toLocaleString('es-ES', { minimumFractionDigits: dec, maximumFractionDigits: dec });

// Horas trabajadas al año según convenio farmacia: 1785h
const horasAnio = Math.round(1785 * jornPct);
const netoHora = horasAnio > 0 ? netoAnual / horasAnio : 0;

// Impuestos totales por día natural
const impuestosDia = (irpfAnual + ssAnual) / 365;

// Día de libertad fiscal: días del año trabajando "para el Estado"
const pctImpuestos = (irpfAnual + ssAnual) / brutoAnual;
const diasLibertad = Math.round(pctImpuestos * 365);
const anioSeleccionado = parseInt(document.getElementById("anio").value) || new Date().getFullYear();
const fechaLibertad = new Date(anioSeleccionado, 0, 1 + diasLibertad);
const meses = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
const labelFecha = `${fechaLibertad.getDate()} ${meses[fechaLibertad.getMonth()]}`;
const pctImpuestosFmt = (pctImpuestos * 100).toFixed(1);

// Café al mes (precio medio café España: 1,50€)
const cafes = Math.round(netoAnual / 12 / 1.50);

document.getElementById('curiosidades-container').innerHTML = `
    <div class="curiosidades-strip">
        <div class="curiosidad-item">
            <span class="curiosidad-emoji">⏱️</span>
            <span class="curiosidad-valor">${fmt(netoHora)} €</span>
            <span class="curiosidad-label">neto por hora</span>
        </div>
        <div class="curiosidad-item">
            <span class="curiosidad-emoji">📅</span>
            <span class="curiosidad-valor">${fmt(impuestosDia)} €</span>
            <span class="curiosidad-label">impuestos/día</span>
        </div>
        <div class="curiosidad-item curiosidad-item--libertad" title="Cambia ajustando tu % de IRPF">
            <span class="curiosidad-emoji">🗓️</span>
            <span class="curiosidad-valor">${labelFecha}</span>
            <span class="curiosidad-sublabel">${diasLibertad} días · ${pctImpuestosFmt}% al Estado</span>
            <span class="curiosidad-label">día libertad fiscal</span>
        </div>
        <div class="curiosidad-item">
            <span class="curiosidad-emoji">☕</span>
            <span class="curiosidad-valor">${cafes}</span>
            <span class="curiosidad-label">cafés al mes</span>
        </div>
    </div>
`;
}

// ── Utilidad compartida: calcular neto anual a partir de base+plus+params ──
function calcularNetoAnualDesdeBase(base, plus, jornPct, mejora, importeAntiguedadMes, hNoc, precioHora, numPagas, pagasRealesConvenio, irpfPct, totalSSPct) {
const sueldoBaseMes = (base * jornPct) + (plus * jornPct) + mejora + importeAntiguedadMes;
const brutoMes = sueldoBaseMes + (hNoc * precioHora);
const brutoExtra = (base * jornPct) + mejora + importeAntiguedadMes;
let brutoAnualTotal, irpfAnual, ssAnual;
if (numPagas === 12) {
brutoAnualTotal = (brutoMes * 12) + (brutoExtra * (pagasRealesConvenio - 12));
irpfAnual = brutoAnualTotal * irpfPct;
ssAnual = brutoAnualTotal * totalSSPct;
} else {
const prorrataExtra = (brutoExtra * (numPagas - 12)) / 12;
brutoAnualTotal = (brutoMes + prorrataExtra) * 12;
irpfAnual = (brutoMes * 12 * irpfPct) + (brutoExtra * (numPagas - 12) * irpfPct);
ssAnual = brutoAnualTotal * totalSSPct;
}
return { netoMes: brutoMes - ((brutoMes + (brutoExtra*(numPagas-12)/12)) * totalSSPct) - (brutoMes * irpfPct),
netoAnual: brutoAnualTotal - irpfAnual - ssAnual,
brutoAnual: brutoAnualTotal };
}

// ── Cálculo de atrasos ──
function calcularAtrasos() {
const convKey = document.getElementById("convenio").value;
const prof    = document.getElementById("profesion").value;
const numPagas = parseInt(document.getElementById("numPagas").value);
const irpfPct  = parseFloat(document.getElementById("porcentajeIRPF").value) / 100;
const totalSSPct = (
parseFloat(document.getElementById("cotizacionContComu").value) +
parseFloat(document.getElementById("cotizacionDesempleo").value) +
parseFloat(document.getElementById("cotizacionMEI").value) +
parseFloat(document.getElementById("cotizacionFormacion").value)
) / 100;
const jornPct  = parseFloat(document.getElementById("porcentaje").value) / 100;
const hNoc     = parseFloat(document.getElementById("numHoras").value) || 0;
const mejora   = parseFloat(document.getElementById("mejoraSalarial").value) || 0;
const convData = DATA_CONVENIOS[convKey];
const pagasRealesConvenio = (convKey === 'asturias') ? 15 : 14;

const desde = document.getElementById("atrasos-desde").value; // "YYYY-MM"
const hasta = document.getElementById("atrasos-hasta").value;
const el    = document.getElementById("resultado-atrasos");

if (!desde || !hasta || desde > hasta) {
    el.innerHTML = '';
    return;
}

const fmt = v => v.toLocaleString('es-ES', {minimumFractionDigits:2, maximumFractionDigits:2});

// Iterar mes a mes entre desde y hasta
let totalDiferenciaNeta = 0;
let mesesContados = 0;
let detalles = [];

let [yearD, monthD] = desde.split('-').map(Number);
let [yearH, monthH] = hasta.split('-').map(Number);

let y = yearD, m = monthD;
while (y < yearH || (y === yearH && m <= monthH)) {
    const anioStr = String(y);
    const tablaCat = convData.tablas[prof];
    // Tabla del año en curso (fallback a 2024)
    const rowActual = tablaCat[anioStr] || tablaCat["2024"];
    // Tabla del año anterior (lo que cobraban antes de la subida obligada)
    const anioAnterior = String(Math.max(parseInt(Object.keys(tablaCat)[0]), y - 1));
    const rowAnterior  = tablaCat[anioAnterior] || rowActual;

    const [baseAct, plusAct, precioHoraAct] = rowActual;
    const [baseAnt, plusAnt, precioHoraAnt] = rowAnterior;

    // Neto mensual con tabla correcta
    const netoDeberiaHaber = calcularNetoMensualSimple(baseAct, plusAct, precioHoraAct, jornPct, mejora, hNoc, numPagas, pagasRealesConvenio, irpfPct, totalSSPct);
    // Neto mensual con tabla anterior (lo que cobra si no subieron)
    const netoCobrando    = calcularNetoMensualSimple(baseAnt, plusAnt, precioHoraAnt, jornPct, mejora, hNoc, numPagas, pagasRealesConvenio, irpfPct, totalSSPct);

    const difMes = netoDeberiaHaber - netoCobrando;
    totalDiferenciaNeta += difMes;
    mesesContados++;

    // Guardar resumen por año
    const key = anioStr;
    const existing = detalles.find(d => d.anio === key);
    if (existing) { existing.total += difMes; existing.meses++; }
    else detalles.push({ anio: key, total: difMes, meses: 1 });

    m++;
    if (m > 12) { m = 1; y++; }
}

if (mesesContados === 0 || totalDiferenciaNeta <= 0.01) {
    el.innerHTML = `<div class="atrasos-ok">✅ Con los datos actuales no se detectan atrasos pendientes.</div>`;
    return;
}

const filasDetalle = detalles.map(d => `
    <div class="atrasos-fila">
        <span>${d.anio} (${d.meses} mes${d.meses>1?'es':''})</span>
        <span class="atrasos-importe">${fmt(d.total)} €</span>
    </div>
`).join('');

el.innerHTML = `
    <div class="atrasos-resultado">
        <div class="atrasos-total">
            <span>💸 Total atrasos netos que te deben</span>
            <span class="atrasos-total-valor">${fmt(totalDiferenciaNeta)} €</span>
        </div>
        <div class="atrasos-desglose">
            ${filasDetalle}
        </div>
        <p class="atrasos-nota">Diferencia entre el sueldo que debiste cobrar (tablas oficiales) y el año anterior. Calculado en neto con tu IRPF actual.</p>
    </div>
`;
}

function calcularNetoMensualSimple(base, plus, precioHora, jornPct, mejora, hNoc, numPagas, pagasRealesConvenio, irpfPct, totalSSPct) {
const brutoMes   = (base * jornPct) + (plus * jornPct) + mejora + (hNoc * precioHora);
const brutoExtra = (base * jornPct) + mejora;
const prorrataExtra = (numPagas === 12) ? (brutoExtra * (pagasRealesConvenio - 12)) / 12 : (brutoExtra * (numPagas - 12)) / 12;
const baseCot = brutoMes + prorrataExtra;
return brutoMes - (baseCot * totalSSPct) - (brutoMes * irpfPct);
}

// ── Simulador nuevo convenio ──
function calcularSimulador() {
const convKey  = document.getElementById("convenio").value;
const prof     = document.getElementById("profesion").value;
const numPagas = parseInt(document.getElementById("numPagas").value);
const irpfPct  = parseFloat(document.getElementById("porcentajeIRPF").value) / 100;
const totalSSPct = (
parseFloat(document.getElementById("cotizacionContComu").value) +
parseFloat(document.getElementById("cotizacionDesempleo").value) +
parseFloat(document.getElementById("cotizacionMEI").value) +
parseFloat(document.getElementById("cotizacionFormacion").value)
) / 100;
const jornPct  = parseFloat(document.getElementById("porcentaje").value) / 100;
const hNoc     = parseFloat(document.getElementById("numHoras").value) || 0;
const mejora   = parseFloat(document.getElementById("mejoraSalarial").value) || 0;
const numAntiguedad = parseInt(document.getElementById("antiguedad").value) || 0;

const sub2025  = (parseFloat(document.getElementById("sim-subida-2025").value) || 0) / 100;
const sub2026  = (parseFloat(document.getElementById("sim-subida-2026").value) || 0) / 100;

const convData = DATA_CONVENIOS[convKey];
const tablaCat = convData.tablas[prof];
const pagasRealesConvenio = (convKey === 'asturias') ? 15 : 14;

// Base de referencia: tabla 2024 del convenio (o la más antigua disponible)
const baseAnio = tablaCat["2024"] || tablaCat[Object.keys(tablaCat)[0]];
const [base2024, plus2024, precioHora2024, valAnt2024] = baseAnio;

// Antigüedad para 2024
const importeAntiguedadMes2024 = (convData.tipoAnt === 'quinquenio') ? (valAnt2024 * numAntiguedad) * jornPct : 0;

// Cálculos para 2024 (base)
const sueldoBaseMes2024 = (base2024 * jornPct) + (plus2024 * jornPct) + mejora + importeAntiguedadMes2024;
const valorNocturnidadMes2024 = hNoc * precioHora2024;
const brutoMes2024 = sueldoBaseMes2024 + valorNocturnidadMes2024;
const brutoExtra2024 = (base2024 * jornPct) + mejora + importeAntiguedadMes2024;
let netoMensual2024, netoExtra2024;
if (numPagas === 12) {
    const brutoAnualMensual2024 = brutoMes2024 * 12;
    const brutoAnualExtras2024 = brutoExtra2024 * (pagasRealesConvenio - 12);
    const brutoAnualTotal2024 = brutoAnualMensual2024 + brutoAnualExtras2024;
    const brutoMesProrrateado2024 = brutoAnualTotal2024 / 12;
    const descuentoSS2024 = brutoMesProrrateado2024 * totalSSPct;
    const descuentoIRPF2024 = brutoMesProrrateado2024 * irpfPct;
    netoMensual2024 = brutoMesProrrateado2024 - descuentoSS2024 - descuentoIRPF2024;
    netoExtra2024 = 0;
} else {
    const prorrataExtra2024 = (brutoExtra2024 * (numPagas - 12)) / 12;
    const baseCotizacion2024 = brutoMes2024 + prorrataExtra2024;
    const descuentoSS2024 = baseCotizacion2024 * totalSSPct;
    const descuentoIRPF_Mes2024 = brutoMes2024 * irpfPct;
    netoMensual2024 = brutoMes2024 - descuentoSS2024 - descuentoIRPF_Mes2024;
    netoExtra2024 = brutoExtra2024 - (brutoExtra2024 * irpfPct);
}

// Para 2025
const base2025 = base2024 * (1 + sub2025);
const plus2025 = plus2024 * (1 + sub2025);
const precioHora2025 = precioHora2024 * (1 + sub2025);
const valAnt2025 = valAnt2024 * (1 + sub2025);
const importeAntiguedadMes2025 = (convData.tipoAnt === 'quinquenio') ? (valAnt2025 * numAntiguedad) * jornPct : 0;
const sueldoBaseMes2025 = (base2025 * jornPct) + (plus2025 * jornPct) + mejora + importeAntiguedadMes2025;
const valorNocturnidadMes2025 = hNoc * precioHora2025;
const brutoMes2025 = sueldoBaseMes2025 + valorNocturnidadMes2025;
const brutoExtra2025 = (base2025 * jornPct) + mejora + importeAntiguedadMes2025;
let netoMensual2025, netoExtra2025;
if (numPagas === 12) {
    const brutoAnualMensual2025 = brutoMes2025 * 12;
    const brutoAnualExtras2025 = brutoExtra2025 * (pagasRealesConvenio - 12);
    const brutoAnualTotal2025 = brutoAnualMensual2025 + brutoAnualExtras2025;
    const brutoMesProrrateado2025 = brutoAnualTotal2025 / 12;
    const descuentoSS2025 = brutoMesProrrateado2025 * totalSSPct;
    const descuentoIRPF2025 = brutoMesProrrateado2025 * irpfPct;
    netoMensual2025 = brutoMesProrrateado2025 - descuentoSS2025 - descuentoIRPF2025;
    netoExtra2025 = 0;
} else {
    const prorrataExtra2025 = (brutoExtra2025 * (numPagas - 12)) / 12;
    const baseCotizacion2025 = brutoMes2025 + prorrataExtra2025;
    const descuentoSS2025 = baseCotizacion2025 * totalSSPct;
    const descuentoIRPF_Mes2025 = brutoMes2025 * irpfPct;
    netoMensual2025 = brutoMes2025 - descuentoSS2025 - descuentoIRPF_Mes2025;
    netoExtra2025 = brutoExtra2025 - (brutoExtra2025 * irpfPct);
}

// Para 2026
const base2026 = base2025 * (1 + sub2026);
const plus2026 = plus2025 * (1 + sub2026);
const precioHora2026 = precioHora2025 * (1 + sub2026);
const valAnt2026 = valAnt2025 * (1 + sub2026);
const importeAntiguedadMes2026 = (convData.tipoAnt === 'quinquenio') ? (valAnt2026 * numAntiguedad) * jornPct : 0;
const sueldoBaseMes2026 = (base2026 * jornPct) + (plus2026 * jornPct) + mejora + importeAntiguedadMes2026;
const valorNocturnidadMes2026 = hNoc * precioHora2026;
const brutoMes2026 = sueldoBaseMes2026 + valorNocturnidadMes2026;
const brutoExtra2026 = (base2026 * jornPct) + mejora + importeAntiguedadMes2026;
let netoMensual2026, netoExtra2026;
if (numPagas === 12) {
    const brutoAnualMensual2026 = brutoMes2026 * 12;
    const brutoAnualExtras2026 = brutoExtra2026 * (pagasRealesConvenio - 12);
    const brutoAnualTotal2026 = brutoAnualMensual2026 + brutoAnualExtras2026;
    const brutoMesProrrateado2026 = brutoAnualTotal2026 / 12;
    const descuentoSS2026 = brutoMesProrrateado2026 * totalSSPct;
    const descuentoIRPF2026 = brutoMesProrrateado2026 * irpfPct;
    netoMensual2026 = brutoMesProrrateado2026 - descuentoSS2026 - descuentoIRPF2026;
    netoExtra2026 = 0;
} else {
    const prorrataExtra2026 = (brutoExtra2026 * (numPagas - 12)) / 12;
    const baseCotizacion2026 = brutoMes2026 + prorrataExtra2026;
    const descuentoSS2026 = baseCotizacion2026 * totalSSPct;
    const descuentoIRPF_Mes2026 = brutoMes2026 * irpfPct;
    netoMensual2026 = brutoMes2026 - descuentoSS2026 - descuentoIRPF_Mes2026;
    netoExtra2026 = brutoExtra2026 - (brutoExtra2026 * irpfPct);
}

const fmt = v => v.toLocaleString('es-ES', {minimumFractionDigits:2, maximumFractionDigits:2});
const diff25 = netoMensual2025 - netoMensual2024;
const diff26 = netoMensual2026 - netoMensual2024;

const displayNeto = (netoMensual, netoExtra) => numPagas === 12 ? `${fmt(netoMensual)} €/mes` : `${fmt(netoMensual)} €/mes<br>Paga: ${fmt(netoExtra)} €`;

document.getElementById("resultado-simulador").innerHTML = `
    <div class="simulador-resultado">
        <div class="sim-row sim-row--base">
            <span class="sim-anio">📌 Base 2024</span>
            <span class="sim-neto">${displayNeto(netoMensual2024, netoExtra2024)}</span>
            <span class="sim-diff">—</span>
        </div>
        <div class="sim-row sim-row--2025">
            <span class="sim-anio">📈 Con subida 2025 (+${(sub2025*100).toFixed(1)}%)</span>
            <span class="sim-neto">${displayNeto(netoMensual2025, netoExtra2025)}</span>
            <span class="sim-diff ${diff25>=0?'pos':'neg'}">${diff25>=0?'+':''}${fmt(diff25)} €</span>
        </div>
        <div class="sim-row sim-row--2026">
            <span class="sim-anio">🚀 Acumulado 2026 (+${((sub2025+sub2026+sub2025*sub2026)*100).toFixed(1)}%)</span>
            <span class="sim-neto">${displayNeto(netoMensual2026, netoExtra2026)}</span>
            <span class="sim-diff ${diff26>=0?'pos':'neg'}">${diff26>=0?'+':''}${fmt(diff26)} €</span>
        </div>
        <p class="atrasos-nota">Subida aplicada sobre tablas 2024. El % acumulado incluye el efecto compuesto.</p>
    </div>
`;
}

// ── Desglose mes a mes ──────────────────────────────────────────────────────
function renderizarDesgloseMensual(numPagas, netoMensual, netoExtra, brutoMes, brutoExtra, pagasConvenio, anio) {
const mesesNombre = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const fmt = v => v.toLocaleString('es-ES', {minimumFractionDigits:2, maximumFractionDigits:2});

// Definir qué meses tienen paga extra según el convenio
let mesesExtra = [];
if (numPagas === 14) mesesExtra = [5, 11];      // junio=5, diciembre=11
else if (numPagas === 15) mesesExtra = [2, 5, 11]; // marzo=2, junio=5, dic=11 (Asturias)

const filas = mesesNombre.map((mes, i) => {
    const esExtra = mesesExtra.includes(i);
    const netoMes = numPagas === 12 ? netoMensual : (esExtra ? netoMensual + netoExtra : netoMensual);
    const tieneExtra = esExtra && numPagas !== 12;
    return `
        <div class="desglose-mes-row ${tieneExtra ? 'desglose-mes-row--extra' : ''}">
            <span class="desglose-mes-nombre">${mes}</span>
            <span class="desglose-mes-tipo">${tieneExtra ? '🎁 +Extra' : ''}</span>
            <span class="desglose-mes-neto">${fmt(netoMes)} €</span>
        </div>`;
}).join('');

const totalAnio = numPagas === 12
    ? netoMensual * 12
    : netoMensual * 12 + netoExtra * (numPagas - 12);

document.getElementById('desglose-mensual-container').innerHTML = `
    <details class="comparativa-details desglose-mensual-details">
        <summary class="comparativa-summary">
            <i class="fas fa-calendar-days"></i> Desglose mes a mes ${anio}
        </summary>
        <div class="desglose-mensual-body">
            ${filas}
            <div class="desglose-mes-total">
                <span>Total anual neto</span>
                <span>${fmt(totalAnio)} €</span>
            </div>
        </div>
    </details>`;
}

// ── Calculadora inversa ──────────────────────────────────────────────────────
function calcularInversa() {
const netoDeseado = parseFloat(document.getElementById('inv-neto-deseado').value) || 0;
const irpfPct = parseFloat(document.getElementById("porcentajeIRPF").value) / 100;
const totalSSPct = (
parseFloat(document.getElementById("cotizacionContComu").value) +
parseFloat(document.getElementById("cotizacionDesempleo").value) +
parseFloat(document.getElementById("cotizacionMEI").value) +
parseFloat(document.getElementById("cotizacionFormacion").value)
) / 100;
const numPagas = parseInt(document.getElementById("numPagas").value);
const convKey = document.getElementById("convenio").value;
const pagasRealesConvenio = (convKey === 'asturias') ? 15 : 14;

if (netoDeseado <= 0) {
    document.getElementById('resultado-inversa').innerHTML = '';
    return;
}

// Fórmula inversa para 14 pagas:
// netoMensual = brutoMes - (brutoMes + prorrataExtra)*SS - brutoMes*IRPF
// Simplificando con prorrataExtra = brutoMes * k (donde k = (numPagas-12)/12)
// netoMensual = brutoMes * (1 - IRPF - SS*(1 + k))
// brutoMes = netoMensual / (1 - IRPF - SS*(1 + k))
const k = numPagas === 12
    ? (pagasRealesConvenio - 12) / 12
    : (numPagas - 12) / 12;

const divisor = 1 - irpfPct - totalSSPct * (1 + k);
if (divisor <= 0) {
    document.getElementById('resultado-inversa').innerHTML =
        `<div class="atrasos-ok" style="background:#fef2f2;color:#dc2626;">⚠️ Los porcentajes de IRPF y SS son demasiado altos para calcular el inverso.</div>`;
    return;
}

const brutoMesNecesario = netoDeseado / divisor;
const brutoAnualNecesario = brutoMesNecesario * (1 + k) * 12;
const fmt = v => v.toLocaleString('es-ES', {minimumFractionDigits:2, maximumFractionDigits:2});

enviarEventoGTM('calculadora_inversa', { neto_deseado: netoDeseado });

document.getElementById('resultado-inversa').innerHTML = `
    <div class="inversa-resultado">
        <div class="inversa-fila inversa-fila--main">
            <span>💼 Bruto mensual a negociar</span>
            <span class="inversa-valor">${fmt(brutoMesNecesario)} €</span>
        </div>
        <div class="inversa-fila">
            <span>📅 Bruto anual equivalente</span>
            <span>${fmt(brutoAnualNecesario)} €</span>
        </div>
        <div class="inversa-fila">
            <span>📊 IRPF aplicado</span>
            <span>${(irpfPct*100).toFixed(1)}%</span>
        </div>
        <div class="inversa-fila">
            <span>🏛️ SS + MEI aplicado</span>
            <span>${(totalSSPct*100).toFixed(2)}%</span>
        </div>
        <p class="atrasos-nota">Basado en tu IRPF y SS actuales. El bruto real puede diferir si cambia la retención al aplicar el nuevo salario.</p>
    </div>`;
}

// ══════════════════════════════════════════════════════════════════════════════
// BLOQUE: NÓMINA VISUAL
// ══════════════════════════════════════════════════════════════════════════════
function renderizarNominaVisual({ base, plus, antiguedad, cpg, mejora, nocturnidad,
brutoMes, ss, irpf, netoMensual, numPagas, pagasRealesConvenio }) {

const fmt = v => v.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fila = (label, valor, tipo = '') => valor > 0.005 ? `
    <div class="nomina-fila nomina-fila--${tipo || 'devengado'}">
        <span class="nomina-fila__concepto">${label}</span>
        <span class="nomina-fila__importe">${tipo === 'deduccion' ? '−' : '+'}${fmt(valor)} €</span>
    </div>` : '';

const totalDevengado = base + plus + antiguedad + cpg + mejora + nocturnidad;

document.getElementById('nomina-visual-container').innerHTML = `
    <details class="comparativa-details nomina-details">
        <summary class="comparativa-summary">
            <i class="fas fa-file-invoice-dollar"></i> Nómina visual detallada
        </summary>
        <div class="nomina-body">
            <div class="nomina-seccion">
                <div class="nomina-seccion__titulo">DEVENGOS</div>
                ${fila('Salario base', base)}
                ${fila('Plus facultativo / convenio', plus)}
                ${fila('Antigüedad (trienios/quinquenios)', antiguedad)}
                ${fila('Plus Ad Personam / CPG', cpg)}
                ${fila('Mejora voluntaria', mejora)}
                ${fila('Nocturnidad', nocturnidad)}
                <div class="nomina-fila nomina-fila--subtotal">
                    <span>Total devengado</span>
                    <span>${fmt(totalDevengado)} €</span>
                </div>
            </div>
            <div class="nomina-seccion">
                <div class="nomina-seccion__titulo">DEDUCCIONES</div>
                ${fila('Seguridad Social (CC + MEI + Desempleo + FP)', ss, 'deduccion')}
                ${fila('Retención IRPF', irpf, 'deduccion')}
                <div class="nomina-fila nomina-fila--subtotal nomina-fila--deduccion-total">
                    <span>Total deducciones</span>
                    <span>−${fmt(ss + irpf)} €</span>
                </div>
            </div>
            <div class="nomina-fila nomina-fila--liquido">
                <span>💶 LÍQUIDO A PERCIBIR</span>
                <span>${fmt(netoMensual)} €</span>
            </div>
            <p class="atrasos-nota">Nómina mensual ordinaria. ${numPagas !== 12 ? `Las ${numPagas - 12} paga${numPagas - 12 > 1 ? 's extras no' : ' extra no'} incluyen plus ni nocturnidad.` : 'Extras prorrateadas.'} Uso orientativo.</p>
        </div>
    </details>`;
}

// ══════════════════════════════════════════════════════════════════════════════
// BLOQUE: CALCULADORA BRUTO LIBRE
// ══════════════════════════════════════════════════════════════════════════════
function initBrutoLibre() {
const btn = document.getElementById('btn-calcular-bruto');
if (!btn) return;
btn.addEventListener('click', calcularBrutoLibre);
['bl-bruto-anual','bl-irpf','bl-pagas','bl-ss'].forEach(id => {
document.getElementById(id)?.addEventListener('input', calcularBrutoLibre);
});
// Calcular al abrir el bloque
document.getElementById('bloque-bruto-libre')?.addEventListener('toggle', function() {
if (this.open) { calcularBrutoLibre(); enviarEventoGTM('bloque_abierto', { bloque: 'bruto_libre' }); }
});
}

function calcularBrutoLibre() {
const brutoAnual = parseFloat(document.getElementById('bl-bruto-anual').value) || 0;
const irpfPct    = parseFloat(document.getElementById('bl-irpf').value) / 100 || 0;
const numPagas   = parseInt(document.getElementById('bl-pagas').value);
const ssPct      = parseFloat(document.getElementById('bl-ss').value) / 100 || 0;
const el         = document.getElementById('resultado-bruto-libre');

if (brutoAnual <= 0) { el.innerHTML = ''; return; }

// SS se calcula sobre base de cotización (bruto anual / 12 * 12 = bruto anual)
const ssAnual    = brutoAnual * ssPct;
const irpfAnual  = brutoAnual * irpfPct;
const netoAnual  = brutoAnual - ssAnual - irpfAnual;

const brutoMes   = numPagas === 12 ? brutoAnual / 12 : brutoAnual / (numPagas);
const ssAnualMes = numPagas === 12 ? ssAnual / 12 : (brutoMes * ssPct);
const irpfMes    = numPagas === 12 ? irpfAnual / 12 : brutoMes * irpfPct;
const netoMes    = numPagas === 12 ? netoAnual / 12 : brutoMes - ssAnualMes - irpfMes;
const netoExtra  = numPagas !== 12 ? (brutoAnual / numPagas) * (1 - irpfPct) : 0;

const fmt = v => v.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pctNeto = (netoAnual / brutoAnual * 100).toFixed(1);

el.innerHTML = `
    <div class="bruto-resultado">
        <div class="bruto-resultado__header">
            <div class="bruto-resultado__item">
                <span class="bruto-resultado__label">Neto mensual</span>
                <span class="bruto-resultado__val">${fmt(netoMes)} €</span>
            </div>
            ${numPagas !== 12 ? `<div class="bruto-resultado__item">
                <span class="bruto-resultado__label">Paga extra</span>
                <span class="bruto-resultado__val bruto-resultado__val--extra">${fmt(netoExtra)} €</span>
            </div>` : ''}
            <div class="bruto-resultado__item bruto-resultado__item--anual">
                <span class="bruto-resultado__label">Neto anual</span>
                <span class="bruto-resultado__val">${fmt(netoAnual)} €</span>
            </div>
        </div>
        <div class="bruto-resultado__desglose">
            <div class="bruto-resultado__fila">
                <span>Bruto anual</span><span>${fmt(brutoAnual)} €</span>
            </div>
            <div class="bruto-resultado__fila bruto-resultado__fila--deduccion">
                <span>− IRPF (${(irpfPct*100).toFixed(1)}%)</span><span>${fmt(irpfAnual)} €</span>
            </div>
            <div class="bruto-resultado__fila bruto-resultado__fila--deduccion">
                <span>− Seg. Social (${(ssPct*100).toFixed(2)}%)</span><span>${fmt(ssAnual)} €</span>
            </div>
            <div class="bruto-resultado__fila bruto-resultado__fila--neto">
                <span>= Neto anual <span style="font-weight:400;font-size:0.65rem">(${pctNeto}% del bruto)</span></span>
                <span>${fmt(netoAnual)} €</span>
            </div>
        </div>
        <p class="atrasos-nota">Cálculo simplificado. La SS real depende de la base de cotización máxima/mínima y posibles bonificaciones.</p>
    </div>`;
}

// ══════════════════════════════════════════════════════════════════════════════
// BLOQUE: CALCULADORA DE VACACIONES
// ══════════════════════════════════════════════════════════════════════════════
// Días según convenio farmacia: 30 días naturales (XXV Convenio)
const DIAS_VACACIONES_CONVENIO = 30;

function initVacaciones() {
const hoy = new Date();
const refInput = document.getElementById('vac-referencia');
if (refInput) refInput.value = hoy.toISOString().split('T')[0];

['vac-alta','vac-referencia'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', calcularVacaciones);
});
document.getElementById('bloque-vacaciones')?.addEventListener('toggle', function() {
    if (this.open) { calcularVacaciones(); enviarEventoGTM('bloque_abierto', { bloque: 'vacaciones' }); }
});
}

function calcularVacaciones() {
const altaStr = document.getElementById('vac-alta').value;
const refStr  = document.getElementById('vac-referencia').value;
const el      = document.getElementById('resultado-vacaciones');
if (!altaStr || !refStr) { el.innerHTML = ''; return; }

const alta = new Date(altaStr);
const ref  = new Date(refStr);
if (alta >= ref) { el.innerHTML = `<div class="atrasos-ok" style="background:#fef2f2;color:#dc2626;">⚠️ La fecha de alta debe ser anterior a la fecha de referencia.</div>`; return; }

// Años completos trabajados
let aniosCompletos = ref.getFullYear() - alta.getFullYear();
const mesRef = ref.getMonth() * 100 + ref.getDate();
const mesAlta = alta.getMonth() * 100 + alta.getDate();
if (mesRef < mesAlta) aniosCompletos--;
aniosCompletos = Math.max(0, aniosCompletos);

// Días proporcionales en el año en curso (desde el 1 de enero o desde el alta si es el primer año)
const inicioAnio = new Date(ref.getFullYear(), 0, 1);
const inicioCalculo = alta > inicioAnio ? alta : inicioAnio;
const diasAnioActual = Math.floor((ref - inicioCalculo) / (1000 * 60 * 60 * 24));
const diasYearTotal  = ref.getFullYear() % 4 === 0 ? 366 : 365;
const diasProporcionales = Math.round((diasAnioActual / diasYearTotal) * DIAS_VACACIONES_CONVENIO);

// Valor del día de vacaciones = salario bruto mensual / 30
const brutoMes = parseFloat(document.getElementById('porcentaje').value) / 100 *
    (() => {
        const convKey = document.getElementById('convenio').value;
        const prof    = document.getElementById('profesion').value;
        const anio    = document.getElementById('anio').value;
        const convData = DATA_CONVENIOS[convKey];
        const row = convData.tablas[prof][anio] || convData.tablas[prof]['2024'];
        return row[0] + row[1]; // base + plus
    })();

const valorDia = brutoMes / 30;
const valorTotal = valorDia * diasProporcionales;

const fmt  = v => v.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtF = d => d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });

el.innerHTML = `
    <div class="vacaciones-resultado">
        <div class="vacaciones-header">
            <div class="vacaciones-stat">
                <span class="vacaciones-stat__num">${DIAS_VACACIONES_CONVENIO}</span>
                <span class="vacaciones-stat__label">días/año convenio</span>
            </div>
            <div class="vacaciones-stat vacaciones-stat--highlight">
                <span class="vacaciones-stat__num">${diasProporcionales}</span>
                <span class="vacaciones-stat__label">días devengados ${ref.getFullYear()}</span>
            </div>
            <div class="vacaciones-stat">
                <span class="vacaciones-stat__num">${fmt(valorTotal)}</span>
                <span class="vacaciones-stat__label">€ si los compensan</span>
            </div>
        </div>
        <div class="vacaciones-desglose">
            <div class="vacaciones-fila"><span>📅 Antigüedad en empresa</span><span><strong>${aniosCompletos} año${aniosCompletos !== 1 ? 's' : ''}</strong> desde ${fmtF(alta)}</span></div>
            <div class="vacaciones-fila"><span>📆 Días trabajados en ${ref.getFullYear()}</span><span><strong>${diasAnioActual} días</strong> (hasta ${fmtF(ref)})</span></div>
            <div class="vacaciones-fila"><span>💶 Valor por día</span><span><strong>${fmt(valorDia)} €</strong> bruto</span></div>
            <div class="vacaciones-fila"><span>🏖️ Derecho total ${ref.getFullYear()}</span><span><strong>${DIAS_VACACIONES_CONVENIO} días</strong> si llevas el año completo</span></div>
        </div>
        <p class="atrasos-nota">Según el XXV Convenio Nacional: 30 días naturales/año. El valor del día se calcula sobre tu salario base actual. Consulta tu empresa para confirmar.</p>
    </div>`;
}

// ══════════════════════════════════════════════════════════════════════════════
// BLOQUE: CALCULADORA DE PENSIÓN ESTIMADA
// ══════════════════════════════════════════════════════════════════════════════
function initPension() {
document.getElementById('btn-calcular-pension')?.addEventListener('click', calcularPension);
document.getElementById('bloque-pension')?.addEventListener('toggle', function() {
if (this.open) enviarEventoGTM('bloque_abierto', { bloque: 'pension' });
});
}

function calcularPension() {
const edadActual       = parseFloat(document.getElementById('pen-edad-actual').value) || 35;
const aniosCotizados   = parseFloat(document.getElementById('pen-anios-cotizados').value) || 0;
const edadJubilacion   = parseFloat(document.getElementById('pen-edad-jubilacion').value) || 66.5;
const baseManual       = parseFloat(document.getElementById('pen-base-reguladora').value) || 0;
const el               = document.getElementById('resultado-pension');

if (edadActual >= edadJubilacion) {
    el.innerHTML = `<div class="atrasos-ok" style="background:#fef2f2;color:#dc2626;">⚠️ La edad actual debe ser menor que la edad de jubilación.</div>`;
    return;
}

// Años que le quedan por cotizar
const aniosRestantes    = edadJubilacion - edadActual;
const totalAniosCotizados = aniosCotizados + aniosRestantes;
const aniosEfectivos    = Math.min(totalAniosCotizados, 37); // Máximo para el 100%

// Base reguladora: media de las últimas 25 años cotizadas (aprox = bruto mensual actual)
const convKey  = document.getElementById('convenio').value;
const prof     = document.getElementById('profesion').value;
const anio     = document.getElementById('anio').value;
const jornPct  = parseFloat(document.getElementById('porcentaje').value) / 100;
const convData = DATA_CONVENIOS[convKey];
const row      = convData.tablas[prof][anio] || convData.tablas[prof]['2024'];
const brutoMesActual = baseManual > 0 ? baseManual : (row[0] + row[1]) * jornPct;

// Porcentaje que le corresponde según años cotizados (escala SS española 2026)
// 0-15 años: 0% (mínimo 15 para cobrar)
// 15 años: 50%, cada año adicional hasta 25 años suma 2.8%, del 25 al 37 suma 2%
let pctPension = 0;
if (aniosEfectivos >= 15) {
    const extra1 = Math.min(aniosEfectivos - 15, 10) * 2.8; // años 16-25
    const extra2 = Math.max(0, Math.min(aniosEfectivos - 25, 12)) * 2.0; // años 26-37
    pctPension = Math.min(50 + extra1 + extra2, 100);
}

// Penalización por jubilación anticipada (antes de 67 años)
let penalizacion = 0;
if (edadJubilacion < 67) {
    // ~1.625% por trimestre anticipado respecto a 67 con > 38.5 años cotizados
    // ~1.875% por trimestre con menos
    const trimestresAnticipados = Math.round((67 - edadJubilacion) * 4);
    const pctPorTrimestre = aniosEfectivos >= 38.5 ? 1.625 : 1.875;
    penalizacion = trimestresAnticipados * pctPorTrimestre;
}

const pctFinal    = Math.max(0, pctPension - penalizacion);
const pensionBruta = brutoMesActual * (pctFinal / 100);

// Pensión máxima 2026: ~3.267 €/mes
// Pensión mínima 2026 (con cónyuge a cargo): ~1.105 €/mes
const PENSION_MAX_2026  = 3267;
const PENSION_MIN_2026  = 737; // sin cónyuge
const pensionReal = Math.min(Math.max(pensionBruta, aniosEfectivos >= 15 ? PENSION_MIN_2026 : 0), PENSION_MAX_2026);

const fmt = v => v.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const tasaSustitucion = brutoMesActual > 0 ? (pensionReal / brutoMesActual * 100).toFixed(0) : 0;

// Barra visual de cobertura
const barraColor = tasaSustitucion >= 70 ? '#059669' : tasaSustitucion >= 50 ? '#f59e0b' : '#ef4444';
const emoji      = tasaSustitucion >= 70 ? '😊' : tasaSustitucion >= 50 ? '😐' : '😟';

el.innerHTML = `
    <div class="pension-resultado">
        <div class="pension-header">
            <div class="pension-stat pension-stat--main">
                <span class="pension-stat__emoji">${emoji}</span>
                <span class="pension-stat__num">${fmt(pensionReal)} €</span>
                <span class="pension-stat__label">pensión estimada/mes</span>
            </div>
        </div>
        <div class="pension-barra-wrap">
            <div class="pension-barra" style="width:${Math.min(tasaSustitucion, 100)}%;background:${barraColor}"></div>
        </div>
        <p class="pension-sustitucion" style="color:${barraColor}">Tasa de sustitución: <strong>${tasaSustitucion}%</strong> de tu salario actual</p>
        <div class="vacaciones-desglose">
            <div class="vacaciones-fila"><span>📅 Años cotizados al jubilarte</span><span><strong>${totalAniosCotizados.toFixed(1)} años</strong> (máx. 37 para el 100%)</span></div>
            <div class="vacaciones-fila"><span>📊 Porcentaje de la base</span><span><strong>${pctPension.toFixed(1)}%</strong>${penalizacion > 0 ? ` − ${penalizacion.toFixed(1)}% penalización anticipada` : ' sin penalización'}</span></div>
            <div class="vacaciones-fila"><span>💶 Base reguladora usada</span><span><strong>${fmt(brutoMesActual)} €/mes</strong>${baseManual > 0 ? ' (manual)' : ' (tu bruto actual)'}</span></div>
            <div class="vacaciones-fila"><span>🔒 Pensión máxima 2026</span><span><strong>${fmt(PENSION_MAX_2026)} €/mes</strong></span></div>
            ${pensionBruta < PENSION_MIN_2026 && aniosEfectivos >= 15 ? `<div class="vacaciones-fila" style="background:#fffbeb;"><span>⚠️ Complemento mínimo aplicado</span><span><strong>${fmt(PENSION_MIN_2026)} €/mes</strong></span></div>` : ''}
        </div>
        <p class="atrasos-nota">Estimación orientativa según el sistema de la SS española 2026. No tiene en cuenta revalorizaciones, cotizaciones pasadas distintas al salario actual, ni pensión de viudedad. Consulta tu vida laboral en la Seguridad Social (importass.seg-social.es).</p>
    </div>`;
enviarEventoGTM('calculadora_pension', { pension_estimada: pensionReal.toFixed(0) });
}

function descargarImagen(dataURL) {
const link = document.createElement('a');
link.download = 'mi-sueldo-farmacia-' + new Date().getTime() + '.png';
link.href = dataURL;
link.click();
}
