const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const edad = document.getElementById('edad');
const registro = document.getElementById('registrarme');
const text = document.getElementById('text');

const correoValido = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

registro.addEventListener('click', () => {
    text.classList.remove('text-green-500', 'text-lg');
    text.textContent = "";

    const nmError = document.getElementById('nombreError');
    const crrError = document.getElementById('correoError');
    const edadError = document.getElementById('edadError');

    nmError.textContent = "";
    crrError.textContent = "";
    edadError.textContent = "";

    let esValido = true;

    if (correo.value === "") {
        crrError.textContent = "El campo correo no debe estar vacío";
        esValido = false;
    } else if (!correoValido(correo.value)) {
        crrError.textContent = "El correo es inválido";
        esValido = false;
    }

    if (nombre.value === "") {
        nmError.textContent = "El campo nombre no debe estar vacío";
        esValido = false;
    }

    if (edad.value === "") {
        edadError.textContent = "El campo edad no debe estar vacío";
        esValido = false;
    }

    if (esValido) {
        text.textContent = "¡Registro exitoso!";
        text.classList.add('text-green-500', 'text-lg');
    }
});

edad.addEventListener('input', () => {
    if (edad.value < 0) {
        edad.value = 0;
    }
})