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
btn_exportar_pdf: “📄 Exportar PDF”, // <– NUEVA CLAVE
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
tir_anualizada: “Rentabilidad anual compuesta estimada”,
roi_anual: “ROI Anual”,
beneficio_total: “Beneficio Total”,
valor_final: “Valor Neto al Vender”,
flujo_acumulado: “Flujo Acumulado”,
capital_necesario: “Capital necesario para empezar”,
cashflow_mensual_neto: “Cashflow mensual NETO (tras impuestos, año 1)”,
rentabilidad_anual_compuesta: “Estimación basada en flujos proyectados”,
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
comunidad_autonoma: “Comunidad Autónoma”,
ccaa_selecciona: “— Selecciona para ajustar el ITP —”,
itp_hint_default: “El ITP se calcula automáticamente según el tipo de vivienda (7% por defecto)”,
itp_hint_ccaa: “ITP ajustado al tipo de tu comunidad autónoma”,
itp_hint_nueva: “Vivienda nueva: 10% IVA + 1.2% AJD (no aplica ITP)”,
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
seo_aviso_texto: “Esta calculadora es una herramienta orientativa. Los resultados dependen de las hipótesis introducidas. La fiscalidad, los tipos de interés y el mercado inmobiliario pueden cambiar significativamente. Consulta siempre con un asesor financiero o fiscal antes de invertir.”,
footer_texto: “Herramienta gratuita, hecha con ❤️ para inversores como tú”,
footer_cafe: “¿Te ha sido útil? Invítame a un café”,
footer_disclaimer: “Esta herramienta es orientativa y no constituye asesoramiento financiero.”,
chart_titulo: “📊 Distribución de costes mensuales”,
chart_hipoteca: “Hipoteca”,
chart_gastos_fijos: “Gastos fijos”,
chart_impuestos: “Impuestos”,
chart_cashflow: “Cashflow neto”,
reset_confirm: “¿Restablecer todos los valores por defecto?”
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
btn_exportar_pdf: “📄 Export PDF”, // <– NUEVA CLAVE
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
tir_anualizada: “Estimated compound annual return”,
roi_anual: “Annual ROI”,
beneficio_total: “Total Profit”,
valor_final: “Net Sale Value”,
flujo_acumulado: “Accumulated Cashflow”,
capital_necesario: “Capital needed to start”,
cashflow_mensual_neto: “NET monthly cashflow (after taxes, year 1)”,
rentabilidad_anual_compuesta: “Estimate based on projected cashflows”,
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
comunidad_autonoma: “Autonomous Community”,
ccaa_selecciona: “— Select to adjust Transfer Tax —”,
itp_hint_default: “Transfer Tax calculated automatically based on property type (7% default)”,
itp_hint_ccaa: “Transfer Tax adjusted for your region”,
itp_hint_nueva: “New property: 10% VAT + 1.2% Stamp Duty (no Transfer Tax)”,
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
seo_aviso_texto: “This calculator is a guideline tool. Results depend on the assumptions entered. Tax law, interest rates, and the property market can change significantly. Always consult a financial or tax advisor before investing.”,
footer_texto: “Free tool, made with ❤️ for investors like you”,
footer_cafe: “Was it useful? Buy me a coffee”,
footer_disclaimer: “This tool is indicative and does not constitute financial advice.”,
chart_titulo: “📊 Monthly cost breakdown”,
chart_hipoteca: “Mortgage”,
chart_gastos_fijos: “Fixed expenses”,
chart_impuestos: “Taxes”,
chart_cashflow: “Net cashflow”,
reset_confirm: “Reset all values to defaults?”
}
};

let currentLanguage = ‘es’;

// ============================================================
// BASE DE DATOS: PRECIO €/m² POR PROVINCIA (CP prefix 2 dígitos)
// Fuente: Tinsa/INE estimaciones 2025
// ============================================================
const PROVINCIA_DATA = {
‘01’: { nombre: ‘Álava / Vitoria’,        precioM2: 2200 },
‘02’: { nombre: ‘Albacete’,               precioM2: 900  },
‘03’: { nombre: ‘Alicante’,               precioM2: 1650 },
‘04’: { nombre: ‘Almería’,                precioM2: 1050 },
‘05’: { nombre: ‘Ávila’,                  precioM2: 800  },
‘06’: { nombre: ‘Badajoz’,                precioM2: 750  },
‘07’: { nombre: ‘Baleares’,               precioM2: 3500 },
‘08’: { nombre: ‘Barcelona’,              precioM2: 3800 },
‘09’: { nombre: ‘Burgos’,                 precioM2: 1100 },
‘10’: { nombre: ‘Cáceres’,                precioM2: 750  },
‘11’: { nombre: ‘Cádiz’,                  precioM2: 1400 },
‘12’: { nombre: ‘Castellón’,              precioM2: 1050 },
‘13’: { nombre: ‘Ciudad Real’,            precioM2: 700  },
‘14’: { nombre: ‘Córdoba’,                precioM2: 1000 },
‘15’: { nombre: ‘A Coruña’,               precioM2: 1450 },
‘16’: { nombre: ‘Cuenca’,                 precioM2: 650  },
‘17’: { nombre: ‘Girona’,                 precioM2: 2100 },
‘18’: { nombre: ‘Granada’,                precioM2: 1350 },
‘19’: { nombre: ‘Guadalajara’,            precioM2: 1200 },
‘20’: { nombre: ‘Gipuzkoa / San Sebastián’, precioM2: 3800 },
‘21’: { nombre: ‘Huelva’,                 precioM2: 900  },
‘22’: { nombre: ‘Huesca’,                 precioM2: 950  },
‘23’: { nombre: ‘Jaén’,                   precioM2: 700  },
‘24’: { nombre: ‘León’,                   precioM2: 950  },
‘25’: { nombre: ‘Lleida’,                 precioM2: 1050 },
‘26’: { nombre: ‘La Rioja / Logroño’,     precioM2: 1200 },
‘27’: { nombre: ‘Lugo’,                   precioM2: 850  },
‘28’: { nombre: ‘Madrid’,                 precioM2: 4100 },
‘29’: { nombre: ‘Málaga’,                 precioM2: 2600 },
‘30’: { nombre: ‘Murcia’,                 precioM2: 1100 },
‘31’: { nombre: ‘Navarra / Pamplona’,     precioM2: 1850 },
‘32’: { nombre: ‘Ourense’,                precioM2: 850  },
‘33’: { nombre: ‘Asturias / Oviedo’,      precioM2: 1350 },
‘34’: { nombre: ‘Palencia’,               precioM2: 800  },
‘35’: { nombre: ‘Las Palmas (Gran Canaria)’, precioM2: 1950 },
‘36’: { nombre: ‘Pontevedra / Vigo’,      precioM2: 1600 },
‘37’: { nombre: ‘Salamanca’,              precioM2: 1100 },
‘38’: { nombre: ‘Santa Cruz de Tenerife’, precioM2: 1700 },
‘39’: { nombre: ‘Cantabria / Santander’,  precioM2: 1700 },
‘40’: { nombre: ‘Segovia’,                precioM2: 900  },
‘41’: { nombre: ‘Sevilla’,                precioM2: 1850 },
‘42’: { nombre: ‘Soria’,                  precioM2: 650  },
‘43’: { nombre: ‘Tarragona’,              precioM2: 1500 },
‘44’: { nombre: ‘Teruel’,                 precioM2: 650  },
‘45’: { nombre: ‘Toledo’,                 precioM2: 900  },
‘46’: { nombre: ‘Valencia’,               precioM2: 2200 },
‘47’: { nombre: ‘Valladolid’,             precioM2: 1150 },
‘48’: { nombre: ‘Bizkaia / Bilbao’,       precioM2: 2900 },
‘49’: { nombre: ‘Zamora’,                 precioM2: 700  },
‘50’: { nombre: ‘Zaragoza’,               precioM2: 1500 },
‘51’: { nombre: ‘Ceuta’,                  precioM2: 1100 },
‘52’: { nombre: ‘Melilla’,                precioM2: 1000 },
};
// ============================================================
// LÓGICA DE REFERENCIA DE MERCADO
// ============================================================
let _mercadoPrecioManual = false;

function actualizarMercado() {
const cpEl      = document.getElementById(‘codigoPostal’);
const precioEl  = document.getElementById(‘precioRefM2’);
const supEl     = document.getElementById(‘superficieM2’);
const resultado = document.getElementById(‘mercadoResultado’);
const card      = document.getElementById(‘mercadoCard’);

```
if (!cpEl) return;

const cp     = cpEl.value.trim();
const prefix = cp.slice(0, 2);
const prov   = (prefix.length === 2) ? PROVINCIA_DATA[prefix] : null;

// ── 1. Mostrar tarjeta de provincia y rellenar €/m² automáticamente ──
if (prov) {
    // Mostrar tarjeta con datos de la provincia
    if (card) {
        card.style.display = 'block';
        const provEl = document.getElementById('mercadoCardProvincia');
        const m2El   = document.getElementById('mercadoCardPrecioM2');
        if (provEl) provEl.textContent = '📍 ' + prov.nombre;
        if (m2El)   m2El.textContent   = prov.precioM2.toLocaleString('es-ES') + ' €/m²';
    }
    // Autorellenar campo editable si el usuario no lo ha tocado
    if (precioEl && !_mercadoPrecioManual) {
        precioEl.value = prov.precioM2;
    }
} else {
    if (card) card.style.display = 'none';
    if (precioEl && !_mercadoPrecioManual) precioEl.value = '';
}

// ── 2. Panel de comparativa (necesita CP + superficie) ──
const precioM2   = precioEl ? (parseFloat(precioEl.value) || 0) : (prov ? prov.precioM2 : 0);
const superficie = parseFloat(supEl ? supEl.value : 0) || 0;
const precio     = parseFloat((document.getElementById('precio') || {}).value) || 0;
const descuento  = parseFloat((document.getElementById('descuentoOferta') || {}).value) || 10;

if (!resultado) return;

if (precioM2 > 0 && superficie > 0) {
    const valorMercado = precioM2 * superficie;
    const diferencia   = precio - valorMercado;
    const difPct       = valorMercado > 0 ? (diferencia / valorMercado) * 100 : 0;
    const oferta       = precio * (1 - descuento / 100);

    document.getElementById('mrValorMercado').textContent = fmt(Math.round(valorMercado)) + ' €';

    const vsEl = document.getElementById('mrVsTexto');
    if (Math.abs(difPct) < 2) {
        vsEl.textContent = '≈ En línea con el mercado';
        vsEl.className   = 'metric-warning';
    } else if (diferencia > 0) {
        vsEl.textContent = '+' + fmt(Math.round(diferencia)) + ' € por encima (+' + difPct.toFixed(1) + '%)';
        vsEl.className   = 'metric-negative';
    } else {
        vsEl.textContent = fmt(Math.round(diferencia)) + ' € por debajo (' + difPct.toFixed(1) + '%)';
        vsEl.className   = 'metric-positive';
    }

    document.getElementById('mrOferta').textContent = fmt(Math.round(oferta)) + ' €';
    document.getElementById('mrAhorro').textContent = fmt(Math.round(precio - oferta)) + ' €';
    resultado.style.display = 'block';
} else {
    resultado.style.display = 'none';
}
```

}

// ============================================================
// DISCLAIMER
// ============================================================
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
revalorizacion: 3.5,
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
// VALIDACIONES — warnings visuales en campos
// ============================================================
function validarEntradas({ mesesVacio, entradaEuros, precio }) {
// Meses vacío > 6
const mesesInput = document.getElementById(‘mesesVacio’);
if (mesesInput) {
if (mesesVacio > 6) {
setFieldWarning(mesesInput, currentLanguage === ‘es’
? ‘⚠️ Más de 6 meses vacío es inusual. Verifica que es correcto.’
: ‘⚠️ More than 6 vacant months is unusual. Please verify.’);
} else {
clearFieldWarning(mesesInput);
}
}

```
// Entrada > 50% del precio
const entradaInput = document.getElementById('entradaEuros');
const porcentajeEntrada = precio > 0 ? (entradaEuros / precio) * 100 : 0;
if (entradaInput) {
    if (porcentajeEntrada > 50 && porcentajeEntrada < 100) {
        setFieldWarning(entradaInput, currentLanguage === 'es'
            ? '✅ Entrada conservadora (+50%). El apalancamiento es bajo.'
            : '✅ Conservative down payment (+50%). Low leverage.');
    } else {
        clearFieldWarning(entradaInput);
    }
}
```

}

function setFieldWarning(input, message) {
clearFieldWarning(input);
const group = input.closest(’.form-group’);
if (!group) return;
const existing = group.querySelector(’.field-warning’);
if (existing) { existing.textContent = message; return; }
const div = document.createElement(‘div’);
div.className = ‘field-warning’;
div.textContent = message;
group.appendChild(div);
input.classList.add(‘input-warning’);
}

function clearFieldWarning(input) {
const group = input.closest(’.form-group’);
if (!group) return;
const existing = group.querySelector(’.field-warning’);
if (existing) existing.remove();
input.classList.remove(‘input-warning’);
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
        prestamo,
        interes,
        anos,
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

    window._lastDatos = datos;
    window._hipotecaDatos = datos;
    document.getElementById('resultados').innerHTML = mostrarResultados(datos);
    // Renderizar gráficos y tabla hipoteca DESPUÉS de inyectar el HTML
    requestAnimationFrame(() => {
        renderizarDoughnut(datos);
        // lineChart se renderiza al abrir su colapsable (toggleCol)
        if (financiacionTipo === 'con_hipoteca') renderizarTablaHipoteca(datos, null, 0, 'cuota');
    });
    actualizarResumenFlotante(datos);
    validarEntradas({ mesesVacio, entradaEuros, precio });

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
// Usar el tipo de la CC.AA. si está seleccionado
const ccaaSelector = document.getElementById(‘ccaaSelector’);
const ccaaVal = ccaaSelector ? parseFloat(ccaaSelector.value) : NaN;
const itpRate = (!isNaN(ccaaVal) && ccaaVal > 0) ? ccaaVal / 100 : 0.07;
return precio * itpRate;
}

function fmt(num) {
return num.toLocaleString(currentLanguage === ‘es’ ? ‘es-ES’ : ‘en-US’, { maximumFractionDigits: 0 });
}

// ============================================================
// RESET — valores por defecto
// ============================================================
const defaultValues = {
precio: 95000, gastosCompra: 2500, reforma: 4000,
tipoVivienda: ‘segunda’, financiacionTipo: ‘con_hipoteca’,
entradaEuros: 19000, interes: 3.2, anos: 25, gastosHipoteca: 1800,
alquiler: 700, mesesVacio: 0.5, incrementoAlquiler: 2, anosAnalisis: 20,
ibi: 380, comunidad: 55, seguro: 220, seguroImpago: 160,
mantenimiento: 400, administracion: 0, incrementoGastos: 0, taxAlquiler: 19,
revalorizacion: 3.5, gastosVenta: 8, plusvalia: 2000, irpfVenta: 19
};

function resetCalculadora() {
if (!confirm(translations[currentLanguage].reset_confirm)) return;
for (const [id, val] of Object.entries(defaultValues)) {
const el = document.getElementById(id);
if (el) el.value = val;
}
const ccaa = document.getElementById(‘ccaaSelector’);
if (ccaa) ccaa.value = ‘’;
actualizarEntradaSlider();
actualizarITPHint();
toggleFinanciacionInputs();
// Marcar escenario realista
document.querySelectorAll(’.btn-scenario’).forEach(b => b.classList.remove(‘active’));
const realista = document.querySelector(”[onclick="aplicarEscenario(‘realista’)"]”);
if (realista) realista.classList.add(‘active’);
calcular();
}

// ============================================================
// DOUGHNUT CHART
// ============================================================
let doughnutInstance = null;

function generarDoughnutHTML(datos) {
return `<div class="chart-card" id="chartCard"> <div class="chart-title" id="chartTitleEl"></div> <div class="chart-layout"> <div class="chart-canvas-wrap"> <canvas id="doughnutChart" width="220" height="220"></canvas> </div> <div class="chart-legend" id="chartLegend"></div> </div> </div>`;
}

function renderizarDoughnut(datos) {
const t = translations[currentLanguage];
const titleEl = document.getElementById(‘chartTitleEl’);
if (titleEl) titleEl.textContent = t.chart_titulo;

```
const ingresos = datos.ingresosMensuales;
const hipoteca = datos.financiacionTipo === 'con_hipoteca' ? datos.cuotaHipoteca : 0;
const gastosFijos = datos.comunidad + datos.ibi / 12 + datos.seguro / 12 +
                    datos.seguroImpago / 12 + datos.mantenimiento / 12 + datos.administracion;
const impuestos = datos.taxMensual;
const cashflow = Math.max(0, datos.flujoMensual);

const values = [hipoteca, gastosFijos, impuestos, cashflow].map(v => Math.max(0, v));
const labels = [t.chart_hipoteca, t.chart_gastos_fijos, t.chart_impuestos, t.chart_cashflow];
const colors = ['#667eea', '#f59e0b', '#ef4444', '#10b981'];

const canvas = document.getElementById('doughnutChart');
if (!canvas) return;

if (doughnutInstance) { doughnutInstance.destroy(); doughnutInstance = null; }

doughnutInstance = new Chart(canvas, {
    type: 'doughnut',
    data: {
        labels,
        datasets: [{
            data: values,
            backgroundColor: colors,
            borderWidth: 3,
            borderColor: '#fff',
            hoverOffset: 8
        }]
    },
    options: {
        cutout: '68%',
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: ctx => ` ${ctx.parsed.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', { maximumFractionDigits: 0 })} €/mes`
                }
            }
        },
        animation: { animateRotate: true, duration: 600 }
    }
});

// Leyenda manual
const legend = document.getElementById('chartLegend');
if (legend) {
    legend.innerHTML = labels.map((lbl, i) => `
        <div class="legend-item">
            <div class="legend-dot" style="background:${colors[i]}"></div>
            <span>${lbl}</span>
            <span class="legend-value">${values[i].toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', { maximumFractionDigits: 0 })} €</span>
        </div>
    `).join('');
}
```

}

// ============================================================
// HELPER — sección colapsable
// startOpen: true = visible por defecto, false = cerrado por defecto
// ============================================================
function colapsable(id, titulo, contenidoHTML, startOpen = false) {
const openClass = startOpen ? ’ col-open’ : ‘’;
return ` <div class="col-section${openClass}" id="col-${id}"> <button class="col-header" onclick="toggleCol('${id}')" type="button" aria-expanded="${startOpen}"> <span class="col-title">${titulo}</span> <span class="col-chevron">▾</span> </button> <div class="col-body"> <div class="col-inner">${contenidoHTML}</div> </div> </div>`;
}

window.toggleCol = function(id) {
const sec = document.getElementById(‘col-’ + id);
if (!sec) return;
const isOpen = sec.classList.contains(‘col-open’);
sec.classList.toggle(‘col-open’, !isOpen);
const btn = sec.querySelector(’.col-header’);
if (btn) btn.setAttribute(‘aria-expanded’, String(!isOpen));

```
// Si se acaba de abrir y contiene canvas → re-renderizar gráficos
if (!isOpen) {
    const lineCanvas = sec.querySelector('#lineChart');
    const doughnutCanvas = sec.querySelector('#doughnutChart');
    if (lineCanvas && window._lastDatos) {
        requestAnimationFrame(() => renderizarLineChart(window._lastDatos));
    }
    if (doughnutCanvas && window._lastDatos) {
        requestAnimationFrame(() => renderizarDoughnut(window._lastDatos));
    }
}
```

};

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

// Tabla de proyecciones — Vista doble: resumen + detalle al clic
// Guardamos los datos en un objeto global para acceso desde el modal
window._proyeccionesData = datos.proyecciones;
window._proyeccionesFmt = fmt;

let tablaProyecciones = `
    <div class="projection-table-container">
        <p class="projection-hint">👆 Haz clic en cualquier fila para ver el desglose completo de ese año</p>
        <table class="projection-table projection-table-summary">
            <thead>
                <tr>
                    <th>${t.ano_header}</th>
                    <th>${t.flujo_caja}</th>
                    <th>${t.rentabilidad_flujo_header}</th>
                    <th>${t.valor_inmueble}</th>
                    <th>${t.neto_si_vende}</th>
                    <th>${t.beneficio_acumulado}</th>
                </tr>
            </thead>
            <tbody>
`;

datos.proyecciones.forEach(proy => {
    const flujoClass = proy.flujoAnual >= 0 ? 'metric-positive' : 'metric-negative';
    const rentClass = proy.rentabilidadFlujo >= 0 ? 'metric-positive' : 'metric-negative';
    const benClass = proy.beneficioAcumulado >= 0 ? 'metric-positive' : 'metric-negative';
    tablaProyecciones += `
        <tr class="projection-row-clickable" onclick="abrirDetalleProyeccion(${proy.year - 1})" title="Ver desglose del año ${proy.year}">
            <td><strong>Año ${proy.year}</strong></td>
            <td class="${flujoClass}">${fmt(proy.flujoAnual)} €</td>
            <td class="${rentClass}">${proy.rentabilidadFlujo.toFixed(2)}%</td>
            <td>${fmt(proy.valorVivienda)} €</td>
            <td class="metric-info">${fmt(proy.precioVentaNeto)} €</td>
            <td class="${benClass}">${fmt(proy.beneficioAcumulado)} €</td>
        </tr>
    `;
});
tablaProyecciones += `</tbody></table></div>

