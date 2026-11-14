const text = document.getElementById('texto');
const parrafo = document.getElementById('parrafo');

document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        parrafo.innerHTML = text.value;
    }
});