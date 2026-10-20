//Eventos para la animacion de menu de navegacion
const catalago_caja = document.getElementById("catalogo");
const ubicacion_caja = document.getElementById("ubicacion");
const contacto_caja = document.getElementById("contacto");
const catalago_este = document.getElementById("catalogo_diseno");
const ubicacion_este = document.getElementById("ubicacion_diseno");
const contacto_este = document.getElementById("contacto_diseno");
const blanco_caja = document.querySelector(".blanco");

catalago_caja.addEventListener("mouseenter", () =>{

    ubicacion_caja.classList.add("mover_derecha");
    contacto_caja.classList.add("mover_derecha");
    catalago_este.classList.add("estilo_imagen");
    blanco_caja.classList.add("mover_derecha");

});

catalago_caja.addEventListener("mouseout", () =>{

    ubicacion_caja.classList.remove("mover_derecha");
    contacto_caja.classList.remove("mover_derecha");
    catalago_este.classList.remove("estilo_imagen");
    blanco_caja.classList.remove("mover_derecha");
});

ubicacion_caja.addEventListener("mouseenter", () =>{

    blanco_caja.classList.add("mover_derecha");
    contacto_caja.classList.add("mover_derecha");
    ubicacion_este.classList.add("estilo_imagen");

});

ubicacion_caja.addEventListener("mouseout", () =>{

    blanco_caja.classList.remove("mover_derecha");
    contacto_caja.classList.remove("mover_derecha");
    ubicacion_este.classList.remove("estilo_imagen");

});

contacto_caja.addEventListener("mouseenter", () =>{

    
    blanco_caja.classList.add("mover_derecha");
    contacto_este.classList.add("estilo_imagen");

});

contacto_caja.addEventListener("mouseout", () =>{

    
    blanco_caja.classList.remove("mover_derecha");
    contacto_este.classList.remove("estilo_imagen");

});
