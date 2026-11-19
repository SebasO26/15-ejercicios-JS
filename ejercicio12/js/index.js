const numero = document.getElementById('numero');
const generar = document.getElementById('generar');
const multiplicar = document.getElementById('multiplicar');

generar.addEventListener('click', () => {

    multiplicar.innerHTML = ""

    for (let i = 0; i < 10; i++) {
        operacion = numero.value * (i + 1)
        multiplicacion = `
        <tr>
            <td class="border-1">${numero.value}</td>
            <td class="border-1">${i + 1}</td>
            <td class="border-1">${operacion}</td>
        </tr>
        `

        multiplicar.innerHTML += multiplicacion;
    }
})
