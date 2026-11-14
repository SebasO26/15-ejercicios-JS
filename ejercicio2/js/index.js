const aumentar = document.getElementById('aumentar');
const reset = document.getElementById('reset');
const numero = document.getElementById('numero');
let valor = parseInt(numero.innerHTML);

aumentar.addEventListener('click', () => {
    valor += 1;
    numero.innerHTML = valor;
    if (valor >= 10) {
        numero.classList.add('text-lime-700');
    } else {
        numero.classList.remove('text-lime-700');
    };

});

reset.addEventListener('click', () => {
    numero.innerHTML = 0;
    numero.classList.remove('text-lime-700');
})