<!-- Modal de detalle de año -->
<div id="proyeccionModal" class="proyeccion-modal-overlay" onclick="cerrarDetalleProyeccion(event)">
    <div class="proyeccion-modal-box">
        <button class="proyeccion-modal-close" onclick="cerrarDetalleProyeccion(null)">✕</button>
        <div id="proyeccionModalContent"></div>
    </div>
</div>`;

// Inyectamos las funciones de modal en el scope global
window.abrirDetalleProyeccion = function(idx) {
    const p = window._proyeccionesData[idx];
    const f = window._proyeccionesFmt;
    const lang = document.getElementById('langSelector')?.value || 'es';
    const esEs = lang === 'es';

    const flujoClass = p.flujoAnual >= 0 ? 'metric-positive' : 'metric-negative';
    const benClass = p.beneficioAcumulado >= 0 ? 'metric-positive' : 'metric-negative';

    document.getElementById('proyeccionModalContent').innerHTML = `
        <div class="proyeccion-modal-header">
            <span class="proyeccion-modal-year">Año ${p.year}</span>
            <span class="proyeccion-modal-subtitle">${esEs ? 'Desglose completo' : 'Full breakdown'}</span>
        </div>
        <div class="proyeccion-modal-grid">
            <div class="proyeccion-modal-section">
                <div class="proyeccion-modal-section-title">📥 ${esEs ? 'Ingresos' : 'Income'}</div>
                <div class="proyeccion-modal-row">
                    <span>${esEs ? 'Alquiler anual' : 'Annual rent'}</span>
                    <span class="metric-positive">+${f(p.ingresosAlquiler)} €</span>
                </div>
            </div>
            <div class="proyeccion-modal-section">
                <div class="proyeccion-modal-section-title">📤 ${esEs ? 'Gastos' : 'Expenses'}</div>
                <div class="proyeccion-modal-row">
                    <span>${esEs ? 'Gastos fijos' : 'Fixed costs'}</span>
                    <span class="metric-negative">-${f(p.gastosFijos)} €</span>
                </div>
                <div class="proyeccion-modal-row">
                    <span>${esEs ? 'Cuota hipoteca' : 'Mortgage payment'}</span>
                    <span class="metric-negative">-${f(p.cuotaHipoteca)} €</span>
                </div>
                <div class="proyeccion-modal-row">
                    <span>${esEs ? 'Impuestos (IRPF)' : 'Taxes (income)'}</span>
                    <span class="metric-negative">-${f(p.tax)} €</span>
                </div>
            </div>
            <div class="proyeccion-modal-section">
                <div class="proyeccion-modal-section-title">📊 ${esEs ? 'Resultado' : 'Result'}</div>
                <div class="proyeccion-modal-row proyeccion-modal-row--highlight">
                    <span><strong>${esEs ? 'Flujo de caja anual' : 'Annual cash flow'}</strong></span>
                    <span class="${flujoClass}"><strong>${f(p.flujoAnual)} €</strong></span>
                </div>
                <div class="proyeccion-modal-row">
                    <span>${esEs ? 'Rentabilidad sobre capital' : 'Return on equity'}</span>
                    <span class="${p.rentabilidadFlujo >= 0 ? 'metric-positive' : 'metric-negative'}">${p.rentabilidadFlujo.toFixed(2)}%</span>
                </div>
            </div>
            <div class="proyeccion-modal-section">
                <div class="proyeccion-modal-section-title">🏠 ${esEs ? 'Patrimonio' : 'Net Worth'}</div>
                <div class="proyeccion-modal-row">
                    <span>${esEs ? 'Valor del inmueble' : 'Property value'}</span>
                    <span>${f(p.valorVivienda)} €</span>
                </div>
                <div class="proyeccion-modal-row">
                    <span>${esEs ? 'Préstamo restante' : 'Remaining loan'}</span>
                    <span class="metric-negative">-${f(p.saldoPendiente)} €</span>
                </div>
                <div class="proyeccion-modal-row proyeccion-modal-row--highlight">
                    <span><strong>${esEs ? 'Neto si vendes hoy' : 'Net if you sell today'}</strong></span>
                    <span class="metric-info"><strong>${f(p.precioVentaNeto)} €</strong></span>
                </div>
                <div class="proyeccion-modal-row proyeccion-modal-row--highlight">
                    <span><strong>${esEs ? 'Beneficio acumulado' : 'Cumulative profit'}</strong></span>
                    <span class="${benClass}"><strong>${f(p.beneficioAcumulado)} €</strong></span>
                </div>
            </div>
        </div>
        <div class="proyeccion-modal-nav">
            ${idx > 0 ? `<button class="proyeccion-nav-btn" onclick="abrirDetalleProyeccion(${idx - 1})">← ${esEs ? 'Año anterior' : 'Previous year'}</button>` : '<span></span>'}
            ${idx < window._proyeccionesData.length - 1 ? `<button class="proyeccion-nav-btn" onclick="abrirDetalleProyeccion(${idx + 1})">${esEs ? 'Año siguiente' : 'Next year'} →</button>` : '<span></span>'}
        </div>
    `;
    document.getElementById('proyeccionModal').classList.add('active');
};

window.cerrarDetalleProyeccion = function(event) {
    if (event === null || event.target === document.getElementById('proyeccionModal')) {
        document.getElementById('proyeccionModal').classList.remove('active');
    }
};

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

        <div class="metric-card" data-tooltip-key="cashflow">
            <div class="metric-header">
                <div class="metric-title">${t.flujo_mensual}</div>
                <div class="metric-icon">${datos.flujoMensual >= 0 ? '📈' : '📉'}</div>
            </div>
            <div class="metric-value ${flujoClass}">${fmt(datos.flujoMensual)} €</div>
            <div class="metric-subtitle">${t.cashflow_mensual_neto}</div>
            <div class="metric-microcopy">👉 Para renta pasiva mensual, prioriza este dato</div>
        </div>

        <div class="metric-card" data-tooltip-key="roi">
            <div class="metric-header">
                <div class="metric-title">${t.roi_anual}</div>
                <div class="metric-icon">📊</div>
            </div>
            <div class="metric-value ${roiClass}">${datos.roiAnual.toFixed(2)}%</div>
            <div class="metric-subtitle">${t.basado_flujo_anual}</div>
            <div class="metric-microcopy">ROI alto + cashflow negativo = riesgo de liquidez</div>
        </div>

        <div class="metric-card" data-tooltip-key="tir">
            <div class="metric-header">
                <div class="metric-title">${t.tir_anualizada}</div>
                <div class="metric-icon">⚡</div>
            </div>
            <div class="metric-value ${rentabilidadClass}">${datos.rentabilidadAnual.toFixed(2)}%</div>
            <div class="metric-subtitle">${t.rentabilidad_anual_compuesta}</div>
            <div class="metric-microcopy">👉 Para acumulación de patrimonio a largo plazo</div>
        </div>

        <div class="metric-card" data-tooltip-key="beneficio">
            <div class="metric-header">
                <div class="metric-title">${t.beneficio_total}</div>
                <div class="metric-icon">${datos.beneficioTotal >= 0 ? '🎯' : '⚠️'}</div>
            </div>
            <div class="metric-value ${beneficioClass}">${fmt(datos.beneficioTotal)} €</div>
            <div class="metric-subtitle">${t.en_anos} ${datos.anosAnalisis} ${t.anos_text}</div>
        </div>

        <div class="metric-card" data-tooltip-key="neto">
            <div class="metric-header">
                <div class="metric-title">${t.flujo_acumulado}</div>
                <div class="metric-icon">💧</div>
            </div>
            <div class="metric-value ${datos.flujoAcumulado >= 0 ? 'metric-positive' : 'metric-negative'}">${fmt(datos.flujoAcumulado)} €</div>
            <div class="metric-subtitle">${t.solo_por_alquileres}</div>
        </div>
    </div>

    <!-- DESGLOSE: gráfico doughnut siempre visible (es pequeño) -->
    ${generarDoughnutHTML(datos)}

    <!-- DESGLOSE INVERSIÓN + CASHFLOW + PROYECCIÓN VENTA — colapsables -->
    ${colapsable('desglose', '💰 ' + t.desglose_inversion + ' · Cashflow · Proyección venta', `
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:1rem;">
        <div class="detail-card" style="margin-bottom:0;">
            <div class="detail-card-title">${t.desglose_inversion}</div>
            <div class="detail-row"><span>${t.entrada_porcentaje} (${datos.entrada}%)</span><span>${fmt(datos.montoEntrada)} €</span></div>
            <div class="detail-row"><span>${t.impuestos_itp}</span><span>${fmt(datos.impuestos)} €</span></div>
            <div class="detail-row"><span>${t.gastos_compra_text}</span><span>${fmt(datos.gastosCompra)} €</span></div>
            <div class="detail-row"><span>${t.gastos_reforma_text}</span><span>${fmt(datos.reforma)} €</span></div>
            ${datos.financiacionTipo === 'con_hipoteca' ? `<div class="detail-row"><span>${t.gastos_hipoteca_text}</span><span>${fmt(datos.gastosHipoteca)} €</span></div>` : ''}
            <div class="detail-row total"><span>${t.total_inversion}</span><span>${fmt(datos.inversionInicial)} €</span></div>
        </div>
        <div class="detail-card" style="margin-bottom:0;">
            <div class="detail-card-title">${t.cashflow_mensual_card}</div>
            <div class="detail-row"><span>${t.ingresos_alquiler}</span><span class="metric-positive">+${fmt(datos.ingresosMensuales)} €</span></div>
            ${datos.financiacionTipo === 'con_hipoteca' ? `<div class="detail-row"><span>${t.cuota_hipoteca}</span><span class="metric-negative">-${fmt(datos.cuotaHipoteca)} €</span></div>` : ''}
            <div class="detail-row"><span>${t.comunidad_text}</span><span class="metric-negative">-${fmt(datos.comunidad)} €</span></div>
            <div class="detail-row"><span>${t.ibi_mensual}</span><span class="metric-negative">-${fmt(datos.ibi / 12)} €</span></div>
            <div class="detail-row"><span>${t.seguro_mensual}</span><span class="metric-negative">-${fmt(datos.seguro / 12)} €</span></div>
            <div class="detail-row"><span>${t.seguro_impago_mensual}</span><span class="metric-negative">-${fmt(datos.seguroImpago / 12)} €</span></div>
            <div class="detail-row"><span>${t.mantenimiento_mensual}</span><span class="metric-negative">-${fmt(datos.mantenimiento / 12)} €</span></div>
            <div class="detail-row"><span>${t.administracion_text}</span><span class="metric-negative">-${fmt(datos.administracion)} €</span></div>
            <div class="detail-row"><span>${t.impuestos_alquiler}</span><span class="metric-negative">-${fmt(datos.taxMensual)} €</span></div>
            <div class="detail-row total"><span>${t.net_cashflow}</span><span class="${flujoClass}">${fmt(datos.flujoMensual)} €</span></div>
        </div>
        <div class="detail-card" style="margin-bottom:0;">
            <div class="detail-card-title">${t.proyeccion_venta} ${datos.anosAnalisis})</div>
            <div class="detail-row"><span>${t.valor_estimado}</span><span>${fmt(datos.precioVentaBruto)} €</span></div>
            <div class="detail-row"><span>${t.gastos_venta_porcentaje}</span><span class="metric-negative">-${fmt(datos.gastosVentaEuros)} €</span></div>
            <div class="detail-row"><span>${t.plusvalia_municipal}</span><span class="metric-negative">-${fmt(datos.plusvalia)} €</span></div>
            <div class="detail-row"><span>${t.irpf_ganancia}</span><span class="metric-negative">-${fmt(datos.impuestosGanancias)} €</span></div>
            <div class="detail-row total"><span>${t.valor_neto_venta}</span><span class="metric-info">${fmt(datos.precioVentaNeto)} €</span></div>
        </div>
    </div>`, false)}

    <!-- CALCULADORA INVERSA — siempre visible, es pequeña -->
    ${generarCalculadoraInversaHTML()}

    <!-- GRÁFICO EVOLUCIÓN TEMPORAL — colapsable cerrado -->
    ${colapsable('linechart', '📈 Evolución del beneficio acumulado año a año', generarLineChartHTML(), false)}

    <!-- TABLA HIPOTECA — colapsable cerrado -->
    ${datos.financiacionTipo === 'con_hipoteca' ? colapsable('hipoteca', '🏦 Cuadro de amortización hipotecaria', generarTablaHipotecaHTML(datos), false) : ''}

    <!-- PROYECCIONES AÑO A AÑO — colapsable cerrado -->
    ${colapsable('proyecciones', '📅 ' + t.proyecciones_ano, `<div class="detail-card" style="margin-bottom:0;">${tablaProyecciones}</div>`, false)}

    <!-- SIMULADOR TIPOS — colapsable -->
    ${generarSimuladorTiposHTML(datos)}

    <!-- COMPARACIÓN — siempre visible -->
    <div class="detail-card" style="margin-bottom:1.25rem;">
        <div class="detail-card-title">${t.comparacion_inversiones}</div>
        <div class="comparison-table">${comparacionHTML}</div>
        <p style="font-size:0.75rem; color:var(--text-light); margin-top:0.75rem;">* ${currentLanguage === 'es' ? 'Rentabilidades de referencia a feb 2026. No constituyen garantía de rentabilidad futura.' : 'Reference returns as of Feb 2026. Do not constitute a guarantee of future performance.'}</p>
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
// ============================================================
// EXPORTAR A PDF — Generación elegante con jsPDF
// ============================================================
function exportToPDF(opts) {
opts = opts || {};
const sec = function(key) { return opts[key] !== false; };
const { jsPDF } = window.jspdf;
const datos = window._lastDatos;
const f = (n) => n.toLocaleString(‘es-ES’, { maximumFractionDigits: 0 });
const fp = (n) => n.toFixed(2) + ‘%’;
const lang = currentLanguage || ‘es’;
const esEs = lang === ‘es’;

```
// Normaliza texto para PDF: convierte solo lo que jsPDF/Helvetica no puede mostrar
// latin-1 (U+0000-U+00FF) está soportado, incluyendo á é í ó ú ñ Ñ y tildes
// Lo que NO soporta: emojis, caracteres CJK, símbolos unicode fuera de latin-1
function s(str) {
    return String(str)
        .replace(/€/g, 'EUR')
        .replace(/…/g, '...')
        .replace(/–/g, '-').replace(/—/g, '-')
        .replace(/[^\x00-\xFF]/g, '');  // elimina solo chars fuera de latin-1
}

// ── Paleta de colores ──────────────────────────────────────
const C = {
    primary:    [103, 126, 234],   // indigo
    primaryDark:[29,  78,  216],
    accent:     [16,  185, 129],   // verde éxito
    danger:     [239, 68,  68],
    warning:    [245, 158, 11],
    info:       [6,   182, 212],
    dark:       [15,  23,  42],
    darkMid:    [30,  41,  59],
    grey:       [100, 116, 139],
    greyLight:  [226, 232, 240],
    greyXLight: [248, 250, 252],
    white:      [255, 255, 255],
};

const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
const PW = 210; // page width mm
const PH = 297;
const ML = 14;  // margin left
const MR = 14;  // margin right
const CW = PW - ML - MR; // content width
let y = 0;

// ── Helpers ────────────────────────────────────────────────
function setFont(style, size, color) {
    doc.setFont('helvetica', style);
    doc.setFontSize(size);
    doc.setTextColor(...(color || C.dark));
}

function fillRect(x, yy, w, h, color) {
    doc.setFillColor(...color);
    doc.rect(x, yy, w, h, 'F');
}

function text(str, x, yy, opts) {
    doc.text(s(String(str)), x, yy, opts || {});
}

function newPage() {
    doc.addPage();
    y = 18;
    // Línea decorativa superior
    fillRect(0, 0, PW, 3, C.primary);
}

function checkPageBreak(needed) {
    if (y + needed > PH - 14) { newPage(); }
}

function sectionTitle(title, _icon) {
    checkPageBreak(14);
    fillRect(ML, y, CW, 8, C.greyXLight);
    doc.setDrawColor(...C.greyLight);
    doc.setLineWidth(0.3);
    doc.rect(ML, y, CW, 8, 'D');
    // Cuadrado de acento en lugar de emoji
    fillRect(ML + 2, y + 2, 3, 4, C.primary);
    setFont('bold', 9, C.primaryDark);
    text(title.toUpperCase(), ML + 8, y + 5.5);
    y += 12;
}

function metricRow(label, value, color, bg, isLast) {
    const rowH = 7.2;
    checkPageBreak(rowH + 1);
    if (bg) fillRect(ML, y, CW, rowH, bg);
    doc.setDrawColor(...C.greyLight);
    doc.setLineWidth(0.2);
    if (!isLast) doc.line(ML, y + rowH, ML + CW, y + rowH);
    setFont('normal', 8.5, C.grey);
    text(label, ML + 3, y + 5);
    setFont('bold', 8.5, color || C.dark);
    text(value, ML + CW - 3, y + 5, { align: 'right' });
    y += rowH;
}

function twoColMetrics(pairs) {
    const colW = CW / 2 - 1;
    const rowH = 7;
    const perRow = 2;
    for (let i = 0; i < pairs.length; i += perRow) {
        checkPageBreak(rowH + 2);
        for (let j = 0; j < perRow && i + j < pairs.length; j++) {
            const { label, value, color, bg } = pairs[i + j];
            const x0 = ML + j * (colW + 2);
            if (bg) fillRect(x0, y, colW, rowH, bg);
            doc.setDrawColor(...C.greyLight);
            doc.setLineWidth(0.2);
            doc.rect(x0, y, colW, rowH, 'D');
            setFont('normal', 7.5, C.grey);
            text(label, x0 + 3, y + 3.5);
            setFont('bold', 9, color || C.dark);
            text(value, x0 + colW - 3, y + 6.5, { align: 'right' });
        }
        y += rowH + 2;
    }
}

// ── PORTADA ────────────────────────────────────────────────
// Fondo degradado simulado con rectángulos
fillRect(0, 0, PW, 90, C.dark);
fillRect(0, 60, PW, 35, C.darkMid);

// Franja de acento
fillRect(0, 88, PW, 4, C.primary);

// Logo / Icono — cuadrado con iniciales
doc.setFillColor(...C.primary);
doc.roundedRect(ML, 18, 22, 22, 3, 3, 'F');
setFont('bold', 14, C.white);
text('PI', ML + 4.5, 32);

// Título principal
setFont('bold', 22, C.white);
text(esEs ? 'Análisis de Inversión' : 'Investment Analysis', ML + 28, 28);
setFont('normal', 11, [148, 163, 184]);
text(esEs ? 'Informe de Rentabilidad Inmobiliaria' : 'Real Estate Return Report', ML + 28, 36);

