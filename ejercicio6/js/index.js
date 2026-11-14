const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const button = document.getElementById('calcular');
const parrafo = document.getElementById('parrafo');

button.addEventListener('click', () => {


    const errorP = document.getElementById('errPeso');
    const errorA = document.getElementById('errAltura');
    errorP.innerHTML = ""
    errorA.innerHTML = ""
    if (peso.value == "") {
        errorP.classList.add('text-red-600');
        errorP.innerHTML = "Campo incompleto"
    } else if (altura.value == "") {
        errorA.classList.add('text-red-600');
        errorA.innerHTML = "Campo incompleto"
    } else {

        pesoInt = parseInt(peso.value);
        alturaFloat = parseFloat(altura.value);

        alturaMult = alturaFloat * alturaFloat;
        imc = pesoInt / alturaMult;

        parrafo.innerHTML = `Su Imc es de ${imc.toFixed(2)}`;
    }
});