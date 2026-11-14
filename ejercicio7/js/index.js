const text = document.getElementById('passw');
const message = document.getElementById('message');

text.addEventListener('input', () => {
    let txtContent = text.value;
    let txtLength = txtContent.length;
    mess = ""
    message.classList.remove(
        'text-red-600',
        'text-yellow-500',
        'text-green-500'
    );
    if (txtLength < 6 && txtLength >= 1) {
        mess = "Contraseña muy corta.";
        message.classList.add('text-red-600');
    } else if (txtLength >= 6 && txtLength < 10) {
        mess = "Contraseña aceptable.";
        message.classList.add('text-yellow-500');
    } else if (txtLength > 9) {
        mess = "Contraseña fuerte.";
        message.classList.add('text-green-500');
    } else {
        mess = ""
    }

    message.innerHTML = mess
});