const texto = document.getElementById('texto');
const parrafo = document.getElementById('parrafo');

texto.addEventListener('input', () => {
    parrafo.innerHTML = texto.value;
});