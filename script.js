let myChart = null;

const db = {
    nacional: {
        tipo: 'trienio', pagas: 14,
        farmaceutico: { "2024": [2064.16, 330.51, 1.70, 46.40], "2025": [2105.44, 337.12, 1.73, 47.33], "2026": [2147.55, 343.86, 1.76, 48.28] },
        tecnico: { "2024": [1400.26, 0, 1.15, 31.48], "2025": [1428.27, 0, 1.17, 32.11], "2026": [1456.84, 0, 1.19, 32.75] },
        auxiliar: { "2024": [1251.49, 0, 1.03, 28.14], "2025": [1276.52, 0, 1.05, 28.70], "2026": [1302.05, 0, 1.07, 29.27] }
    },
    barcelona: {
        tipo: 'trienio', pagas: 14,
        farmaceutico: { "2024": [2297.21, 0, 2.15, 52.14] }, // Base Barcelona según BOPB
        tecnico: { "2024": [1515.20, 0, 1.40, 34.20] },
        auxiliar: { "2024": [1365.40, 0, 1.25, 30.15] }
    },
    asturias: {
        tipo: 'quinquenio', pagas: 15,
        farmaceutico: { "2024": [2137.03, 330.51, 1.75, 0.05] }, // 5% base
        tecnico: { "2024": [1448.74, 0, 1.20, 0.05] },
        auxiliar: { "2024": [1317.42, 0, 1.08, 0.05] }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input, select').forEach(el => el.addEventListener('input', calcular));
    document.getElementById('convenio').addEventListener('change', () => {
        const c = document.getElementById('convenio').value;
        document.getElementById('labelAntiguedad').innerText = (db[c].tipo === 'quinquenio') ? "Nº Quinquenios" : "Nº Trienios";
        calcular();
    });
    if(!localStorage.getItem('ok')) document.getElementById('cookie-banner').style.display='flex';
    calcular();
});

function aceptarCookies() { localStorage.setItem('ok', 't'); document.getElementById('cookie-banner').style.display='none'; }

function calcular() {
    const c = document.getElementById('convenio').value;
    const p = document.getElementById('profesion').value;
    const a = document.getElementById('anio').value;
    const jorn = parseFloat(document.getElementById('porcentaje').value)/100;
    const nAnt = parseFloat(document.getElementById('antiguedad').value)||0;
    const irpf = parseFloat(document.getElementById('porcentajeIRPF').value)/100;
    const ss = (parseFloat(document.getElementById('cotizacionContComu').value)+parseFloat(document.getElementById('cotizacionDesempleo').value)+parseFloat(document.getElementById('cotizacionMEI').value)+parseFloat(document.getElementById('cotizacionFormacion').value))/100;

    // Obtener datos (con factor 2% si no hay tabla para ese año)
    let base, plus, noc, ant;
    if (db[c][p][a]) {
        [base, plus, noc, ant] = db[c][p][a];
    } else {
        const factor = Math.pow(1.02, parseInt(a) - 2024);
        const b24 = db[c][p]["2024"];
        [base, plus, noc, ant] = [b24[0]*factor, b24[1]*factor, b24[2]*factor, (db[c].tipo==='trienio'?b24[3]*factor:b24[3])];
    }

    const mBase = base * jorn;
    const mPlus = plus * jorn;
    const mAnt = (db[c].tipo === 'quinquenio') ? (mBase * ant * nAnt) : (ant * nAnt * jorn);
    const mNoc = (parseFloat(document.getElementById('numHoras').value)||0) * noc;
    const mMej = parseFloat(document.getElementById('mejoraSalarial').value)||0;

    const bExtra = mBase + mPlus + mAnt;
    const bNomina = bExtra + mNoc + mMej;
    const pReales = db[c].pagas;

    let nM, nE, bA, sA, iA;

    if (document.getElementById('numPagas').value === '12') {
        bA = (bExtra * pReales) + ((mNoc + mMej) * 12);
        const bM = bA / 12;
        nM = bM * (1 - ss - irpf);
        sA = bA * ss; iA = bA * irpf;
    } else {
        const prorrata = (bExtra * (pReales - 12)) / 12;
        nM = bNomina - ((bNomina + prorrata) * ss) - (bNomina * irpf);
        nE = bExtra * (1 - irpf);
        bA = (bNomina * 12) + (bExtra * (pReales - 12));
        sA = (bNomina + prorrata) * 12 * ss;
        iA = bA * irpf;
    }

    const nA = bA - sA - iA;
    updateChart(nA, iA, sA);
    render(document.getElementById('numPagas').value, nM, nE, nA, bA);
}

function render(m, nm, ne, na, ba) {
    let h = `<div class="result-item"><span>Neto Mensual:</span><span class="neto-big">${nm.toFixed(2)}€</span></div>`;
    if(m==='extra') h += `<div class="result-item"><span>Neto Paga Extra:</span><span class="neto-big" style="color:var(--primary)">${ne.toFixed(2)}€</span></div>`;
    h += `<hr><div class="result-item"><span>Neto Anual:</span><span class="neto-big" style="font-size:1.1rem">${na.toFixed(2)}€</span></div>
          <div class="result-item"><span>Bruto Anual:</span><span>${ba.toFixed(2)}€</span></div>`;
    document.getElementById('resultados').innerHTML = h;
}

function updateChart(n,i,s) {
    const ctx = document.getElementById('salaryChart').getContext('2d');
    if (myChart) myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: { labels: ['Neto', 'IRPF', 'SS'], datasets: [{ data: [n, i, s], backgroundColor: ['#10b981', '#ef4444', '#f59e0b'], borderWidth: 0 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
    });
}

async function exportarImagen() {
    const canvas = await html2canvas(document.getElementById('capture-area'));
    const link = document.createElement('a');
    link.download = 'sueldo.png'; link.href = canvas.toDataURL(); link.click();
}
