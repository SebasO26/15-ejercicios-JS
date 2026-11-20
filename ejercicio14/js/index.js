const presupuesto = document.getElementById('presupuesto');
const butAddPr = document.getElementById('butAddPr');

const nombreGs = document.getElementById('nombreGs');
const valGs = document.getElementById('valGs');
const addGas = document.getElementById('addGas');
const sup = document.getElementById('super');

const valor = document.getElementById('valor');
const gastoContent = document.getElementById('gastoContent');
const resumen = document.getElementById('resumen');

let total = 0;
let disponible = "";

valor.textContent = '0';

butAddPr.addEventListener('click', () => {
    valor.textContent = parseInt(valor.textContent) + parseInt(presupuesto.value);
    resumen.innerHTML = parseInt(valor.textContent) >= 0 ? `<p class="text-xl">Tienes ${valor.textContent} disponible</p>` : `<p class="text-xl">Tienes una deuda de ${valor.textContent.slice(1)}</p>`;

    if (valor.textContent >= 0) {
        valor.classList.remove('text-red-500');
        sup.textContent = "";
    }

})

addGas.addEventListener('click', () => {
    let disponible = valor.textContent
    let valGasto = valGs.value;
    let tableContent = `
    <tr>
        <td class="border-1">${nombreGs.value}</td>
        <td class="border-1">${valGasto}</td>
    </tr>
    `;
    if (disponible == "") {
        alert('Debes ingresar un presupuesto');
    } else {
        valor.textContent = parseInt(disponible) - parseInt(valGs.value);
        gastoContent.innerHTML += tableContent;
        total += parseInt(valGs.value);
        disponible = parseInt(valor.textContent) >= 0 ? `<p class="text-xl">Tienes ${valor.textContent} disponible</p>` : `<p class="text-xl">Tienes una deuda de ${valor.textContent.slice(1)}</p>`;

        resumen.innerHTML = `
        <p class="text-xl">El total gastado es de ${total}</p>
        ${disponible}
        `;

        if (valor.textContent < 0) {
            valor.classList.add('text-red-500');
            sup.textContent = "Has superado tu presupuesto";
        } else {
            valor.classList.remove('text-red-500');
            sup.textContent = "";
        }
    }
});