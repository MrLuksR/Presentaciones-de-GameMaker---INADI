const galeria = document.getElementById("galeria");
const visor = document.getElementById("visor");
const iframe = document.getElementById("iframePresentacion");
const titulo = document.getElementById("tituloPresentacion");

/**
 * Abre una presentación
 * @param {string} url Enlace embebido de Google Slides
 * @param {string} nombre Nombre del alumno o presentación
 */
function abrirPresentacion(url, nombre = "Presentación") {

    iframe.src = url;

    if (titulo) {
        titulo.textContent = nombre;
    }

    galeria.classList.add("oculto");
    visor.classList.remove("oculto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

/**
 * Cierra la presentación
 */
function cerrarPresentacion() {

    iframe.src = "";

    visor.classList.add("oculto");
    galeria.classList.remove("oculto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

/* Permite cerrar con Escape */

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        if(!visor.classList.contains("oculto")){

            cerrarPresentacion();

        }

    }

});