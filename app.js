// ============================================================
// SISTEMA DE TRADUCCIÓN
// ============================================================
const translations = {
    es: {
        calculadora_inversion: "🏠 Calculadora de Inversión Inmobiliaria",
        analisis_completo: "Análisis completo para inversión en alquiler · TIR · ROI · Cashflow · Proyección a largo plazo",
        header_badge: "Herramienta gratuita · España",
        configuracion_inversion: "⚙️ Configuración de Inversión",
        personaliza_parametros: "Personaliza todos los parámetros de tu análisis",
        propiedad: "🏠 Propiedad",
        financiacion: "💰 Financiación",
        ingresos: "📈 Ingresos",
        gastos: "📊 Gastos",
        revalorizacion: "💎 Revalorización",
        precio_compra: "Precio de compra",
        tipo_vivienda: "Tipo de vivienda",
        segunda_vivienda: "Segunda vivienda (7% ITP)",
        vivienda_nueva: "Vivienda nueva (10% IVA + 1.2% AJD)",
        gastos_compra: "Gastos de compra-venta",
        gastos_reforma: "Gastos de reforma",
        tipo_financiacion: "Tipo de financiación",
        con_hipoteca: "Con hipoteca",
        sin_hipoteca: "Sin hipoteca",
        ahorro_aportado: "Ahorro aportado",
        interes_hipoteca: "Tipo de interés hipoteca",
        anos_hipoteca: "Años de hipoteca",
        gastos_hipoteca: "Gastos de hipoteca",
        alquiler_mensual: "Alquiler mensual",
        meses_vacios: "Meses vacío al año",
        incremento_alquiler: "Incremento anual del alquiler",
        anos_analisis: "Años de análisis",
        ibi_anual: "IBI anual",
        gastos_comunidad: "Gastos de comunidad",
        seguro_hogar: "Seguro de hogar",
        seguro_impago: "Seguro de impago",
        mantenimiento: "Mantenimiento y reparaciones",
        administracion: "Administración/Gestión",
        incremento_gastos: "Incremento anual de gastos",
        tasa_impositiva: "Tasa impositiva sobre alquiler neto",
        revalorizacion_anual: "Revalorización anual del inmueble",
        gastos_venta: "Gastos de venta futura",
        plusvalia: "Impuesto plusvalía municipal",
        irpf_venta: "IRPF por venta (19-23%)",
        escenarios_label: "⚡ Escenarios rápidos",
        escenario_pesimista: "😟 Pesimista",
        escenario_realista: "😐 Realista",
        escenario_optimista: "🚀 Optimista",
        btn_compartir: "🔗 Compartir análisis",
        btn_exportar_pdf: "📄 Exportar PDF", // <-- NUEVA CLAVE
        analizar_inversion: "🧮 Analizar Inversión",
        analisis_rentabilidad: "📊 Análisis de Rentabilidad",
        resultados_completos: "Resultados completos de tu inversión a largo plazo",
        analiza_inversion: "¡Analiza tu inversión inmobiliaria!",
        completa_datos: "Completa los datos en el panel izquierdo y haz clic en \"Analizar Inversión\" para obtener un análisis detallado de rentabilidad con proyección a largo plazo.",
        rentabilidad_flujo: "Cashflow mensual",
        share_toast: "✅ Enlace copiado al portapapeles",
        mes: "€/mes",
        ano: "€/año",
        inversion_inicial: "Inversión Inicial",
        flujo_mensual: "Cashflow Mensual",
        tir_anualizada: "Rentabilidad anual compuesta estimada",
        roi_anual: "ROI Anual",
        beneficio_total: "Beneficio Total",
        valor_final: "Valor Neto al Vender",
        flujo_acumulado: "Flujo Acumulado",
        capital_necesario: "Capital necesario para empezar",
        cashflow_mensual_neto: "Cashflow mensual NETO (tras impuestos, año 1)",
        rentabilidad_anual_compuesta: "Estimación basada en flujos proyectados",
        basado_flujo_anual: "Basado en flujo de caja año 1",
        en_anos: "en",
        anos_text: "años",
        solo_por_alquileres: "Solo por alquileres",
        precio_venta_estimado: "Precio venta estimado",
        desglose_inversion: "💰 Desglose de Inversión Inicial",
        entrada_porcentaje: "Entrada",
        impuestos_itp: "Impuestos (ITP / IVA+AJD)",
        gastos_compra_text: "Gastos de compra",
        gastos_reforma_text: "Gastos de reforma",
        gastos_hipoteca_text: "Gastos de hipoteca",
        total_inversion: "TOTAL INVERSIÓN",
        cashflow_mensual_card: "📊 Cashflow Mensual (Año 1)",
        ingresos_alquiler: "Ingresos por Alquiler",
        cuota_hipoteca: "Cuota Hipoteca",
        comunidad_text: "Gastos de Comunidad",
        ibi_mensual: "IBI (mensual)",
        seguro_mensual: "Seguro de hogar (mensual)",
        seguro_impago_mensual: "Seguro de impago (mensual)",
        mantenimiento_mensual: "Mantenimiento (mensual)",
        administracion_text: "Administración",
        impuestos_alquiler: "Impuestos sobre alquiler (mensualizado)",
        net_cashflow: "NET CASHFLOW",
        proyeccion_venta: "🏠 Proyección de Venta (Año",
        valor_estimado: "Valor Estimado del Inmueble",
        gastos_venta_porcentaje: "Gastos de Venta",
        plusvalia_municipal: "Plusvalía Municipal",
        irpf_ganancia: "IRPF Ganancia Capital",
        valor_neto_venta: "VALOR NETO DE VENTA",
        comparacion_inversiones: "📊 Comparación con Otras Inversiones",
        tu_inversion: "Tu Inversión Inmobiliaria",
        deposito_bancario: "Depósito Bancario",
        bonos_espana: "Bonos España",
        fondos_mixtos: "Fondos Mixtos",
        reits: "REITs",
        sp500: "S&P 500",
        proyecciones_ano: "📅 Proyecciones Año por Año",
        ano_header: "Año",
        ingresos_alquiler_header: "Ingresos Alquiler",
        gastos_header: "Gastos",
        hipoteca_header: "Hipoteca",
        impuestos_header: "Impuestos",
        flujo_caja: "Flujo de Caja",
        rentabilidad_flujo_header: "Rent. Flujo (%)",
        roi_anual_header: "ROI (%)",
        valor_inmueble: "Valor Inmueble",
        prestamo_restante: "Préstamo",
        neto_si_vende: "Neto si Vende",
        beneficio_acumulado: "Benef. Acumulado",
        error_calculo: "Ha ocurrido un problema en el cálculo. Verifica los valores introducidos.",
        error_tecnico: "Error técnico:",
        rentabilidad_moderada: "Rentabilidad Moderada: Con un",
        anual_considera: "% anual considera si otras alternativas (fondos indexados, REITs) encajan mejor en tu estrategia.",
        cashflow_negativo: "Cashflow Negativo: Necesitarás aportar",
        mensuales_adicionales: "€ mensuales adicionales de tu bolsillo.",
        excelente_rentabilidad: "Excelente Rentabilidad: Esta inversión supera significativamente la media del mercado inmobiliario español (4-6% anual).",
        comunidad_autonoma: "Comunidad Autónoma",
        ccaa_selecciona: "— Selecciona para ajustar el ITP —",
        itp_hint_default: "El ITP se calcula automáticamente según el tipo de vivienda (7% por defecto)",
        itp_hint_ccaa: "ITP ajustado al tipo de tu comunidad autónoma",
        itp_hint_nueva: "Vivienda nueva: 10% IVA + 1.2% AJD (no aplica ITP)",
        disclaimer_titulo: "Aviso Legal",
        disclaimer_texto: "Esta calculadora proporciona estimaciones orientativas con fines informativos. Los resultados <strong>no constituyen asesoramiento financiero, fiscal ni jurídico</strong>. Las rentabilidades pasadas no garantizan rentabilidades futuras. Consulta siempre con un profesional cualificado antes de tomar decisiones de inversión.",
        disclaimer_acepto: "He leído y acepto que esta herramienta es orientativa y no sustituye al asesoramiento profesional",
        disclaimer_continuar: "Continuar a la calculadora",
        seo_itp_titulo: "¿Qué es el ITP?",
        seo_itp_texto: "El Impuesto de Transmisiones Patrimoniales grava la compra de vivienda de segunda mano. En España oscila entre el 6% y el 10% según la comunidad autónoma. Para la calculadora usamos el valor medio del 7%.",
        seo_tir_titulo: "¿Cómo interpretar la TIR?",
        seo_tir_texto: "La Tasa Interna de Retorno (TIR) mide la rentabilidad anual compuesta considerando tanto los flujos de caja por alquiler como la ganancia por revalorización al vender. Una TIR superior al 6-7% supera la media histórica del mercado inmobiliario español.",
        seo_cashflow_titulo: "Cashflow positivo vs negativo",
        seo_cashflow_texto: "Un cashflow positivo significa que el alquiler cubre todos los gastos e hipoteca con dinero de sobra cada mes. Un cashflow negativo implica que debes aportar dinero mensualmente, apostando por la revalorización futura del inmueble.",
        seo_aviso_titulo: "Aviso importante",
        seo_aviso_texto: "Esta calculadora es una herramienta orientativa. Los resultados dependen de las hipótesis introducidas. La fiscalidad, los tipos de interés y el mercado inmobiliario pueden cambiar significativamente. Consulta siempre con un asesor financiero o fiscal antes de invertir.",
        footer_texto: "Herramienta gratuita, hecha con ❤️ para inversores como tú",
        footer_cafe: "¿Te ha sido útil? Invítame a un café",
        footer_disclaimer: "Esta herramienta es orientativa y no constituye asesoramiento financiero.",
        chart_titulo: "📊 Distribución de costes mensuales",
        chart_hipoteca: "Hipoteca",
        chart_gastos_fijos: "Gastos fijos",
        chart_impuestos: "Impuestos",
        chart_cashflow: "Cashflow neto",
        reset_confirm: "¿Restablecer todos los valores por defecto?"
    },
    en: {
        calculadora_inversion: "🏠 Real Estate Investment Calculator",
        analisis_completo: "Complete analysis for rental investment · IRR · ROI · Cashflow · Long-term projection",
        header_badge: "Free tool · Spain",
        configuracion_inversion: "⚙️ Investment Configuration",
        personaliza_parametros: "Customize all parameters of your analysis",
        propiedad: "🏠 Property",
        financiacion: "💰 Financing",
        ingresos: "📈 Income",
        gastos: "📊 Expenses",
        revalorizacion: "💎 Appreciation",
        precio_compra: "Purchase price",
        tipo_vivienda: "Property type",
        segunda_vivienda: "Second home (7% Transfer Tax)",
        vivienda_nueva: "New home (10% VAT + 1.2% Stamp Duty)",
        gastos_compra: "Purchase expenses",
        gastos_reforma: "Renovation expenses",
        tipo_financiacion: "Financing type",
        con_hipoteca: "With mortgage",
        sin_hipoteca: "Without mortgage",
        ahorro_aportado: "Down payment",
        interes_hipoteca: "Mortgage interest rate",
        anos_hipoteca: "Mortgage term (years)",
        gastos_hipoteca: "Mortgage expenses",
        alquiler_mensual: "Monthly rent",
        meses_vacios: "Vacant months per year",
        incremento_alquiler: "Annual rent increase",
        anos_analisis: "Analysis period (years)",
        ibi_anual: "Annual property tax (IBI)",
        gastos_comunidad: "Community fees",
        seguro_hogar: "Home insurance",
        seguro_impago: "Non-payment insurance",
        mantenimiento: "Maintenance and repairs",
        administracion: "Administration/Management",
        incremento_gastos: "Annual expense increase",
        tasa_impositiva: "Tax rate on net rental income",
        revalorizacion_anual: "Annual property appreciation",
        gastos_venta: "Future sale expenses",
        plusvalia: "Municipal capital gains tax",
        irpf_venta: "Income tax on sale (19-23%)",
        escenarios_label: "⚡ Quick scenarios",
        escenario_pesimista: "😟 Pessimistic",
        escenario_realista: "😐 Realistic",
        escenario_optimista: "🚀 Optimistic",
        btn_compartir: "🔗 Share analysis",
        btn_exportar_pdf: "📄 Export PDF", // <-- NUEVA CLAVE
        analizar_inversion: "🧮 Analyze Investment",
        analisis_rentabilidad: "📊 Profitability Analysis",
        resultados_completos: "Complete results of your long-term investment",
        analiza_inversion: "Analyze your real estate investment!",
        completa_datos: "Fill in the data on the left panel and click \"Analyze Investment\" to get a detailed profitability analysis with long-term projection.",
        rentabilidad_flujo: "Monthly Cashflow",
        share_toast: "✅ Link copied to clipboard",
        mes: "€/month",
        ano: "€/year",
        inversion_inicial: "Initial Investment",
        flujo_mensual: "Monthly Cashflow",
        tir_anualizada: "Estimated compound annual return",
        roi_anual: "Annual ROI",
        beneficio_total: "Total Profit",
        valor_final: "Net Sale Value",
        flujo_acumulado: "Accumulated Cashflow",
        capital_necesario: "Capital needed to start",
        cashflow_mensual_neto: "NET monthly cashflow (after taxes, year 1)",
        rentabilidad_anual_compuesta: "Estimate based on projected cashflows",
        basado_flujo_anual: "Based on year 1 cash flow",
        en_anos: "in",
        anos_text: "years",
        solo_por_alquileres: "From rentals only",
        precio_venta_estimado: "Estimated sale price",
        desglose_inversion: "💰 Initial Investment Breakdown",
        entrada_porcentaje: "Down payment",
        impuestos_itp: "Taxes (Transfer Tax / VAT+Stamp Duty)",
        gastos_compra_text: "Purchase expenses",
        gastos_reforma_text: "Renovation expenses",
        gastos_hipoteca_text: "Mortgage expenses",
        total_inversion: "TOTAL INVESTMENT",
        cashflow_mensual_card: "📊 Monthly Cashflow (Year 1)",
        ingresos_alquiler: "Rental Income",
        cuota_hipoteca: "Mortgage Payment",
        comunidad_text: "Community Fees",
        ibi_mensual: "Property Tax (monthly)",
        seguro_mensual: "Home Insurance (monthly)",
        seguro_impago_mensual: "Non-payment Insurance (monthly)",
        mantenimiento_mensual: "Maintenance (monthly)",
        administracion_text: "Administration",
        impuestos_alquiler: "Rental taxes (monthly)",
        net_cashflow: "NET CASHFLOW",
        proyeccion_venta: "🏠 Sale Projection (Year",
        valor_estimado: "Estimated Property Value",
        gastos_venta_porcentaje: "Sale Expenses",
        plusvalia_municipal: "Municipal Capital Gains Tax",
        irpf_ganancia: "Income Tax on Capital Gains",
        valor_neto_venta: "NET SALE VALUE",
        comparacion_inversiones: "📊 Comparison with Other Investments",
        tu_inversion: "Your Real Estate Investment",
        deposito_bancario: "Bank Deposit",
        bonos_espana: "Spanish Bonds",
        fondos_mixtos: "Mixed Funds",
        reits: "REITs",
        sp500: "S&P 500",
        proyecciones_ano: "📅 Year-by-Year Projections",
        ano_header: "Year",
        ingresos_alquiler_header: "Rental Income",
        gastos_header: "Expenses",
        hipoteca_header: "Mortgage",
        impuestos_header: "Taxes",
        flujo_caja: "Cash Flow",
        rentabilidad_flujo_header: "Cashflow Ret. (%)",
        roi_anual_header: "ROI (%)",
        valor_inmueble: "Property Value",
        prestamo_restante: "Loan",
        neto_si_vende: "Net if Sold",
        beneficio_acumulado: "Accum. Profit",
        error_calculo: "There was a problem with the calculation. Please check the entered values.",
        error_tecnico: "Technical error:",
        rentabilidad_moderada: "Moderate Return: With a",
        anual_considera: "% annual return, consider whether alternatives like index funds or REITs might suit your strategy better.",
        cashflow_negativo: "Negative Cashflow: You will need to contribute",
        mensuales_adicionales: "€ monthly out of pocket.",
        excelente_rentabilidad: "Excellent Return: This investment significantly outperforms the Spanish real estate market average (4-6% annually).",
        comunidad_autonoma: "Autonomous Community",
        ccaa_selecciona: "— Select to adjust Transfer Tax —",
        itp_hint_default: "Transfer Tax calculated automatically based on property type (7% default)",
        itp_hint_ccaa: "Transfer Tax adjusted for your region",
        itp_hint_nueva: "New property: 10% VAT + 1.2% Stamp Duty (no Transfer Tax)",
        disclaimer_titulo: "Legal Notice",
        disclaimer_texto: "This calculator provides indicative estimates for informational purposes only. Results <strong>do not constitute financial, tax, or legal advice</strong>. Past returns do not guarantee future results. Always consult a qualified professional before making investment decisions.",
        disclaimer_acepto: "I have read and accept that this tool is indicative and does not replace professional advice",
        disclaimer_continuar: "Continue to calculator",
        seo_itp_titulo: "What is Transfer Tax (ITP)?",
        seo_itp_texto: "The Impuesto de Transmisiones Patrimoniales taxes the purchase of second-hand property in Spain. It ranges from 6% to 10% depending on the region. The calculator uses a 7% average.",
        seo_tir_titulo: "How to interpret IRR?",
        seo_tir_texto: "The Internal Rate of Return (IRR) measures compound annual profitability considering both rental cash flows and appreciation gains when selling. An IRR above 6-7% exceeds the Spanish real estate historical average.",
        seo_cashflow_titulo: "Positive vs negative cashflow",
        seo_cashflow_texto: "A positive cashflow means rental income covers all expenses and mortgage with money to spare each month. A negative cashflow means you need to contribute monthly, betting on future property appreciation.",
        seo_aviso_titulo: "Important notice",
        seo_aviso_texto: "This calculator is a guideline tool. Results depend on the assumptions entered. Tax law, interest rates, and the property market can change significantly. Always consult a financial or tax advisor before investing.",
        footer_texto: "Free tool, made with ❤️ for investors like you",
        footer_cafe: "Was it useful? Buy me a coffee",
        footer_disclaimer: "This tool is indicative and does not constitute financial advice.",
        chart_titulo: "📊 Monthly cost breakdown",
        chart_hipoteca: "Mortgage",
        chart_gastos_fijos: "Fixed expenses",
        chart_impuestos: "Taxes",
        chart_cashflow: "Net cashflow",
        reset_confirm: "Reset all values to defaults?"
    }
};

