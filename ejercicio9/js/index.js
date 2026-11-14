const input = document.getElementsByTagName('input');
const boton = document.getElementById('btn');
const name = document.getElementById('name');
const prof = document.getElementById('prof');
const url = document.getElementById('url');

boton.addEventListener('click', () => {
    const nombre = document.getElementById('nameCard');
    const profesion = document.getElementById('profCard');
    const img = document.getElementById('imgCard');

    nombre.textContent = name.value;
    profesion.textContent = prof.value;
    img.src = url.value;
})

for (i = 0; i < input.length; i++) {
    input[i].classList.add('border-1', 'rounded-lg')
    console.log(input[i])
}
