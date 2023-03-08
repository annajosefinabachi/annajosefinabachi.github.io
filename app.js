/*Boton de barras*/

const proyectos = document.getElementById("proyectos");
const page2 = document.getElementById("page2");
const volver = document.getElementById("volver");

proyectos.addEventListener("click", function(entrar) {
    page2.classList.add("entrar");
});

volver.addEventListener("click", function(entrar) {
    page2.classList.remove("entrar");
});


/*Loading*/

window.onload = function(){
    var contenedor = document.getElementById("contenedor_carga");

    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = "0";

}