let currentLanguage = 'es';

// ============================================================
// DISCLAIMER
// ============================================================
// ============================================================
// IDIOMA
// ============================================================
function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;

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
}

// ============================================================
// SLIDER DE ENTRADA - sincronizado con precio
// ============================================================
function actualizarEntradaSlider() {
    const precioInput = document.getElementById('precio');
    const entradaEurosInput = document.getElementById('entradaEuros');
    const entradaSlider = document.getElementById('entradaSlider');
    const entradaPorcentajeDisplay = document.getElementById('entradaPorcentajeDisplay');

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

    for (const [key, val] of Object.entries(esc)) {
        const el = document.getElementById(key);
        if (el) el.value = val;
    }

    // Marcar botón activo
    document.querySelectorAll('.btn-scenario').forEach(btn => btn.classList.remove('active'));
    const activoBtn = document.querySelector(`[onclick="aplicarEscenario('${tipo}')"]`);
    if (activoBtn) activoBtn.classList.add('active');

    calcular();
}

// ============================================================
// COMPARTIR ANÁLISIS — genera URL con parámetros
// ============================================================
function compartirAnalisis() {
    const ids = [
        'precio','tipoVivienda','gastosCompra','reforma',
        'financiacionTipo','entradaEuros','interes','anos','gastosHipoteca',
        'alquiler','mesesVacio','incrementoAlquiler','anosAnalisis',
        'ibi','comunidad','seguro','seguroImpago','mantenimiento',
        'administracion','incrementoGastos','taxAlquiler',
        'revalorizacion','gastosVenta','plusvalia','irpfVenta'
    ];

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
}

