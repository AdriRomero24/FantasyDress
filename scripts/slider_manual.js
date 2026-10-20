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
});

boton_izquierda.addEventListener("click", () => {

    slider_seleccion--;
    slider();

});