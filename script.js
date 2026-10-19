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


//Logica para el carrusel automatico
const Foto1 = document.querySelector(".tienda1");
const Foto2 = document.querySelector(".tienda2");
const Foto3 = document.querySelector(".modelo1");
const Foto4 = document.querySelector(".modelo2");
const Encabezado1 = document.getElementById("encabezado1");
const Parrafo1 = document.getElementById("parrafo1");
const Parrafo2 = document.getElementById("parrafo2");

const seccion_caja = document.getElementById("texto_principal1");

let carrusel_fotos = () =>{

    setTimeout(() => {
    Foto1.classList.add("mover_carrusel");

    Encabezado1.textContent = "Disfruta de Nuevos accesorios";
    Parrafo1.textContent = "Nueva Coleccion de Pulseras, Collares, Zarcillos, entre otros más.";
    Parrafo2.textContent = "Fantasy Dress Te ofrece lo último en accesorios en todo su catálogo de conjuntos.";
    seccion_caja.style.backgroundColor = "#601D49";
    

    Foto4.classList.remove("mover_carrusel");

    
    },5000);

    setTimeout(() => {
    Foto2.classList.add("mover_carrusel");
    
    seccion_caja.style.backgroundColor = "#FF9292";

    },10000);

    setTimeout(() => {
    Foto3.classList.add("mover_carrusel");
    
    seccion_caja.style.backgroundColor = "#849096";

    },15000);
    

    setTimeout(() => {

        Foto4.style.cssText = "z-index: 2;";
    }, 17000);


    setTimeout(() => {

        
        Foto1.classList.remove("mover_carrusel");
        Foto2.classList.remove("mover_carrusel");
        Foto3.classList.remove("mover_carrusel");
    }, 18000);

    setTimeout(() => {
    Foto4.classList.add("mover_carrusel");
    
    Encabezado1.textContent = "Disfruta de lo nuevo de la moda";
    Parrafo1.textContent = "Nueva Coleccion de Blusas, Vestidos, Trajes de baño, entre otros estilos más.";
    Parrafo2.textContent = "Fantasy Dress Te ofrece lo último en moda en todo su catálogo de conjuntos.";
    
     seccion_caja.style.backgroundColor = "#E11A45";

    },20000);
    

    setTimeout(() => {

     Foto4.style.cssText = "z-index: -2;"; 
    },21000);

    setTimeout(carrusel_fotos, 21010);
   
    
}

carrusel_fotos();

//Seleccion de videos

const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const videoinfo1 = document.getElementById("videoinfo1");
const videoinfo2 = document.getElementById("videoinfo2");

video1.addEventListener("mouseenter", () => {

    videoinfo1.classList.add("vista_info");
    video2.style.filter = "blur(0.5px) brightness(0.5)";
    

});

video1.addEventListener("mouseout", () => {

    videoinfo1.classList.remove("vista_info");
    video2.style.filter = "blur(0px) brightness(1)";

});

video2.addEventListener("mouseenter", () => {

    videoinfo2.classList.add("vista_info");
    video1.style.filter = "blur(0.5px) brightness(0.5)";

});

video2.addEventListener("mouseout", () => {

    videoinfo2.classList.remove("vista_info");
    video1.style.filter = "blur(0px) brightness(1)";

});

//Slider Manual

const vestido = document.getElementById("vestido");
const accesorio = document.getElementById("accesorio");
const bikini = document.getElementById("bikini");
const blusa = document.getElementById("blusa");
const pantalon = document.getElementById("pantalon");
const boton_derecha = document.getElementById("boton2");
const boton_izquierda = document.getElementById("boton1");

let slider_seleccion = 3; // Representa la posicion del div incialmente en el centro