// Badge fecha
const fecha = new Date().toLocaleDateString(esEs ? 'es-ES' : 'en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
setFont('normal', 8, [148, 163, 184]);
text((esEs ? 'Generado el ' : 'Generated on ') + fecha, ML + 28, 44);

// URL / branding
setFont('normal', 8, [71, 85, 105]);
text('pisorentable.org', PW - MR, 84, { align: 'right' });

// Tarjetas KPI en portada
y = 100;
const kpis = [
    {
        label: esEs ? 'Cashflow mensual neto' : 'Monthly net cashflow',
        value: f(datos.flujoMensual) + ' /mes',
        color: datos.flujoMensual >= 0 ? C.accent : C.danger,
        tag: 'CF'
    },
    {
        label: esEs ? 'Rentabilidad compuesta (TIR)' : 'Compound return (IRR)',
        value: fp(datos.rentabilidadAnual),
        color: datos.rentabilidadAnual >= 6 ? C.accent : datos.rentabilidadAnual >= 3 ? C.warning : C.danger,
        tag: 'TIR'
    },
    {
        label: esEs ? 'ROI anual sobre capital' : 'Annual ROI on capital',
        value: fp(datos.roiAnual),
        color: datos.roiAnual >= 6 ? C.accent : datos.roiAnual >= 3 ? C.warning : C.danger,
        tag: 'ROI'
    },
    {
        label: esEs ? `Beneficio total (${datos.anosAnalisis} años)` : `Total profit (${datos.anosAnalisis} yrs)`,
        value: f(datos.beneficioTotal) + ' EUR',
        color: datos.beneficioTotal >= 0 ? C.accent : C.danger,
        tag: 'BEN'
    },
];

const kpiW = (CW - 6) / 4;
kpis.forEach((k, i) => {
    const x0 = ML + i * (kpiW + 2);
    fillRect(x0, y, kpiW, 28, C.white);
    doc.setDrawColor(...k.color);
    doc.setLineWidth(0.8);
    doc.line(x0, y, x0 + kpiW, y);
    doc.setLineWidth(0.2);
    // Tag pequeño en lugar de emoji
    fillRect(x0 + 2, y + 3, 8, 4.5, k.color);
    setFont('bold', 5.5, C.white);
    text(k.tag, x0 + 2.8, y + 6.5);
    // Label (ambas líneas alineadas bajo el tag)
    setFont('normal', 7, C.grey);
    const lines = doc.splitTextToSize(s(k.label), kpiW - 4);
    text(lines[0], x0 + 12, y + 6);
    if (lines[1]) text(lines[1], x0 + 12, y + 10);
    // Value
    setFont('bold', 11, k.color);
    text(k.value, x0 + kpiW / 2, y + 22, { align: 'center' });
});

y += 36;

// Aviso legal en portada
setFont('normal', 7, C.grey);
const aviso = esEs
    ? 'Esta herramienta es orientativa y no constituye asesoramiento financiero, fiscal ni jurídico. Consulte con un profesional.'
    : 'This tool is for guidance only and does not constitute financial, tax or legal advice. Consult a professional.';
const avisoLines = doc.splitTextToSize(s(aviso), CW);
avisoLines.forEach(line => { text(line, ML, y); y += 4; });

// ── GRÁFICO DE DISTRIBUCIÓN DE COSTES (capturado del canvas web) ──────
y += 4;
const chartCanvas = document.getElementById('doughnutChart');
if (chartCanvas) {
    try {
        const chartImg = chartCanvas.toDataURL('image/png');
        const chartSize = 52; // mm

        const boxW = CW;
        const boxH = chartSize + 16;
        fillRect(ML, y, boxW, boxH, C.white);
        doc.setDrawColor(...C.greyLight);
        doc.setLineWidth(0.3);
        doc.rect(ML, y, boxW, boxH, 'D');

        // Título
        fillRect(ML, y, boxW, 7, C.greyXLight);
        setFont('bold', 8, C.primaryDark);
        text(s(esEs ? 'Distribución de costes mensuales' : 'Monthly cost breakdown'), ML + 4, y + 5);

        // Gráfico
        const chartX = ML + 4;
        const chartY = y + 10;
        doc.addImage(chartImg, 'PNG', chartX, chartY, chartSize, chartSize);

        // Leyenda a la derecha
        const hipotecaVal  = datos.financiacionTipo === 'con_hipoteca' ? datos.cuotaHipoteca : 0;
        const gastosFijosVal = datos.comunidad + datos.ibi / 12 + datos.seguro / 12 +
                               (datos.seguroImpago || 0) / 12 + datos.mantenimiento / 12 +
                               (datos.administracion || 0);
        const impuestosVal = datos.taxMensual;
        const cashflowVal  = Math.max(0, datos.flujoMensual);
        const legendItems = [
            { label: esEs ? 'Hipoteca' : 'Mortgage',       value: hipotecaVal,   color: [103, 126, 234] },
            { label: esEs ? 'Gastos fijos' : 'Fixed costs', value: gastosFijosVal,color: [245, 158,  11] },
            { label: esEs ? 'Impuestos' : 'Taxes',          value: impuestosVal,  color: [239,  68,  68] },
            { label: 'Cashflow',                             value: cashflowVal,   color: [ 16, 185, 129] },
        ];

        const legX = chartX + chartSize + 8;
        let legY = chartY + 8;
        legendItems.forEach(item => {
            fillRect(legX, legY - 3.2, 4, 4, item.color);
            setFont('normal', 8, C.grey);
            text(s(item.label), legX + 6, legY);
            setFont('bold', 9, item.color);
            text(f(item.value) + ' EUR/mes', legX + 6, legY + 5.5);
            legY += 14;
        });

        y += boxH + 4;
    } catch(e) {
        y += 2; // Si falla la captura del canvas, lo omitimos silenciosamente
    }
}

// ── PÁGINA 2: PARÁMETROS DE LA INVERSIÓN ─────────────────
newPage();

// ── BLOQUE REFERENCIA DE MERCADO ──────────────────────────
if (sec('mercado')) {
const _cpPDF  = (document.getElementById('codigoPostal')?.value || '').trim();
const _m2PDF  = parseFloat(document.getElementById('precioRefM2')?.value) || 0;
const _supPDF = parseFloat(document.getElementById('superficieM2')?.value) || 0;
const _descPDF= parseFloat(document.getElementById('descuentoOferta')?.value) || 10;
const _precioPDF = parseFloat(document.getElementById('precio')?.value) || 0;

if (_cpPDF && _m2PDF > 0) {
    const _prefPDF = _cpPDF.slice(0, 2);
    const _provPDF = PROVINCIA_DATA[_prefPDF];
    const _vmPDF   = _m2PDF * (_supPDF || 0);
    const _difPDF  = _precioPDF - _vmPDF;
    const _difPctPDF = _vmPDF > 0 ? (_difPDF / _vmPDF) * 100 : 0;
    const _ofertaPDF = _precioPDF * (1 - _descPDF / 100);

    checkPageBreak(52);
    fillRect(ML, y, CW, 8, C.primary);
    setFont('bold', 9.5, C.white);
    text(s(esEs ? '📍 Referencia de Mercado y Estrategia de Oferta' : '📍 Market Reference & Offer Strategy'), ML + 3, y + 5.5);
    y += 12;

    if (_provPDF) {
        setFont('bold', 8, C.dark);
        text(s(esEs ? 'Provincia detectada: ' + _provPDF.nombre : 'Province detected: ' + _provPDF.nombre), ML, y);
        y += 5;
    }

    twoColMetrics([
        { label: esEs ? 'Código postal' : 'Postal code',            value: _cpPDF },
        { label: esEs ? 'Precio de referencia €/m²' : 'Ref. price €/m²', value: f(_m2PDF) + ' €/m²' },
        ...(_supPDF > 0 ? [
            { label: esEs ? 'Superficie del inmueble' : 'Property size', value: _supPDF + ' m²' },
            { label: esEs ? 'Valor estimado de mercado' : 'Estimated market value', value: f(Math.round(_vmPDF)) + ' €', color: C.primary },
        ] : []),
        { label: esEs ? 'Precio de compra pactado' : 'Agreed purchase price', value: f(_precioPDF) + ' €' },
        ...(_supPDF > 0 ? [
            { label: esEs ? 'Diferencia vs. mercado' : 'Diff. vs. market',
              value: (_difPDF >= 0 ? '+' : '') + f(Math.round(_difPDF)) + ' € (' + (_difPDF >= 0 ? '+' : '') + _difPctPDF.toFixed(1) + '%)',
              color: _difPDF > 0 ? C.danger : C.accent },
        ] : []),
        { label: esEs ? 'Descuento de negociación' : 'Negotiation discount', value: _descPDF + '%' },
        { label: esEs ? 'Oferta inicial sugerida' : 'Suggested initial offer', value: f(Math.round(_ofertaPDF)) + ' €', color: C.accent },
        { label: esEs ? 'Ahorro potencial si aceptan' : 'Potential saving if accepted', value: f(Math.round(_precioPDF - _ofertaPDF)) + ' €', color: C.accent },
    ]);

    setFont('normal', 7, C.grey);
    text(s(esEs
        ? '* Precios de referencia basados en datos provinciales estimados (Tinsa/INE 2025). Consultar portales inmobiliarios para mayor precisión.'
        : '* Reference prices based on estimated provincial data (Tinsa/INE 2025). Check property portals for greater accuracy.'), ML, y);
    y += 10;
}
} // fin sec mercado

if (sec('parametros')) {
sectionTitle(esEs ? 'Parámetros de la Inversión' : 'Investment Parameters');

// Recuperar inputs del DOM
const precio = parseFloat(document.getElementById('precio')?.value) || 0;
const entradaEuros = parseFloat(document.getElementById('entradaEuros')?.value) || 0;
const interes = parseFloat(document.getElementById('interes')?.value) || 0;
const anos = parseFloat(document.getElementById('anos')?.value) || 0;
const alquiler = parseFloat(document.getElementById('alquiler')?.value) || 0;
const mesesVacio = parseFloat(document.getElementById('mesesVacio')?.value) || 0;
const revalorizacion = parseFloat(document.getElementById('revalorizacion')?.value) || 0;
const anosAnalisis = datos.anosAnalisis;
const ibi = parseFloat(document.getElementById('ibi')?.value) || 0;
const comunidad = parseFloat(document.getElementById('comunidad')?.value) || 0;
const seguro = parseFloat(document.getElementById('seguro')?.value) || 0;
const mantenimiento = parseFloat(document.getElementById('mantenimiento')?.value) || 0;
const taxAlquiler = parseFloat(document.getElementById('taxAlquiler')?.value) || 19;
const gastosVenta = parseFloat(document.getElementById('gastosVenta')?.value) || 8;
const irpfVenta = parseFloat(document.getElementById('irpfVenta')?.value) || 19;

twoColMetrics([
    { label: esEs ? 'Precio de compra' : 'Purchase price', value: f(precio) + ' €' },
    { label: esEs ? 'Tipo de financiación' : 'Financing type', value: datos.financiacionTipo === 'con_hipoteca' ? (esEs ? 'Con hipoteca' : 'With mortgage') : (esEs ? 'Sin hipoteca' : 'Cash') },
    { label: esEs ? 'Ahorro aportado (entrada)' : 'Equity (down payment)', value: f(entradaEuros) + ' € (' + (precio > 0 ? ((entradaEuros/precio)*100).toFixed(0) : 0) + '%)' },
    { label: esEs ? 'Tipo de interés' : 'Interest rate', value: datos.financiacionTipo === 'con_hipoteca' ? interes.toFixed(1) + '%' : '—' },
    { label: esEs ? 'Plazo hipoteca' : 'Mortgage term', value: datos.financiacionTipo === 'con_hipoteca' ? (anos + (esEs ? ' años' : ' yrs')) : '—' },
    { label: esEs ? 'Alquiler mensual' : 'Monthly rent', value: f(alquiler) + ' €/mes' },
    { label: esEs ? 'Meses vacío al año' : 'Vacant months/year', value: mesesVacio + (esEs ? ' mes(es)' : ' month(s)') },
    { label: esEs ? 'Años de análisis' : 'Analysis period', value: anosAnalisis + (esEs ? ' años' : ' years') },
    { label: esEs ? 'Revalorización anual' : 'Annual appreciation', value: revalorizacion.toFixed(1) + '%' },
    { label: esEs ? 'IRPF sobre alquiler' : 'Income tax on rent', value: taxAlquiler + '%' },
    { label: esEs ? 'Gastos venta futura' : 'Future sale costs', value: gastosVenta + '%' },
    { label: esEs ? 'IRPF sobre plusvalía' : 'Capital gains tax', value: irpfVenta + '%' },
]);

} // fin sec parametros

if (sec('inversion')) {
y += 4;
sectionTitle(esEs ? 'Inversión Inicial Detallada' : 'Initial Investment Breakdown');

metricRow(esEs ? 'Precio de compra' : 'Purchase price', f(precio) + ' €');
metricRow(esEs ? 'Impuestos (ITP/IVA+AJD)' : 'Taxes (ITP/VAT+AJD)', f(datos.impuestos) + ' €', C.danger, C.greyXLight);
metricRow(esEs ? 'Gastos de compraventa (notaría, registro…)' : 'Transaction costs (notary, registry…)', f(datos.gastosCompra) + ' €', C.danger);
metricRow(esEs ? 'Gastos de reforma' : 'Renovation costs', f(datos.reforma) + ' €', C.danger, C.greyXLight);
if (datos.financiacionTipo === 'con_hipoteca') {
    metricRow(esEs ? 'Gastos de hipoteca' : 'Mortgage fees', f(datos.gastosHipoteca) + ' €', C.danger);
}
const bgTotal = [235, 245, 255];
checkPageBreak(9);
fillRect(ML, y, CW, 8, C.primary);
setFont('bold', 9, C.white);
text(esEs ? 'CAPITAL TOTAL INVERTIDO (dinero de bolsillo)' : 'TOTAL CAPITAL INVESTED (out of pocket)', ML + 3, y + 5.5);
setFont('bold', 10, C.white);
text(f(datos.inversionInicial) + ' €', ML + CW - 3, y + 5.5, { align: 'right' });
y += 12;

} // fin sec inversion

if (sec('gastos_op')) {
y += 4;
sectionTitle(esEs ? 'Gastos Operativos Anuales' : 'Annual Operating Costs');

metricRow('IBI', f(ibi) + ' €/año', C.danger);
metricRow(esEs ? 'Comunidad de vecinos' : 'HOA fees', f(comunidad * 12) + ' €/año', C.danger, C.greyXLight);
metricRow(esEs ? 'Seguro de hogar' : 'Home insurance', f(seguro) + ' €/año', C.danger);
metricRow(esEs ? 'Mantenimiento y reparaciones' : 'Maintenance & repairs', f(mantenimiento) + ' €/año', C.danger, C.greyXLight);
const seguroImpago = parseFloat(document.getElementById('seguroImpago')?.value) || 0;
const admin = parseFloat(document.getElementById('administracion')?.value) || 0;
if (seguroImpago > 0) metricRow(esEs ? 'Seguro de impago' : 'Rent default insurance', f(seguroImpago) + ' €/año', C.danger);
if (admin > 0) metricRow(esEs ? 'Administración / Agencia' : 'Management / Agency', f(admin * 12) + ' €/año', C.danger, C.greyXLight);

} // fin sec gastos_op

// ── PÁGINA 3: RESULTADOS PRINCIPALES ─────────────────────
newPage();

if (sec('resultados')) {
sectionTitle(esEs ? 'Resultados Económicos — Año 1' : 'Economic Results — Year 1');

twoColMetrics([
    {
        label: esEs ? 'Ingresos brutos alquiler' : 'Gross rental income',
        value: f(datos.ingresosMensuales * 12) + ' €/año',
        color: C.accent
    },
    {
        label: esEs ? 'Cuota hipoteca mensual' : 'Monthly mortgage payment',
        value: datos.financiacionTipo === 'con_hipoteca' ? f(datos.cuotaHipoteca) + ' €/mes' : '— €',
        color: C.danger
    },
    {
        label: esEs ? 'Cashflow mensual neto' : 'Monthly net cashflow',
        value: f(datos.flujoMensual) + ' €/mes',
        color: datos.flujoMensual >= 0 ? C.accent : C.danger,
        bg: datos.flujoMensual >= 0 ? [240, 253, 244] : [254, 242, 242]
    },
    {
        label: esEs ? 'Cashflow anual neto' : 'Annual net cashflow',
        value: f(datos.flujoMensual * 12) + ' €/año',
        color: datos.flujoMensual >= 0 ? C.accent : C.danger,
        bg: datos.flujoMensual >= 0 ? [240, 253, 244] : [254, 242, 242]
    },
    {
        label: esEs ? 'ROI sobre capital invertido' : 'ROI on invested capital',
        value: fp(datos.roiAnual),
        color: datos.roiAnual >= 6 ? C.accent : datos.roiAnual >= 3 ? C.warning : C.danger
    },
    {
        label: esEs ? 'TIR / Rentab. compuesta total' : 'IRR / Total compound return',
        value: fp(datos.rentabilidadAnual),
        color: datos.rentabilidadAnual >= 6 ? C.accent : datos.rentabilidadAnual >= 3 ? C.warning : C.danger,
        bg: [235, 245, 255]
    },
]);

} // fin sec resultados

if (sec('venta')) {
y += 4;
sectionTitle(esEs ? `Proyección de Venta al Año ${datos.anosAnalisis}` : `Sale Projection at Year ${datos.anosAnalisis}`);

const pVenta = datos.precioVentaBruto;
metricRow(esEs ? 'Valor estimado del inmueble' : 'Estimated property value', f(pVenta) + ' €', C.info);
metricRow(esEs ? 'Gastos de venta' : 'Sale expenses', '-' + f(datos.gastosVentaEuros) + ' €', C.danger, C.greyXLight);
metricRow(esEs ? 'Plusvalía municipal' : 'Municipal capital gains tax', '-' + f(datos.plusvalia) + ' €', C.danger);
metricRow(esEs ? 'IRPF sobre ganancia de capital' : 'Income tax on capital gains', '-' + f(datos.impuestosGanancias) + ' €', C.danger, C.greyXLight);
metricRow(esEs ? 'Préstamo pendiente' : 'Remaining loan', '-' + f(datos.proyecciones[datos.anosAnalisis - 1].saldoPendiente) + ' €', C.danger);

checkPageBreak(9);
fillRect(ML, y, CW, 8, C.accent);
setFont('bold', 9, C.white);
text(esEs ? 'NETO RECIBIDO AL VENDER' : 'NET PROCEEDS FROM SALE', ML + 3, y + 5.5);
setFont('bold', 10, C.white);
text(f(datos.precioVentaNeto) + ' €', ML + CW - 3, y + 5.5, { align: 'right' });
y += 10;

checkPageBreak(9);
fillRect(ML, y, CW, 8, datos.beneficioTotal >= 0 ? C.primary : C.danger);
setFont('bold', 9, C.white);
text(esEs ? `BENEFICIO TOTAL ACUMULADO (${datos.anosAnalisis} AÑOS)` : `TOTAL ACCUMULATED PROFIT (${datos.anosAnalisis} YEARS)`, ML + 3, y + 5.5);
setFont('bold', 10, C.white);
text(f(datos.beneficioTotal) + ' €', ML + CW - 3, y + 5.5, { align: 'right' });
y += 14;

} // fin sec venta

if (sec('proyecciones')) {
// ── PÁGINA 4+: PROYECCIÓN AÑO POR AÑO (TABLA COMPLETA) ───
newPage();

sectionTitle(esEs ? 'Proyección Año por Año — Tabla Completa' : 'Year-by-Year Projections — Full Table');

// Cabeceras de tabla
const cols = [
    { h: esEs ? 'Año' : 'Year',       w: 10 },
    { h: esEs ? 'Ingresos' : 'Income',   w: 24 },
    { h: esEs ? 'G.Fijos' : 'Costs',     w: 22 },
    { h: esEs ? 'Hipoteca' : 'Mortgage',  w: 22 },
    { h: 'IRPF',                            w: 20 },
    { h: 'Cashflow',                        w: 23 },
    { h: '% ROI',                           w: 16 },
    { h: esEs ? 'Val.Inmueble' : 'Prop.Val',w: 26 },
    { h: esEs ? 'Neto Venta' : 'Net Sale', w: 24 },
    { h: esEs ? 'B.Acumulado' : 'Tot.Profit',w: 27 },
];

const rowH = 6.5;
const headerH = 8;

function drawTableHeader() {
    checkPageBreak(headerH + 2);
    fillRect(ML, y, CW, headerH, C.darkMid);
    let cx = ML;
    cols.forEach(col => {
        setFont('bold', 7, C.white);
        const lines = doc.splitTextToSize(s(col.h), col.w - 2);
        text(lines[0], cx + col.w / 2, y + (lines[1] ? 4 : 5.5), { align: 'center' });
        if (lines[1]) text(lines[1], cx + col.w / 2, y + 7, { align: 'center' });
        cx += col.w;
    });
    y += headerH;
}

drawTableHeader();

datos.proyecciones.forEach((p, idx) => {
    checkPageBreak(rowH + 1);
    if (y > PH - 22) {
        newPage();
        drawTableHeader();
    }

    const isEven = idx % 2 === 0;
    if (isEven) fillRect(ML, y, CW, rowH, C.greyXLight);

    const flujoColor = p.flujoAnual >= 0 ? C.accent : C.danger;
    const benColor = p.beneficioAcumulado >= 0 ? C.accent : C.danger;

    const values = [
        { v: p.year,                         color: C.dark, bold: true },
        { v: '+' + f(p.ingresosAlquiler) + ' €', color: C.accent },
        { v: '-' + f(p.gastosFijos) + ' €',      color: C.danger },
        { v: '-' + f(p.cuotaHipoteca) + ' €',    color: C.danger },
        { v: '-' + f(p.tax) + ' €',               color: C.danger },
        { v: f(p.flujoAnual) + ' €',              color: flujoColor, bold: true },
        { v: p.rentabilidadFlujo.toFixed(1) + '%', color: flujoColor },
        { v: f(p.valorVivienda) + ' €',            color: C.info },
        { v: f(p.precioVentaNeto) + ' €',          color: C.info },
        { v: f(p.beneficioAcumulado) + ' €',       color: benColor, bold: true },
    ];

    let cx = ML;
    values.forEach((cell, ci) => {
        const col = cols[ci];
        doc.setFont('helvetica', cell.bold ? 'bold' : 'normal');
        doc.setFontSize(6.8);
        doc.setTextColor(...cell.color);
        text(String(cell.v), cx + col.w - 1, y + 4.5, { align: 'right' });
        cx += col.w;
    });

    // Línea separadora
    doc.setDrawColor(...C.greyLight);
    doc.setLineWidth(0.1);
    doc.line(ML, y + rowH, ML + CW, y + rowH);
    y += rowH;
});

} // fin sec proyecciones

// ── CALCULADORA INVERSA EN PDF ────────────────────────────
// Solo la incluimos si el usuario ha ejecutado calcularInversa()
if (sec('inversa')) {
const invResEl = document.getElementById('inversaResultadoBody');
const invNotaEl = document.getElementById('inversaResultadoNota');
const invResVisible = document.getElementById('inversaResultado');
if (invResVisible && invResVisible.style.display !== 'none' && invResEl && invResEl.innerHTML.trim()) {
    newPage();
    sectionTitle(esEs ? 'Analisis Inverso — Precio Maximo del Inmueble' : 'Reverse Analysis — Maximum Property Price');

    // Leer los valores calculados directamente del DOM
    const precioActualPDF = parseFloat(document.getElementById('precio')?.value) || 0;
    const entradaPctPDF = datos.montoEntrada > 0 && precioActualPDF > 0 ? datos.montoEntrada / precioActualPDF : 0.2;
    const entradaPctDispPDF = Math.round(entradaPctPDF * 100);
    const targetCFPDF = parseFloat(document.getElementById('inverseCashflow')?.value) || 0;
    const interesPDF = parseFloat(document.getElementById('interes')?.value) || 0;
    const anosPDF = parseFloat(document.getElementById('anos')?.value) || 25;
    const alquilerPDF = parseFloat(document.getElementById('alquiler')?.value) || 0;

    // Recalcular el precio máximo para el PDF (bisección)
    const ibiPDF = parseFloat(document.getElementById('ibi')?.value) || 0;
    const comunidadPDF = parseFloat(document.getElementById('comunidad')?.value) || 0;
    const seguroPDF = parseFloat(document.getElementById('seguro')?.value) || 0;
    const seguroImpagoPDF = parseFloat(document.getElementById('seguroImpago')?.value) || 0;
    const mantenimientoPDF = parseFloat(document.getElementById('mantenimiento')?.value) || 0;
    const adminPDF = parseFloat(document.getElementById('administracion')?.value) || 0;
    const taxAlquilerPDF = parseFloat(document.getElementById('taxAlquiler')?.value) || 19;
    const mesesVacioPDF = parseFloat(document.getElementById('mesesVacio')?.value) || 0;
    const impuestosTipoPDF = document.getElementById('tipoVivienda')?.value || 'segunda';
    const ccaaValPDF = parseFloat(document.getElementById('ccaaSelector')?.value) || NaN;
    const itpRatePDF = impuestosTipoPDF === 'nueva' ? 0.112 : (!isNaN(ccaaValPDF) && ccaaValPDF > 0 ? ccaaValPDF / 100 : 0.07);
    const gastosCompraFijosPDF = parseFloat(document.getElementById('gastosCompra')?.value) || 0;
    const reformaPDF = parseFloat(document.getElementById('reforma')?.value) || 0;
    const gastosHipPDF = parseFloat(document.getElementById('gastosHipoteca')?.value) || 0;
    const financiacionPDF = document.getElementById('financiacionTipo')?.value || 'con_hipoteca';

    const ingresosPDF = alquilerPDF * 12 * (1 - mesesVacioPDF / 12);
    const gastosFijosAnualesPDF = ibiPDF + comunidadPDF * 12 + seguroPDF + seguroImpagoPDF + mantenimientoPDF + adminPDF * 12;
    const gastosFijosMensPDF = gastosFijosAnualesPDF / 12;

    function cfParaPrecioPDF(precio) {
        const ent = precio * entradaPctPDF;
        const prest = financiacionPDF === 'con_hipoteca' ? precio - ent : 0;
        const cuota = calcularCuotaHipoteca(prest, interesPDF, anosPDF);
        const intAnu = prest * (interesPDF / 100);
        const alqNeto = ingresosPDF - gastosFijosAnualesPDF - intAnu;
        const tax = Math.max(0, alqNeto) * (taxAlquilerPDF / 100) / 12;
        return (ingresosPDF / 12) - cuota - gastosFijosMensPDF - tax;
    }
    let loPDF = 10000, hiPDF = 2000000, midPDF = loPDF;
    for (let i = 0; i < 80; i++) {
        midPDF = (loPDF + hiPDF) / 2;
        if (cfParaPrecioPDF(midPDF) > targetCFPDF) loPDF = midPDF; else hiPDF = midPDF;
    }
    const precioMaxPDF = Math.round(midPDF / 500) * 500;
    const cfRealPDF = cfParaPrecioPDF(precioMaxPDF);
    const entradaMaxPDF = Math.round(precioMaxPDF * entradaPctPDF);
    const impuestosMaxPDF = Math.round(precioMaxPDF * itpRatePDF);
    const extrasMaxPDF = gastosCompraFijosPDF + reformaPDF + (financiacionPDF === 'con_hipoteca' ? gastosHipPDF : 0);
    const invMaxPDF = entradaMaxPDF + impuestosMaxPDF + extrasMaxPDF;
    const prestamoMaxPDF = financiacionPDF === 'con_hipoteca' ? precioMaxPDF - entradaMaxPDF : 0;
    const cuotaMaxPDF = Math.round(calcularCuotaHipoteca(prestamoMaxPDF, interesPDF, anosPDF));
    const margenPDF = precioMaxPDF - precioActualPDF;

    // Bloque explicativo
    setFont('normal', 8.5, C.text || C.grey);
    const introLines = doc.splitTextToSize(s(esEs
        ? 'Dado un cashflow mensual objetivo de ' + f(targetCFPDF) + ' EUR/mes, manteniendo los mismos parametros de hipoteca, gastos e impuestos, el precio maximo que puedes pagar por el inmueble es:'
        : 'Given a target monthly cashflow of ' + f(targetCFPDF) + ' EUR/month, keeping the same mortgage, cost and tax parameters, the maximum price you can pay is:'), CW);
    introLines.forEach(line => { text(line, ML, y); y += 5; });
    y += 3;

    // Precio máximo — caja destacada
    checkPageBreak(18);
    fillRect(ML, y, CW, 14, C.primary);
    setFont('bold', 10, C.white);
    text(s(esEs ? 'PRECIO MAXIMO DEL INMUEBLE' : 'MAXIMUM PROPERTY PRICE'), ML + 4, y + 5.5);
    setFont('bold', 14, C.white);
    text(f(precioMaxPDF) + ' EUR', ML + CW - 4, y + 10, { align: 'right' });
    const margenTxt = (margenPDF >= 0 ? '+' : '') + f(margenPDF) + ' EUR ' + s(esEs ? 'vs. precio actual' : 'vs. current price');
    setFont('normal', 8, [180, 210, 255]);
    text(margenTxt, ML + 4, y + 11.5);
    y += 18;

    // Sección desembolso
    sectionTitle(esEs ? 'Desembolso inicial necesario' : 'Required upfront payment');
    metricRow(s(esEs ? 'Entrada (' + entradaPctDispPDF + '%)' : 'Down payment (' + entradaPctDispPDF + '%)'), f(entradaMaxPDF) + ' EUR', C.text || C.dark);
    metricRow(s('Impuestos (ITP/IVA+AJD)'), f(impuestosMaxPDF) + ' EUR', C.danger, C.greyXLight);
    metricRow(s(esEs ? 'Gastos compra + reforma' : 'Purchase costs + renovation'), f(extrasMaxPDF) + ' EUR', C.danger);
    // Total
    checkPageBreak(10);
    fillRect(ML, y, CW, 8, C.primaryDark);
    setFont('bold', 9, C.white);
    text(s(esEs ? 'CAPITAL TOTAL A DESEMBOLSAR' : 'TOTAL CAPITAL REQUIRED'), ML + 4, y + 5.5);
    text(f(invMaxPDF) + ' EUR', ML + CW - 4, y + 5.5, { align: 'right' });
    y += 12;

    // Sección resultado mensual
    sectionTitle(esEs ? 'Resultado mensual con este precio' : 'Monthly result at this price');
    if (financiacionPDF === 'con_hipoteca') {
        metricRow(s(esEs ? 'Cuota hipoteca mensual' : 'Monthly mortgage'), f(cuotaMaxPDF) + ' EUR/mes', C.danger, C.greyXLight);
    }
    metricRow(s(esEs ? 'Ingresos alquiler mensuales' : 'Monthly rent income'), f(Math.round(ingresosPDF / 12)) + ' EUR/mes', C.accent);
    metricRow(s(esEs ? 'Gastos fijos mensuales' : 'Monthly fixed costs'), f(Math.round(gastosFijosMensPDF)) + ' EUR/mes', C.danger, C.greyXLight);

    // Cashflow resultado
    checkPageBreak(10);
    const cfColor = cfRealPDF >= 0 ? C.accent : C.danger;
    fillRect(ML, y, CW, 8, cfColor);
    setFont('bold', 9, C.white);
    text(s(esEs ? 'CASHFLOW MENSUAL NETO RESULTANTE' : 'RESULTING NET MONTHLY CASHFLOW'), ML + 4, y + 5.5);
    text(f(cfRealPDF) + ' EUR/mes', ML + CW - 4, y + 5.5, { align: 'right' });
    y += 12;

    // Nota explicativa
    setFont('normal', 7.5, C.grey);
    const notaLines = doc.splitTextToSize(s(esEs
        ? '* Cálculo por bisección numérica con los parámetros actuales: ' + interesPDF + '% de interés, ' + anosPDF + ' años de hipoteca, ' + alquilerPDF + ' EUR/mes de alquiler y ' + entradaPctDispPDF + '% de entrada.'
        : '* Numerical bisection calculation using current parameters: ' + interesPDF + '% interest, ' + anosPDF + '-year mortgage, ' + alquilerPDF + ' EUR/month rent, ' + entradaPctDispPDF + '% down payment.'), CW);
    notaLines.forEach(line => { text(line, ML, y); y += 4.5; });
    y += 4;
}

} // fin sec inversa

// ── TABLA DE HIPOTECA EN PDF ──────────────────────────────
if (sec('hipoteca') && datos.financiacionTipo === 'con_hipoteca' && datos.prestamo > 0) {
    newPage();
    sectionTitle(esEs ? 'Cuadro de Amortización Hipotecaria' : 'Mortgage Amortization Schedule');

    // Cabecera resumen
    setFont('normal', 8.5, C.text || C.grey);
    const hipIntro = s(esEs
        ? 'Préstamo: ' + f(datos.prestamo) + ' EUR · Interés: ' + datos.interes + '% · Plazo: ' + datos.anos + ' años · Cuota mensual: ' + f(datos.cuotaHipoteca) + ' EUR/mes'
        : 'Loan: ' + f(datos.prestamo) + ' EUR · Rate: ' + datos.interes + '% · Term: ' + datos.anos + ' years · Monthly: ' + f(datos.cuotaHipoteca) + ' EUR/mo');
    text(hipIntro, ML, y); y += 8;

    // Reconstruir cuadro de amortización año a año
    const capitalH = datos.prestamo;
    const interesH = datos.interes;
    const anosH = datos.anos;
    const iH = interesH / 100 / 12;
    let saldoH = capitalH;
    let cuotaH = calcularCuotaHipoteca(capitalH, interesH, anosH);

    // Comprobar si hay amortización simulada activa
    const amortYearEl = document.getElementById('amortYear');
    const amortImporteEl = document.getElementById('amortImporte');
    const amortTipoEl = document.getElementById('amortTipo');
    const amortResultadoEl = document.getElementById('amortResultado');
    const tieneAmort = amortResultadoEl && amortResultadoEl.style.display !== 'none' && amortImporteEl && parseFloat(amortImporteEl.value) > 0;
    const amortYearVal = tieneAmort && amortYearEl ? parseInt(amortYearEl.value) : null;
    const amortImporteVal = tieneAmort && amortImporteEl ? parseFloat(amortImporteEl.value) : 0;
    const amortTipoVal = tieneAmort && amortTipoEl ? amortTipoEl.value : 'cuota';

    // Cabecera de tabla
    checkPageBreak(10);
    const colsH = [ML, ML+18, ML+46, ML+76, ML+106, ML+136];
    const colWH = [16, 26, 28, 28, 28, CW - 136 + ML - ML];
    fillRect(ML, y, CW, 7, C.primaryDark || [15,52,96]);
    setFont('bold', 7, C.white);
    const hdrH = [esEs?'Año':'Year', esEs?'Cuota/mes':'Pmt/mo', esEs?'Capital':'Principal', esEs?'Intereses':'Interest', esEs?'Amort. extra':'Extra', esEs?'Saldo pendiente':'Balance'];
    hdrH.forEach((h, i2) => text(s(h), colsH[i2] + 1, y + 5));
    y += 9;

    let totalCapH = 0, totalIntH = 0, totalAmortH = 0;
    let amortAplicadaH = false;
    let filasPDF = [];

    for (let year = 1; year <= anosH; year++) {
        if (saldoH <= 0) break;
        let capYear = 0, intYear = 0, amortVal = 0;
        for (let m = 0; m < 12; m++) {
            if (saldoH <= 0) break;
            const intMes = saldoH * iH;
            const capMes = Math.min(cuotaH - intMes, saldoH);
            saldoH -= capMes;
            capYear += capMes;
            intYear += intMes;
        }
        if (amortYearVal && year === amortYearVal && saldoH > 0 && !amortAplicadaH) {
            amortVal = Math.min(amortImporteVal, saldoH);
            saldoH -= amortVal;
            amortAplicadaH = true;
            if (saldoH > 0 && amortTipoVal === 'cuota') {
                cuotaH = calcularCuotaHipoteca(saldoH, interesH, anosH - year);
            }
        }
        totalCapH += capYear; totalIntH += intYear; totalAmortH += amortVal;
        filasPDF.push({ year, cuota: cuotaH, cap: capYear, int: intYear, amort: amortVal, saldo: Math.max(0, saldoH) });
        if (saldoH <= 0) break;
    }

    filasPDF.forEach((f2, idx) => {
        checkPageBreak(7);
        const bg = idx % 2 === 0 ? [248,250,252] : C.white;
        fillRect(ML, y, CW, 6.5, bg);
        if (f2.amort > 0) fillRect(ML, y, CW, 6.5, [255,247,230]);
        setFont('bold', 7, C.dark || C.text);
        text(s((esEs?'Año ':'Year ') + f2.year), colsH[0] + 1, y + 4.5);
        setFont('normal', 7, C.text || C.grey);
        text(s(f(Math.round(f2.cuota))), colsH[1] + 1, y + 4.5);
        setFont('normal', 7, C.accent || [16,185,129]);
        text(s(f(Math.round(f2.cap))), colsH[2] + 1, y + 4.5);
        setFont('normal', 7, C.danger || [239,68,68]);
        text(s(f(Math.round(f2.int))), colsH[3] + 1, y + 4.5);
        setFont('normal', 7, f2.amort > 0 ? [180,90,0] : C.grey);
        text(s(f2.amort > 0 ? ('-' + f(Math.round(f2.amort))) : '—'), colsH[4] + 1, y + 4.5);
        setFont('bold', 7, C.dark || C.text);
        text(s(f(Math.round(f2.saldo))), colsH[5] + 1, y + 4.5);
        y += 6.5;
    });

    // Fila de totales
    checkPageBreak(8);
    fillRect(ML, y, CW, 7, C.primaryDark || [15,52,96]);
    setFont('bold', 7.5, C.white);
    text('TOTAL', colsH[0] + 1, y + 5);
    text('—', colsH[1] + 1, y + 5);
    text(s(f(Math.round(totalCapH))), colsH[2] + 1, y + 5);
    text(s(f(Math.round(totalIntH))), colsH[3] + 1, y + 5);
    text(s(totalAmortH > 0 ? '-' + f(Math.round(totalAmortH)) : '—'), colsH[4] + 1, y + 5);
    text('0', colsH[5] + 1, y + 5);
    y += 11;

    // Nota
    setFont('normal', 7, C.grey);
    text(s(esEs ? '* Cuadro de amortización francés (cuota constante). Valores anuales agregados.' : '* French amortization (constant payment). Annual aggregated values.'), ML, y);
    y += 8;

    if (tieneAmort) {
        const amortNota = s(esEs
            ? '* Amortización anticipada simulada: ' + f(Math.round(amortImporteVal)) + ' EUR en el año ' + amortYearVal + ' (reduce ' + (amortTipoVal === 'cuota' ? 'cuota' : 'plazo') + ').'
            : '* Early repayment simulated: ' + f(Math.round(amortImporteVal)) + ' EUR in year ' + amortYearVal + ' (reduces ' + (amortTipoVal === 'cuota' ? 'payment' : 'term') + ').');
        text(amortNota, ML, y); y += 8;
    }
}

if (sec('comparativa')) {
// ── ÚLTIMA PÁGINA: COMPARATIVA DE RENTABILIDADES ─────────
newPage();
sectionTitle(esEs ? 'Comparativa con Otras Inversiones' : 'Comparison with Other Investments');

const comparaciones = [
    { label: esEs ? '>> Tu inversion inmobiliaria' : '>> Your real estate investment', value: datos.rentabilidadAnual },
    { label: esEs ? '   Deposito bancario' : '   Bank deposit',       value: 2.8 },
    { label: esEs ? '   Bono español 10 años' : '   Spanish 10yr bond',value: 3.2 },
    { label: esEs ? '   S&P 500 (media historica)' : '   S&P 500 (historical avg)', value: 10.5 },
    { label: esEs ? '   EURO STOXX 50 (historico)' : '   EURO STOXX 50 (historical)', value: 7.1 },
    { label: esEs ? '   Inmobiliario Espana (media)' : '   Spanish RE avg', value: 5.2 },
];

const barMaxVal = Math.max(...comparaciones.map(c => c.value), 12);
const barAreaW = CW - 70;
comparaciones.forEach((comp, i) => {
    checkPageBreak(9);
    const isThis = i === 0;
    const barW = Math.max(1, (comp.value / barMaxVal) * barAreaW);
    const barColor = isThis
        ? (comp.value >= 6 ? C.accent : comp.value >= 3 ? C.warning : C.danger)
        : C.greyLight;

    // Label
    setFont(isThis ? 'bold' : 'normal', 8, isThis ? C.dark : C.grey);
    text(comp.label, ML, y + 5.5);

    // Barra
    const barX = ML + 68;
    fillRect(barX, y + 1, barAreaW, 6, [240, 240, 240]);
    fillRect(barX, y + 1, barW, 6, barColor);

    // Valor
    setFont('bold', 8, isThis ? C.primary : C.grey);
    text(fp(comp.value), ML + CW - 1, y + 5.5, { align: 'right' });
    y += 10;
});

y += 6;
// Resumen final tipo tarjeta
checkPageBreak(35);
fillRect(ML, y, CW, 32, C.greyXLight);
doc.setDrawColor(...C.primary);
doc.setLineWidth(0.5);
doc.rect(ML, y, CW, 32, 'D');
setFont('bold', 10, C.primary);
text(esEs ? 'RESUMEN EJECUTIVO' : 'EXECUTIVE SUMMARY', ML + 5, y + 8);
setFont('normal', 8.5, C.dark);
const resumen = esEs
    ? `Capital invertido: ${f(datos.inversionInicial)} €   |   TIR estimada: ${fp(datos.rentabilidadAnual)}   |   Cashflow mensual: ${f(datos.flujoMensual)} €/mes`
    : `Capital invested: ${f(datos.inversionInicial)} €   |   Est. IRR: ${fp(datos.rentabilidadAnual)}   |   Monthly cashflow: ${f(datos.flujoMensual)} €/mes`;
text(resumen, ML + 5, y + 17);
setFont('normal', 8, C.grey);
const benefStr = esEs
    ? `Beneficio total proyectado en ${datos.anosAnalisis} años: ${f(datos.beneficioTotal)} €   |   Neto si vendes al final: ${f(datos.precioVentaNeto)} €`
    : `Total projected profit over ${datos.anosAnalisis} years: ${f(datos.beneficioTotal)} €   |   Net sale proceeds: ${f(datos.precioVentaNeto)} €`;
text(benefStr, ML + 5, y + 25);
y += 40;

} // fin sec comparativa

// ── HERRAMIENTAS EN PDF ───────────────────────────────────

// TURÍSTICO
if (sec('turistico')) {
    const trEl = document.getElementById('turisticoResultado');
    if (trEl && trEl.innerHTML && trEl.style.display !== 'none') {
        const pNoche = parseFloat(document.getElementById('precioNoche')?.value) || 0;
        const ocup   = parseFloat(document.getElementById('ocupacionTuristico')?.value) || 65;
        const com    = parseFloat(document.getElementById('comisionPlataforma')?.value) || 15;
        const limp   = parseFloat(document.getElementById('gastosLimpieza')?.value) || 0;
        const sum    = parseFloat(document.getElementById('suministrosTuristico')?.value) || 0;
        const alqLD  = parseFloat(document.getElementById('alquiler')?.value) || 0;
        const mvLD   = parseFloat(document.getElementById('mesesVacio')?.value) || 0;
        if (pNoche > 0) {
            const noches = 365 * (ocup/100);
            const brutos = pNoche * noches;
            const netos  = brutos - brutos*(com/100) - limp - sum;
            const ldAnual = alqLD * 12 * (1 - mvLD/12);
            newPage();
            sectionTitle(esEs ? 'Comparativa Turistico vs. Larga Duracion' : 'Short-term vs. Long-term Rental');
            twoColMetrics([
                { label: esEs ? 'Precio por noche' : 'Price per night', value: f(pNoche) + ' EUR/noche' },
                { label: esEs ? 'Ocupacion media' : 'Avg. occupancy', value: ocup + '%' },
                { label: esEs ? 'Noches ocupadas/ano' : 'Occupied nights/yr', value: Math.round(noches) + '' },
                { label: esEs ? 'Ingresos brutos turistico' : 'Gross short-term income', value: f(Math.round(brutos)) + ' EUR/ano', color: C.accent },
                { label: esEs ? 'Comision plataforma (' + com + '%)' : 'Platform fee (' + com + '%)', value: '-' + f(Math.round(brutos*com/100)) + ' EUR' },
                { label: esEs ? 'Limpieza + suministros' : 'Cleaning + utilities', value: '-' + f(limp+sum) + ' EUR/ano' },
                { label: esEs ? 'Ingresos netos turistico' : 'Net short-term income', value: f(Math.round(netos)) + ' EUR/ano', color: C.accent },
                { label: esEs ? 'Ingresos larga duracion' : 'Long-term rental income', value: f(Math.round(ldAnual)) + ' EUR/ano' },
                { label: esEs ? 'Diferencia anual' : 'Annual difference', value: (netos-ldAnual >= 0 ? '+' : '') + f(Math.round(netos-ldAnual)) + ' EUR', color: netos-ldAnual >= 0 ? C.accent : C.danger },
            ]);
        }
    }
}

// CAPACIDAD DE COMPRA
if (sec('capacidad')) {
    const capEl = document.getElementById('capacidadResultado');
    if (capEl && capEl.style.display !== 'none' && capEl.innerHTML.trim()) {
        const sueldo = parseFloat(document.getElementById('sueldoNeto')?.value) || 0;
        const otros  = parseFloat(document.getElementById('otrosIngresos')?.value) || 0;
        const deudas = parseFloat(document.getElementById('otrasDeudas')?.value) || 0;
        const ahorros= parseFloat(document.getElementById('ahorrosDisponibles')?.value) || 0;
        if (sueldo > 0) {
            const total = sueldo + otros;
            const c35 = total*0.35 - deudas;
            const c40 = total*0.40 - deudas;
            newPage();
            sectionTitle(esEs ? 'Capacidad de Compra — Cuanto Puedo Pagar' : 'Purchase Capacity — How Much Can I Afford');
            twoColMetrics([
                { label: esEs ? 'Sueldo neto mensual' : 'Net monthly salary', value: f(sueldo) + ' EUR/mes' },
                { label: esEs ? 'Otros ingresos' : 'Other income', value: f(otros) + ' EUR/mes' },
                { label: esEs ? 'Total ingresos' : 'Total income', value: f(total) + ' EUR/mes', color: C.primary },
                { label: esEs ? 'Otras deudas' : 'Other debts', value: f(deudas) + ' EUR/mes', color: C.danger },
                { label: esEs ? 'Ahorros disponibles' : 'Available savings', value: f(ahorros) + ' EUR' },
                { label: esEs ? 'Cuota max conservador (35%)' : 'Max payment conservative (35%)', value: f(Math.max(0,Math.round(c35))) + ' EUR/mes', color: C.accent },
                { label: esEs ? 'Cuota max moderado (40%)' : 'Max payment moderate (40%)', value: f(Math.max(0,Math.round(c40))) + ' EUR/mes', color: C.warning },
            ]);
        }
    }
}

// ROI REFORMA
if (sec('reforma')) {
    const refEl = document.getElementById('reformaResultado');
    if (refEl && refEl.style.display !== 'none' && refEl.innerHTML.trim()) {
        const coste    = parseFloat(document.getElementById('refCoste')?.value) || 0;
        const antes    = parseFloat(document.getElementById('refAlquilerAntes')?.value) || 0;
        const despues  = parseFloat(document.getElementById('refAlquilerDespues')?.value) || 0;
        const plusv    = parseFloat(document.getElementById('refPlusvalia')?.value) || 0;
        if (coste > 0) {
            const mejora = (despues - antes) * 12;
            const roi    = coste > 0 ? (mejora/coste*100) : 0;
            const payb   = mejora > 0 ? (coste/mejora) : 0;
            newPage();
            sectionTitle(esEs ? 'ROI de Reforma' : 'Renovation ROI');
            twoColMetrics([
                { label: esEs ? 'Coste de la reforma' : 'Renovation cost', value: f(coste) + ' EUR', color: C.danger },
                { label: esEs ? 'Alquiler antes de reforma' : 'Rent before renovation', value: f(antes) + ' EUR/mes' },
                { label: esEs ? 'Alquiler con reforma' : 'Rent after renovation', value: f(despues) + ' EUR/mes', color: C.accent },
                { label: esEs ? 'Mejora anual de ingresos' : 'Annual income improvement', value: '+' + f(Math.round(mejora)) + ' EUR/ano', color: C.accent },
                { label: esEs ? 'Plusvalia estimada' : 'Estimated appreciation', value: f(plusv) + ' EUR', color: C.info },
                { label: esEs ? 'ROI anual de la reforma' : 'Annual renovation ROI', value: roi.toFixed(1) + '%', color: roi>=10?C.accent:roi>=5?C.warning:C.danger },
                { label: esEs ? 'Payback (anos)' : 'Payback (years)', value: payb > 0 ? payb.toFixed(1) + ' anos' : 'N/A' },
                { label: esEs ? 'Retorno total 10 anos' : 'Total return 10 years', value: f(Math.round(mejora*10+plusv)) + ' EUR', color: C.accent },
            ]);
        }
    }
}

// EURIBOR
if (sec('euribor')) {
    const eurEl = document.getElementById('euriborResultado');
    if (eurEl && eurEl.style.display !== 'none' && eurEl.innerHTML.trim()) {
        const capital = parseFloat(document.getElementById('eurCapital')?.value) || 0;
        const dif     = parseFloat(document.getElementById('eurDiferencial')?.value) || 0.75;
        const anos_e  = parseFloat(document.getElementById('eurAnos')?.value) || 20;
        const alqE    = parseFloat(document.getElementById('eurAlquiler')?.value) || 0;
        const gastE   = parseFloat(document.getElementById('eurGastos')?.value) || 0;
        if (capital > 0) {
            function cuotaEur(eur) {
                var t = Math.max(0, eur+dif)/100/12, n=anos_e*12;
                return t>0 ? capital*t*Math.pow(1+t,n)/(Math.pow(1+t,n)-1) : capital/n;
            }
            newPage();
            sectionTitle(esEs ? 'Simulador Euribor — Hipoteca Variable' : 'Euribor Simulator — Variable Rate Mortgage');
            twoColMetrics([
                { label: esEs ? 'Capital pendiente' : 'Outstanding balance', value: f(capital) + ' EUR' },
                { label: esEs ? 'Diferencial del banco' : 'Bank spread', value: dif.toFixed(2) + '%' },
                { label: esEs ? 'Anos restantes' : 'Years remaining', value: anos_e + '' },
                { label: esEs ? 'Alquiler mensual' : 'Monthly rent', value: f(alqE) + ' EUR/mes' },
            ]);
            var escenarios = [
                {label: 'Euribor -0.5%',  eur: -0.5},
                {label: 'Euribor actual 2.5%', eur: 2.5},
                {label: 'Euribor +1% (3.5%)', eur: 3.5},
                {label: 'Euribor +2% (4.5%)', eur: 4.5},
            ];
            escenarios.forEach(function(esc) {
                var c = cuotaEur(esc.eur);
                var cf = alqE - c - gastE;
                metricRow(esc.label + ' (tipo ' + Math.max(0,esc.eur+dif).toFixed(2) + '%)   cuota: ' + f(Math.round(c)) + ' EUR   cashflow: ' + f(Math.round(cf)) + ' EUR/mes', '', cf>=0?C.accent:C.danger);
            });
        }
    }
}

// ANÁLISIS RÁPIDO
if (sec('rapido')) {
    const rpEl = document.getElementById('rapidoResultado');
    if (rpEl && rpEl.innerHTML.trim()) {
        const rpP = parseFloat(document.getElementById('rpPrecio')?.value) || 0;
        const rpE = parseFloat(document.getElementById('rpEntrada')?.value) || 0;
        const rpA = parseFloat(document.getElementById('rpAlquiler')?.value) || 0;
        const rpN = parseFloat(document.getElementById('rpAnos')?.value) || 20;
        if (rpP > 0 && rpA > 0) {
            var prest = Math.max(0, rpP-rpE);
            var ii = 3.5/100/12, nn = 25*12;
            var cuota_rp = prest>0 ? (ii>0 ? prest*ii*Math.pow(1+ii,nn)/(Math.pow(1+ii,nn)-1) : prest/nn) : 0;
            var gMes = rpP*0.015/12;
            var cf_rp = rpA - cuota_rp - gMes;
            var rb_rp = rpA*12/rpP*100;
            newPage();
            sectionTitle(esEs ? 'Analisis Rapido — Me Sale la Cuenta?' : 'Quick Analysis — Does It Work?');
            twoColMetrics([
                { label: esEs ? 'Precio del piso' : 'Property price', value: f(rpP) + ' EUR' },
                { label: esEs ? 'Entrada disponible' : 'Available deposit', value: f(rpE) + ' EUR' },
                { label: esEs ? 'Alquiler esperado' : 'Expected rent', value: f(rpA) + ' EUR/mes' },
                { label: esEs ? 'Anos de analisis' : 'Analysis years', value: rpN + '' },
                { label: esEs ? 'Cuota hipoteca estimada (3.5%, 25 anos)' : 'Est. mortgage (3.5%, 25 yrs)', value: f(Math.round(cuota_rp)) + ' EUR/mes', color: C.danger },
                { label: esEs ? 'Cashflow estimado' : 'Estimated cashflow', value: f(Math.round(cf_rp)) + ' EUR/mes', color: cf_rp>=0?C.accent:C.danger },
                { label: esEs ? 'Rentabilidad bruta' : 'Gross yield', value: rb_rp.toFixed(1) + '%', color: rb_rp>=5?C.accent:rb_rp>=4?C.warning:C.danger },
                { label: esEs ? 'Veredicto' : 'Verdict', value: cf_rp>100&&rb_rp>5 ? (esEs?'Si sale la cuenta':'Yes, it works') : cf_rp>-200&&rb_rp>4 ? (esEs?'Sale justo':'Just about') : (esEs?'No sale':'Does not work'), color: cf_rp>100&&rb_rp>5?C.accent:cf_rp>-200&&rb_rp>4?C.warning:C.danger },
            ]);
        }
    }
}

// Aviso legal
setFont('normal', 6.5, C.grey);
const legalText = esEs
    ? 'Aviso legal: Este informe es orientativo y no constituye asesoramiento financiero, fiscal ni jurídico. Los cálculos son estimaciones basadas en la normativa vigente y los parámetros introducidos. Consulte siempre con un profesional cualificado antes de tomar decisiones de inversión. pisorentable.org'
    : 'Legal disclaimer: This report is for guidance only and does not constitute financial, tax or legal advice. Calculations are estimates based on current regulations and entered parameters. Always consult a qualified professional before making investment decisions. pisorentable.org';
const legalLines = doc.splitTextToSize(s(legalText), CW);
checkPageBreak(legalLines.length * 4 + 4);
fillRect(ML, y, CW, legalLines.length * 3.8 + 4, [248, 249, 250]);
y += 3;
legalLines.forEach(line => { text(line, ML + 2, y); y += 3.8; });

// Numeración de páginas
const totalPages = doc.internal.getNumberOfPages();
for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    fillRect(0, PH - 8, PW, 8, C.darkMid);
    setFont('normal', 7, [148, 163, 184]);
    text('pisorentable.org  |  ' + (esEs ? 'Analisis de Inversion Inmobiliaria' : 'Real Estate Investment Analysis'), ML, PH - 3);
    setFont('normal', 7, [148, 163, 184]);
    text(`${i} / ${totalPages}`, PW - MR, PH - 3, { align: 'right' });
    // Franja acento en todas las páginas (excepto portada que ya la tiene)
    if (i > 1) fillRect(0, 0, PW, 2.5, C.primary);
}

