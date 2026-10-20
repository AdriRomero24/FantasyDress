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

            foto_info.classList.add("trayectoria");
            foto_info.classList.remove("pago");
            foto_info.classList.remove("servicio");

            titulo_info.textContent = "Trayectoria";
            parrafo_info.innerHTML = "Todo comenzó el 10 de abril de 2023,cuando un sueño de moda y elegancia cobró vida con el nacimiento de Tienda Fantasy Dress.<br><br> Desde aquel primer día, nos propusimos acompañar a cada mujer en sus momentos más especiales, ofreciendo prendas que resaltan su belleza y seguridad.<br>  A lo largo de este camino, hemos crecido de la mano de nuestra comunidad,convirtiéndonos en un espacio de confianza donde el estilo y la buena atención siempre van juntos.";
            break;
        
        case 2:
            pago.classList.add("selecto");
            trayectoria.classList.remove("selecto");
            servicio.classList.remove("selecto");

            
            foto_info.classList.remove("trayectoria");
            foto_info.classList.add("pago");
            foto_info.classList.remove("servicio");

            titulo_info.textContent = "Métodos de Pago";
            parrafo_info.innerHTML = "Facilidades pensadas para ti.<br><br> Queremos que estrenar tus prendas favoritas sea más fácil que nunca. En Tienda Fantasy Dress te ofrecemos opciones flexibles para adaptarnos a tus necesidades: lleva tus piezas hoy y pájalas a cuotas con Cashea, asegura ese outfit especial con nuestro cómodo sistema de apartado, o sorprende a esa persona especial con una de nuestras Gift Cards.<br><br> ¡Comprar nunca había sido tan cómodo!";
            break;

        case 3:
            servicio.classList.add("selecto");
            pago.classList.remove("selecto");
            trayectoria.classList.remove("selecto");

            
            foto_info.classList.remove("trayectoria");
            foto_info.classList.remove("pago");
            foto_info.classList.add("servicio");

            titulo_info.textContent = "Servicios";
            parrafo_info.innerHTML = "En Tienda Fantasy Dress no solo nos dedicamos a ofrecerte las últimas tendencias en moda; nos aseguramos de brindar una experiencia completa.<br><br> Diseñamos nuestros servicios para orientarte, acompañarte y darte todas las facilidades necesarias para que encuentres el outfit perfecto con total comodidad y tranquilidad.";
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
});