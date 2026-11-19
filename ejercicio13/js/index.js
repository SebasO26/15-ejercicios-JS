
const imagenPrincipal = document.querySelector("#imagenPrincipal");

const tituloImagen = document.querySelector("#tituloImagen");

const miniaturas = document.querySelectorAll(".miniatura");

miniaturas.forEach(function (miniatura) {

    miniatura.addEventListener("click", function () {

        imagenPrincipal.src = miniatura.src;

        tituloImagen.textContent = miniatura.dataset.titulo;

        miniaturas.forEach(function (elemento) {
            elemento.classList.remove("border-blue-500");
            elemento.classList.add("border-transparent");
        });

        miniatura.classList.remove("border-transparent");
        miniatura.classList.add("border-blue-500");

    });

});