doc.save('analisis-inversion-inmobiliaria.pdf');
```

}

// ============================================================
// ============================================================
// ARRANQUE GLOBAL — único DOMContentLoaded
// ============================================================
document.addEventListener(‘DOMContentLoaded’, () => {
// Partículas
createParticles();

```
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

// Selector CC.AA. — ajusta el ITP automáticamente
const ccaaSelector = document.getElementById('ccaaSelector');
const tipoViviendaSel = document.getElementById('tipoVivienda');
const itpHint = document.getElementById('itpHint');
const ccaaGroup = document.getElementById('ccaaGroup');

function actualizarITPHint() {
    if (!itpHint) return;
    const t = translations[currentLanguage];
    const tipoVivienda = tipoViviendaSel ? tipoViviendaSel.value : 'segunda';
    if (tipoVivienda === 'nueva') {
        itpHint.textContent = t.itp_hint_nueva;
        if (ccaaGroup) ccaaGroup.style.display = 'none';
    } else {
        if (ccaaGroup) ccaaGroup.style.display = 'block';
        const ccaaVal = ccaaSelector ? ccaaSelector.value : '';
        if (ccaaVal) {
            itpHint.textContent = `${t.itp_hint_ccaa}: ${ccaaVal}%`;
        } else {
            itpHint.textContent = t.itp_hint_default;
        }
    }
}