function mostrarShareToast() {
    const toast = document.getElementById('shareToast');
    if (!toast) return;
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 3000);
}

// ============================================================
// CARGAR PARÁMETROS DESDE URL
// ============================================================
function cargarDesdeURL() {
    const params = new URLSearchParams(window.location.search);
    if (params.size === 0) return;

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
}

// ============================================================
// VALIDACIONES — warnings visuales en campos
// ============================================================
function validarEntradas({ mesesVacio, entradaEuros, precio }) {
    // Meses vacío > 6
    const mesesInput = document.getElementById('mesesVacio');
    if (mesesInput) {
        if (mesesVacio > 6) {
            setFieldWarning(mesesInput, currentLanguage === 'es'
                ? '⚠️ Más de 6 meses vacío es inusual. Verifica que es correcto.'
                : '⚠️ More than 6 vacant months is unusual. Please verify.');
        } else {
            clearFieldWarning(mesesInput);
        }
    }

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
}

function setFieldWarning(input, message) {
    clearFieldWarning(input);
    const group = input.closest('.form-group');
    if (!group) return;
    const existing = group.querySelector('.field-warning');
    if (existing) { existing.textContent = message; return; }
    const div = document.createElement('div');
    div.className = 'field-warning';
    div.textContent = message;
    group.appendChild(div);
    input.classList.add('input-warning');
}

