// ============================================================
// SISTEMA DE TRADUCCIÓN
// ============================================================
const translations = {
es: {
calculadora_inversion: “🏠 Calculadora de Inversión Inmobiliaria”,
analisis_completo: “Análisis completo para inversión en alquiler · TIR · ROI · Cashflow · Proyección a largo plazo”,
header_badge: “Herramienta gratuita · España”,
configuracion_inversion: “⚙️ Configuración de Inversión”,
personaliza_parametros: “Personaliza todos los parámetros de tu análisis”,
propiedad: “🏠 Propiedad”,
financiacion: “💰 Financiación”,
ingresos: “📈 Ingresos”,
gastos: “📊 Gastos”,
revalorizacion: “💎 Revalorización”,
precio_compra: “Precio de compra”,
tipo_vivienda: “Tipo de vivienda”,
segunda_vivienda: “Segunda vivienda (7% ITP)”,
vivienda_nueva: “Vivienda nueva (10% IVA + 1.2% AJD)”,
gastos_compra: “Gastos de compra-venta”,
gastos_reforma: “Gastos de reforma”,
tipo_financiacion: “Tipo de financiación”,
con_hipoteca: “Con hipoteca”,
sin_hipoteca: “Sin hipoteca”,
ahorro_aportado: “Ahorro aportado”,
interes_hipoteca: “Tipo de interés hipoteca”,
anos_hipoteca: “Años de hipoteca”,
gastos_hipoteca: “Gastos de hipoteca”,
alquiler_mensual: “Alquiler mensual”,
meses_vacios: “Meses vacío al año”,
incremento_alquiler: “Incremento anual del alquiler”,
anos_analisis: “Años de análisis”,
ibi_anual: “IBI anual”,
gastos_comunidad: “Gastos de comunidad”,
seguro_hogar: “Seguro de hogar”,
seguro_impago: “Seguro de impago”,
mantenimiento: “Mantenimiento y reparaciones”,
administracion: “Administración/Gestión”,
incremento_gastos: “Incremento anual de gastos”,
tasa_impositiva: “Tasa impositiva sobre alquiler neto”,
revalorizacion_anual: “Revalorización anual del inmueble”,
gastos_venta: “Gastos de venta futura”,
plusvalia: “Impuesto plusvalía municipal”,
irpf_venta: “IRPF por venta (19-23%)”,
escenarios_label: “⚡ Escenarios rápidos”,
escenario_pesimista: “😟 Pesimista”,
escenario_realista: “😐 Realista”,
escenario_optimista: “🚀 Optimista”,
btn_compartir: “🔗 Compartir análisis”,
analizar_inversion: “🧮 Analizar Inversión”,
analisis_rentabilidad: “📊 Análisis de Rentabilidad”,
resultados_completos: “Resultados completos de tu inversión a largo plazo”,
analiza_inversion: “¡Analiza tu inversión inmobiliaria!”,
completa_datos: “Completa los datos en el panel izquierdo y haz clic en "Analizar Inversión" para obtener un análisis detallado de rentabilidad con proyección a largo plazo.”,
rentabilidad_flujo: “Cashflow mensual”,
share_toast: “✅ Enlace copiado al portapapeles”,
mes: “€/mes”,
ano: “€/año”,
inversion_inicial: “Inversión Inicial”,
flujo_mensual: “Cashflow Mensual”,
tir_anualizada: “TIR Anualizada”,
roi_anual: “ROI Anual”,
beneficio_total: “Beneficio Total”,
valor_final: “Valor Neto al Vender”,
flujo_acumulado: “Flujo Acumulado”,
capital_necesario: “Capital necesario para empezar”,
cashflow_mensual_neto: “Cashflow mensual neto (Año 1)”,
rentabilidad_anual_compuesta: “Rentabilidad anual compuesta”,
basado_flujo_anual: “Basado en flujo de caja año 1”,
en_anos: “en”,
anos_text: “años”,
solo_por_alquileres: “Solo por alquileres”,
precio_venta_estimado: “Precio venta estimado”,
desglose_inversion: “💰 Desglose de Inversión Inicial”,
entrada_porcentaje: “Entrada”,
impuestos_itp: “Impuestos (ITP / IVA+AJD)”,
gastos_compra_text: “Gastos de compra”,
gastos_reforma_text: “Gastos de reforma”,
gastos_hipoteca_text: “Gastos de hipoteca”,
total_inversion: “TOTAL INVERSIÓN”,
cashflow_mensual_card: “📊 Cashflow Mensual (Año 1)”,
ingresos_alquiler: “Ingresos por Alquiler”,
cuota_hipoteca: “Cuota Hipoteca”,
comunidad_text: “Gastos de Comunidad”,
ibi_mensual: “IBI (mensual)”,
seguro_mensual: “Seguro de hogar (mensual)”,
seguro_impago_mensual: “Seguro de impago (mensual)”,
mantenimiento_mensual: “Mantenimiento (mensual)”,
administracion_text: “Administración”,
impuestos_alquiler: “Impuestos sobre alquiler (mensualizado)”,
net_cashflow: “NET CASHFLOW”,
proyeccion_venta: “🏠 Proyección de Venta (Año”,
valor_estimado: “Valor Estimado del Inmueble”,
gastos_venta_porcentaje: “Gastos de Venta”,
plusvalia_municipal: “Plusvalía Municipal”,
irpf_ganancia: “IRPF Ganancia Capital”,
valor_neto_venta: “VALOR NETO DE VENTA”,
comparacion_inversiones: “📊 Comparación con Otras Inversiones”,
tu_inversion: “Tu Inversión Inmobiliaria”,
deposito_bancario: “Depósito Bancario”,
bonos_espana: “Bonos España”,
fondos_mixtos: “Fondos Mixtos”,
reits: “REITs”,
sp500: “S&P 500”,
proyecciones_ano: “📅 Proyecciones Año por Año”,
ano_header: “Año”,
ingresos_alquiler_header: “Ingresos Alquiler”,
gastos_header: “Gastos”,
hipoteca_header: “Hipoteca”,
impuestos_header: “Impuestos”,
flujo_caja: “Flujo de Caja”,
rentabilidad_flujo_header: “Rent. Flujo (%)”,
roi_anual_header: “ROI (%)”,
valor_inmueble: “Valor Inmueble”,
prestamo_restante: “Préstamo”,
neto_si_vende: “Neto si Vende”,
beneficio_acumulado: “Benef. Acumulado”,
error_calculo: “Ha ocurrido un problema en el cálculo. Verifica los valores introducidos.”,
error_tecnico: “Error técnico:”,
rentabilidad_moderada: “Rentabilidad Moderada: Con un”,
anual_considera: “% anual considera si otras alternativas (fondos indexados, REITs) encajan mejor en tu estrategia.”,
cashflow_negativo: “Cashflow Negativo: Necesitarás aportar”,
mensuales_adicionales: “€ mensuales adicionales de tu bolsillo.”,
excelente_rentabilidad: “Excelente Rentabilidad: Esta inversión supera significativamente la media del mercado inmobiliario español (4-6% anual).”,
disclaimer_titulo: “Aviso Legal”,
disclaimer_texto: “Esta calculadora proporciona estimaciones orientativas con fines informativos. Los resultados <strong>no constituyen asesoramiento financiero, fiscal ni jurídico</strong>. Las rentabilidades pasadas no garantizan rentabilidades futuras. Consulta siempre con un profesional cualificado antes de tomar decisiones de inversión.”,
disclaimer_acepto: “He leído y acepto que esta herramienta es orientativa y no sustituye al asesoramiento profesional”,
disclaimer_continuar: “Continuar a la calculadora”,
seo_itp_titulo: “¿Qué es el ITP?”,
seo_itp_texto: “El Impuesto de Transmisiones Patrimoniales grava la compra de vivienda de segunda mano. En España oscila entre el 6% y el 10% según la comunidad autónoma. Para la calculadora usamos el valor medio del 7%.”,
seo_tir_titulo: “¿Cómo interpretar la TIR?”,
seo_tir_texto: “La Tasa Interna de Retorno (TIR) mide la rentabilidad anual compuesta considerando tanto los flujos de caja por alquiler como la ganancia por revalorización al vender. Una TIR superior al 6-7% supera la media histórica del mercado inmobiliario español.”,
seo_cashflow_titulo: “Cashflow positivo vs negativo”,
seo_cashflow_texto: “Un cashflow positivo significa que el alquiler cubre todos los gastos e hipoteca con dinero de sobra cada mes. Un cashflow negativo implica que debes aportar dinero mensualmente, apostando por la revalorización futura del inmueble.”,
seo_aviso_titulo: “Aviso importante”,
seo_aviso_texto: “Esta calculadora es una herramienta orientativa. Los resultados dependen de las hipótesis introducidas. La fiscalidad, los tipos de interés y el mercado inmobiliario pueden cambiar significativamente. Consulta siempre con un asesor financiero o fiscal antes de invertir.”
},
en: {
calculadora_inversion: “🏠 Real Estate Investment Calculator”,
analisis_completo: “Complete analysis for rental investment · IRR · ROI · Cashflow · Long-term projection”,
header_badge: “Free tool · Spain”,
configuracion_inversion: “⚙️ Investment Configuration”,
personaliza_parametros: “Customize all parameters of your analysis”,
propiedad: “🏠 Property”,
financiacion: “💰 Financing”,
ingresos: “📈 Income”,
gastos: “📊 Expenses”,
revalorizacion: “💎 Appreciation”,
precio_compra: “Purchase price”,
tipo_vivienda: “Property type”,
segunda_vivienda: “Second home (7% Transfer Tax)”,
vivienda_nueva: “New home (10% VAT + 1.2% Stamp Duty)”,
gastos_compra: “Purchase expenses”,
gastos_reforma: “Renovation expenses”,
tipo_financiacion: “Financing type”,
con_hipoteca: “With mortgage”,
sin_hipoteca: “Without mortgage”,
ahorro_aportado: “Down payment”,
interes_hipoteca: “Mortgage interest rate”,
anos_hipoteca: “Mortgage term (years)”,
gastos_hipoteca: “Mortgage expenses”,
alquiler_mensual: “Monthly rent”,
meses_vacios: “Vacant months per year”,
incremento_alquiler: “Annual rent increase”,
anos_analisis: “Analysis period (years)”,
ibi_anual: “Annual property tax (IBI)”,
gastos_comunidad: “Community fees”,
seguro_hogar: “Home insurance”,
seguro_impago: “Non-payment insurance”,
mantenimiento: “Maintenance and repairs”,
administracion: “Administration/Management”,
incremento_gastos: “Annual expense increase”,
tasa_impositiva: “Tax rate on net rental income”,
revalorizacion_anual: “Annual property appreciation”,
gastos_venta: “Future sale expenses”,
plusvalia: “Municipal capital gains tax”,
irpf_venta: “Income tax on sale (19-23%)”,
escenarios_label: “⚡ Quick scenarios”,
escenario_pesimista: “😟 Pessimistic”,
escenario_realista: “😐 Realistic”,
escenario_optimista: “🚀 Optimistic”,
btn_compartir: “🔗 Share analysis”,
analizar_inversion: “🧮 Analyze Investment”,
analisis_rentabilidad: “📊 Profitability Analysis”,
resultados_completos: “Complete results of your long-term investment”,
analiza_inversion: “Analyze your real estate investment!”,
completa_datos: “Fill in the data on the left panel and click "Analyze Investment" to get a detailed profitability analysis with long-term projection.”,
rentabilidad_flujo: “Monthly Cashflow”,
share_toast: “✅ Link copied to clipboard”,
mes: “€/month”,
ano: “€/year”,
inversion_inicial: “Initial Investment”,
flujo_mensual: “Monthly Cashflow”,
tir_anualizada: “Annualized IRR”,
roi_anual: “Annual ROI”,
beneficio_total: “Total Profit”,
valor_final: “Net Sale Value”,
flujo_acumulado: “Accumulated Cashflow”,
capital_necesario: “Capital needed to start”,
cashflow_mensual_neto: “Net monthly cashflow (Year 1)”,
rentabilidad_anual_compuesta: “Compound annual return”,
basado_flujo_anual: “Based on year 1 cash flow”,
en_anos: “in”,
anos_text: “years”,
solo_por_alquileres: “From rentals only”,
precio_venta_estimado: “Estimated sale price”,
desglose_inversion: “💰 Initial Investment Breakdown”,
entrada_porcentaje: “Down payment”,
impuestos_itp: “Taxes (Transfer Tax / VAT+Stamp Duty)”,
gastos_compra_text: “Purchase expenses”,
gastos_reforma_text: “Renovation expenses”,
gastos_hipoteca_text: “Mortgage expenses”,
total_inversion: “TOTAL INVESTMENT”,
cashflow_mensual_card: “📊 Monthly Cashflow (Year 1)”,
ingresos_alquiler: “Rental Income”,
cuota_hipoteca: “Mortgage Payment”,
comunidad_text: “Community Fees”,
ibi_mensual: “Property Tax (monthly)”,
seguro_mensual: “Home Insurance (monthly)”,
seguro_impago_mensual: “Non-payment Insurance (monthly)”,
mantenimiento_mensual: “Maintenance (monthly)”,
administracion_text: “Administration”,
impuestos_alquiler: “Rental taxes (monthly)”,
net_cashflow: “NET CASHFLOW”,
proyeccion_venta: “🏠 Sale Projection (Year”,
valor_estimado: “Estimated Property Value”,
gastos_venta_porcentaje: “Sale Expenses”,
plusvalia_municipal: “Municipal Capital Gains Tax”,
irpf_ganancia: “Income Tax on Capital Gains”,
valor_neto_venta: “NET SALE VALUE”,
comparacion_inversiones: “📊 Comparison with Other Investments”,
tu_inversion: “Your Real Estate Investment”,
deposito_bancario: “Bank Deposit”,
bonos_espana: “Spanish Bonds”,
fondos_mixtos: “Mixed Funds”,
reits: “REITs”,
sp500: “S&P 500”,
proyecciones_ano: “📅 Year-by-Year Projections”,
ano_header: “Year”,
ingresos_alquiler_header: “Rental Income”,
gastos_header: “Expenses”,
hipoteca_header: “Mortgage”,
impuestos_header: “Taxes”,
flujo_caja: “Cash Flow”,
rentabilidad_flujo_header: “Cashflow Ret. (%)”,
roi_anual_header: “ROI (%)”,
valor_inmueble: “Property Value”,
prestamo_restante: “Loan”,
neto_si_vende: “Net if Sold”,
beneficio_acumulado: “Accum. Profit”,
error_calculo: “There was a problem with the calculation. Please check the entered values.”,
error_tecnico: “Technical error:”,
rentabilidad_moderada: “Moderate Return: With a”,
anual_considera: “% annual return, consider whether alternatives like index funds or REITs might suit your strategy better.”,
cashflow_negativo: “Negative Cashflow: You will need to contribute”,
mensuales_adicionales: “€ monthly out of pocket.”,
excelente_rentabilidad: “Excellent Return: This investment significantly outperforms the Spanish real estate market average (4-6% annually).”,
disclaimer_titulo: “Legal Notice”,
disclaimer_texto: “This calculator provides indicative estimates for informational purposes only. Results <strong>do not constitute financial, tax, or legal advice</strong>. Past returns do not guarantee future results. Always consult a qualified professional before making investment decisions.”,
disclaimer_acepto: “I have read and accept that this tool is indicative and does not replace professional advice”,
disclaimer_continuar: “Continue to calculator”,
seo_itp_titulo: “What is Transfer Tax (ITP)?”,
seo_itp_texto: “The Impuesto de Transmisiones Patrimoniales taxes the purchase of second-hand property in Spain. It ranges from 6% to 10% depending on the region. The calculator uses a 7% average.”,
seo_tir_titulo: “How to interpret IRR?”,
seo_tir_texto: “The Internal Rate of Return (IRR) measures compound annual profitability considering both rental cash flows and appreciation gains when selling. An IRR above 6-7% exceeds the Spanish real estate historical average.”,
seo_cashflow_titulo: “Positive vs negative cashflow”,
seo_cashflow_texto: “A positive cashflow means rental income covers all expenses and mortgage with money to spare each month. A negative cashflow means you need to contribute monthly, betting on future property appreciation.”,
seo_aviso_titulo: “Important notice”,
seo_aviso_texto: “This calculator is a guideline tool. Results depend on the assumptions entered. Tax law, interest rates, and the property market can change significantly. Always consult a financial or tax advisor before investing.”
}
};

let currentLanguage = ‘es’;

// ============================================================
// DISCLAIMER
// ============================================================
function initDisclaimer() {
const overlay = document.getElementById(‘disclaimerOverlay’);
const check = document.getElementById(‘disclaimerCheck’);
const btn = document.getElementById(‘disclaimerBtn’);

```
if (!overlay || !check || !btn) return;

// Si ya aceptó en esta sesión, no mostrar
if (sessionStorage.getItem('disclaimerAccepted') === 'true') {
    overlay.classList.add('hidden');
    return;
}

check.addEventListener('change', () => {
    btn.disabled = !check.checked;
});

btn.addEventListener('click', () => {
    if (check.checked) {
        sessionStorage.setItem('disclaimerAccepted', 'true');
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.4s ease';
        setTimeout(() => overlay.classList.add('hidden'), 400);
    }
});
```

}

// ============================================================
// IDIOMA
// ============================================================
function setLanguage(lang) {
currentLanguage = lang;
document.documentElement.lang = lang;

```
document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
    }
});

document.querySelectorAll('option[data-i18n]').forEach(option => {
    const key = option.getAttribute('data-i18n');
    if (translations[lang][key]) {
        option.textContent = translations[lang][key];
    }
});

const hasResults = document.getElementById('resultados') &&
    !document.getElementById('resultados').innerHTML.includes('empty-state');
if (hasResults) calcular();
```

}

// ============================================================
// SLIDER DE ENTRADA - sincronizado con precio
// ============================================================
function actualizarEntradaSlider() {
const precioInput = document.getElementById(‘precio’);
const entradaEurosInput = document.getElementById(‘entradaEuros’);
const entradaSlider = document.getElementById(‘entradaSlider’);
const entradaPorcentajeDisplay = document.getElementById(‘entradaPorcentajeDisplay’);

```
if (!precioInput || !entradaEurosInput || !entradaSlider || !entradaPorcentajeDisplay) return;

const precio = parseFloat(precioInput.value) || 0;
let euros = parseFloat(entradaEurosInput.value) || 0;

if (euros > precio && precio > 0) {
    euros = precio;
    entradaEurosInput.value = precio;
}
if (euros < 0) euros = 0;

const porcentaje = precio > 0 ? (euros / precio) * 100 : 0;
entradaPorcentajeDisplay.textContent = `${porcentaje.toFixed(0)}%`;

// Actualizar slider max dinámicamente
entradaSlider.max = precio > 0 ? precio : 1000000;
entradaSlider.value = euros;

const progress = precio > 0 ? (euros / precio) * 100 : 0;
entradaSlider.style.setProperty('--progress', `${progress}%`);
```

}

// ============================================================
// ESCENARIOS RÁPIDOS
// ============================================================
const escenarios = {
pesimista: {
incrementoAlquiler: 0,
mesesVacio: 2,
incrementoGastos: 2,
revalorizacion: 0,
taxAlquiler: 26
},
realista: {
incrementoAlquiler: 2,
mesesVacio: 1,
incrementoGastos: 1,
revalorizacion: 2.5,
taxAlquiler: 21
},
optimista: {
incrementoAlquiler: 3.5,
mesesVacio: 0.5,
incrementoGastos: 0.5,
revalorizacion: 4,
taxAlquiler: 19
}
};

function aplicarEscenario(tipo) {
const esc = escenarios[tipo];
if (!esc) return;

```
for (const [key, val] of Object.entries(esc)) {
    const el = document.getElementById(key);
    if (el) el.value = val;
}

// Marcar botón activo
document.querySelectorAll('.btn-scenario').forEach(btn => btn.classList.remove('active'));
const activoBtn = document.querySelector(`[onclick="aplicarEscenario('${tipo}')"]`);
if (activoBtn) activoBtn.classList.add('active');

calcular();
```

}

// ============================================================
// COMPARTIR ANÁLISIS — genera URL con parámetros
// ============================================================
function compartirAnalisis() {
const ids = [
‘precio’,‘tipoVivienda’,‘gastosCompra’,‘reforma’,
‘financiacionTipo’,‘entradaEuros’,‘interes’,‘anos’,‘gastosHipoteca’,
‘alquiler’,‘mesesVacio’,‘incrementoAlquiler’,‘anosAnalisis’,
‘ibi’,‘comunidad’,‘seguro’,‘seguroImpago’,‘mantenimiento’,
‘administracion’,‘incrementoGastos’,‘taxAlquiler’,
‘revalorizacion’,‘gastosVenta’,‘plusvalia’,‘irpfVenta’
];

```
const params = new URLSearchParams();
ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) params.set(id, el.value);
});
params.set('lang', currentLanguage);

const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(() => mostrarShareToast());
} else {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    mostrarShareToast();
}
```

}

function mostrarShareToast() {
const toast = document.getElementById(‘shareToast’);
if (!toast) return;
toast.style.display = ‘block’;
setTimeout(() => { toast.style.display = ‘none’; }, 3000);
}

// ============================================================
// CARGAR PARÁMETROS DESDE URL
// ============================================================
function cargarDesdeURL() {
const params = new URLSearchParams(window.location.search);
if (params.size === 0) return;

```
const ids = [
    'precio','tipoVivienda','gastosCompra','reforma',
    'financiacionTipo','entradaEuros','interes','anos','gastosHipoteca',
    'alquiler','mesesVacio','incrementoAlquiler','anosAnalisis',
    'ibi','comunidad','seguro','seguroImpago','mantenimiento',
    'administracion','incrementoGastos','taxAlquiler',
    'revalorizacion','gastosVenta','plusvalia','irpfVenta'
];

ids.forEach(id => {
    const val = params.get(id);
    if (val !== null) {
        const el = document.getElementById(id);
        if (el) el.value = val;
    }
});

const lang = params.get('lang');
if (lang && translations[lang]) {
    const selector = document.getElementById('langSelector');
    if (selector) selector.value = lang;
    setLanguage(lang);
}

actualizarEntradaSlider();
toggleFinanciacionInputs();
calcular();
```

}

// ============================================================
// CÁLCULO PRINCIPAL
// ============================================================
function calcular() {
try {
const precio = parseFloat(document.getElementById(‘precio’).value) || 0;
const tipoVivienda = document.getElementById(‘tipoVivienda’).value;
const gastosCompra = parseFloat(document.getElementById(‘gastosCompra’).value) || 0;
const reforma = parseFloat(document.getElementById(‘reforma’).value) || 0;
const financiacionTipo = document.getElementById(‘financiacionTipo’).value;
const entradaEuros = parseFloat(document.getElementById(‘entradaEuros’).value) || 0;
const interes = parseFloat(document.getElementById(‘interes’).value) || 0;
const anos = parseFloat(document.getElementById(‘anos’).value) || 0;
const gastosHipoteca = parseFloat(document.getElementById(‘gastosHipoteca’).value) || 0;
const alquiler = parseFloat(document.getElementById(‘alquiler’).value) || 0;
const mesesVacio = parseFloat(document.getElementById(‘mesesVacio’).value) || 0;
const incrementoAlquiler = parseFloat(document.getElementById(‘incrementoAlquiler’).value) || 0;
const anosAnalisis = Math.max(1, parseFloat(document.getElementById(‘anosAnalisis’).value) || 1);
const ibi = parseFloat(document.getElementById(‘ibi’).value) || 0;
const comunidad = parseFloat(document.getElementById(‘comunidad’).value) || 0;
const seguro = parseFloat(document.getElementById(‘seguro’).value) || 0;
const seguroImpago = parseFloat(document.getElementById(‘seguroImpago’).value) || 0;
const mantenimiento = parseFloat(document.getElementById(‘mantenimiento’).value) || 0;
const administracion = parseFloat(document.getElementById(‘administracion’).value) || 0;
const incrementoGastos = parseFloat(document.getElementById(‘incrementoGastos’).value) || 0;
const taxAlquiler = parseFloat(document.getElementById(‘taxAlquiler’).value) || 0;
const revalorizacion = parseFloat(document.getElementById(‘revalorizacion’).value) || 0;
const gastosVentaPorc = parseFloat(document.getElementById(‘gastosVenta’).value) || 0;
const plusvalia = parseFloat(document.getElementById(‘plusvalia’).value) || 0;
const irpfVenta = parseFloat(document.getElementById(‘irpfVenta’).value) || 0;

```
    const impuestos = calcularImpuestos(precio, tipoVivienda);
    const entradaPorcentaje = precio > 0 ? (entradaEuros / precio) * 100 : 0;
    const prestamo = financiacionTipo === 'con_hipoteca' ? precio - entradaEuros : 0;
    const inversionInicial = entradaEuros + impuestos + gastosCompra + reforma +
        (financiacionTipo === 'con_hipoteca' ? gastosHipoteca : 0);

    const cuotaHipoteca = calcularCuotaHipoteca(prestamo, interes, anos);
    const ingresosAnuales = alquiler * 12 * (1 - mesesVacio / 12);
    const gastosAnuales = ibi + comunidad * 12 + seguro + seguroImpago + mantenimiento + administracion * 12;

    const interesesAnuales = prestamo * (interes / 100);
    const alquilerNeto = ingresosAnuales - gastosAnuales - interesesAnuales;
    const taxAnual = Math.max(0, alquilerNeto) * (taxAlquiler / 100);
    const taxMensual = taxAnual / 12;

    const ingresosMensuales = ingresosAnuales / 12;
    const gastosMensuales = gastosAnuales / 12;
    const flujoMensual = ingresosMensuales - cuotaHipoteca - gastosMensuales - taxMensual;
    const flujoAnual = flujoMensual * 12;
    const roiAnual = inversionInicial > 0 ? (flujoAnual / inversionInicial) * 100 : 0;

    // Proyecciones año por año
    const proyecciones = [];
    let flujoAcumulado = 0;
    let beneficioTotal = 0;
    let saldoPendiente = prestamo;

    for (let year = 1; year <= anosAnalisis; year++) {
        const ingresosAlquilerYear = ingresosAnuales * Math.pow(1 + incrementoAlquiler / 100, year - 1);
        const gastosFijosYear = gastosAnuales * Math.pow(1 + incrementoGastos / 100, year - 1);
        const cuotaHipotecaYear = cuotaHipoteca * 12;
        const interesesYear = calcularInteresesAnual(saldoPendiente, interes);
        const alquilerNetoYear = ingresosAlquilerYear - gastosFijosYear - interesesYear;
        const taxYear = Math.max(0, alquilerNetoYear) * (taxAlquiler / 100);
        const flujoAnualYear = ingresosAlquilerYear - gastosFijosYear - cuotaHipotecaYear - taxYear;
        flujoAcumulado += flujoAnualYear;

        const rentabilidadFlujo = inversionInicial > 0 ? (flujoAnualYear / inversionInicial) * 100 : 0;
        const valorVivienda = precio * Math.pow(1 + revalorizacion / 100, year);

        saldoPendiente = calcularSaldoPendiente(prestamo, interes, anos, year);

        const gananciaCapital = Math.max(0, valorVivienda - precio);
        const impuestosGanancias = gananciaCapital * (irpfVenta / 100);
        const gastosVentaEuros = valorVivienda * (gastosVentaPorc / 100);
        const precioVentaNeto = valorVivienda - gastosVentaEuros - plusvalia - impuestosGanancias - saldoPendiente;
        const beneficioAcumulado = precioVentaNeto + flujoAcumulado - inversionInicial;

        if (year === anosAnalisis) beneficioTotal = beneficioAcumulado;

        proyecciones.push({
            year,
            ingresosAlquiler: ingresosAlquilerYear,
            gastosFijos: gastosFijosYear,
            cuotaHipoteca: cuotaHipotecaYear,
            tax: taxYear,
            flujoAnual: flujoAnualYear,
            rentabilidadFlujo,
            roiAnual: rentabilidadFlujo,
            valorVivienda,
            saldoPendiente,
            precioVentaNeto,
            beneficioAcumulado
        });
    }

    // TIR
    const cashflowsTIR = [-inversionInicial, ...proyecciones.map((p, i) =>
        i < proyecciones.length - 1 ? p.flujoAnual : p.flujoAnual + p.precioVentaNeto
    )];
    const tir = calcularTIR(cashflowsTIR) * 100;

    const datos = {
        montoEntrada: entradaEuros,
        entrada: entradaPorcentaje.toFixed(0),
        impuestos,
        gastosCompra,
        reforma,
        gastosHipoteca,
        inversionInicial,
        ingresosMensuales,
        cuotaHipoteca,
        comunidad,
        ibi,
        seguro,
        seguroImpago,
        mantenimiento,
        administracion,
        taxMensual,
        flujoMensual,
        roiAnual,
        rentabilidadAnual: tir,
        beneficioTotal,
        precioVentaNeto: proyecciones[anosAnalisis - 1].precioVentaNeto,
        flujoAcumulado,
        anosAnalisis,
        precioVentaBruto: proyecciones[anosAnalisis - 1].valorVivienda,
        gastosVentaEuros: proyecciones[anosAnalisis - 1].valorVivienda * (gastosVentaPorc / 100),
        plusvalia,
        impuestosGanancias: Math.max(0, proyecciones[anosAnalisis - 1].valorVivienda - precio) * (irpfVenta / 100),
        proyecciones,
        financiacionTipo
    };

    document.getElementById('resultados').innerHTML = mostrarResultados(datos);
    actualizarResumenFlotante(datos);

} catch (err) {
    console.error(err);
    document.getElementById('resultados').innerHTML =
        `<div class="alert alert-danger">⚠️ ${translations[currentLanguage].error_calculo}<br><small>${translations[currentLanguage].error_tecnico} ${err.message}</small></div>`;
}
```

}

// ============================================================
// FUNCIONES AUXILIARES
// ============================================================
function calcularInteresesAnual(saldo, interes) {
return Math.max(0, saldo) * (interes / 100);
}

function calcularTIR(cashflows) {
let low = -0.999;
let high = 10.0;
let mid;
const MAX_ITER = 200;
for (let iter = 0; iter < MAX_ITER; iter++) {
mid = (low + high) / 2;
let npv = 0;
for (let i = 0; i < cashflows.length; i++) {
npv += cashflows[i] / Math.pow(1 + mid, i);
}
if (Math.abs(npv) < 0.01) break;
if (npv > 0) low = mid;
else high = mid;
}
return mid || 0;
}

function calcularCuotaHipoteca(capital, interes, anos) {
if (capital <= 0 || anos <= 0) return 0;
if (interes === 0) return capital / (anos * 12);
const i = interes / 100 / 12;
const n = anos * 12;
return (capital * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
}

function calcularSaldoPendiente(capital, interes, anos, year) {
if (capital <= 0 || anos <= 0 || year >= anos) return 0;
const i = interes / 100 / 12;
const n = anos * 12;
const pagosRealizados = year * 12;
const cuota = calcularCuotaHipoteca(capital, interes, anos);
if (i === 0) return capital - cuota * pagosRealizados;
return capital * Math.pow(1 + i, pagosRealizados) - cuota * (Math.pow(1 + i, pagosRealizados) - 1) / i;
}

function calcularImpuestos(precio, tipo) {
if (tipo === ‘nueva’) {
return precio * 0.10 + precio * 0.012;
}
return precio * 0.07;
}

function fmt(num) {
return num.toLocaleString(currentLanguage === ‘es’ ? ‘es-ES’ : ‘en-US’, { maximumFractionDigits: 0 });
}

// ============================================================
// MOSTRAR RESULTADOS
// ============================================================
function mostrarResultados(datos) {
const t = translations[currentLanguage];
const loc = currentLanguage === ‘es’ ? ‘es-ES’ : ‘en-US’;

```
let rentabilidadClass = 'metric-warning';
if (datos.rentabilidadAnual > 6) rentabilidadClass = 'metric-positive';
else if (datos.rentabilidadAnual < 3) rentabilidadClass = 'metric-negative';

let roiClass = 'metric-warning';
if (datos.roiAnual > 6) roiClass = 'metric-positive';
else if (datos.roiAnual < 3) roiClass = 'metric-negative';

const flujoClass = datos.flujoMensual >= 0 ? 'metric-positive' : 'metric-negative';
const beneficioClass = datos.beneficioTotal >= 0 ? 'metric-positive' : 'metric-negative';

// Tabla de proyecciones
let tablaProyecciones = `
    <div class="projection-table-container">
        <table class="projection-table">
            <thead>
                <tr>
                    <th>${t.ano_header}</th>
                    <th>${t.ingresos_alquiler_header}</th>
                    <th>${t.gastos_header}</th>
                    <th>${t.hipoteca_header}</th>
                    <th>${t.impuestos_header}</th>
                    <th>${t.flujo_caja}</th>
                    <th>${t.rentabilidad_flujo_header}</th>
                    <th>${t.valor_inmueble}</th>
                    <th>${t.prestamo_restante}</th>
                    <th>${t.neto_si_vende}</th>
                    <th>${t.beneficio_acumulado}</th>
                </tr>
            </thead>
            <tbody>
`;

datos.proyecciones.forEach(proy => {
    tablaProyecciones += `
        <tr>
            <td><strong>${proy.year}</strong></td>
            <td class="metric-positive">+${fmt(proy.ingresosAlquiler)} €</td>
            <td class="metric-negative">-${fmt(proy.gastosFijos)} €</td>
            <td class="metric-negative">-${fmt(proy.cuotaHipoteca)} €</td>
            <td class="metric-negative">-${fmt(proy.tax)} €</td>
            <td class="${proy.flujoAnual >= 0 ? 'metric-positive' : 'metric-negative'}">${fmt(proy.flujoAnual)} €</td>
            <td class="${proy.rentabilidadFlujo >= 0 ? 'metric-positive' : 'metric-negative'}">${proy.rentabilidadFlujo.toFixed(2)}%</td>
            <td>${fmt(proy.valorVivienda)} €</td>
            <td>${fmt(proy.saldoPendiente)} €</td>
            <td class="metric-info">${fmt(proy.precioVentaNeto)} €</td>
            <td class="${proy.beneficioAcumulado >= 0 ? 'metric-positive' : 'metric-negative'}">${fmt(proy.beneficioAcumulado)} €</td>
        </tr>
    `;
});
tablaProyecciones += `</tbody></table></div>`;

// Comparación de inversiones con barras
const maxComparacion = 10;
const comparaciones = [
    { label: t.tu_inversion, value: datos.rentabilidadAnual, highlight: true, cls: rentabilidadClass },
    { label: t.deposito_bancario, value: 2.0, cls: 'metric-warning' },
    { label: t.bonos_espana, value: 3.0, cls: 'metric-warning' },
    { label: t.fondos_mixtos, value: 4.5, cls: 'metric-warning' },
    { label: t.reits, value: 6.0, cls: 'metric-positive' },
    { label: t.sp500, value: 7.0, cls: 'metric-positive' },
];

const comparacionHTML = comparaciones.map(c => `
    <div class="comparison-row ${c.highlight ? 'highlight' : ''}">
        <span style="min-width: 160px; font-weight: ${c.highlight ? '700' : '500'}">${c.label}</span>
        <div class="comparison-bar-wrap">
            <div class="comparison-bar">
                <div class="comparison-bar-fill" style="width:${Math.min(100, Math.max(0, c.value / maxComparacion * 100))}%; background: ${c.highlight ? 'var(--gradient-main)' : '#cbd5e1'}"></div>
            </div>
            <span class="${c.cls}" style="min-width:52px; text-align:right; font-weight:700">${c.value.toFixed(2)}%</span>
        </div>
    </div>
`).join('');

return `
    <!-- ALERTAS PRIMERO (visibles inmediatamente) -->
    ${datos.flujoMensual < 0 ? `
    <div class="alert alert-danger">
        🔴 <strong>${t.cashflow_negativo}</strong> ${fmt(Math.abs(datos.flujoMensual))}${t.mensuales_adicionales}
    </div>` : ''}

    ${datos.rentabilidadAnual < 4 && datos.rentabilidadAnual > -50 ? `
    <div class="alert alert-warning">
        ⚠️ <strong>${t.rentabilidad_moderada}</strong> ${datos.rentabilidadAnual.toFixed(2)}% ${t.anual_considera}
    </div>` : ''}

    ${datos.rentabilidadAnual > 7 ? `
    <div class="alert alert-info">
        🌟 <strong>${t.excelente_rentabilidad}</strong>
    </div>` : ''}

    <!-- KPIs PRINCIPALES -->
    <div class="results-grid">
        <div class="metric-card">
            <div class="metric-header">
                <div class="metric-title">${t.inversion_inicial}</div>
                <div class="metric-icon">💰</div>
            </div>
            <div class="metric-value">${fmt(datos.inversionInicial)} €</div>
            <div class="metric-subtitle">${t.capital_necesario}</div>
        </div>

        <div class="metric-card">
            <div class="metric-header">
                <div class="metric-title">${t.flujo_mensual}</div>
                <div class="metric-icon">${datos.flujoMensual >= 0 ? '📈' : '📉'}</div>
            </div>
            <div class="metric-value ${flujoClass}">${fmt(datos.flujoMensual)} €</div>
            <div class="metric-subtitle">${t.cashflow_mensual_neto}</div>
        </div>

        <div class="metric-card">
            <div class="metric-header">
                <div class="metric-title">${t.roi_anual}</div>
                <div class="metric-icon">📊</div>
            </div>
            <div class="metric-value ${roiClass}">${datos.roiAnual.toFixed(2)}%</div>
            <div class="metric-subtitle">${t.basado_flujo_anual}</div>
        </div>

        <div class="metric-card">
            <div class="metric-header">
                <div class="metric-title">${t.tir_anualizada}</div>
                <div class="metric-icon">⚡</div>
            </div>
            <div class="metric-value ${rentabilidadClass}">${datos.rentabilidadAnual.toFixed(2)}%</div>
            <div class="metric-subtitle">${t.rentabilidad_anual_compuesta}</div>
        </div>

        <div class="metric-card">
            <div class="metric-header">
                <div class="metric-title">${t.beneficio_total}</div>
                <div class="metric-icon">${datos.beneficioTotal >= 0 ? '🎯' : '⚠️'}</div>
            </div>
            <div class="metric-value ${beneficioClass}">${fmt(datos.beneficioTotal)} €</div>
            <div class="metric-subtitle">${t.en_anos} ${datos.anosAnalisis} ${t.anos_text}</div>
        </div>

        <div class="metric-card">
            <div class="metric-header">
                <div class="metric-title">${t.flujo_acumulado}</div>
                <div class="metric-icon">💧</div>
            </div>
            <div class="metric-value ${datos.flujoAcumulado >= 0 ? 'metric-positive' : 'metric-negative'}">${fmt(datos.flujoAcumulado)} €</div>
            <div class="metric-subtitle">${t.solo_por_alquileres}</div>
        </div>
    </div>

    <!-- DESGLOSE + CASHFLOW LADO A LADO -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1.25rem; margin-bottom:1.25rem;">
        <div class="detail-card">
            <div class="detail-card-title">${t.desglose_inversion}</div>
            <div class="detail-row">
                <span>${t.entrada_porcentaje} (${datos.entrada}%)</span>
                <span>${fmt(datos.montoEntrada)} €</span>
            </div>
            <div class="detail-row">
                <span>${t.impuestos_itp}</span>
                <span>${fmt(datos.impuestos)} €</span>
            </div>
            <div class="detail-row">
                <span>${t.gastos_compra_text}</span>
                <span>${fmt(datos.gastosCompra)} €</span>
            </div>
            <div class="detail-row">
                <span>${t.gastos_reforma_text}</span>
                <span>${fmt(datos.reforma)} €</span>
            </div>
            ${datos.financiacionTipo === 'con_hipoteca' ? `
            <div class="detail-row">
                <span>${t.gastos_hipoteca_text}</span>
                <span>${fmt(datos.gastosHipoteca)} €</span>
            </div>` : ''}
            <div class="detail-row total">
                <span>${t.total_inversion}</span>
                <span>${fmt(datos.inversionInicial)} €</span>
            </div>
        </div>

        <div class="detail-card">
            <div class="detail-card-title">${t.cashflow_mensual_card}</div>
            <div class="detail-row">
                <span>${t.ingresos_alquiler}</span>
                <span class="metric-positive">+${fmt(datos.ingresosMensuales)} €</span>
            </div>
            ${datos.financiacionTipo === 'con_hipoteca' ? `
            <div class="detail-row">
                <span>${t.cuota_hipoteca}</span>
                <span class="metric-negative">-${fmt(datos.cuotaHipoteca)} €</span>
            </div>` : ''}
            <div class="detail-row">
                <span>${t.comunidad_text}</span>
                <span class="metric-negative">-${fmt(datos.comunidad)} €</span>
            </div>
            <div class="detail-row">
                <span>${t.ibi_mensual}</span>
                <span class="metric-negative">-${fmt(datos.ibi / 12)} €</span>
            </div>
            <div class="detail-row">
                <span>${t.seguro_mensual}</span>
                <span class="metric-negative">-${fmt(datos.seguro / 12)} €</span>
            </div>
            <div class="detail-row">
                <span>${t.seguro_impago_mensual}</span>
                <span class="metric-negative">-${fmt(datos.seguroImpago / 12)} €</span>
            </div>
            <div class="detail-row">
                <span>${t.mantenimiento_mensual}</span>
                <span class="metric-negative">-${fmt(datos.mantenimiento / 12)} €</span>
            </div>
            <div class="detail-row">
                <span>${t.administracion_text}</span>
                <span class="metric-negative">-${fmt(datos.administracion)} €</span>
            </div>
            <div class="detail-row">
                <span>${t.impuestos_alquiler}</span>
                <span class="metric-negative">-${fmt(datos.taxMensual)} €</span>
            </div>
            <div class="detail-row total">
                <span>${t.net_cashflow}</span>
                <span class="${flujoClass}">${fmt(datos.flujoMensual)} €</span>
            </div>
        </div>

        <div class="detail-card">
            <div class="detail-card-title">${t.proyeccion_venta} ${datos.anosAnalisis})</div>
            <div class="detail-row">
                <span>${t.valor_estimado}</span>
                <span>${fmt(datos.precioVentaBruto)} €</span>
            </div>
            <div class="detail-row">
                <span>${t.gastos_venta_porcentaje}</span>
                <span class="metric-negative">-${fmt(datos.gastosVentaEuros)} €</span>
            </div>
            <div class="detail-row">
                <span>${t.plusvalia_municipal}</span>
                <span class="metric-negative">-${fmt(datos.plusvalia)} €</span>
            </div>
            <div class="detail-row">
                <span>${t.irpf_ganancia}</span>
                <span class="metric-negative">-${fmt(datos.impuestosGanancias)} €</span>
            </div>
            <div class="detail-row total">
                <span>${t.valor_neto_venta}</span>
                <span class="metric-info">${fmt(datos.precioVentaNeto)} €</span>
            </div>
        </div>
    </div>

    <!-- COMPARACIÓN CON OTRAS INVERSIONES -->
    <div class="detail-card" style="margin-bottom:1.25rem;">
        <div class="detail-card-title">${t.comparacion_inversiones}</div>
        <div class="comparison-table">${comparacionHTML}</div>
        <p style="font-size:0.75rem; color:var(--text-light); margin-top:0.75rem;">* ${currentLanguage === 'es' ? 'Rentabilidades de referencia a feb 2026. No constituyen garantía de rentabilidad futura.' : 'Reference returns as of Feb 2026. Do not constitute a guarantee of future performance.'}</p>
    </div>

    <!-- TABLA DE PROYECCIONES AÑO A AÑO -->
    <div class="detail-card">
        <div class="detail-card-title">${t.proyecciones_ano}</div>
        ${tablaProyecciones}
    </div>
`;
```

}

// ============================================================
// RESUMEN FLOTANTE (visible en todos los tamaños)
// ============================================================
function actualizarResumenFlotante(datos) {
const floatingSummary = document.getElementById(‘floatingSummary’);
const floatingValue = document.getElementById(‘floatingValue’);
const floatingTir = document.getElementById(‘floatingTir’);

```
if (!floatingSummary || !floatingValue) return;

floatingValue.innerHTML = `${fmt(datos.flujoMensual)} €<small style="font-size:0.75rem; opacity:0.7;">/mes</small>`;
floatingValue.className = `floating-value ${datos.flujoMensual >= 0 ? 'metric-positive' : 'metric-negative'}`;

if (floatingTir) {
    floatingTir.textContent = `TIR: ${datos.rentabilidadAnual.toFixed(2)}%`;
}

floatingSummary.classList.add('visible');
```

}

// ============================================================
// PARTÍCULAS
// ============================================================
function createParticles() {
const container = document.getElementById(‘particles’);
if (!container) return;
for (let i = 0; i < 25; i++) {
const p = document.createElement(‘div’);
p.className = ‘particle’;
p.style.left = Math.random() * 100 + ‘%’;
p.style.animationDuration = (Math.random() * 6 + 6) + ‘s’;
p.style.animationDelay = Math.random() * 8 + ‘s’;
container.appendChild(p);
}
}

// ============================================================
// TOGGLE FINANCIACIÓN
// ============================================================
function toggleFinanciacionInputs() {
const tipo = document.getElementById(‘financiacionTipo’).value;
const hipotecaGroups = [‘entradaGroup’, ‘interesGroup’, ‘anosGroup’, ‘gastosHipGroup’];
hipotecaGroups.forEach(id => {
const el = document.getElementById(id);
if (el) el.style.display = tipo === ‘sin_hipoteca’ ? ‘none’ : ‘block’;
});

```
const inputs = ['entradaEuros', 'entradaSlider', 'interes', 'anos', 'gastosHipoteca'];
inputs.forEach(id => {
    const input = document.getElementById(id);
    if (input) input.disabled = tipo === 'sin_hipoteca';
});

calcular();
```

}

// ============================================================
// CAMBIO DE TAB
// ============================================================
function switchTab(tabName) {
document.querySelectorAll(’.tab-content’).forEach(c => c.classList.remove(‘active’));
document.querySelectorAll(’.nav-tab’).forEach(t => t.classList.remove(‘active’));

```
const tab = document.getElementById(tabName + '-tab');
if (tab) tab.classList.add('active');

const btn = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
if (btn) btn.classList.add('active');
```

}

// ============================================================
// INIT
// ============================================================
document.addEventListener(‘DOMContentLoaded’, () => {
// Disclaimer
initDisclaimer();

```
// Partículas
createParticles();

// Idioma inicial
setLanguage('es');

// Cambio de idioma
const langSelector = document.getElementById('langSelector');
if (langSelector) {
    langSelector.addEventListener('change', e => setLanguage(e.target.value));
}

// Slider de entrada
const precioInput = document.getElementById('precio');
const entradaEurosInput = document.getElementById('entradaEuros');
const entradaSlider = document.getElementById('entradaSlider');

if (precioInput) {
    precioInput.addEventListener('input', () => {
        actualizarEntradaSlider();
        calcular();
    });
}
if (entradaEurosInput) {
    entradaEurosInput.addEventListener('input', () => {
        actualizarEntradaSlider();
        calcular();
    });
}
if (entradaSlider) {
    entradaSlider.addEventListener('input', () => {
        entradaEurosInput.value = entradaSlider.value;
        actualizarEntradaSlider();
        calcular();
    });
}

// Tabs
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.getAttribute('data-tab')));
});

// Financiación
const financiacionTipo = document.getElementById('financiacionTipo');
if (financiacionTipo) {
    financiacionTipo.addEventListener('change', toggleFinanciacionInputs);
}

// Botón calcular
const calcularBtn = document.getElementById('calcularBtn');
if (calcularBtn) {
    calcularBtn.addEventListener('click', calcular);
}

// Botón compartir
const shareBtn = document.getElementById('shareBtn');
if (shareBtn) {
    shareBtn.addEventListener('click', compartirAnalisis);
}

// Autocálculo en tiempo real para todos los inputs EXCEPTO slider y precio
// (esos ya tienen listeners propios)
document.querySelectorAll('.form-input:not(#precio):not(#entradaEuros), .form-select:not(#financiacionTipo)').forEach(input => {
    input.addEventListener('input', () => calcular());
    input.addEventListener('change', () => calcular());
});

// Inicializar slider
actualizarEntradaSlider();

// Cargar desde URL si hay parámetros (función de compartir)
cargarDesdeURL();

// Calcular automáticamente al cargar
calcular();
```

});