if (ccaaSelector) {
    ccaaSelector.addEventListener('change', () => {
        actualizarITPHint();
        calcular();
    });
}

if (tipoViviendaSel) {
    tipoViviendaSel.addEventListener('change', () => {
        actualizarITPHint();
        calcular();
    });
}

actualizarITPHint();

// Botón reset
const resetBtn = document.getElementById('resetBtn');
if (resetBtn) {
    resetBtn.addEventListener('click', resetCalculadora);
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

// Botón PDF
const pdfBtn = document.getElementById('pdfBtn');
if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
        if (!window._lastDatos) {
            alert('Primero debes calcular la inversion antes de exportar.');
            return;
        }
        openPdfModal();
    });
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

// Nuevas funcionalidades
mostrarBannerCookies();
initDarkMode();
initTooltips();

// WhatsApp, Guardar, Comparar, Turístico
document.getElementById('whatsappBtn')?.addEventListener('click', compartirWhatsApp);
document.getElementById('saveBtn')?.addEventListener('click', openSavedModal);
document.getElementById('compareBtn')?.addEventListener('click', openCompareModal);
// Tab turístico: actualizar en tiempo real al cambiar cualquier campo
['precioNoche','ocupacionTuristico','comisionPlataforma','gastosLimpieza','suministrosTuristico'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', calcularTuristico);
});
// También cuando cambia el alquiler de larga duración (para la comparativa)
document.getElementById('alquiler')?.addEventListener('input', calcularTuristico);
document.getElementById('mesesVacio')?.addEventListener('input', calcularTuristico);
// Calcular al cargar
calcularTuristico();

// ── Referencia de mercado ──
const cpInput = document.getElementById('codigoPostal');
const precioRefInput = document.getElementById('precioRefM2');
const superficieInput = document.getElementById('superficieM2');
const descuentoInput = document.getElementById('descuentoOferta');
const precioInputMercado = document.getElementById('precio');

// Precio de referencia: si el usuario escribe manualmente, desactivar autocompletado
if (precioRefInput) {
    precioRefInput.addEventListener('input', () => {
        _mercadoPrecioManual = true;
        actualizarMercado();
    });
    // Si borra el campo, volver a modo automático
    precioRefInput.addEventListener('blur', () => {
        if (!precioRefInput.value) {
            _mercadoPrecioManual = false;
            actualizarMercado();
        }
    });
}
// Código postal: escuchar todas las formas de entrada
if (cpInput) {
    ['input', 'change'].forEach(ev => cpInput.addEventListener(ev, actualizarMercado));
    cpInput.addEventListener('paste', () => setTimeout(actualizarMercado, 20));
}
if (superficieInput) superficieInput.addEventListener('input', actualizarMercado);
if (descuentoInput) descuentoInput.addEventListener('input', actualizarMercado);
if (precioInputMercado) precioInputMercado.addEventListener('input', actualizarMercado);
```

});
// ============================================================
// COOKIES
// ============================================================
function mostrarBannerCookies() {
const banner = document.getElementById(‘cookie-banner’);
if (!banner) return;
if (localStorage.getItem(‘cookiesAceptadas’) !== ‘true’) {
setTimeout(() => banner.classList.add(‘visible’), 800);
}
}

function aceptarCookies() {
const banner = document.getElementById(‘cookie-banner’);
if (banner) banner.classList.remove(‘visible’);
localStorage.setItem(‘cookiesAceptadas’, ‘true’);
}

// ============================================================
// GRÁFICO DE EVOLUCIÓN TEMPORAL (línea - beneficio acumulado)
// ============================================================
let lineChartInstance = null;

function generarLineChartHTML() {
return ` <div class="line-chart-card"> <div class="line-chart-title">📈 Evolución del beneficio acumulado año a año</div> <div class="line-chart-wrap"> <canvas id="lineChart"></canvas> </div> </div>`;
}

function renderizarLineChart(datos) {
const canvas = document.getElementById(‘lineChart’);
if (!canvas) return;
if (lineChartInstance) { lineChartInstance.destroy(); lineChartInstance = null; }

```
const labels = datos.proyecciones.map(p => `Año ${p.year}`);
const beneficios = datos.proyecciones.map(p => Math.round(p.beneficioAcumulado));
const netosVenta = datos.proyecciones.map(p => Math.round(p.precioVentaNeto));

const isDark = document.documentElement.classList.contains('dark');
const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
const textColor = isDark ? '#94a3b8' : '#64748b';