let slider = () => {
   
   if(slider_seleccion > 5){

     slider_seleccion = 1;

   } else if (slider_seleccion < 1){

    slider_seleccion = 5;
   }
   
   switch(slider_seleccion){
    
     case 1:
        blusa.classList.add("seleccionado");
        accesorio.classList.remove("seleccionado");
        bikini.classList.remove("seleccionado");
        vestido.classList.remove("seleccionado");
        pantalon.classList.remove("seleccionado");


        bikini.style.translate = "400px 0px";
        vestido.style.translate = "400px 0px";
        accesorio.style.translate = "400px 0px";
        blusa.style.translate = "400px 0px";
        pantalon.style.translate = "400px 0px";

        break;

    case 2:
        accesorio.classList.add("seleccionado");
        bikini.classList.remove("seleccionado");
        vestido.classList.remove("seleccionado");
        blusa.classList.remove("seleccionado");
        pantalon.classList.remove("seleccionado");


        bikini.style.translate = "200px 0px";
        vestido.style.translate = "200px 0px";
        accesorio.style.translate = "200px 0px";
        blusa.style.translate = "200px 0px";
        pantalon.style.translate = "200px 0px";

        break;
    
    case 3:
        vestido.classList.add("seleccionado");
        bikini.classList.remove("seleccionado");
        accesorio.classList.remove("seleccionado");
        blusa.classList.remove("seleccionado");
        pantalon.classList.remove("seleccionado");

        
        bikini.style.translate = "0px 0px";
        vestido.style.translate = "0px 0px";
        accesorio.style.translate = "0px 0px";
        blusa.style.translate = "0px 0px";
        pantalon.style.translate = "0px 0px";
        break;

    case 4:
        bikini.classList.add("seleccionado");
        accesorio.classList.remove("seleccionado");
        vestido.classList.remove("seleccionado");
        blusa.classList.remove("seleccionado");
        pantalon.classList.remove("seleccionado");


        bikini.style.translate = "-200px 0px";
        vestido.style.translate = "-200px 0px";
        accesorio.style.translate = "-200px 0px";
        blusa.style.translate = "-200px 0px";
        pantalon.style.translate = "-200px 0px";

        break;

    case 5:
        pantalon.classList.add("seleccionado");
        blusa.classList.remove("seleccionado");
        accesorio.classList.remove("seleccionado");
        bikini.classList.remove("seleccionado");
        vestido.classList.remove("seleccionado");


        bikini.style.translate = "-400px 0px";
        vestido.style.translate = "-400px 0px";
        accesorio.style.translate = "-400px 0px";
        blusa.style.translate = "-400px 0px";
        pantalon.style.translate = "-400px 0px";

        break;
        
   }

}

boton_derecha.addEventListener("click", () =>{

    slider_seleccion++;
    slider();
})

boton_izquierda.addEventListener("click", () => {

    slider_seleccion--;
    slider();

})

//Logica de informacion adicional
const trayectoria = document.getElementById("trayectoria");
const pago = document.getElementById("pago");
const servicio = document.getElementById("servicio");
const foto_info = document.getElementById("foto_info");
const titulo_info = document.getElementById("titulo_info");
const parrafo_info = document.getElementById("parrafo_info");

let info_seleccion = 1; //Posicion de informacion adicional inicialmente

let info_adicional = () => {

    switch(info_seleccion){

        case 1:
            trayectoria.classList.add("selecto");
            pago.classList.remove("selecto");
            servicio.classList.remove("selecto");

            foto_info.classList.add("trayectoria")
            foto_info.classList.remove("pago")
            foto_info.classList.remove("servicio")

            titulo_info.textContent = "Trayectoria"
            break;
        
        case 2:
            pago.classList.add("selecto");
            trayectoria.classList.remove("selecto");
            servicio.classList.remove("selecto");

            
            foto_info.classList.remove("trayectoria")
            foto_info.classList.add("pago")
            foto_info.classList.remove("servicio")

            titulo_info.textContent = "Métodos de Pago"
            break;

        case 3:
            servicio.classList.add("selecto");
            pago.classList.remove("selecto");
            trayectoria.classList.remove("selecto");

            
            foto_info.classList.remove("trayectoria")
            foto_info.classList.remove("pago")
            foto_info.classList.add("servicio")

            titulo_info.textContent = "Servicios"
            break;
    }  
}

trayectoria.addEventListener("click", () => {

    if(info_seleccion == 1){

        return;
    }

    info_seleccion = 1;

    info_adicional();
});

pago.addEventListener("click", () => {

    if(info_seleccion == 2){

        return;
    }

    info_seleccion = 2;

    info_adicional();
});

servicio.addEventListener("click", () => {

    if(info_seleccion == 3){

        return;
    }

    info_seleccion = 3;

    info_adicional();
})

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