function clearFieldWarning(input) {
    const group = input.closest('.form-group');
    if (!group) return;
    const existing = group.querySelector('.field-warning');
    if (existing) existing.remove();
    input.classList.remove('input-warning');
}

// ============================================================
// CÁLCULO PRINCIPAL
// ============================================================
function calcular() {
    try {
        const precio = parseFloat(document.getElementById('precio').value) || 0;
        const tipoVivienda = document.getElementById('tipoVivienda').value;
        const gastosCompra = parseFloat(document.getElementById('gastosCompra').value) || 0;
        const reforma = parseFloat(document.getElementById('reforma').value) || 0;
        const financiacionTipo = document.getElementById('financiacionTipo').value;
        const entradaEuros = parseFloat(document.getElementById('entradaEuros').value) || 0;
        const interes = parseFloat(document.getElementById('interes').value) || 0;
        const anos = parseFloat(document.getElementById('anos').value) || 0;
        const gastosHipoteca = parseFloat(document.getElementById('gastosHipoteca').value) || 0;
        const alquiler = parseFloat(document.getElementById('alquiler').value) || 0;
        const mesesVacio = parseFloat(document.getElementById('mesesVacio').value) || 0;
        const incrementoAlquiler = parseFloat(document.getElementById('incrementoAlquiler').value) || 0;
        const anosAnalisis = Math.max(1, parseFloat(document.getElementById('anosAnalisis').value) || 1);
        const ibi = parseFloat(document.getElementById('ibi').value) || 0;
        const comunidad = parseFloat(document.getElementById('comunidad').value) || 0;
        const seguro = parseFloat(document.getElementById('seguro').value) || 0;
        const seguroImpago = parseFloat(document.getElementById('seguroImpago').value) || 0;
        const mantenimiento = parseFloat(document.getElementById('mantenimiento').value) || 0;
        const administracion = parseFloat(document.getElementById('administracion').value) || 0;
        const incrementoGastos = parseFloat(document.getElementById('incrementoGastos').value) || 0;
        const taxAlquiler = parseFloat(document.getElementById('taxAlquiler').value) || 0;
        const revalorizacion = parseFloat(document.getElementById('revalorizacion').value) || 0;
        const gastosVentaPorc = parseFloat(document.getElementById('gastosVenta').value) || 0;
        const plusvalia = parseFloat(document.getElementById('plusvalia').value) || 0;
        const irpfVenta = parseFloat(document.getElementById('irpfVenta').value) || 0;

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

        window._lastDatos = datos; // Guardamos para exportar PDF
        document.getElementById('resultados').innerHTML = mostrarResultados(datos);
        // Renderizar gráficos DESPUÉS de inyectar el HTML
        requestAnimationFrame(() => {
            renderizarDoughnut(datos);
            renderizarLineChart(datos);
        });
        actualizarResumenFlotante(datos);
        validarEntradas({ mesesVacio, entradaEuros, precio });

    } catch (err) {
        console.error(err);
        document.getElementById('resultados').innerHTML =
            `<div class="alert alert-danger">⚠️ ${translations[currentLanguage].error_calculo}<br><small>${translations[currentLanguage].error_tecnico} ${err.message}</small></div>`;
    }
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
    if (tipo === 'nueva') {
        return precio * 0.10 + precio * 0.012;
    }
    // Usar el tipo de la CC.AA. si está seleccionado
    const ccaaSelector = document.getElementById('ccaaSelector');
    const ccaaVal = ccaaSelector ? parseFloat(ccaaSelector.value) : NaN;
    const itpRate = (!isNaN(ccaaVal) && ccaaVal > 0) ? ccaaVal / 100 : 0.07;
    return precio * itpRate;
}