lineChartInstance = new Chart(canvas, {
    type: 'line',
    data: {
        labels,
        datasets: [
            {
                label: 'Beneficio acumulado total',
                data: beneficios,
                borderColor: '#667eea',
                backgroundColor: 'rgba(103,126,234,0.12)',
                fill: true,
                tension: 0.4,
                pointRadius: 3,
                pointHoverRadius: 6,
                borderWidth: 2.5,
            },
            {
                label: 'Neto si vendes ese año',
                data: netosVenta,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16,185,129,0.08)',
                fill: false,
                tension: 0.4,
                pointRadius: 3,
                pointHoverRadius: 6,
                borderWidth: 2,
                borderDash: [6, 3],
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
            legend: {
                position: 'top',
                labels: { color: textColor, font: { family: 'Inter', size: 12 }, boxWidth: 14 }
            },
            tooltip: {
                callbacks: {
                    label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString('es-ES')} €`
                }
            }
        },
        scales: {
            x: {
                ticks: { color: textColor, font: { size: 11 }, maxRotation: 45 },
                grid: { color: gridColor }
            },
            y: {
                ticks: {
                    color: textColor,
                    font: { size: 11 },
                    callback: v => v.toLocaleString('es-ES') + ' €'
                },
                grid: { color: gridColor }
            }
        }
    }
});
```

}

// ============================================================
// TOOLTIPS EN MÉTRICAS DE RESULTADO
// ============================================================
const METRIC_TOOLTIPS = {
tir: {
es: ‘Tasa Interna de Retorno: mide el rendimiento anual compuesto total de tu inversión, incluyendo alquileres cobrados y ganancia estimada al vender. Por encima del 6-7% supera la media histórica del inmobiliario español.’,
en: ‘Internal Rate of Return: measures the total compound annual return of your investment, including rent collected and estimated gain on sale. Above 6-7% beats the Spanish real estate historical average.’
},
roi: {
es: ‘Return on Investment: relaciona el cashflow anual con el capital que pusiste de tu bolsillo. Un ROI alto con cashflow negativo es señal de alerta.’,
en: ‘Return on Investment: relates annual cashflow to the capital you put in. A high ROI with negative cashflow is a warning sign.’
},
cashflow: {
es: ‘Lo que te queda en el bolsillo cada mes después de pagar hipoteca, gastos e impuestos. El indicador clave si buscas renta pasiva inmediata.’,
en: ‘What you keep each month after paying mortgage, costs and taxes. The key indicator if you seek immediate passive income.’
},
beneficio: {
es: ‘Ganancia total al final del período: suma del cashflow acumulado durante todos los años más el neto que recibirías al vender, menos tu inversión inicial.’,
en: ‘Total gain at end of period: sum of cumulative cashflow plus net proceeds from sale, minus your initial investment.’
},
neto: {
es: ‘Lo que recibirías neto si vendieras el inmueble al final del período, descontando gastos de venta, plusvalía municipal e IRPF sobre la ganancia.’,
en: ‘Net amount you would receive if you sold the property at end of period, after deducting sale costs, municipal tax and income tax on gain.’
}
};

function initTooltips() {
document.body.addEventListener(‘mouseenter’, e => {
const el = e.target.closest(’[data-tooltip-key]’);
if (!el) return;
const key = el.dataset.tooltipKey;
const tip = METRIC_TOOLTIPS[key];
if (!tip) return;
showTooltip(el, tip[currentLanguage] || tip.es);
}, true);
document.body.addEventListener(‘mouseleave’, e => {
if (e.target.closest(’[data-tooltip-key]’)) hideTooltip();
}, true);
}

let tooltipEl = null;
function showTooltip(anchor, text) {
hideTooltip();
tooltipEl = document.createElement(‘div’);
tooltipEl.className = ‘metric-tooltip-popup’;
tooltipEl.textContent = text;
document.body.appendChild(tooltipEl);
const rect = anchor.getBoundingClientRect();
const top = rect.top + window.scrollY - tooltipEl.offsetHeight - 10;
const left = Math.min(rect.left + window.scrollX, window.innerWidth - 320);
tooltipEl.style.top = Math.max(8, top) + ‘px’;
tooltipEl.style.left = Math.max(8, left) + ‘px’;
}
function hideTooltip() {
if (tooltipEl) { tooltipEl.remove(); tooltipEl = null; }
}

// ============================================================
// ============================================================
// TABLA DE HIPOTECA CON AMORTIZACIONES
// ============================================================
function generarTablaHipotecaHTML(datos) {
const esEs = currentLanguage === ‘es’;
return `<div class="hipoteca-card detail-card" id="hipotecaCard"> <div class="detail-card-title">🏦 ${esEs ? 'Cuadro de Amortización Hipotecaria' : 'Mortgage Amortization Schedule'}</div> <div class="hipoteca-intro"> ${esEs ?`Préstamo <strong>${fmt(datos.prestamo)} €</strong> · Interés <strong>${datos.interes}%</strong> · <strong>${datos.anos} años</strong> · Cuota mensual <strong>${fmt(datos.cuotaHipoteca)} €/mes</strong>`:`Loan <strong>${fmt(datos.prestamo)} €</strong> · Rate <strong>${datos.interes}%</strong> · <strong>${datos.anos} years</strong> · Monthly payment <strong>${fmt(datos.cuotaHipoteca)} €/mo</strong>`
}
</div>

```
    <!-- Controles de amortización anticipada -->
    <div class="amort-controls">
        <div class="amort-section-title">⚡ ${esEs ? 'Simulador de amortización anticipada' : 'Early repayment simulator'}</div>
        <div class="amort-fields">
            <div class="amort-field">
                <label>${esEs ? 'Año de amortización' : 'Repayment year'}</label>
                <input type="number" id="amortYear" class="form-input" min="1" max="${datos.anos}" value="5" step="1"/>
            </div>
            <div class="amort-field">
                <label>${esEs ? 'Importe (€)' : 'Amount (€)'}</label>
                <input type="number" id="amortImporte" class="form-input" min="0" value="10000" step="500"/>
            </div>
            <div class="amort-field">
                <label>${esEs ? 'Reducir...' : 'Reduce...'}</label>
                <select id="amortTipo" class="form-select">
                    <option value="cuota">${esEs ? 'Cuota mensual' : 'Monthly payment'}</option>
                    <option value="plazo">${esEs ? 'Plazo (años)' : 'Term (years)'}</option>
                </select>
            </div>
            <div class="amort-field amort-field--btn">
                <label>&nbsp;</label>
                <button class="btn btn-primary" style="padding:0.75rem 1.25rem; font-size:0.9rem;" onclick="calcularAmortizacion()">
                    ${esEs ? '📊 Simular' : '📊 Simulate'}
                </button>
                <button class="btn btn-share" style="padding:0.75rem 1rem; font-size:0.9rem;" onclick="resetAmortizacion()" title="${esEs ? 'Quitar amortización' : 'Reset'}">✕</button>
            </div>
        </div>
        <div id="amortResultado" class="amort-resultado" style="display:none;"></div>
    </div>

    <!-- Tabla anual -->
    <div class="projection-table-container" style="margin-top:1rem;">
        <table class="projection-table" id="hipotecaTabla">
            <thead>
                <tr>
                    <th>${esEs ? 'Año' : 'Year'}</th>
                    <th>${esEs ? 'Cuota/mes' : 'Payment/mo'}</th>
                    <th>${esEs ? 'Capital pagado' : 'Principal paid'}</th>
                    <th>${esEs ? 'Intereses pagados' : 'Interest paid'}</th>
                    <th>${esEs ? 'Amort. anticipada' : 'Extra payment'}</th>
                    <th>${esEs ? 'Saldo pendiente' : 'Balance'}</th>
                </tr>
            </thead>
            <tbody id="hipotecaTbody">
            </tbody>
            <tfoot id="hipotecaTfoot"></tfoot>
        </table>
    </div>
    <p class="inversa-nota" style="margin-top:0.5rem;">* ${esEs ? 'El cuadro se actualiza automáticamente al simular amortizaciones anticipadas.' : 'The schedule updates automatically when simulating early repayments.'}</p>
</div>`;
```

}

// Renderiza la tabla de hipoteca (se llama tras calcular() y tras simular amortización)
window._hipotecaDatos = null;

function renderizarTablaHipoteca(datos, amortYear, amortImporte, amortTipo) {
const tbody = document.getElementById(‘hipotecaTbody’);
const tfoot = document.getElementById(‘hipotecaTfoot’);
if (!tbody || !tfoot) return;

```
const esEs = currentLanguage === 'es';
const capital = datos.prestamo;
const interes = datos.interes;
const anosTotal = datos.anos;
const i = interes / 100 / 12;

// Construimos el cuadro mes a mes con posibles amortizaciones
let saldo = capital;
let cuotaActual = calcularCuotaHipoteca(capital, interes, anosTotal);
let mesActual = 1;
let totalMeses = anosTotal * 12;
let amortAplicada = false;
let nuevaCuota = cuotaActual;
let nuevosPlazoMeses = totalMeses;

// Resultados agregados por año
const filas = [];
let totalCapital = 0, totalIntereses = 0, totalAmort = 0;
let mesTermina = anosTotal * 12;

for (let year = 1; year <= anosTotal; year++) {
    if (saldo <= 0) break;

    let capitalYear = 0, interesesYear = 0, amortYear_val = 0;
    const cuotaEsteYear = cuotaActual;

    for (let m = 1; m <= 12; m++) {
        if (saldo <= 0) break;
        const interesesMes = saldo * i;
        const capitalMes = Math.min(cuotaActual - interesesMes, saldo);
        saldo -= capitalMes;
        capitalYear += capitalMes;
        interesesYear += interesesMes;
        mesTermina = (year - 1) * 12 + m;
    }

    // Amortización anticipada al final del año indicado
    if (amortYear && amortImporte && year === amortYear && saldo > 0 && !amortAplicada) {
        const amortReal = Math.min(amortImporte, saldo);
        saldo -= amortReal;
        amortYear_val = amortReal;
        amortAplicada = true;
        // Recalcular según tipo
        if (saldo > 0) {
            const mesesRestantes = (anosTotal - year) * 12;
            if (amortTipo === 'cuota') {
                cuotaActual = calcularCuotaHipoteca(saldo, interes, (anosTotal - year));
                nuevaCuota = cuotaActual;
            } else {
                // Reducir plazo manteniendo cuota
                cuotaActual = cuotaEsteYear; // misma cuota
                // El plazo efectivo se acortará solo
            }
        }
    }

    totalCapital += capitalYear;
    totalIntereses += interesesYear;
    totalAmort += amortYear_val;

    filas.push({ year, cuota: cuotaEsteYear, capital: capitalYear, intereses: interesesYear, amort: amortYear_val, saldo: Math.max(0, saldo) });
    if (saldo <= 0) break;
}

tbody.innerHTML = filas.map(f => `
    <tr${f.amort > 0 ? ' class="hipoteca-row-amort"' : ''}>
        <td><strong>${esEs ? 'Año ' : 'Year '}${f.year}</strong></td>
        <td>${fmt(f.cuota)} €</td>
        <td class="metric-info">${fmt(Math.round(f.capital))} €</td>
        <td class="metric-negative">${fmt(Math.round(f.intereses))} €</td>
        <td>${f.amort > 0 ? `<span class="amort-badge">-${fmt(Math.round(f.amort))} €</span>` : '—'}</td>
        <td><strong>${fmt(Math.round(f.saldo))} €</strong></td>
    </tr>
`).join('');

// Totales en tfoot
const anosReales = filas.length;
const mesesReales = filas[filas.length - 1] ? mesTermina : anosTotal * 12;
tfoot.innerHTML = `
    <tr class="hipoteca-tfoot">
        <td><strong>${esEs ? 'TOTAL' : 'TOTAL'}</strong></td>
        <td>—</td>
        <td class="metric-info"><strong>${fmt(Math.round(totalCapital))} €</strong></td>
        <td class="metric-negative"><strong>${fmt(Math.round(totalIntereses))} €</strong></td>
        <td>${totalAmort > 0 ? `<strong class="amort-badge">-${fmt(Math.round(totalAmort))} €</strong>` : '—'}</td>
        <td><strong>0 €</strong></td>
    </tr>
`;
```

}

window.calcularAmortizacion = function() {
const d = window._hipotecaDatos;
if (!d) return;
const yr = parseInt(document.getElementById(‘amortYear’)?.value) || 5;
const imp = parseFloat(document.getElementById(‘amortImporte’)?.value) || 0;
const tipo = document.getElementById(‘amortTipo’)?.value || ‘cuota’;
const esEs = currentLanguage === ‘es’;

```
// Calcular ahorro
const saldoSinAmort = calcularSaldoPendiente(d.prestamo, d.interes, d.anos, yr);
const amortReal = Math.min(imp, saldoSinAmort);
const saldoConAmort = Math.max(0, saldoSinAmort - amortReal);

let msg = '';
if (tipo === 'cuota') {
    const nuevaCuota = saldoConAmort > 0 ? calcularCuotaHipoteca(saldoConAmort, d.interes, d.anos - yr) : 0;
    const ahorroCuota = d.cuotaHipoteca - nuevaCuota;
    const totalSinAmort = d.cuotaHipoteca * d.anos * 12;
    const totalConAmort = d.cuotaHipoteca * yr * 12 + imp + nuevaCuota * (d.anos - yr) * 12;
    const ahorroTotal = totalSinAmort - totalConAmort;
    msg = esEs
        ? `Amortizando <strong>${fmt(Math.round(amortReal))} €</strong> en el año ${yr}: nueva cuota <strong class="metric-positive">${fmt(Math.round(nuevaCuota))} €/mes</strong> (ahorras <strong class="metric-positive">${fmt(Math.round(ahorroCuota))} €/mes</strong>) · Ahorro total en intereses: <strong class="metric-positive">~${fmt(Math.round(ahorroTotal))} €</strong>`
        : `Repaying <strong>${fmt(Math.round(amortReal))} €</strong> in year ${yr}: new payment <strong class="metric-positive">${fmt(Math.round(nuevaCuota))} €/mo</strong> (save <strong class="metric-positive">${fmt(Math.round(ahorroCuota))} €/mo</strong>) · Total interest savings: <strong class="metric-positive">~${fmt(Math.round(ahorroTotal))} €</strong>`;
} else {
    // Reducir plazo
    const cuotaOriginal = d.cuotaHipoteca;
    const i = d.interes / 100 / 12;
    let mesesRestantes = 0;
    if (saldoConAmort > 0 && i > 0) {
        mesesRestantes = Math.ceil(Math.log(cuotaOriginal / (cuotaOriginal - saldoConAmort * i)) / Math.log(1 + i));
    }
    const mesesAhorrados = (d.anos - yr) * 12 - mesesRestantes;
    const anosAhorrados = Math.floor(mesesAhorrados / 12);
    const mesesExtra = mesesAhorrados % 12;
    const ahorroEstimado = Math.round(Math.max(0, imp * (d.interes / 100) * (d.anos - yr) / 2));
    const extra = mesesExtra > 0 ? (esEs ? ' y ' + mesesExtra + ' meses' : ' and ' + mesesExtra + ' months') : '';
    msg = esEs
        ? 'Amortizando <strong>' + fmt(Math.round(amortReal)) + ' €</strong> en el año ' + yr + ' manteniendo cuota: reduces el plazo en <strong class="metric-positive">' + anosAhorrados + ' años' + extra + '</strong> · Ahorro en intereses: <strong class="metric-positive">~' + fmt(ahorroEstimado) + ' €</strong>'
        : 'Repaying <strong>' + fmt(Math.round(amortReal)) + ' €</strong> in year ' + yr + ' keeping payment: reduces term by <strong class="metric-positive">' + anosAhorrados + ' years' + extra + '</strong> · Est. savings: <strong class="metric-positive">~' + fmt(ahorroEstimado) + ' €</strong>';
}

const res = document.getElementById('amortResultado');
if (res) { res.innerHTML = msg; res.style.display = 'block'; }

renderizarTablaHipoteca(d, yr, imp, tipo);
```

};

window.resetAmortizacion = function() {
const d = window._hipotecaDatos;
if (!d) return;
const res = document.getElementById(‘amortResultado’);
if (res) res.style.display = ‘none’;
renderizarTablaHipoteca(d, null, 0, ‘cuota’);
};

// ============================================================
// CALCULADORA INVERSA
// ============================================================
function initCalculadoraInversa() {
// Se inyecta en el panel de resultados cuando hay datos calculados
}

function generarCalculadoraInversaHTML() {
var esEs = (currentLanguage || “es”) === “es”;
var titulo = esEs ? “Calculadora inversa” : “Reverse calculator”;
var subtitulo = esEs
? “Introduce el cashflow mensual minimo que quieres y calculamos el precio maximo que puedes pagar manteniendo el resto de parametros.”
: “Enter the minimum monthly cashflow you want and we calculate the maximum price you can pay keeping all other parameters.”;
var labelCF = esEs ? “Cashflow mensual minimo deseado” : “Minimum monthly cashflow target”;
var hint = esEs ? “Pon 0 para cashflow neutro, o negativo si lo aceptas.” : “Use 0 for break-even, negative if acceptable.”;
var btnText = esEs ? “Calcular precio maximo del inmueble” : “Calculate max property price”;
var resHeader = esEs ? “Resultado del analisis inverso” : “Reverse analysis result”;
return ‘<div class="inverse-calc-card">’ +
‘<div class="inverse-calc-header">’ +
‘<div class="inverse-calc-title">’ + titulo + ‘</div>’ +
‘<div class="inverse-calc-subtitle">’ + subtitulo + ‘</div>’ +
‘</div>’ +
‘<div class="inverse-calc-body">’ +
‘<div class="inverse-field">’ +
‘<label>’ + labelCF + ‘</label>’ +
‘<div class="input-group">’ +
‘<input type="number" id="inverseCashflow" class="form-input with-suffix" value="200" min="-9999" step="50"/>’ +
‘<span class="input-suffix">€/mes</span>’ +
‘</div>’ +
‘<div class="field-hint">’ + hint + ‘</div>’ +
‘</div>’ +
‘<button class="btn btn-primary" style="width:100%; margin-top:0.75rem;" onclick="calcularInversa()">’ + btnText + ‘</button>’ +
‘<div id="inversaResultado" style="display:none;">’ +
‘<div class="inversa-resultado-header">’ + resHeader + ‘</div>’ +
‘<div class="inversa-resultado-body" id="inversaResultadoBody"></div>’ +
‘<p class="inversa-nota" id="inversaResultadoNota"></p>’ +
‘</div>’ +
‘</div>’ +
‘</div>’;
}

window.calcularInversa = function() {
var targetCF = parseFloat(document.getElementById(“inverseCashflow”).value) || 0;
var d = window._lastDatos;
if (!d) return;

```
var precioActual = parseFloat(document.getElementById("precio").value) || 0;
var interes = parseFloat(document.getElementById("interes").value) || 0;
var anos = parseFloat(document.getElementById("anos").value) || 25;
var entradaPct = precioActual > 0 ? d.montoEntrada / precioActual : 0.2;
var entradaPctDisplay = Math.round(entradaPct * 100);
var alquiler = parseFloat(document.getElementById("alquiler").value) || 0;
var mesesVacio = parseFloat(document.getElementById("mesesVacio").value) || 0;
var ibi = parseFloat(document.getElementById("ibi").value) || 0;
var comunidad = parseFloat(document.getElementById("comunidad").value) || 0;
var seguro = parseFloat(document.getElementById("seguro").value) || 0;
var seguroImpago = parseFloat(document.getElementById("seguroImpago").value) || 0;
var mantenimiento = parseFloat(document.getElementById("mantenimiento").value) || 0;
var admin = parseFloat(document.getElementById("administracion").value) || 0;
var taxAlquiler = parseFloat(document.getElementById("taxAlquiler").value) || 19;
var impuestosTipo = document.getElementById("tipoVivienda").value || "segunda";
var ccaaEl = document.getElementById("ccaaSelector");
var ccaaVal = ccaaEl ? parseFloat(ccaaEl.value) : NaN;
var itpRate = impuestosTipo === "nueva" ? 0.112 : (!isNaN(ccaaVal) && ccaaVal > 0 ? ccaaVal / 100 : 0.07);
var gastosCompraFijos = parseFloat(document.getElementById("gastosCompra").value) || 0;
var reforma = parseFloat(document.getElementById("reforma").value) || 0;
var gastosHip = parseFloat(document.getElementById("gastosHipoteca").value) || 0;
var financiacion = document.getElementById("financiacionTipo").value || "con_hipoteca";

var ingresosAnuales = alquiler * 12 * (1 - mesesVacio / 12);
var gastosFijosAnuales = ibi + comunidad * 12 + seguro + seguroImpago + mantenimiento + admin * 12;
var gastosFijosMensuales = gastosFijosAnuales / 12;

function cfParaPrecio(precio) {
    var entrada = precio * entradaPct;
    var prestamo = financiacion === "con_hipoteca" ? precio - entrada : 0;
    var cuota = calcularCuotaHipoteca(prestamo, interes, anos);
    var interesesAnuales = prestamo * (interes / 100);
    var alquilerNeto = ingresosAnuales - gastosFijosAnuales - interesesAnuales;
    var tax = Math.max(0, alquilerNeto) * (taxAlquiler / 100) / 12;
    return (ingresosAnuales / 12) - cuota - gastosFijosMensuales - tax;
}

var lo = 10000, hi = 2000000, mid = lo;
for (var i = 0; i < 80; i++) {
    mid = (lo + hi) / 2;
    if (cfParaPrecio(mid) > targetCF) lo = mid; else hi = mid;
}
var precioMax = Math.round(mid / 500) * 500;
var cfReal = cfParaPrecio(precioMax);
var entradaMax = Math.round(precioMax * entradaPct);
var impuestosMax = Math.round(precioMax * itpRate);
var extrasMax = gastosCompraFijos + reforma + (financiacion === "con_hipoteca" ? gastosHip : 0);
var invMax = entradaMax + impuestosMax + extrasMax;
var prestamoMax = financiacion === "con_hipoteca" ? precioMax - entradaMax : 0;
var cuotaMax = Math.round(calcularCuotaHipoteca(prestamoMax, interes, anos));
var margen = precioMax - precioActual;
var esEs = currentLanguage === "es";

var body = document.getElementById("inversaResultadoBody");
var nota = document.getElementById("inversaResultadoNota");
var res = document.getElementById("inversaResultado");
if (!res || !body || !nota) return;

var margenSign = margen >= 0 ? "+" : "";
var margenClass = margen >= 0 ? "metric-positive" : "metric-negative";
var cfClass = cfReal >= 0 ? "metric-positive" : "metric-negative";
var labelEntrada = esEs ? "Entrada (" + entradaPctDisplay + "%)" : "Down payment (" + entradaPctDisplay + "%)";
var labelImp = esEs ? "Impuestos (ITP/IVA+AJD)" : "Taxes (ITP/VAT)";
var labelExtras = esEs ? "Gastos compra + reforma" : "Purchase costs + renovation";
var labelTotal = esEs ? "Capital total a desembolsar" : "Total capital required";
var labelDesembolso = esEs ? "Desembolso inicial necesario" : "Required upfront payment";
var labelResultado = esEs ? "Resultado mensual con este precio" : "Monthly result at this price";
var labelCuota = esEs ? "Cuota hipoteca mensual" : "Monthly mortgage payment";
var labelCF = esEs ? "Cashflow mensual neto" : "Net monthly cashflow";
var labelVsPrecio = esEs ? " vs. tu precio actual" : " vs. current price";
var labelPrecioMax = esEs ? "Precio maximo del inmueble" : "Max property price";

body.innerHTML =
    '<div class="inversa-row inversa-row--main">' +
        '<div class="inversa-main-label">' + labelPrecioMax + '</div>' +
        '<div class="inversa-main-value metric-info">' + fmt(precioMax) + ' €</div>' +
        '<div class="inversa-main-sub ' + margenClass + '">' + margenSign + fmt(margen) + ' €' + labelVsPrecio + '</div>' +
    '</div>' +
    '<div class="inversa-divider">' + labelDesembolso + '</div>' +
    '<div class="inversa-row"><span>' + labelEntrada + '</span><strong>' + fmt(entradaMax) + ' €</strong></div>' +
    '<div class="inversa-row"><span>' + labelImp + '</span><strong class="metric-negative">' + fmt(impuestosMax) + ' €</strong></div>' +
    '<div class="inversa-row"><span>' + labelExtras + '</span><strong class="metric-negative">' + fmt(extrasMax) + ' €</strong></div>' +
    '<div class="inversa-row inversa-row--total"><span><strong>' + labelTotal + '</strong></span><strong>' + fmt(invMax) + ' €</strong></div>' +
    '<div class="inversa-divider">' + labelResultado + '</div>' +
    (financiacion === "con_hipoteca" ? '<div class="inversa-row"><span>' + labelCuota + '</span><strong class="metric-negative">' + fmt(cuotaMax) + ' €/mes</strong></div>' : '') +
    '<div class="inversa-row inversa-row--highlight"><span><strong>' + labelCF + '</strong></span><strong class="' + cfClass + '">' + fmt(cfReal) + ' €/mes</strong></div>';

nota.textContent = esEs
    ? "* Cálculo basado en: " + interes + "% de interés, " + anos + " años de hipoteca, " + alquiler + " EUR/mes de alquiler y " + entradaPctDisplay + "% de entrada."
    : "* Based on: " + interes + "% interest, " + anos + "-year mortgage, " + alquiler + " EUR/month rent, " + entradaPctDisplay + "% down payment.";

res.style.display = "block";
```

};

// ============================================================
// COOKIES
// ============================================================
function mostrarBannerCookies() {
const banner = document.getElementById(‘cookie-banner’);
if (!banner) return;
if (localStorage.getItem(‘cookiesAceptadas’) !== ‘true’) {
setTimeout(() => banner.classList.add(‘visible’), 800);
}
}

function aceptarCookies() {
const banner = document.getElementById(‘cookie-banner’);
if (banner) banner.classList.remove(‘visible’);
localStorage.setItem(‘cookiesAceptadas’, ‘true’);
}

// ============================================================
// COOKIES
// ============================================================

// ============================================================
// WHATSAPP SHARE
// ============================================================
function compartirWhatsApp() {
const datos = window._lastDatos;
if (!datos) { alert(‘Primero analiza una inversión’); return; }

```
const precio = parseFloat(document.getElementById('precio')?.value) || 0;
const cf = datos.flujoMensual;
const tir = datos.rentabilidadAnual.toFixed(2);
const roi = datos.roiAnual.toFixed(2);
const inv = datos.inversionInicial;

const params = new URLSearchParams();
const ids = ['precio','entradaEuros','interes','anos','alquiler','mesesVacio','anosAnalisis',
             'revalorizacion','ibi','comunidad','seguro','seguroImpago','mantenimiento',
             'administracion','incrementoAlquiler','incrementoGastos','taxAlquiler',
             'gastosVenta','irpfVenta','plusvaliaPorc','reforma','gastosCompra',
             'gastosHipoteca','tipoVivienda','financiacionTipo','ccaa'];
ids.forEach(id => { const el = document.getElementById(id); if (el) params.set(id, el.value); });
params.set('lang', currentLanguage);
const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

const msg = `🏠 *Análisis de inversión inmobiliaria*\n\n` +
    `💰 Inversión inicial: *${fmt(inv)} €*\n` +
    `📈 Cashflow mensual: *${fmt(cf)} €/mes*\n` +
    `⚡ TIR: *${tir}%*  |  ROI: *${roi}%*\n\n` +
    `Ver análisis completo 👇\n${url}`;

const waUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
window.open(waUrl, '_blank');
```

}

// ============================================================
// ANÁLISIS GUARDADOS (localStorage)
// ============================================================
const SAVED_KEY = ‘pisorentable_saved_v1’;

function getSaved() {
try { return JSON.parse(localStorage.getItem(SAVED_KEY) || ‘[]’); }
catch(e) { return []; }
}

function setSaved(list) {
localStorage.setItem(SAVED_KEY, JSON.stringify(list));
}

function openSavedModal() {
renderSavedList();
document.getElementById(‘savedModal’).classList.add(‘active’);
// Sugerir nombre basado en CP o precio
const cp = document.getElementById(‘codigoPostal’)?.value || ‘’;
const precio = document.getElementById(‘precio’)?.value || ‘’;
const hint = cp ? `Piso ${cp}` : precio ? `Inmueble ${fmt(parseFloat(precio))}€` : ‘’;
document.getElementById(‘saveNameInput’).value = hint;
}

function closeSavedModal() {
document.getElementById(‘savedModal’).classList.remove(‘active’);
}

function saveCurrentAnalysis() {
const name = document.getElementById(‘saveNameInput’).value.trim();
if (!name) { document.getElementById(‘saveNameInput’).focus(); return; }

```
const ids = ['precio','entradaEuros','interes','anos','alquiler','mesesVacio','anosAnalisis',
             'revalorizacion','ibi','comunidad','seguro','seguroImpago','mantenimiento',
             'administracion','incrementoAlquiler','incrementoGastos','taxAlquiler',
             'gastosVenta','irpfVenta','plusvaliaPorc','reforma','gastosCompra',
             'gastosHipoteca','tipoVivienda','financiacionTipo','ccaa','codigoPostal'];
const params = {};
ids.forEach(id => { const el = document.getElementById(id); if (el) params[id] = el.value; });

const datos = window._lastDatos;
const saved = getSaved();
saved.unshift({
    id: Date.now(),
    name,
    date: new Date().toLocaleDateString('es-ES'),
    params,
    summary: datos ? {
        inversion: datos.inversionInicial,
        cashflow: datos.flujoMensual,
        tir: datos.rentabilidadAnual,
        roi: datos.roiAnual,
        beneficio: datos.beneficioTotal
    } : null
});
// Máximo 20 análisis guardados
if (saved.length > 20) saved.splice(20);
setSaved(saved);
renderSavedList();
document.getElementById('saveNameInput').value = '';

// Toast de confirmación
const toast = document.getElementById('shareToast');
if (toast) {
    toast.textContent = '💾 Análisis guardado correctamente';
    toast.classList.add('visible');
    setTimeout(() => { toast.classList.remove('visible'); toast.textContent = '✅ Enlace copiado al portapapeles'; }, 2500);
}
```

}

function renderSavedList() {
const list = document.getElementById(‘savedList’);
if (!list) return;
const saved = getSaved();
if (saved.length === 0) {
list.innerHTML = ‘<p class="saved-empty">No tienes análisis guardados todavía.<br>Rellena los datos, analiza y pulsa Guardar.</p>’;
return;
}
list.innerHTML = saved.map(a => `<div class="saved-item"> <div class="saved-item-info"> <span class="saved-item-name">${a.name}</span> <span class="saved-item-date">${a.date}</span> ${a.summary ?`
<div class="saved-item-kpis">
<span class="saved-kpi">💰 ${fmt(a.summary.inversion)}€</span>
<span class="saved-kpi ${a.summary.cashflow >= 0 ? 'kpi-pos' : 'kpi-neg'}">${fmt(a.summary.cashflow)}€/mes</span>
<span class="saved-kpi">TIR ${a.summary.tir.toFixed(1)}%</span>
</div>`: ''} </div> <div class="saved-item-actions"> <button class="btn-saved-load" onclick="loadSaved(${a.id})" title="Cargar">📂</button> <button class="btn-saved-del" onclick="deleteSaved(${a.id})" title="Eliminar">🗑️</button> </div> </div>`).join(’’);
}

function loadSaved(id) {
const saved = getSaved();
const item = saved.find(a => a.id === id);
if (!item) return;
Object.entries(item.params).forEach(([k, v]) => {
const el = document.getElementById(k);
if (el) { el.value = v; el.dispatchEvent(new Event(‘change’)); }
});
calcular();
closeSavedModal();
}

function deleteSaved(id) {
const saved = getSaved().filter(a => a.id !== id);
setSaved(saved);
renderSavedList();
// Actualizar selectores del comparador si está abierto
if (document.getElementById(‘compareModal’).classList.contains(‘active’)) {
renderCompareSelectors();
}
}

// ============================================================
// COMPARADOR DE INMUEBLES
// ============================================================
function openCompareModal() {
const saved = getSaved();
if (saved.length < 2) {
alert(‘Necesitas al menos 2 análisis guardados para comparar.\n\nGuarda el análisis actual con el botón 💾 Guardar.’);
return;
}
renderCompareSelectors();
document.getElementById(‘compareModal’).classList.add(‘active’);
}

function closeCompareModal() {
document.getElementById(‘compareModal’).classList.remove(‘active’);
}

function renderCompareSelectors() {
const saved = getSaved();
const opts = saved.map(a => `<option value="${a.id}">${a.name} (${a.date})</option>`).join(’’);
document.getElementById(‘compareSelectA’).innerHTML = opts;
document.getElementById(‘compareSelectB’).innerHTML = opts;
// Seleccionar el segundo por defecto en B
if (saved.length >= 2) document.getElementById(‘compareSelectB’).selectedIndex = 1;
document.getElementById(‘compareResult’).innerHTML = ‘’;
}

function runComparison() {
const saved = getSaved();
const idA = parseInt(document.getElementById(‘compareSelectA’).value);
const idB = parseInt(document.getElementById(‘compareSelectB’).value);
if (idA === idB) { alert(‘Selecciona dos análisis diferentes’); return; }

```
const a = saved.find(x => x.id === idA);
const b = saved.find(x => x.id === idB);
if (!a || !b || !a.summary || !b.summary) {
    document.getElementById('compareResult').innerHTML = '<p style="color:var(--danger)">Uno de los análisis no tiene datos. Cárgalo, analiza y guárdalo de nuevo.</p>';
    return;
}

const metrics = [
    { label: 'Inversión inicial', ka: a.summary.inversion, kb: b.summary.inversion, fmt: v => fmt(v) + ' €', lowerIsBetter: true },
    { label: 'Cashflow mensual', ka: a.summary.cashflow, kb: b.summary.cashflow, fmt: v => fmt(v) + ' €/mes', lowerIsBetter: false },
    { label: 'TIR anualizada', ka: a.summary.tir, kb: b.summary.tir, fmt: v => v.toFixed(2) + '%', lowerIsBetter: false },
    { label: 'ROI anual', ka: a.summary.roi, kb: b.summary.roi, fmt: v => v.toFixed(2) + '%', lowerIsBetter: false },
    { label: 'Beneficio total', ka: a.summary.beneficio, kb: b.summary.beneficio, fmt: v => fmt(v) + ' €', lowerIsBetter: false },
];

let scoreA = 0, scoreB = 0;
const rows = metrics.map(m => {
    const aBetter = m.lowerIsBetter ? m.ka < m.kb : m.ka > m.kb;
    const bBetter = m.lowerIsBetter ? m.kb < m.ka : m.kb > m.ka;
    if (aBetter) scoreA++;
    if (bBetter) scoreB++;
    return `
    <tr>
        <td class="cmp-label">${m.label}</td>
        <td class="cmp-val ${aBetter ? 'cmp-winner' : bBetter ? 'cmp-loser' : ''}">${m.fmt(m.ka)}</td>
        <td class="cmp-val ${bBetter ? 'cmp-winner' : aBetter ? 'cmp-loser' : ''}">${m.fmt(m.kb)}</td>
    </tr>`;
}).join('');

const winner = scoreA > scoreB ? a.name : scoreB > scoreA ? b.name : null;
const verdict = winner
    ? `🏆 <strong>${winner}</strong> gana en ${Math.max(scoreA, scoreB)} de ${metrics.length} métricas`
    : `🤝 Empate — depende de tus prioridades`;

document.getElementById('compareResult').innerHTML = `
    <div class="cmp-verdict">${verdict}</div>
    <div class="cmp-table-wrap">
        <table class="cmp-table">
            <thead>
                <tr>
                    <th>Métrica</th>
                    <th class="${scoreA > scoreB ? 'cmp-winner-header' : ''}">${a.name}</th>
                    <th class="${scoreB > scoreA ? 'cmp-winner-header' : ''}">${b.name}</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    </div>
    <p class="cmp-note">* Verde = mejor valor en esa métrica. Carga cualquier análisis con 📂 para simularlo en detalle.</p>
`;
```

}

// ============================================================
// SIMULADOR TURÍSTICO
// ============================================================
function calcularTuristico() {
const precioNoche = parseFloat(document.getElementById(‘precioNoche’)?.value) || 0;
const ocupacion   = parseFloat(document.getElementById(‘ocupacionTuristico’)?.value) || 65;
const comision    = parseFloat(document.getElementById(‘comisionPlataforma’)?.value) || 15;
const limpieza    = parseFloat(document.getElementById(‘gastosLimpieza’)?.value) || 0;
const suministros = parseFloat(document.getElementById(‘suministrosTuristico’)?.value) || 0;

```
const res = document.getElementById('turisticoResultado');
if (precioNoche <= 0) {
    if (res) res.innerHTML = '<div class="tur-empty">Introduce el precio por noche para ver la comparativa en tiempo real 👆</div>';
    return;
}

// Ingresos turístico
const nochesOcupadas = 365 * (ocupacion / 100);
const ingresosBrutos = precioNoche * nochesOcupadas;
const gastosPlataforma = ingresosBrutos * (comision / 100);
const ingresosNetos = ingresosBrutos - gastosPlataforma - limpieza - suministros;
const ingresosMensuales = ingresosNetos / 12;

// Ingresos larga duración (del tab ingresos)
const alquilerLD = parseFloat(document.getElementById('alquiler')?.value) || 0;
const mesesVacioLD = parseFloat(document.getElementById('mesesVacio')?.value) || 0;
const ingresosLD = alquilerLD * 12 * (1 - mesesVacioLD / 12);
const ingresosLDMensual = ingresosLD / 12;

const difAnual = ingresosNetos - ingresosLD;
const difClass = difAnual >= 0 ? 'metric-positive' : 'metric-negative';
const signo = difAnual >= 0 ? '+' : '';

if (!res) return;
res.style.display = 'block';
res.innerHTML = `
    <div class="turistico-comparativa">
        <div class="turistico-col turistico-col--tur">
            <div class="tur-col-label">🏖️ Turístico</div>
            <div class="tur-ing-bruto">${fmt(Math.round(ingresosBrutos))} €/año brutos</div>
            <div class="tur-detail">− ${comision}% plataforma: ${fmt(Math.round(gastosPlataforma))} €</div>
            <div class="tur-detail">− Limpieza: ${fmt(limpieza)} €</div>
            <div class="tur-detail">− Suministros: ${fmt(suministros)} €</div>
            <div class="tur-neto"><strong>${fmt(Math.round(ingresosNetos))} €/año</strong><br><small>${fmt(Math.round(ingresosMensuales))} €/mes</small></div>
            <div class="tur-noches">${Math.round(nochesOcupadas)} noches ocupadas/año</div>
        </div>
        <div class="turistico-col turistico-col--ld">
            <div class="tur-col-label">🏠 Larga duración</div>
            <div class="tur-ing-bruto">${fmt(Math.round(alquilerLD * 12))} €/año brutos</div>
            <div class="tur-detail">− ${mesesVacioLD} mes(es) vacío</div>
            <div class="tur-detail">&nbsp;</div>
            <div class="tur-detail">&nbsp;</div>
            <div class="tur-neto"><strong>${fmt(Math.round(ingresosLD))} €/año</strong><br><small>${fmt(Math.round(ingresosLDMensual))} €/mes</small></div>
            <div class="tur-noches">Estabilidad y menos gestión</div>
        </div>
    </div>
    <div class="turistico-diferencia ${difClass}">
        ${signo}${fmt(Math.round(difAnual))} €/año con turístico vs. larga duración
    </div>
    <p class="turistico-nota">💡 Pulsa "Analizar Inversión" con estos ingresos de turístico cargados automáticamente.</p>
    <button class="btn btn-primary" style="width:100%; margin-top:0.5rem;" onclick="usarIngresosturistico(${Math.round(ingresosMensuales)})">
        ✅ Usar ingresos turísticos en el análisis principal
    </button>
`;
```

}

window.usarIngresosturistico = function(mensual) {
const el = document.getElementById(‘alquiler’);
if (el) {
el.value = mensual;
// Cambiar meses vacío a 0 (turístico ya tiene ocupación integrada)
const mv = document.getElementById(‘mesesVacio’);
if (mv) mv.value = 0;
calcular();
// Volver al tab de ingresos para que vea el cambio
switchTab(‘ingresos’);
const toast = document.getElementById(‘shareToast’);
if (toast) {
toast.textContent = ‘🏖️ Ingresos turísticos aplicados’;
toast.classList.add(‘visible’);
setTimeout(() => { toast.classList.remove(‘visible’); toast.textContent = ‘✅ Enlace copiado al portapapeles’; }, 2500);
}
}
};

// ============================================================
// SIMULADOR DE SUBIDA DE TIPOS (se inyecta en resultados)
// ============================================================
function generarSimuladorTiposHTML(datos) {
if (datos.financiacionTipo !== ‘con_hipoteca’) return ‘’;
return ` <div class="col-section" id="col-tipos"> <button class="col-header" onclick="toggleCol('tipos')" type="button" aria-expanded="false"> <span class="col-title">📉 Simulador de subida de tipos de interés</span> <span class="col-chevron">▾</span> </button> <div class="col-body"> <div class="col-inner"> <div class="tipos-wrap"> <div class="tipos-controls"> <label class="form-label">Tipo de interés hipotecario</label> <div class="tipos-slider-row"> <span class="tipos-min">0%</span> <input type="range" id="tiposSlider" class="form-range" min="0" max="12" step="0.25" value="${datos.interes}"/> <span class="tipos-max">12%</span> </div> <div class="tipos-valor-wrap"> <span id="tiposValorLabel" class="tipos-valor">${datos.interes}%</span> <span class="tipos-base">(actual: ${datos.interes}%)</span> </div> </div> <div id="tiposResultado" class="tipos-resultado"></div> </div> </div> </div> </div>`;
}

function initSimuladorTipos(datos) {
const slider = document.getElementById(‘tiposSlider’);
if (!slider) return;

```
function recalcularTipos() {
    const nuevoTipo = parseFloat(slider.value);
    document.getElementById('tiposValorLabel').textContent = nuevoTipo.toFixed(2) + '%';

    const capital = datos.prestamo;
    const anos = datos.anos;
    const i = nuevoTipo / 100 / 12;
    const n = anos * 12;
    const nuevaCuota = i > 0
        ? capital * i * Math.pow(1+i, n) / (Math.pow(1+i, n) - 1)
        : capital / n;

    const difCuota = nuevaCuota - datos.cuotaHipoteca;
    const nuevoCashflow = datos.flujoMensual - difCuota;
    const difCashflow = nuevoCashflow - datos.flujoMensual;
    const cfClass = nuevoCashflow >= 0 ? 'metric-positive' : 'metric-negative';
    const difClass = difCashflow >= 0 ? 'metric-positive' : 'metric-negative';

    // Color del slider según impacto
    const impacto = Math.abs(difCuota / Math.max(1, datos.cuotaHipoteca));
    const sliderColor = impacto < 0.1 ? '#10b981' : impacto < 0.25 ? '#f59e0b' : '#ef4444';
    slider.style.setProperty('--slider-fill', sliderColor);

    document.getElementById('tiposResultado').innerHTML = `
        <div class="tipos-grid">
            <div class="tipos-card">
                <div class="tipos-card-label">Nueva cuota</div>
                <div class="tipos-card-val">${fmt(Math.round(nuevaCuota))} €/mes</div>
                <div class="tipos-card-dif ${difCuota > 0 ? 'metric-negative' : 'metric-positive'}">
                    ${difCuota > 0 ? '+' : ''}${fmt(Math.round(difCuota))} €/mes vs. actual
                </div>
            </div>
            <div class="tipos-card">
                <div class="tipos-card-label">Nuevo cashflow</div>
                <div class="tipos-card-val ${cfClass}">${fmt(Math.round(nuevoCashflow))} €/mes</div>
                <div class="tipos-card-dif ${difClass}">
                    ${difCashflow >= 0 ? '+' : ''}${fmt(Math.round(difCashflow))} €/mes
                </div>
            </div>
            <div class="tipos-card">
                <div class="tipos-card-label">Coste extra anual</div>
                <div class="tipos-card-val ${difCuota > 0 ? 'metric-negative' : 'metric-positive'}">${fmt(Math.round(Math.abs(difCuota) * 12))} €/año</div>
                <div class="tipos-card-dif" style="font-size:0.75rem; color:var(--text-light)">
                    ${nuevoTipo > datos.interes ? 'impacto de la subida' : nuevoTipo < datos.interes ? 'ahorro de la bajada' : 'sin cambio'}
                </div>
            </div>
        </div>
        ${nuevoCashflow < 0 && datos.flujoMensual >= 0
            ? '<div class="alert alert-danger" style="margin-top:0.75rem;">⚠️ Con este tipo de interés el cashflow se vuelve negativo</div>'
            : ''}
    `;
}

slider.addEventListener('input', recalcularTipos);
recalcularTipos(); // render inicial
```

}

// Registrar en toggleCol para inicializar al abrir
const _originalToggleCol = window.toggleCol;
window.toggleCol = function(id) {
_originalToggleCol(id);
if (id === ‘tipos’ && window._lastDatos) {
setTimeout(() => initSimuladorTipos(window._lastDatos), 50);
}
};

// ============================================================
// WIDGET EMBEBIBLE
// ============================================================
let _widgetSize = ‘full’;
const WIDGET_SIZES = {
full:    { w: ‘100%’,  h: ‘900px’ },
compact: { w: ‘800px’, h: ‘800px’ },
mini:    { w: ‘480px’, h: ‘700px’ },
};

function openWidgetModal() {
document.getElementById(‘widgetModal’).classList.add(‘active’);
renderWidgetCode();
}

function closeWidgetModal() {
document.getElementById(‘widgetModal’).classList.remove(‘active’);
}

window.setWidgetSize = function(size) {
_widgetSize = size;
document.querySelectorAll(’.widget-size-btn’).forEach(b => b.classList.remove(‘active’));
document.getElementById(‘ws-’ + size)?.classList.add(‘active’);
renderWidgetCode();
};

function renderWidgetCode() {
const base = ‘https://pisorentable.org’;
const { w, h } = WIDGET_SIZES[_widgetSize] || WIDGET_SIZES.full;
const code = `<!-- Calculadora de Inversión Inmobiliaria — pisorentable.org -->

<iframe
  src="${base}"
  width="${w}"
  height="${h}"
  style="border:none; border-radius:16px; box-shadow:0 4px 24px rgba(0,0,0,0.12);"
  title="Calculadora rentabilidad alquiler España"
  loading="lazy"
  allow="clipboard-write">
</iframe>
<p style="font-size:12px; color:#888; margin-top:4px;">
  Herramienta gratuita por <a href="${base}" target="_blank">pisorentable.org</a>
</p>`;
    const pre = document.getElementById('widgetCode');
    if (pre) pre.textContent = code;
}

window.copyWidgetCode = function() {
const code = document.getElementById(‘widgetCode’)?.textContent || ‘’;
navigator.clipboard.writeText(code).then(() => {
const btn = document.querySelector(’.widget-copy-btn’);
if (btn) { btn.textContent = ‘✅ Copiado’; setTimeout(() => btn.textContent = ‘📋 Copiar’, 2000); }
});
};

// Registrar listener del botón widget
document.addEventListener(‘DOMContentLoaded’, () => {
document.getElementById(‘widgetBtn’)?.addEventListener(‘click’, openWidgetModal);
}, { once: true });

// ============================================================
// HERRAMIENTAS ADICIONALES — Modal principal
// ============================================================
function openToolsModal() {
renderHistorial();
initModoRapido();
document.getElementById(‘toolsModal’).classList.add(‘active’);
}
function closeToolsModal() {
document.getElementById(‘toolsModal’).classList.remove(‘active’);
}

window.toggleTool = function(id) {
const sec = document.getElementById(‘tool-’ + id);
if (!sec) return;
const isOpen = sec.classList.contains(‘tool-open’);
// Cerrar todas
document.querySelectorAll(’.tool-section.tool-open’).forEach(s => s.classList.remove(‘tool-open’));
// Abrir la clickeada si estaba cerrada
if (!isOpen) {
sec.classList.add(‘tool-open’);
if (id === ‘rapido’) initModoRapido();
if (id === ‘historial’) renderHistorial();
}
};

document.addEventListener(‘DOMContentLoaded’, () => {
document.getElementById(‘toolsBtn’)?.addEventListener(‘click’, openToolsModal);
});

// ============================================================
// HERRAMIENTA 1 — ¿Cuánto puedo pagar?
// ============================================================
window.calcularCapacidad = function() {
const sueldo  = parseFloat(document.getElementById(‘sueldoNeto’)?.value) || 0;
const otros   = parseFloat(document.getElementById(‘otrosIngresos’)?.value) || 0;
const deudas  = parseFloat(document.getElementById(‘otrasDeudas’)?.value) || 0;
const ahorros = parseFloat(document.getElementById(‘ahorrosDisponibles’)?.value) || 0;

```
const ingresoTotal = sueldo + otros;
if (ingresoTotal <= 0) { alert('Introduce tus ingresos mensuales'); return; }

// Criterio 35%: cuota máxima = 35% ingresos - otras deudas
const cuotaMax35 = ingresoTotal * 0.35 - deudas;
// Criterio 40% (más permisivo)
const cuotaMax40 = ingresoTotal * 0.40 - deudas;

if (cuotaMax35 <= 0) {
    document.getElementById('capacidadResultado').style.display = 'block';
    document.getElementById('capacidadResultado').innerHTML =
        '<div class="alert alert-danger">⚠️ Con tus deudas actuales ya superas el 35% de endeudamiento. Reduce deudas antes de solicitar hipoteca.</div>';
    return;
}

// Precio máximo con hipoteca a 25 años al 3.5% (referencia)
function precioMaxHipoteca(cuota, tipo, anos, pctEntrada, pctGastosCompra) {
    const i = tipo / 100 / 12, n = anos * 12;
    const prestamo = i > 0 ? cuota * (Math.pow(1+i,n)-1) / (i*Math.pow(1+i,n)) : cuota*n;
    // prestamo = precio * (1 - entrada%) - pero gastos de compra salen del ahorro
    // precio*(1-entrada%) = prestamo  →  precio = prestamo / (1-entrada%)
    return prestamo / (1 - pctEntrada/100);
}

const tipo = 3.5, anos = 25;
const pctEntrada = 20, pctGastos = 11; // entrada + gastos ~31% del precio

const pm35 = precioMaxHipoteca(cuotaMax35, tipo, anos, pctEntrada, pctGastos);
const pm40 = precioMaxHipoteca(cuotaMax40, tipo, anos, pctEntrada, pctGastos);

// ¿Los ahorros cubren la entrada + gastos del precio máximo?
const entradaGastos35 = pm35 * (pctEntrada + pctGastos) / 100;
const entradaGastos40 = pm40 * (pctEntrada + pctGastos) / 100;
const limitadoPorAhorros = ahorros < entradaGastos35;

// Precio máximo limitado por ahorros: ahorros = precio * 0.31 → precio = ahorros/0.31
const pmAhorros = ahorros / ((pctEntrada + pctGastos) / 100);

const pmFinal35 = limitadoPorAhorros ? Math.min(pm35, pmAhorros) : pm35;
const pmFinal40 = limitadoPorAhorros ? Math.min(pm40, pmAhorros) : pm40;

const faltaAhorros = Math.max(0, entradaGastos35 - ahorros);

document.getElementById('capacidadResultado').style.display = 'block';
document.getElementById('capacidadResultado').innerHTML = `
    <div class="capacidad-grid">
        <div class="capacidad-escenario capacidad-escenario--conservador">
            <div class="cap-label">Escenario conservador (35%)</div>
            <div class="cap-precio">${fmt(Math.round(pmFinal35/1000)*1000)} €</div>
            <div class="cap-detalle">Cuota máx: ${fmt(Math.round(cuotaMax35))} €/mes</div>
            <div class="cap-detalle">Entrada + gastos: ${fmt(Math.round(pmFinal35*(pctEntrada+pctGastos)/100))} €</div>
        </div>
        <div class="capacidad-escenario capacidad-escenario--moderado">
            <div class="cap-label">Escenario moderado (40%)</div>
            <div class="cap-precio">${fmt(Math.round(pmFinal40/1000)*1000)} €</div>
            <div class="cap-detalle">Cuota máx: ${fmt(Math.round(cuotaMax40))} €/mes</div>
            <div class="cap-detalle">Entrada + gastos: ${fmt(Math.round(pmFinal40*(pctEntrada+pctGastos)/100))} €</div>
        </div>
    </div>
    ${limitadoPorAhorros ? `<div class="alert alert-warning" style="margin-top:0.75rem;">⚠️ Capacidad limitada por ahorros. Necesitas <strong>${fmt(Math.round(entradaGastos35))} €</strong> para la entrada+gastos del escenario conservador. Te faltan <strong>${fmt(Math.round(faltaAhorros))} €</strong>.</div>` : ''}
    <div class="cap-nota">* Cálculo con hipoteca a ${anos} años al ${tipo}%. Entrada 20% + gastos compra ~11%. Consulta con tu banco para condiciones reales.</div>
    <button class="btn btn-primary" style="width:100%; margin-top:0.75rem;" onclick="cargarPrecioEnCalculadora(${Math.round(pmFinal35/1000)*1000})">✅ Usar ${fmt(Math.round(pmFinal35/1000)*1000)}€ en la calculadora</button>
`;
```

};

window.cargarPrecioEnCalculadora = function(precio) {
const el = document.getElementById(‘precio’);
if (el) { el.value = precio; calcular(); switchTab(‘propiedad’); }
closeToolsModal();
};

// ============================================================
// HERRAMIENTA 2 — Historial de CPs buscados
// ============================================================
const HISTORIAL_KEY = ‘pisorentable_historial_v1’;

function getHistorial() {
try { return JSON.parse(localStorage.getItem(HISTORIAL_KEY) || ‘[]’); }
catch(e) { return []; }
}

function addToHistorial(cp, provincia, precioM2) {
if (!cp || cp.length < 2) return;
let h = getHistorial();
// Eliminar si ya existe
h = h.filter(x => x.cp !== cp);
h.unshift({ cp, provincia, precioM2, fecha: new Date().toLocaleDateString(‘es-ES’) });
if (h.length > 8) h = h.slice(0, 8);
localStorage.setItem(HISTORIAL_KEY, JSON.stringify(h));
}

function renderHistorial() {
const el = document.getElementById(‘historialList’);
if (!el) return;
const h = getHistorial();
if (h.length === 0) {
el.innerHTML = ‘<p class="saved-empty">Aún no has buscado ningún código postal.<br>Escribe un CP en el panel de Propiedad para guardar el historial.</p>’;
return;
}
el.innerHTML = h.map(item => `<div class="historial-item"> <div class="historial-cp">${item.cp}</div> <div class="historial-info"> <span class="historial-prov">${item.provincia}</span> <span class="historial-precio">${item.precioM2?.toLocaleString('es-ES')} €/m²</span> </div> <div class="historial-fecha">${item.fecha}</div> <button class="btn-saved-load" onclick="cargarCPHistorial('${item.cp}')" title="Cargar este CP">📍</button> </div>`).join(’’);
}

window.clearHistorial = function() {
localStorage.removeItem(HISTORIAL_KEY);
renderHistorial();
};

window.cargarCPHistorial = function(cp) {
const el = document.getElementById(‘codigoPostal’);
if (el) { el.value = cp; actualizarMercado(); switchTab(‘propiedad’); }
closeToolsModal();
};

// Guardar en historial cuando se busca un CP válido
const _origActualizarMercado = actualizarMercado;
actualizarMercado = function() {
_origActualizarMercado();
const cp = (document.getElementById(‘codigoPostal’)?.value || ‘’).trim();
const prefix = cp.slice(0, 2);
const prov = prefix.length === 2 ? PROVINCIA_DATA[prefix] : null;
if (prov && cp.length >= 4) addToHistorial(cp, prov.nombre, prov.precioM2);
};

// ============================================================
// HERRAMIENTA 3 — Modo rápido ¿Me sale la cuenta?
// ============================================================
function initModoRapido() {
[‘rpPrecio’,‘rpEntrada’,‘rpAlquiler’,‘rpAnos’].forEach(id => {
const el = document.getElementById(id);
if (el) el.addEventListener(‘input’, calcularModoRapido);
});
calcularModoRapido();
}

function calcularModoRapido() {
const precio   = parseFloat(document.getElementById(‘rpPrecio’)?.value) || 0;
const entrada  = parseFloat(document.getElementById(‘rpEntrada’)?.value) || 0;
const alquiler = parseFloat(document.getElementById(‘rpAlquiler’)?.value) || 0;
const anos     = parseFloat(document.getElementById(‘rpAnos’)?.value) || 20;
const el       = document.getElementById(‘rapidoResultado’);
if (!el || precio <= 0 || alquiler <= 0) return;

```
// Hipoteca estimada: prestamo a 3.5% 25 años
const prestamo = Math.max(0, precio - entrada);
const i = 3.5/100/12, n = 25*12;
const cuota = prestamo > 0 ? (i > 0 ? prestamo*i*Math.pow(1+i,n)/(Math.pow(1+i,n)-1) : prestamo/n) : 0;

// Gastos estimados: 1.5% precio/año
const gastosMes = precio * 0.015 / 12;
const cashflow = alquiler - cuota - gastosMes;
const rentaBruta = alquiler * 12 / precio * 100;

// Veredicto
let verdict, vClass, vIcon;
if (cashflow > 100 && rentaBruta > 5) {
    verdict = '✅ Sí sale la cuenta'; vClass = 'rapido-verde'; vIcon = '🟢';
} else if (cashflow > -200 && rentaBruta > 4) {
    verdict = '🟡 Sale justo — analiza más'; vClass = 'rapido-amarillo'; vIcon = '🟡';
} else {
    verdict = '🔴 No sale la cuenta'; vClass = 'rapido-rojo'; vIcon = '🔴';
}

el.innerHTML = `
    <div class="rapido-veredicto ${vClass}">
        <span class="rapido-icon">${vIcon}</span>
        <span class="rapido-texto">${verdict}</span>
    </div>
    <div class="rapido-metricas">
        <div class="rapido-met">
            <span class="rapido-met-label">Cashflow est.</span>
            <span class="rapido-met-val ${cashflow >= 0 ? 'metric-positive':'metric-negative'}">${fmt(Math.round(cashflow))} €/mes</span>
        </div>
        <div class="rapido-met">
            <span class="rapido-met-label">Renta bruta</span>
            <span class="rapido-met-val ${rentaBruta>=5?'metric-positive':rentaBruta>=4?'metric-warning':'metric-negative'}">${rentaBruta.toFixed(1)}%</span>
        </div>
        <div class="rapido-met">
            <span class="rapido-met-label">Cuota hip. est.</span>
            <span class="rapido-met-val">${fmt(Math.round(cuota))} €/mes</span>
        </div>
    </div>
    <button class="btn btn-primary" style="width:100%; margin-top:0.75rem; font-size:0.85rem;" onclick="cargarEnCalculadora(${precio},${entrada},${alquiler},${anos})">
        🧮 Analizar en detalle con todos los parámetros
    </button>
`;
```

}

window.cargarEnCalculadora = function(precio, entrada, alquiler, anos) {
const fields = {precio, entradaEuros: entrada, alquiler, anosAnalisis: anos};
Object.entries(fields).forEach(([id, val]) => {
const el = document.getElementById(id);
if (el) el.value = val;
});
calcular();
closeToolsModal();
};

// ============================================================
// HERRAMIENTA 4 — ROI de reforma
// ============================================================
window.calcularROIReforma = function() {
const coste         = parseFloat(document.getElementById(‘refCoste’)?.value) || 0;
const alqAntes      = parseFloat(document.getElementById(‘refAlquilerAntes’)?.value) || 0;
const alqDespues    = parseFloat(document.getElementById(‘refAlquilerDespues’)?.value) || 0;
const plusvalia     = parseFloat(document.getElementById(‘refPlusvalia’)?.value) || 0;
const el = document.getElementById(‘reformaResultado’);
if (!el || coste <= 0) { alert(‘Introduce el coste de la reforma’); return; }

```
const mejoraMensual  = alqDespues - alqAntes;
const mejoraAnual    = mejoraMensual * 12;
const roi            = coste > 0 ? (mejoraAnual / coste * 100) : 0;
const payback        = mejoraAnual > 0 ? coste / mejoraAnual : Infinity;
const retornoTotal   = mejoraAnual * 10 + plusvalia; // 10 años
const roiTotal10     = coste > 0 ? (retornoTotal / coste * 100) : 0;

const roiClass = roi >= 10 ? 'metric-positive' : roi >= 5 ? 'metric-warning' : 'metric-negative';

el.style.display = 'block';
el.innerHTML = `
    <div class="reforma-grid">
        <div class="reforma-card">
            <div class="reforma-card-label">ROI anual reforma</div>
            <div class="reforma-card-val ${roiClass}">${roi.toFixed(1)}%</div>
            <div class="reforma-card-sub">sobre el coste invertido</div>
        </div>
        <div class="reforma-card">
            <div class="reforma-card-label">Payback (recuperación)</div>
            <div class="reforma-card-val">${payback === Infinity ? '∞' : payback.toFixed(1)} años</div>
            <div class="reforma-card-sub">solo por mayor alquiler</div>
        </div>
        <div class="reforma-card">
            <div class="reforma-card-label">Mejora mensual</div>
            <div class="reforma-card-val metric-positive">+${fmt(Math.round(mejoraMensual))} €/mes</div>
            <div class="reforma-card-sub">${fmt(Math.round(mejoraAnual))} €/año</div>
        </div>
        <div class="reforma-card">
            <div class="reforma-card-label">Retorno total 10 años</div>
            <div class="reforma-card-val metric-positive">${fmt(Math.round(retornoTotal))} €</div>
            <div class="reforma-card-sub">alquiler + plusvalía</div>
        </div>
    </div>
    <div class="cap-nota" style="margin-top:0.75rem;">* Incluye ${fmt(Math.round(plusvalia))} € de plusvalía estimada. El ROI real depende de retención de inquilinos y mercado local.</div>
`;
```

};

// ============================================================
// HERRAMIENTA 5 — Simulador Euríbor hipoteca variable
// ============================================================
window.calcularEuribor = function() {
const capital      = parseFloat(document.getElementById(‘eurCapital’)?.value) || 0;
const diferencial  = parseFloat(document.getElementById(‘eurDiferencial’)?.value) || 0.75;
const anos         = parseFloat(document.getElementById(‘eurAnos’)?.value) || 20;
const alquiler     = parseFloat(document.getElementById(‘eurAlquiler’)?.value) || 0;
const gastos       = parseFloat(document.getElementById(‘eurGastos’)?.value) || 0;
const el = document.getElementById(‘euriborResultado’);
if (!el || capital <= 0) { alert(‘Introduce el capital pendiente’); return; }

```
function cuotaHip(euribor) {
    const tipo = Math.max(0, euribor + diferencial);
    const i = tipo / 100 / 12, n = anos * 12;
    return i > 0 ? capital * i * Math.pow(1+i,n) / (Math.pow(1+i,n)-1) : capital/n;
}

// Escenarios Euríbor
const escenarios = [
    { label: 'Euríbor -1% (bajada fuerte)', euribor: -0.5, icon: '📉' },
    { label: 'Euríbor actual ~2.5%',         euribor:  2.5, icon: '📊', actual: true },
    { label: 'Euríbor +1% (subida moderada)',euribor:  3.5, icon: '⚠️' },
    { label: 'Euríbor +2% (subida fuerte)',  euribor:  4.5, icon: '🔴' },
    { label: 'Euríbor +4% (escenario 2022)', euribor:  4.0, icon: '🚨' },
];

const filas = escenarios.map(esc => {
    const tipo = Math.max(0, esc.euribor + diferencial);
    const cuota = cuotaHip(esc.euribor);
    const cf = alquiler - cuota - gastos;
    const cfClass = cf >= 0 ? 'metric-positive' : 'metric-negative';
    return `
        <tr class="${esc.actual ? 'eur-actual-row' : ''}">
            <td>${esc.icon} <span style="font-size:0.82rem;">${esc.label}</span></td>
            <td style="text-align:center; font-weight:700;">${tipo.toFixed(2)}%</td>
            <td style="text-align:right; font-weight:700;">${fmt(Math.round(cuota))} €</td>
            <td style="text-align:right;" class="${cfClass}">${fmt(Math.round(cf))} €</td>
        </tr>`;
}).join('');

const cuotaActual = cuotaHip(2.5);
const cfActual = alquiler - cuotaActual - gastos;

el.style.display = 'block';
el.innerHTML = `
    <div class="eur-summary">
        <span>Con Euríbor actual (~2.5%): cuota <strong>${fmt(Math.round(cuotaActual))} €/mes</strong>, cashflow <strong class="${cfActual>=0?'metric-positive':'metric-negative'}">${fmt(Math.round(cfActual))} €/mes</strong></span>
    </div>
    <div class="eur-table-wrap">
        <table class="eur-table">
            <thead>
                <tr>
                    <th>Escenario</th>
                    <th style="text-align:center;">Tipo total</th>
                    <th style="text-align:right;">Cuota</th>
                    <th style="text-align:right;">Cashflow</th>
                </tr>
            </thead>
            <tbody>${filas}</tbody>
        </table>
    </div>
    <div class="cap-nota" style="margin-top:0.75rem;">* Cashflow = alquiler - cuota - gastos fijos. Tipo total = Euríbor + diferencial ${diferencial}%.</div>
`;
```

};

// ============================================================
// MODAL SELECTOR DE SECCIONES PDF
// ============================================================
function openPdfModal() {
document.getElementById(‘pdfModal’).classList.add(‘active’);
}
function closePdfModal() {
document.getElementById(‘pdfModal’).classList.remove(‘active’);
}

window.toggleAllPdfSections = function(state) {
document.querySelectorAll(’#pdfModal input[type=“checkbox”]’).forEach(function(cb) {
cb.checked = state;
});
};

window.generatePdfWithOptions = function() {
var opts = {};
var checks = document.querySelectorAll(’#pdfModal input[type=“checkbox”]’);
checks.forEach(function(cb) {
var key = cb.id.replace(‘pdfSec_’, ‘’);
opts[key] = cb.checked;
});

```
var btn = document.getElementById('pdfGenerateBtn');
var orig = btn ? btn.innerHTML : '';
if (btn) { btn.innerHTML = '⏳ Generando...'; btn.disabled = true; }

closePdfModal();

setTimeout(function() {
    try {
        exportToPDF(opts);
    } finally {
        setTimeout(function() {
            if (btn) { btn.innerHTML = orig; btn.disabled = false; }
        }, 1200);
    }
}, 50);
```

};