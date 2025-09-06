// Variables globales
const scenarios = {
    conservador: {
        revalorizacion: 1.5,
        incrementoAlquiler: 2,
        mesesVacio: 2,
        mantenimiento: 1200,
        interes: 4.0,
        incrementoGastos: 0,
        financiacionTipo: 'con_hipoteca',
        taxAlquiler: 21
    },
    moderado: {
        revalorizacion: 2.5,
        incrementoAlquiler: 3,
        mesesVacio: 1,
        mantenimiento: 1000,
        interes: 3.5,
        incrementoGastos: 0,
        financiacionTipo: 'con_hipoteca',
        taxAlquiler: 21
    },
    optimista: {
        revalorizacion: 4.0,
        incrementoAlquiler: 4,
        mesesVacio: 0.5,
        mantenimiento: 800,
        interes: 3.0,
        incrementoGastos: 0,
        financiacionTipo: 'con_hipoteca',
        taxAlquiler: 21
    }
};

// Sistema de traducción
const translations = {
    es: {
        calculadora_inversion: "🏠 Calculadora de Inversión Inmobiliaria",
        analisis_completo: "Análisis completo para inversión en alquiler - España",
        configuracion_inversion: "⚙️ Configuración de Inversión",
        personaliza_parametros: "Personaliza todos los parámetros de tu análisis",
        conservador: "🛡️ Conservador",
        moderado: "⚖️ Moderado",
        optimista: "🚀 Optimista",
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
        porcentaje_entrada: "Porcentaje de entrada",
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
        analizar_inversion: "🧮 Analizar Inversión",
        analisis_rentabilidad: "📊 Análisis de Rentabilidad",
        resultados_completos: "Resultados completos de tu inversión a largo plazo",
        analiza_inversion: "¡Analiza tu inversión inmobiliaria!",
        completa_datos: "Completa los datos en el panel izquierdo y haz clic en \"Analizar Inversión\" para obtener un análisis detallado de rentabilidad con proyección a largo plazo.",
        rentabilidad_flujo: "Rentabilidad por flujo",
        mes: "€/mes",
        ano: "€/año",
        inversion_inicial: "Inversión Inicial",
        flujo_mensual: "Flujo Mensual",
        tir_anualizada: "TIR Anualizada",
        roi_anual: "ROI Anual",
        beneficio_total: "Beneficio Total",
        valor_final: "Valor Final",
        flujo_acumulado: "Flujo Acumulado",
        capital_necesario: "Capital necesario para empezar",
        cashflow_mensual_neto: "Cashflow mensual neto (Año 1)",
        rentabilidad_anual_compuesta: "Rentabilidad anual compuesta",
        basado_flujo_anual: "Basado en flujo de caja año 1",
        en_anos: "años",
        solo_por_alquileres: "Solo por alquileres",
        desglose_inversion: "💰 Desglose de Inversión Inicial",
        entrada_porcentaje: "Entrada",
        impuestos_itp: "Impuestos (ITP/IVA+AJD)",
        gastos_compra_text: "Gastos de compra",
        gastos_reforma_text: "Gastos de reforma",
        gastos_hipoteca_text: "Gastos de hipoteca",
        total_inversion: "TOTAL INVERSIÓN",
        cashflow_mensual: "📊 Cashflow Mensual (Año 1)",
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
        tu_inversion: "Tu Inversión",
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
        rentabilidad_flujo_header: "Rentabilidad Flujo (%)",
        roi_anual_header: "ROI Anual (%)",
        valor_inmueble: "Valor Inmueble",
        prestamo_restante: "Préstamo Restante",
        neto_si_vende: "Neto si Vende",
        beneficio_acumulado: "Beneficio Acumulado",
        error_calculo: "Error: Ha ocurrido un problema en el cálculo. Verifica los valores introducidos.",
        error_tecnico: "Error técnico:",
        rentabilidad_moderada: "Rentabilidad Moderada: Con un",
        anual_considera: "% anual, considera alternativas como fondos indexados o REITs.",
        cashflow_negativo: "Cashflow Negativo: Necesitarás aportar",
        mensuales_adicionales: "€ mensuales adicionales.",
        excelente_rentabilidad: "Excelente Rentabilidad: Esta inversión supera significativamente la media del mercado inmobiliario español (4-6% anual)."
    },
    en: {
        calculadora_inversion: "🏠 Real Estate Investment Calculator",
        analisis_completo: "Complete analysis for rental investment - Spain",
        configuracion_inversion: "⚙️ Investment Configuration",
        personaliza_parametros: "Customize all parameters of your analysis",
        conservador: "🛡️ Conservative",
        moderado: "⚖️ Moderate",
        optimista: "🚀 Optimistic",
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
        porcentaje_entrada: "Down payment percentage",
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
        analizar_inversion: "🧮 Analyze Investment",
        analisis_rentabilidad: "📊 Profitability Analysis",
        resultados_completos: "Complete results of your long-term investment",
        analiza_inversion: "Analyze your real estate investment!",
        completa_datos: "Complete the data in the left panel and click \"Analyze Investment\" to get a detailed profitability analysis with long-term projection.",
        rentabilidad_flujo: "Cashflow Return",
        mes: "€/month",
        ano: "€/year",
        inversion_inicial: "Initial Investment",
        flujo_mensual: "Monthly Cashflow",
        tir_anualizada: "Annualized IRR",
        roi_anual: "Annual ROI",
        beneficio_total: "Total Profit",
        valor_final: "Final Value",
        flujo_acumulado: "Accumulated Cashflow",
        capital_necesario: "Capital needed to start",
        cashflow_mensual_neto: "Net monthly cashflow (Year 1)",
        rentabilidad_anual_compuesta: "Compound annual return",
        basado_flujo_anual: "Based on year 1 cash flow",
        en_anos: "years",
        solo_por_alquileres: "From rentals only",
        desglose_inversion: "💰 Initial Investment Breakdown",
        entrada_porcentaje: "Down payment",
        impuestos_itp: "Taxes (Transfer Tax/VAT+Stamp Duty)",
        gastos_compra_text: "Purchase expenses",
        gastos_reforma_text: "Renovation expenses",
        gastos_hipoteca_text: "Mortgage expenses",
        total_inversion: "TOTAL INVESTMENT",
        cashflow_mensual: "📊 Monthly Cashflow (Year 1)",
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
        tu_inversion: "Your Investment",
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
        rentabilidad_flujo_header: "Cashflow Return (%)",
        roi_anual_header: "Annual ROI (%)",
        valor_inmueble: "Property Value",
        prestamo_restante: "Remaining Loan",
        neto_si_vende: "Net if Sold",
        beneficio_acumulado: "Accumulated Profit",
        error_calculo: "Error: There was a problem with the calculation. Please check the entered values.",
        error_tecnico: "Technical error:",
        rentabilidad_moderada: "Moderate Return: With a",
        anual_considera: "% annual return, consider alternatives like index funds or REITs.",
        cashflow_negativo: "Negative Cashflow: You will need to contribute",
        mensuales_adicionales: "€ monthly additionally.",
        excelente_rentabilidad: "Excellent Return: This investment significantly outperforms the Spanish real estate market average (4-6% annually)."
    }
};

