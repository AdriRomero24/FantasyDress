//Logica Formulario

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const comentario = document.getElementById("comentario");
const formulario = document.getElementById("formulario");

const ancho_inicial = 25;


function ampliar_campo(campo) {

     campo.style.width = Math.max(ancho_inicial, (campo.value.length) + 3) + "ch";
}

nombre.addEventListener("input", () => {

    ampliar_campo(nombre);
    

});

correo.addEventListener("input", () => {

    ampliar_campo(correo);
});

formulario.addEventListener("submit", () => {
    
  setTimeout(() => {

    formulario.reset();
  }, 300);


    
});