function fmt(num) {
    return num.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', { maximumFractionDigits: 0 });
}

// ============================================================
// RESET — valores por defecto
// ============================================================
const defaultValues = {
    precio: 95000, gastosCompra: 2500, reforma: 4000,
    tipoVivienda: 'segunda', financiacionTipo: 'con_hipoteca',
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
    const ccaa = document.getElementById('ccaaSelector');
    if (ccaa) ccaa.value = '';
    actualizarEntradaSlider();
    actualizarITPHint();
    toggleFinanciacionInputs();
    // Marcar escenario realista
    document.querySelectorAll('.btn-scenario').forEach(b => b.classList.remove('active'));
    const realista = document.querySelector("[onclick=\"aplicarEscenario('realista')\"]");
    if (realista) realista.classList.add('active');
    calcular();
}

// ============================================================
// DOUGHNUT CHART
// ============================================================
let doughnutInstance = null;

function generarDoughnutHTML(datos) {
    return `<div class="chart-card" id="chartCard">
        <div class="chart-title" id="chartTitleEl"></div>
        <div class="chart-layout">
            <div class="chart-canvas-wrap">
                <canvas id="doughnutChart" width="220" height="220"></canvas>
            </div>
            <div class="chart-legend" id="chartLegend"></div>
        </div>
    </div>`;
}

