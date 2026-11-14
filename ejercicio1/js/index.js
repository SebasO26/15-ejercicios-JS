const input = document.getElementById('nombre');
const button = document.getElementById('saludar');
const parrafo = document.getElementById('parrafo');

button.addEventListener('click', () => {
    text = `
    <p>Bienvenido, ${input.value}</p>
    `
    parrafo.innerHTML = text;
    input.value = ""
});