let currentLanguage = 'es';

// Función para cambiar el idioma
function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Actualizar todos los textos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Actualizar opciones de select
    document.querySelectorAll('option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        if (translations[lang][key]) {
            option.textContent = translations[lang][key];
        }
    });
    
    // Si hay resultados, recalcular para actualizar el texto
    if (document.getElementById('resultados').innerHTML.indexOf('empty-state') === -1) {
        calcular();
    }
}

// Crear partículas de fondo
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Habilitar/deshabilitar inputs de hipoteca
function toggleFinanciacionInputs() {
    const financiacionTipo = document.getElementById('financiacionTipo').value;
    const inputs = ['entrada', 'interes', 'anos', 'gastosHipoteca'];
    inputs.forEach(id => {
        const input = document.getElementById(id);
        input.disabled = financiacionTipo === 'sin_hipoteca';
    });
    setTimeout(calcular, 100);
}

// Cargar escenario predefinido
function loadScenario(scenario) {
    console.log('Cargando escenario:', scenario);
    
    const config = scenarios[scenario];
    if (!config) return;
    
    // Actualizar valores
    document.getElementById('revalorizacion').value = config.revalorizacion;
    document.getElementById('incrementoAlquiler').value = config.incrementoAlquiler;
    document.getElementById('mesesVacio').value = config.mesesVacio;
    document.getElementById('mantenimiento').value = config.mantenimiento;
    document.getElementById('interes').value = config.interes;
    document.getElementById('incrementoGastos').value = config.incrementoGastos;
    document.getElementById('financiacionTipo').value = config.financiacionTipo;
    document.getElementById('taxAlquiler').value = config.taxAlquiler;
    
    // Actualizar botones
    document.querySelectorAll('.scenario-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.scenario-btn[data-scenario="${scenario}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // Actualizar estado de inputs de hipoteca
    toggleFinanciacionInputs();
    
    // Recalcular
    setTimeout(calcular, 100);
}

// Cambiar tab
function switchTab(tabName) {
    console.log('Cambiando a tab:', tabName);
    
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const targetTab = document.getElementById(tabName + '-tab');
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    const activeTab = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
    if (activeTab) activeTab.classList.add('active');
}

// Obtener valor seguro de un elemento
function getValue(id, defaultValue = 0) {
    const element = document.getElementById(id);
    if (!element) return defaultValue;
    const value = parseFloat(element.value);
    return isNaN(value) ? defaultValue : Math.max(0, value);
}

// Obtener valor de texto
function getTextValue(id, defaultValue = '') {
    const element = document.getElementById(id);
    return element ? element.value : defaultValue;
}

// Calcular cuota hipoteca
function calcularCuotaHipoteca(capital, interes, anos) {
    if (capital <= 0 || anos <= 0) return 0;
    if (interes === 0) return capital / (anos * 12);
    
    const i = interes / 100 / 12;
    const n = anos * 12;
    return (capital * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
}

// Calcular saldo pendiente del inmueble
function calcularSaldoPendiente(capital, interes, anos, year) {
    if (capital <= 0 || anos <= 0 || year >= anos) return 0;
    const i = interes / 100 / 12;
    const n = anos * 12;
    const pagosRealizados = year * 12;
    const cuota = calcularCuotaHipoteca(capital, interes, anos);
    return capital * Math.pow(1 + i, pagosRealizados) - cuota * (Math.pow(1 + i, pagosRealizados) - 1) / i;
}

// Calcular impuestos
function calcularImpuestos(precio, tipo) {
    if (tipo === 'nueva') {
        return precio * 0.10 + precio * 0.012; // IVA + AJD
    } else {
        return precio * 0.07; // ITP para segunda vivienda
    }
}

// Función principal de cálculo
function calcular() {
    console.log('Iniciando cálculo...');
    
    try {
        // Obtener todos los valores
        const precio = getValue('precio', 140000);
        const tipoVivienda = getTextValue('tipoVivienda', 'segunda');
        const gastosCompra = getValue('gastosCompra', 3500);
        const reforma = getValue('reforma', 5000);
        
        const financiacionTipo = getTextValue('financiacionTipo', 'con_hipoteca');
        let entrada = financiacionTipo === 'sin_hipoteca' ? 100 : getValue('entrada', 20);
        let interes = financiacionTipo === 'sin_hipoteca' ? 0 : getValue('interes', 2.5);
        let anos = financiacionTipo === 'sin_hipoteca' ? 0 : getValue('anos', 25);
        let gastosHipoteca = financiacionTipo === 'sin_hipoteca' ? 0 : getValue('gastosHipoteca', 2500);
        
        const alquiler = getValue('alquiler', 800);
        const mesesVacio = getValue('mesesVacio', 1);
        const incrementoAlquiler = getValue('incrementoAlquiler', 3);
        const anosAnalisis = getValue('anosAnalisis', 20);
        
        const ibi = getValue('ibi', 500);
        const comunidad = getValue('comunidad', 80);
        const seguro = getValue('seguro', 300);
        const seguroImpago = getValue('seguroImpago', 200);
        const mantenimiento = getValue('mantenimiento', 500);
        const administracion = getValue('administracion', 60);
        const incrementoGastos = getValue('incrementoGastos', 0);
        const taxAlquiler = getValue('taxAlquiler', 21);
        
        const revalorizacion = getValue('revalorizacion', 2.5);
        const gastosVenta = getValue('gastosVenta', 8);
        const plusvalia = getValue('plusvalia', 2000);
        const irpfVenta = getValue('irpfVenta', 19);

        // Validaciones
        if (anosAnalisis < 1) {
            throw new Error(currentLanguage === 'es' ? 
                'Los años de análisis deben ser mayores a 0.' : 
                'Analysis period must be greater than 0 years.');
        }
        if (financiacionTipo === 'con_hipoteca' && anos < 1) {
            throw new Error(currentLanguage === 'es' ? 
                'Los años de hipoteca deben ser mayores a 0.' : 
                'Mortgage term must be greater than 0 years.');
        }
        if (mesesVacio > 12) {
            throw new Error(currentLanguage === 'es' ? 
                'Los meses vacíos no pueden superar los 12 meses.' : 
                'Vacant months cannot exceed 12 months.');
        }

        // Cálculos básicos
        const impuestos = calcularImpuestos(precio, tipoVivienda);
        const montoEntrada = precio * (entrada / 100);
        const capitalPrestamo = precio - montoEntrada;
        const inversionInicial = montoEntrada + impuestos + gastosCompra + gastosHipoteca + reforma;
        const cuotaHipoteca = calcularCuotaHipoteca(capitalPrestamo, interes, anos);
        const mesesOcupados = 12 - mesesVacio;

        // Calcular ingresos y gastos del primer año
        const ingresosAlquiler = alquiler * mesesOcupados;
        const gastosFijos = (cuotaHipoteca * 12) + ibi + seguro + seguroImpago + mantenimiento + (comunidad * 12) + (administracion * 12);
        let interest_anual = 0;
        let remaining = capitalPrestamo;
        if (financiacionTipo === 'con_hipoteca' && capitalPrestamo > 0) {
            let remaining_year = remaining;
            for (let m = 0; m < 12; m++) {
                const interest_month = remaining_year * (interes / 100 / 12);
                const principal_month = cuotaHipoteca - interest_month;
                remaining_year -= principal_month;
                interest_anual += interest_month;
            }
        }
        const operativos = gastosFijos - (cuotaHipoteca * 12);
        const net_for_tax = ingresosAlquiler - operativos - interest_anual;
        const tax_anual = Math.max(0, net_for_tax) * (taxAlquiler / 100);
        const taxMensual = tax_anual / 12; // Calcular impuesto mensual
        const flujoMensual = (ingresosAlquiler - gastosFijos - tax_anual) / 12;
        const ingresosMensuales = ingresosAlquiler / 12;
        const roiAnual = (flujoMensual * 12 / inversionInicial) * 100;

        // Simulación año por año
        let flujoAcumulado = 0;
        let valorVivienda = precio;
        let alquilerActual = alquiler;
        let ibiActual = ibi;
        let comunidadActual = comunidad;
        let seguroActual = seguro;
        let seguroImpagoActual = seguroImpago;
        let mantenimientoActual = mantenimiento;
        let administracionActual = administracion;
        const proyecciones = [];

        for (let year = 1; year <= anosAnalisis; year++) {
            const ingresosAlquilerAnual = alquilerActual * mesesOcupados;
            const gastosFijosAnual = (cuotaHipoteca * 12) + ibiActual + seguroActual + seguroImpagoActual + mantenimientoActual + (comunidadActual * 12) + (administracionActual * 12);
            let interest_anual_loop = 0;
            if (financiacionTipo === 'con_hipoteca' && capitalPrestamo > 0) {
                let remaining_year = remaining;
                for (let m = 0; m < 12; m++) {
                    const interest_month = remaining_year * (interes / 100 / 12);
                    const principal_month = cuotaHipoteca - interest_month;
                    remaining_year -= principal_month;
                    interest_anual_loop += interest_month;
                }
            }
            const operativos_loop = gastosFijosAnual - (cuotaHipoteca * 12);
            const net_for_tax_loop = ingresosAlquilerAnual - operativos_loop - interest_anual_loop;
            const tax_loop = Math.max(0, net_for_tax_loop) * (taxAlquiler / 100);
            const flujoAnual = ingresosAlquilerAnual - gastosFijosAnual - tax_loop;
            const rentabilidadFlujo = (flujoAnual / inversionInicial) * 100;
            const roiAnualLoop = (flujoAnual / inversionInicial) * 100; // ROI por año
            const saldoPendiente = financiacionTipo === 'sin_hipoteca' ? 0 : calcularSaldoPendiente(capitalPrestamo, interes, anos, year);

            const precioVentaBruto = valorVivienda;
            const gastosVentaEuros = precioVentaBruto * (gastosVenta / 100);
            const gananciaCapital = Math.max(0, precioVentaBruto - precio);
            const impuestosGanancias = gananciaCapital * (irpfVenta / 100);
            const precioVentaNeto = precioVentaBruto - gastosVentaEuros - plusvalia - impuestosGanancias;
            const beneficioVenda = precioVentaNeto - saldoPendiente;
            const beneficioAcumulado = flujoAcumulado + flujoAnual + beneficioVenda - inversionInicial;

            proyecciones.push({
                year,
                ingresosAlquiler: ingresosAlquilerAnual,
                gastosFijos: gastosFijosAnual,
                cuotaHipoteca: cuotaHipoteca * 12,
                tax: tax_loop,
                flujoAnual,
                rentabilidadFlujo,
                roiAnual: roiAnualLoop,
                valorVivienda,
                saldoPendiente,
                precioVentaNeto,
                beneficioAcumulado
            });

            flujoAcumulado += flujoAnual;
            valorVivienda *= (1 + revalorizacion / 100);
            alquilerActual *= (1 + incrementoAlquiler / 100);
            ibiActual *= (1 + incrementoGastos / 100);
            comunidadActual *= (1 + incrementoGastos / 100);
            seguroActual *= (1 + incrementoGastos / 100);
            seguroImpagoActual *= (1 + incrementoGastos / 100);
            mantenimientoActual *= (1 + incrementoGastos / 100);
            administracionActual *= (1 + incrementoGastos / 100);
            if (financiacionTipo === 'con_hipoteca' && capitalPrestamo > 0) {
                remaining = saldoPendiente;
            }
        }

        // Cálculo final (para el último año)
        const precioVentaBruto = valorVivienda;
        const gastosVentaEuros = precioVentaBruto * (gastosVenta / 100);
        const gananciaCapital = Math.max(0, precioVentaBruto - precio);
        const impuestosGanancias = gananciaCapital * (irpfVenta / 100);
        const precioVentaNeto = precioVentaBruto - gastosVentaEuros - plusvalia - impuestosGanancias;

        // Rentabilidad
        const beneficioTotal = flujoAcumulado + (precioVentaNeto - precio);
        const valorFinal = inversionInicial + beneficioTotal;
        const rentabilidadAnual = inversionInicial > 0 && valorFinal > 0 && anosAnalisis > 0 ? 
            (Math.pow(valorFinal / inversionInicial, 1 / anosAnalisis) - 1) * 100 : 0;

        const datos = {
            inversionInicial,
            flujoMensual,
            flujoAcumulado,
            rentabilidadAnual,
            roiAnual,
            beneficioTotal,
            precioVentaNeto,
            precioVentaBruto,
            montoEntrada,
            impuestos,
            gastosCompra,
            reforma,
            gastosHipoteca,
            entrada,
            ingresosMensuales,
            cuotaHipoteca,
            comunidad,
            ibi,
            seguro,
            seguroImpago,
            mantenimiento,
            administracion,
            gastosVentaEuros,
            plusvalia,
            impuestosGanancias,
            anosAnalisis,
            proyecciones,
            financiacionTipo,
            taxMensual
        };

        console.log('Datos calculados:', datos);
        mostrarResultados(datos);
        actualizarResumenFlotante(datos);

    } catch (error) {
        console.error('Error en cálculo:', error);
        document.getElementById('resultados').innerHTML = `
            <div class="alert alert-danger">
                ⚠️ <strong>${translations[currentLanguage].error_calculo}</strong>
                <br><small>${translations[currentLanguage].error_tecnico} ${error.message}</small>
            </div>
        `;
    }
}

// Mostrar resultados
function mostrarResultados(datos) {
    console.log('Mostrando resultados...');
    
    const resultadosDiv = document.getElementById('resultados');
    if (!resultadosDiv) return;

    // Clases de color
    let rentabilidadClass = 'metric-warning';
    if (datos.rentabilidadAnual > 6) rentabilidadClass = 'metric-positive';
    else if (datos.rentabilidadAnual < 3) rentabilidadClass = 'metric-negative';
    
    let roiClass = 'metric-warning';
    if (datos.roiAnual > 6) roiClass = 'metric-positive';
    else if (datos.roiAnual < 3) roiClass = 'metric-negative';
    
    let flujoClass = datos.flujoMensual > 0 ? 'metric-positive' : 'metric-negative';
    let beneficioClass = datos.beneficioTotal > 0 ? 'metric-positive' : 'metric-negative';

    // Generar tabla de proyecciones
    let tablaProyecciones = `
        <div class="projection-table-container">
            <table class="projection-table">
                <thead>
                    <tr>
                        <th>${translations[currentLanguage].ano_header}</th>
                        <th>${translations[currentLanguage].ingresos_alquiler_header}</th>
                        <th>${translations[currentLanguage].gastos_header}</th>
                        <th>${translations[currentLanguage].hipoteca_header}</th>
                        <th>${translations[currentLanguage].impuestos_header}</th>
                        <th>${translations[currentLanguage].flujo_caja}</th>
                        <th>${translations[currentLanguage].rentabilidad_flujo_header}</th>
                        <th>${translations[currentLanguage].roi_anual_header}</th>
                        <th>${translations[currentLanguage].valor_inmueble}</th>
                        <th>${translations[currentLanguage].prestamo_restante}</th>
                        <th>${translations[currentLanguage].neto_si_vende}</th>
                        <th>${translations[currentLanguage].beneficio_acumulado}</th>
                    </tr>
                </thead>
                <tbody>
    `;
    datos.proyecciones.forEach(proy => {
        tablaProyecciones += `
            <tr>
                <td>${proy.year}</td>
                <td class="metric-positive">+${proy.ingresosAlquiler.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</td>
                <td class="metric-negative">-${(proy.gastosFijos - proy.cuotaHipoteca).toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</td>
                <td class="metric-negative">-${proy.cuotaHipoteca.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</td>
                <td class="metric-negative">-${proy.tax.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</td>
                <td class="${proy.flujoAnual >= 0 ? 'metric-positive' : 'metric-negative'}">${proy.flujoAnual.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</td>
                <td class="${proy.rentabilidadFlujo >= 0 ? 'metric-positive' : 'metric-negative'}">${proy.rentabilidadFlujo.toFixed(2)}%</td>
                <td class="${proy.roiAnual >= 0 ? 'metric-positive' : 'metric-negative'}">${proy.roiAnual.toFixed(2)}%</td>
                <td>${proy.valorVivienda.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</td>
                <td>${proy.saldoPendiente.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</td>
                <td class="metric-info">${proy.precioVentaNeto.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</td>
                <td class="${proy.beneficioAcumulado >= 0 ? 'metric-positive' : 'metric-negative'}">${proy.beneficioAcumulado.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</td>
            </tr>
        `;
    });
    tablaProyecciones += `
                </tbody>
            </table>
        </div>
    `;

    // Generar el HTML completo de los resultados
    resultadosDiv.innerHTML = `
        <div class="results-grid">
            <div class="metric-card">
                <div class="metric-header">
                    <div class="metric-title">${translations[currentLanguage].inversion_inicial}</div>
                    <div class="metric-icon">💰</div>
                </div>
                <div class="metric-value">${datos.inversionInicial.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</div>
                <div class="metric-subtitle">${translations[currentLanguage].capital_necesario}</div>
            </div>

            <div class="metric-card">
                <div class="metric-header">
                    <div class="metric-title">${translations[currentLanguage].flujo_mensual}</div>
                    <div class="metric-icon">${datos.flujoMensual >= 0 ? '📈' : '📉'}</div>
                </div>
                <div class="metric-value ${flujoClass}">${datos.flujoMensual.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</div>
                <div class="metric-subtitle">${translations[currentLanguage].cashflow_mensual_neto}</div>
            </div>

            <div class="metric-card">
                <div class="metric-header">
                    <div class="metric-title">${translations[currentLanguage].roi_anual}</div>
                    <div class="metric-icon">📊</div>
                </div>
                <div class="metric-value ${roiClass}">${datos.roiAnual.toFixed(2)}%</div>
                <div class="metric-subtitle">${translations[currentLanguage].basado_flujo_anual}</div>
            </div>

            <div class="metric-card">
                <div class="metric-header">
                    <div class="metric-title">${translations[currentLanguage].tir_anualizada}</div>
                    <div class="metric-icon">⚡</div>
                </div>
                <div class="metric-value ${rentabilidadClass}">${datos.rentabilidadAnual.toFixed(2)}%</div>
                <div class="metric-subtitle">${translations[currentLanguage].rentabilidad_anual_compuesta}</div>
            </div>

            <div class="metric-card">
                <div class="metric-header">
                    <div class="metric-title">${translations[currentLanguage].beneficio_total}</div>
                    <div class="metric-icon">${datos.beneficioTotal >= 0 ? '🎯' : '⚠️'}</div>
                </div>
                <div class="metric-value ${beneficioClass}">${datos.beneficioTotal.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</div>
                <div class="metric-subtitle">${translations[currentLanguage].en_anos} ${datos.anosAnalisis}</div>
            </div>

            <div class="metric-card">
                <div class="metric-header">
                    <div class="metric-title">${translations[currentLanguage].valor_final}</div>
                    <div class="metric-icon">🏠</div>
                </div>
                <div class="metric-value metric-info">${datos.precioVentaNeto.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</div>
                <div class="metric-subtitle">${currentLanguage === 'es' ? 'Precio venta estimado' : 'Estimated sale price'}</div>
            </div>

            <div class="metric-card">
                <div class="metric-header">
                    <div class="metric-title">${translations[currentLanguage].flujo_acumulado}</div>
                    <div class="metric-icon">💎</div>
                </div>
                <div class="metric-value ${datos.flujoAcumulado >= 0 ? 'metric-positive' : 'metric-negative'}">${datos.flujoAcumulado.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</div>
                <div class="metric-subtitle">${translations[currentLanguage].solo_por_alquileres}</div>
            </div>
        </div>

        ${datos.rentabilidadAnual < 4 ? `
        <div class="alert alert-warning">
            ⚠️ <strong>${translations[currentLanguage].rentabilidad_moderada}</strong> ${datos.rentabilidadAnual.toFixed(2)}${translations[currentLanguage].anual_considera}
        </div>
        ` : ''}

        ${datos.flujoMensual < 0 ? `
        <div class="alert alert-danger">
            🔴 <strong>${translations[currentLanguage].cashflow_negativo}</strong> ${Math.abs(datos.flujoMensual).toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US')}${translations[currentLanguage].mensuales_adicionales}
        </div>
        ` : ''}

        ${datos.rentabilidadAnual > 7 ? `
        <div class="alert alert-info">
            🌟 <strong>${translations[currentLanguage].excelente_rentabilidad}</strong>
        </div>
        ` : ''}

        <div class="metric-card">
            <div class="metric-header">
                <div class="metric-title">${translations[currentLanguage].desglose_inversion}</div>
                <div class="metric-icon">💸</div>
            </div>
            <div style="display: grid; gap: 0.5rem;">
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].entrada_porcentaje}</span>
                    <span>${datos.montoEntrada.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} € (${datos.entrada}%)</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].impuestos_itp}</span>
                    <span>${datos.impuestos.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].gastos_compra_text}</span>
                    <span>${datos.gastosCompra.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].gastos_reforma_text}</span>
                    <span>${datos.reforma.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                ${datos.financiacionTipo === 'con_hipoteca' ? `
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].gastos_hipoteca_text}</span>
                    <span>${datos.gastosHipoteca.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                ` : ''}
                <div style="display: flex; justify-content: space-between; font-weight: 600; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border);">
                    <span>${translations[currentLanguage].total_inversion}</span>
                    <span>${datos.inversionInicial.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
            </div>
        </div>

        <div class="metric-card">
            <div class="metric-header">
                <div class="metric-title">${translations[currentLanguage].cashflow_mensual}</div>
                <div class="metric-icon">💧</div>
            </div>
            <div style="display: grid; gap: 0.5rem;">
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].ingresos_alquiler}</span>
                    <span class="metric-positive">+${datos.ingresosMensuales.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                ${datos.financiacionTipo === 'con_hipoteca' ? `
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].cuota_hipoteca}</span>
                    <span class="metric-negative">-${datos.cuotaHipoteca.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                ` : ''}
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].comunidad_text}</span>
                    <span class="metric-negative">-${datos.comunidad.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].ibi_mensual}</span>
                    <span class="metric-negative">-${(datos.ibi / 12).toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].seguro_mensual}</span>
                    <span class="metric-negative">-${(datos.seguro / 12).toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].seguro_impago_mensual}</span>
                    <span class="metric-negative">-${(datos.seguroImpago / 12).toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].mantenimiento_mensual}</span>
                    <span class="metric-negative">-${(datos.mantenimiento / 12).toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].administracion_text}</span>
                    <span class="metric-negative">-${datos.administracion.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].impuestos_alquiler}</span>
                    <span class="metric-negative">-${datos.taxMensual.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-weight: 600; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border);">
                    <span>${translations[currentLanguage].net_cashflow}</span>
                    <span class="${flujoClass}">${datos.flujoMensual.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
            </div>
        </div>

        <div class="metric-card">
            <div class="metric-header">
                <div class="metric-title">${translations[currentLanguage].proyeccion_venta} ${datos.anosAnalisis})</div>
                <div class="metric-icon">🏠</div>
            </div>
            <div style="display: grid; gap: 0.5rem;">
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].valor_estimado}</span>
                    <span>${datos.precioVentaBruto.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].gastos_venta_porcentaje}</span>
                    <span class="metric-negative">-${datos.gastosVentaEuros.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].plusvalia_municipal}</span>
                    <span class="metric-negative">-${datos.plusvalia.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].irpf_ganancia}</span>
                    <span class="metric-negative">-${datos.impuestosGanancias.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-weight: 600; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border);">
                    <span>${translations[currentLanguage].valor_neto_venta}</span>
                    <span class="metric-info">${datos.precioVentaNeto.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €</span>
                </div>
            </div>
        </div>

        <div class="metric-card">
            <div class="metric-header">
                <div class="metric-title">${translations[currentLanguage].comparacion_inversiones}</div>
                <div class="metric-icon">📊</div>
            </div>
            <div style="display: grid; gap: 0.5rem;">
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].tu_inversion}</span>
                    <span class="${rentabilidadClass}">${datos.rentabilidadAnual.toFixed(2)}%</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].deposito_bancario}</span>
                    <span>2.0%</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].bonos_espana}</span>
                    <span>3.0%</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].fondos_mixtos}</span>
                    <span>4.5%</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].reits}</span>
                    <span>6.0%</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>${translations[currentLanguage].sp500}</span>
                    <span>7.0%</span>
                </div>
            </div>
        </div>

        <div class="metric-card">
            <div class="metric-header">
                <div class="metric-title">${translations[currentLanguage].proyecciones_ano}</div>
                <div class="metric-icon">📅</div>
            </div>
            ${tablaProyecciones}
        </div>
    `;
}

// Actualizar resumen flotante
function actualizarResumenFlotante(datos) {
    const floatingSummary = document.getElementById('floatingSummary');
    const floatingValue = document.getElementById('floatingValue');
    if (floatingSummary && floatingValue) {
        floatingValue.innerHTML = `${datos.flujoMensual.toLocaleString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits: 0})} €<small style="font-size: 0.8rem; opacity: 0.8;">/mes</small>`;
        floatingValue.className = datos.flujoMensual >= 0 ? 'metric-positive' : 'metric-negative';
        floatingSummary.style.display = 'block';
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setLanguage('es');
    loadScenario('moderado');

    // Evento para cambiar idioma
    const langSelector = document.getElementById('langSelector');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    // Evento para los botones de escenario
    document.querySelectorAll('.scenario-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const scenario = btn.getAttribute('data-scenario');
            loadScenario(scenario);
        });
    });

    // Evento para los tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Evento para el cambio de tipo de financiación
    const financiacionTipo = document.getElementById('financiacionTipo');
    if (financiacionTipo) {
        financiacionTipo.addEventListener('change', toggleFinanciacionInputs);
    }

    // Evento para el botón de calcular
    const calcularBtn = document.getElementById('calcularBtn');
    if (calcularBtn) {
        calcularBtn.addEventListener('click', calcular);
    }

    // Evento para cambio en cualquier input
    document.querySelectorAll('.form-input, .form-select').forEach(input => {
        input.addEventListener('input', () => {
            setTimeout(calcular, 100);
        });
    });
});