function renderizarDoughnut(datos) {
    const t = translations[currentLanguage];
    const titleEl = document.getElementById('chartTitleEl');
    if (titleEl) titleEl.textContent = t.chart_titulo;

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
}

// ============================================================
// MOSTRAR RESULTADOS
// ============================================================
function mostrarResultados(datos) {
    const t = translations[currentLanguage];
    const loc = currentLanguage === 'es' ? 'es-ES' : 'en-US';

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

        <!-- DESGLOSE + CASHFLOW LADO A LADO -->
        ${generarDoughnutHTML(datos)}
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

        <!-- GRÁFICO DE EVOLUCIÓN TEMPORAL -->
        ${generarLineChartHTML()}

        <!-- CALCULADORA INVERSA -->
        ${generarCalculadoraInversaHTML()}

        <!-- TABLA DE PROYECCIONES AÑO A AÑO -->
        <div class="detail-card">
            <div class="detail-card-title">${t.proyecciones_ano}</div>
            ${tablaProyecciones}
        </div>
    `;
}

// ============================================================
// RESUMEN FLOTANTE (visible en todos los tamaños)
// ============================================================
function actualizarResumenFlotante(datos) {
    const floatingSummary = document.getElementById('floatingSummary');
    const floatingValue = document.getElementById('floatingValue');
    const floatingTir = document.getElementById('floatingTir');

    if (!floatingSummary || !floatingValue) return;

    floatingValue.innerHTML = `${fmt(datos.flujoMensual)} €<small style="font-size:0.75rem; opacity:0.7;">/mes</small>`;
    floatingValue.className = `floating-value ${datos.flujoMensual >= 0 ? 'metric-positive' : 'metric-negative'}`;

    if (floatingTir) {
        floatingTir.textContent = `TIR: ${datos.rentabilidadAnual.toFixed(2)}%`;
    }

    floatingSummary.classList.add('visible');
}

// ============================================================
// PARTÍCULAS
// ============================================================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 6 + 6) + 's';
        p.style.animationDelay = Math.random() * 8 + 's';
        container.appendChild(p);
    }
}

// ============================================================
// TOGGLE FINANCIACIÓN
// ============================================================
function toggleFinanciacionInputs() {
    const tipo = document.getElementById('financiacionTipo').value;
    const hipotecaGroups = ['entradaGroup', 'interesGroup', 'anosGroup', 'gastosHipGroup'];
    hipotecaGroups.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = tipo === 'sin_hipoteca' ? 'none' : 'block';
    });

    const inputs = ['entradaEuros', 'entradaSlider', 'interes', 'anos', 'gastosHipoteca'];
    inputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) input.disabled = tipo === 'sin_hipoteca';
    });

    calcular();
}

// ============================================================
// CAMBIO DE TAB
// ============================================================
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

    const tab = document.getElementById(tabName + '-tab');
    if (tab) tab.classList.add('active');

    const btn = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
    if (btn) btn.classList.add('active');
}

// ============================================================
// ============================================================
// EXPORTAR A PDF — Generación elegante con jsPDF
// ============================================================
function exportToPDF() {
    if (!window._lastDatos) {
        alert('Primero debes calcular la inversion antes de exportar.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const datos = window._lastDatos;
    const f = (n) => n.toLocaleString('es-ES', { maximumFractionDigits: 0 });
    const fp = (n) => n.toFixed(2) + '%';
    const lang = currentLanguage || 'es';
    const esEs = lang === 'es';

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

    // ── PÁGINA 3: RESULTADOS PRINCIPALES ─────────────────────
    newPage();

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

    // ── CALCULADORA INVERSA EN PDF ────────────────────────────
    // Solo la incluimos si el usuario ha ejecutado calcularInversa()
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
            ? '* Calculo por biseccion numerica con los parametros actuales: ' + interesPDF + '% de interes, ' + anosPDF + ' anos de hipoteca, ' + alquilerPDF + ' EUR/mes de alquiler y ' + entradaPctDispPDF + '% de entrada.'
            : '* Numerical bisection calculation using current parameters: ' + interesPDF + '% interest, ' + anosPDF + '-year mortgage, ' + alquilerPDF + ' EUR/month rent, ' + entradaPctDispPDF + '% down payment.'), CW);
        notaLines.forEach(line => { text(line, ML, y); y += 4.5; });
        y += 4;
    }

    // ── ÚLTIMA PÁGINA: COMPARATIVA DE RENTABILIDADES ─────────
    newPage();
    sectionTitle(esEs ? 'Comparativa con Otras Inversiones' : 'Comparison with Other Investments');

    const comparaciones = [
        { label: esEs ? '>> Tu inversion inmobiliaria' : '>> Your real estate investment', value: datos.rentabilidadAnual },
        { label: esEs ? '   Deposito bancario' : '   Bank deposit',       value: 2.8 },
        { label: esEs ? '   Bono espanol 10 anos' : '   Spanish 10yr bond',value: 3.2 },
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
}

// ============================================================
// ============================================================
// ARRANQUE GLOBAL — único DOMContentLoaded
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
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
            const originalHTML = pdfBtn.innerHTML;
            pdfBtn.innerHTML = '<span>⏳ Generando PDF…</span>';
            pdfBtn.disabled = true;
            setTimeout(() => {
                try {
                    exportToPDF();
                } finally {
                    setTimeout(() => {
                        pdfBtn.innerHTML = originalHTML;
                        pdfBtn.disabled = false;
                    }, 1200);
                }
            }, 50);
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
});
// ============================================================
// COOKIES
// ============================================================
function mostrarBannerCookies() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    if (localStorage.getItem('cookiesAceptadas') !== 'true') {
        setTimeout(() => banner.classList.add('visible'), 800);
    }
}

function aceptarCookies() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.remove('visible');
    localStorage.setItem('cookiesAceptadas', 'true');
}

// ============================================================
// GRÁFICO DE EVOLUCIÓN TEMPORAL (línea - beneficio acumulado)
// ============================================================
let lineChartInstance = null;

function generarLineChartHTML() {
    return `
    <div class="line-chart-card">
        <div class="line-chart-title">📈 Evolución del beneficio acumulado año a año</div>
        <div class="line-chart-wrap">
            <canvas id="lineChart"></canvas>
        </div>
    </div>`;
}

function renderizarLineChart(datos) {
    const canvas = document.getElementById('lineChart');
    if (!canvas) return;
    if (lineChartInstance) { lineChartInstance.destroy(); lineChartInstance = null; }

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
}

// ============================================================
// TOOLTIPS EN MÉTRICAS DE RESULTADO
// ============================================================
const METRIC_TOOLTIPS = {
    tir: {
        es: 'Tasa Interna de Retorno: mide el rendimiento anual compuesto total de tu inversión, incluyendo alquileres cobrados y ganancia estimada al vender. Por encima del 6-7% supera la media histórica del inmobiliario español.',
        en: 'Internal Rate of Return: measures the total compound annual return of your investment, including rent collected and estimated gain on sale. Above 6-7% beats the Spanish real estate historical average.'
    },
    roi: {
        es: 'Return on Investment: relaciona el cashflow anual con el capital que pusiste de tu bolsillo. Un ROI alto con cashflow negativo es señal de alerta.',
        en: 'Return on Investment: relates annual cashflow to the capital you put in. A high ROI with negative cashflow is a warning sign.'
    },
    cashflow: {
        es: 'Lo que te queda en el bolsillo cada mes después de pagar hipoteca, gastos e impuestos. El indicador clave si buscas renta pasiva inmediata.',
        en: 'What you keep each month after paying mortgage, costs and taxes. The key indicator if you seek immediate passive income.'
    },
    beneficio: {
        es: 'Ganancia total al final del período: suma del cashflow acumulado durante todos los años más el neto que recibirías al vender, menos tu inversión inicial.',
        en: 'Total gain at end of period: sum of cumulative cashflow plus net proceeds from sale, minus your initial investment.'
    },
    neto: {
        es: 'Lo que recibirías neto si vendieras el inmueble al final del período, descontando gastos de venta, plusvalía municipal e IRPF sobre la ganancia.',
        en: 'Net amount you would receive if you sold the property at end of period, after deducting sale costs, municipal tax and income tax on gain.'
    }
};

function initTooltips() {
    document.body.addEventListener('mouseenter', e => {
        const el = e.target.closest('[data-tooltip-key]');
        if (!el) return;
        const key = el.dataset.tooltipKey;
        const tip = METRIC_TOOLTIPS[key];
        if (!tip) return;
        showTooltip(el, tip[currentLanguage] || tip.es);
    }, true);
    document.body.addEventListener('mouseleave', e => {
        if (e.target.closest('[data-tooltip-key]')) hideTooltip();
    }, true);
}

let tooltipEl = null;
function showTooltip(anchor, text) {
    hideTooltip();
    tooltipEl = document.createElement('div');
    tooltipEl.className = 'metric-tooltip-popup';
    tooltipEl.textContent = text;
    document.body.appendChild(tooltipEl);
    const rect = anchor.getBoundingClientRect();
    const top = rect.top + window.scrollY - tooltipEl.offsetHeight - 10;
    const left = Math.min(rect.left + window.scrollX, window.innerWidth - 320);
    tooltipEl.style.top = Math.max(8, top) + 'px';
    tooltipEl.style.left = Math.max(8, left) + 'px';
}
function hideTooltip() {
    if (tooltipEl) { tooltipEl.remove(); tooltipEl = null; }
}

// ============================================================
// CALCULADORA INVERSA
// ============================================================
function initCalculadoraInversa() {
    // Se inyecta en el panel de resultados cuando hay datos calculados
}

function generarCalculadoraInversaHTML() {
    var esEs = (currentLanguage || "es") === "es";
    var titulo = esEs ? "Calculadora inversa" : "Reverse calculator";
    var subtitulo = esEs
        ? "Introduce el cashflow mensual minimo que quieres y calculamos el precio maximo que puedes pagar manteniendo el resto de parametros."
        : "Enter the minimum monthly cashflow you want and we calculate the maximum price you can pay keeping all other parameters.";
    var labelCF = esEs ? "Cashflow mensual minimo deseado" : "Minimum monthly cashflow target";
    var hint = esEs ? "Pon 0 para cashflow neutro, o negativo si lo aceptas." : "Use 0 for break-even, negative if acceptable.";
    var btnText = esEs ? "Calcular precio maximo del inmueble" : "Calculate max property price";
    var resHeader = esEs ? "Resultado del analisis inverso" : "Reverse analysis result";
    return '<div class="inverse-calc-card">' +
        '<div class="inverse-calc-header">' +
            '<div class="inverse-calc-title">' + titulo + '</div>' +
            '<div class="inverse-calc-subtitle">' + subtitulo + '</div>' +
        '</div>' +
        '<div class="inverse-calc-body">' +
            '<div class="inverse-field">' +
                '<label>' + labelCF + '</label>' +
                '<div class="input-group">' +
                    '<input type="number" id="inverseCashflow" class="form-input with-suffix" value="200" min="-9999" step="50"/>' +
                    '<span class="input-suffix">€/mes</span>' +
                '</div>' +
                '<div class="field-hint">' + hint + '</div>' +
            '</div>' +
            '<button class="btn btn-primary" style="width:100%; margin-top:0.75rem;" onclick="calcularInversa()">' + btnText + '</button>' +
            '<div id="inversaResultado" style="display:none;">' +
                '<div class="inversa-resultado-header">' + resHeader + '</div>' +
                '<div class="inversa-resultado-body" id="inversaResultadoBody"></div>' +
                '<p class="inversa-nota" id="inversaResultadoNota"></p>' +
            '</div>' +
        '</div>' +
    '</div>';
}

window.calcularInversa = function() {
    var targetCF = parseFloat(document.getElementById("inverseCashflow").value) || 0;
    var d = window._lastDatos;
    if (!d) return;

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
        ? "* Calculo basado en: " + interes + "% de interes, " + anos + " anos de hipoteca, " + alquiler + " EUR/mes de alquiler y " + entradaPctDisplay + "% de entrada."
        : "* Based on: " + interes + "% interest, " + anos + "-year mortgage, " + alquiler + " EUR/month rent, " + entradaPctDisplay + "% down payment.";

    res.style.display = "block";
};

// ============================================================
// COOKIES
// ============================================================
function mostrarBannerCookies() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    if (localStorage.getItem('cookiesAceptadas') !== 'true') {
        setTimeout(() => banner.classList.add('visible'), 800);
    }
}

function aceptarCookies() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.remove('visible');
    localStorage.setItem('cookiesAceptadas', 'true');
}

// ============================================================
// COOKIES
// ============================================================
