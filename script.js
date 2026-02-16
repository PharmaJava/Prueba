/**
 * Sueldo Farmacia Pro - Motor de Cálculo Multiconvenio
 * Versión 2026.2 - Ajuste de Plus de Adjuntía (12 pagas)
 */

let myChart = null;

const DATA_CONVENIOS = {
    nacional: {
        nombre: "Nacional (XXV Convenio)",
        tipoAnt: "ninguno",
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
        tipoAnt: "ninguno",
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
        tipoAnt: "ninguno",
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
        tipoAnt: "ninguno",
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
        tipoAnt: "quinquenio",
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

document.addEventListener('DOMContentLoaded', () => {
    establecerCotizacionesOficiales();

    document.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('input', () => {
            if (input.id === 'convenio') updateUIForConvenio();
            calcularSalario();
        });
    });

    if (!localStorage.getItem('cookiesAceptadas')) {
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.style.display = 'flex';
    }

    updateUIForConvenio();
    calcularSalario();
});

function establecerCotizacionesOficiales() {
    const inputs = {
        "cotizacionContComu": "4.70",
        "cotizacionMEI": "0.15",
        "cotizacionFormacion": "0.10",
        "cotizacionDesempleo": "1.55"
    };
    for (let id in inputs) {
        let el = document.getElementById(id);
        if (el) el.value = inputs[id];
    }
}

function aceptarCookies() {
    localStorage.setItem('cookiesAceptadas', 'true');
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
}

function updateUIForConvenio() {
    const convKey = document.getElementById('convenio').value;
    const config = DATA_CONVENIOS[convKey];
    const pagasSelect = document.getElementById('numPagas');
    const antiguedadInput = document.getElementById('antiguedad');
    const antiguedadGroup = antiguedadInput.closest('.input-group');
    const labelAnt = document.getElementById('labelAntiguedad');

    if (config.tipoAnt === 'ninguno') {
        antiguedadInput.disabled = true;
        antiguedadInput.value = 0;
        antiguedadGroup.style.opacity = '0.5';
        antiguedadGroup.style.pointerEvents = 'none';
        if (labelAnt) labelAnt.innerText = "Antigüedad (No disponible)";
    } else {
        antiguedadInput.disabled = false;
        antiguedadGroup.style.opacity = '1';
        antiguedadGroup.style.pointerEvents = 'auto';
        if (labelAnt) labelAnt.innerText = "Nº Quinquenios";
    }

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
    const convKey = document.getElementById("convenio").value;
    const prof = document.getElementById("profesion").value;
    const anio = document.getElementById("anio").value;
    const numPagas = parseInt(document.getElementById("numPagas").value);
    const irpfPct = parseFloat(document.getElementById("porcentajeIRPF").value) / 100;

    const totalSSPct = (
        parseFloat(document.getElementById("cotizacionContComu").value) +
        parseFloat(document.getElementById("cotizacionDesempleo").value) +
        parseFloat(document.getElementById("cotizacionMEI").value) +
        parseFloat(document.getElementById("cotizacionFormacion").value)
    ) / 100;

    const convData = DATA_CONVENIOS[convKey];
    const tablaCat = convData.tablas[prof];
    const [base, plus, precioHora, valAnt] = tablaCat[anio] || tablaCat["2024"];

    const jornPct = parseFloat(document.getElementById("porcentaje").value) / 100;
    const hNoc = parseFloat(document.getElementById("numHoras").value) || 0;
    const mejora = parseFloat(document.getElementById("mejoraSalarial").value) || 0;
    const numAntiguedad = parseInt(document.getElementById("antiguedad").value) || 0;

    let importeAntiguedadMes = 0;
    if (convData.tipoAnt === 'quinquenio') {
        importeAntiguedadMes = (valAnt * numAntiguedad) * jornPct;
    }

    // CONCEPTOS MENSUALES (Incluye Plus de Adjuntía)
    const sueldoBaseMes = (base * jornPct) + (plus * jornPct) + mejora + importeAntiguedadMes;
    const valorNocturnidadMes = hNoc * precioHora;
    const brutoMesNomina = sueldoBaseMes + valorNocturnidadMes;

    // BASE DE PAGA EXTRA (Excluye Plus de Adjuntía según nómina real)
    const brutoExtraPura = (base * jornPct) + mejora + importeAntiguedadMes;

    const pagasRealesConvenio = (convKey === 'asturias') ? 15 : 14;
    let netoMensual, netoExtra, baseCalculoSS, irpfAnual, ssAnual, brutoAnualTotal;

    if (numPagas === 12) {
        // Todo prorrateado: la prorrata de extra se basa en brutoExtraPura
        const prorrataExtra = (brutoExtraPura * (pagasRealesConvenio - 12)) / 12;
        const baseMensualTotal = brutoMesNomina + prorrataExtra;

        const descuentoSS = baseMensualTotal * totalSSPct;
        const descuentoIRPF = baseMensualTotal * irpfPct;

        netoMensual = baseMensualTotal - descuentoSS - descuentoIRPF;
        netoExtra = 0;
        baseCalculoSS = baseMensualTotal * 12;
        brutoAnualTotal = baseCalculoSS;
    } else {
        // Pagas separadas: la base de cotización mensual incluye la prorrata de la extra
        const prorrataExtraBaseSS = (brutoExtraPura * (pagasRealesConvenio - 12)) / 12;
        const baseCotizacionMensual = brutoMesNomina + prorrataExtraBaseSS;

        const descuentoSS = baseCotizacionMensual * totalSSPct;
        const descuentoIRPF_Mes = brutoMesNomina * irpfPct;

        netoMensual = brutoMesNomina - descuentoSS - descuentoIRPF_Mes;
        netoExtra = brutoExtraPura * (1 - irpfPct);

        brutoAnualTotal = (brutoMesNomina * 12) + (brutoExtraPura * (numPagas - 12));
        baseCalculoSS = baseCotizacionMensual * 12;
    }

    ssAnual = baseCalculoSS * totalSSPct;
    irpfAnual = brutoAnualTotal * irpfPct;
    const netoAnual = brutoAnualTotal - ssAnual - irpfAnual;

    updateChart(netoAnual, irpfAnual, ssAnual);
    renderizarResultados(numPagas, netoMensual, netoExtra, netoAnual, brutoAnualTotal, pagasRealesConvenio);
}

