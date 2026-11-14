const button = document.getElementById('add');
const product = document.getElementById('product');
const list = document.getElementById('list');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.classList.remove('text-red-600');
    message.innerHTML = "";


    if (product.value == "") {
        message.innerHTML = "Debes ingresar un producto";
        message.classList.add('text-red-600');
    } else {
        element = `<li>${product.value}</li>`;

        list.innerHTML += element;
    }
})