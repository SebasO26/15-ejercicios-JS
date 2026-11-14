const verde = document.getElementById('verde');
const amarillo = document.getElementById('amarillo');
const rojo = document.getElementById('rojo');
const indi = document.getElementById('indicacion');

verde.addEventListener('click', () => {
    amarillo.classList.remove('bg-yellow-500');
    rojo.classList.remove('bg-red-500');
    verde.classList.add('bg-green-500');
    indi.textContent = "Puedes avanzar.";
})

amarillo.addEventListener('click', () => {
    verde.classList.remove('bg-green-500');
    rojo.classList.remove('bg-red-500');
    amarillo.classList.add('bg-yellow-500');
    indi.textContent = "Precaución.";
})

rojo.addEventListener('click', () => {
    amarillo.classList.remove('bg-yellow-500');
    verde.classList.remove('bg-green-500');
    rojo.classList.add('bg-red-500');
    indi.textContent = "Detente.";
})