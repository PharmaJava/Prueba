/* ========================================
   ESTILOS RESPONSIVOS ADICIONALES
   Para añadir al final de tu styles.css existente
   o cargar como archivo separado
   ======================================== */

/* TABLET - Expandir ligeramente */
@media screen and (min-width: 768px) and (max-width: 1024px) {
    .container {
        max-width: 700px;
        padding: 30px 20px;
    }
    
    .calculator-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    
    .full-width-input {
        grid-column: 1 / -1;
    }
    
    .header h1 {
        font-size: 1.8rem;
    }
    
    .input-group label {
        font-size: 0.95rem;
    }
    
    .input-group input,
    .input-group select {
        font-size: 0.95rem;
        padding: 12px;
    }
}

/* LAPTOP - Contenedor más amplio pero aún vertical */
@media screen and (min-width: 1025px) and (max-width: 1440px) {
    .container {
        max-width: 900px;
        padding: 40px 30px;
    }
    
    .calculator-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }
    
    .full-width-input {
        grid-column: 1 / -1;
    }
    
    .header {
        padding: 30px;
    }
    
    .header h1 {
        font-size: 2rem;
    }
    
    .input-group label {
        font-size: 1rem;
    }
    
    .input-group input,
    .input-group select {
        font-size: 1rem;
        padding: 14px;
    }
    
    .results-container {
        padding: 30px;
        font-size: 1.05rem;
    }
    
    .chart-container {
        height: 400px;
        margin-top: 30px;
    }
}

/* DESKTOP GRANDE - Layout de 2 columnas */
@media screen and (min-width: 1441px) {
    body {
        padding: 30px;
    }
    
    .container {
        max-width: 1400px;
        padding: 40px;
    }
    
    .header {
        padding: 35px;
        margin-bottom: 40px;
    }
    
    .header h1 {
        font-size: 2.2rem;
    }
    
    .header p {
        font-size: 1.1rem;
    }
    
    /* Grid de 2 columnas para el área de captura */
    .capture-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 35px;
        grid-template-areas:
            "form results"
            "form chart"
            "advanced advanced"
            "watermark watermark";
    }
    
    /* Formulario - Columna izquierda */
    .calculator-grid {
        grid-area: form;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }
    
    /* Resultados - Columna derecha, sticky */
    .results-container {
        grid-area: results;
        position: sticky;
        top: 20px;
        height: fit-content;
        padding: 35px;
        font-size: 1.1rem;
    }
    
    /* Gráfica - Debajo de resultados en columna derecha */
    .chart-container {
        grid-area: chart;
        position: sticky;
        top: 380px;
        height: 450px;
        margin-top: 0;
    }
    
    /* Configuración avanzada - Ancho completo */
    .advanced-settings {
        grid-area: advanced;
        grid-column: 1 / -1;
        margin-top: 20px;
    }
    
    .advanced-settings .settings-content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
    
    /* Watermark */
    .watermark {
        grid-area: watermark;
        margin-top: 20px;
    }
    
    /* Estilos de inputs más grandes */
    .input-group label {
        font-size: 1.05rem;
        margin-bottom: 10px;
    }
    
    .input-group input,
    .input-group select {
        font-size: 1.05rem;
        padding: 15px;
    }
    
    .full-width-input {
        grid-column: 1 / -1;
    }
    
    /* Botón de exportar */
    .btn-export {
        font-size: 1.1rem;
        padding: 16px 32px;
    }
}

/* DESKTOP XL - Pantallas muy grandes (1920px+) */
@media screen and (min-width: 1920px) {
    .container {
        max-width: 1600px;
        padding: 50px;
    }
    
    .header {
        padding: 40px;
    }
    
    .header h1 {
        font-size: 2.5rem;
    }
    
    .capture-wrapper {
        gap: 45px;
    }
    
    .calculator-grid {
        gap: 28px;
    }
    
    .results-container {
        padding: 40px;
        font-size: 1.15rem;
    }
    
    .chart-container {
        height: 500px;
        top: 420px;
    }
    
    .input-group label {
        font-size: 1.1rem;
    }
    
    .input-group input,
    .input-group select {
        font-size: 1.1rem;
        padding: 16px;
    }
}

/* Mejoras para FAQ en desktop */
@media screen and (min-width: 1025px) {
    .faq-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    
    .faq-item {
        break-inside: avoid;
    }
}

/* Landscape móvil - Ajustes especiales */
@media screen and (max-width: 767px) and (orientation: landscape) {
    .container {
        padding: 15px;
    }
    
    .header {
        padding: 20px;
    }
    
    .header h1 {
        font-size: 1.3rem;
    }
    
    .calculator-grid {
        gap: 15px;
    }
    
    .chart-container {
        height: 250px;
    }
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* Alto contraste */
@media (prefers-contrast: high) {
    .input-group input,
    .input-group select {
        border-width: 3px;
    }
    
    .results-container {
        border: 3px solid var(--primary-color, #667eea);
    }
}

/* Impresión */
@media print {
    body {
        background: white;
    }
    
    .donation-banner,
    .btn-export,
    .cookie-banner,
    .advanced-settings {
        display: none !important;
    }
    
    .capture-wrapper {
        display: block !important;
    }
    
    .container {
        max-width: 100%;
        box-shadow: none;
    }
}

/* Asegurar que elementos sticky funcionen correctamente */
@supports (position: sticky) {
    @media screen and (min-width: 1441px) {
        .results-container,
        .chart-container {
            position: sticky;
        }
    }
}

/* Fallback para navegadores sin soporte de grid */
@supports not (display: grid) {
    .capture-wrapper {
        display: block !important;
    }
    
    .calculator-grid,
    .faq-container {
        display: block !important;
    }
    
    .input-group {
        margin-bottom: 20px;
    }
}
