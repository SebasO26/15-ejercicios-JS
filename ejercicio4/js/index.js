const card = document.getElementById('card');
const selection = document.getElementById('selection');

selection.addEventListener('change', () => {
    card.classList.remove('bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-red-300');

    valor = selection.value;
    if (valor == '1') {
        card.classList.add('bg-blue-500')
    } else if (valor == "2") {
        card.classList.add('bg-green-500')
    } else if (valor == "3") {
        card.classList.add('bg-yellow-500')
    } else if (valor == "4") {
        card.classList.add('bg-red-300')
    }
})