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

    Encabezado1.textContent = "Disfruta de Nuevos Accesorios";
    Parrafo1.textContent = "Nueva Coleccion de Pulseras, Collares, Zarcillos, entre otros más.";
    Parrafo2.textContent = "Cruza nuestras puertas y déjate envolver por un mundo donde tus sueños de estilo se hacen realidad.";
    seccion_caja.style.backgroundColor = "#601D49";
    

    Foto4.classList.remove("mover_carrusel");

    
    },5000);

    setTimeout(() => {
    Foto2.classList.add("mover_carrusel");

    Encabezado1.textContent = "Queremos que tu visita a Fantasy Dress sea perfecta de principio a fin.";
    Parrafo1.textContent = "Aqui encontrarás todas las facilidades de pago que necesitas. Escanea nuestros códigos QR para acceder a promociones exclusivas, seguirnos en nuestras redes sociales o contactarnos directamente por WhatsApp.";
    Parrafo2.textContent = "¡Estamos aquí para hacerte la vida más fácil y estilosa!";
    
    seccion_caja.style.backgroundColor = "#FF9292";

    },10000);

    setTimeout(() => {
    Foto3.classList.add("mover_carrusel");
    
    Encabezado1.textContent = "Descúbrete en nuestra tienda";
    Parrafo1.textContent = "En Fantasy Dress, creemos que la moda es una expresión de quién eres. Nuestra misión es ofrecerte prendas que no solo te queden bien, sino que te hagan sentir imparable.";
    Parrafo2.textContent = "¡Ven a descubrir el outfit que potenciará tu seguridad!";

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
    
    Encabezado1.textContent = "Te damos la bienvenida a tu próximo destino de moda!";
    Parrafo1.textContent = "En Tienda Fantasy Dress, las puertas están abiertas para que descubras un mundo lleno de estilo, elegancia y tendencias.";
    Parrafo2.textContent = "Te ofrecemos lo último en moda en todo su catálogo de conjuntos, trajes, vestidos, y más!";
    
     seccion_caja.style.backgroundColor = "#E11A45";

    },20000);
    

    setTimeout(() => {

     Foto4.style.cssText = "z-index: -2;"; 
    },21000);

    setTimeout(carrusel_fotos, 21010);
   
    
}

carrusel_fotos();