function renderizarResultados(numPagas, netoMensual, netoExtra, netoAnual, brutoAnual, pagasConvenio) {
    let html = "";
    if (numPagas === 12) {
        html = `
            <div class="result-item">
                <span>Neto Mensual (12 pagas):</span>
                <span class="neto-big">${netoMensual.toFixed(2)}€</span>
            </div>
            <div class="result-item">
                <span class="concepto-extra">✓ Incluye ${pagasConvenio} pagas (Plus Adjuntía 12 pagas)</span>
            </div>
        `;
    } else {
        html = `
            <div class="result-item">
                <span>Neto Nómina Mensual:</span>
                <span class="neto-big">${netoMensual.toFixed(2)}€</span>
            </div>
            <div class="result-item">
                <span>Neto Paga Extra:</span>
                <span class="neto-big" style="color:var(--primary)">${netoExtra.toFixed(2)}€</span>
            </div>
            <div class="result-item">
                <span class="concepto-extra">*Son ${numPagas} pagas (Plus Adjuntía excluido de extras)</span>
            </div>
        `;
    }

    html += `
        <hr style="border:0; border-top:1px solid #cbd5e1; margin:12px 0;">
        <div class="result-item">
            <span>Total Neto Anual:</span>
            <span class="neto-big" style="font-size:1.1rem">${netoAnual.toFixed(2)}€</span>
        </div>
        <div class="result-item">
            <span>Bruto Anual:</span>
            <span style="color:#64748b">${brutoAnual.toFixed(2)}€</span>
        </div>
    `;

    const resDiv = document.getElementById("resultados");
    if (resDiv) resDiv.innerHTML = html;
}

function updateChart(neto, irpf, ss) {
    const canvas = document.getElementById('salaryChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
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
                    labels: { boxWidth: 12, padding: 15, font: { size: 11 } }
                }
            }
        }
    });
}
