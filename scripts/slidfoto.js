const slidfoto1 = document.getElementById("slidfoto1");
const slidfoto2 = document.getElementById("slidfoto2");
const slidfoto3 = document.getElementById("slidfoto3");
const botones1 = document.getElementById("botones1");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const botones2 = document.getElementById("botones2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const botones3 = document.getElementById("botones3");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const foto = document.getElementsByClassName("foto");
const detector1 = document.getElementById("detector_boton1");
const detector2 = document.getElementById("detector_boton2");
const detector3 = document.getElementById("detector_boton3");


//Slide 1 Eventos Boton
slidfoto1.addEventListener("mouseenter", () => {

    

    
    botones1.classList.add("sobrefoto");
    

    
   
   
});

detector1.addEventListener("mouseout", () => {
   
 
  
   botones1.classList.remove("sobrefoto");
     
   
    
   
});

botones1.addEventListener("mouseenter", () => {

    botones1.classList.add("sobrefoto");
});

//Slide 2 Eventos Boton

slidfoto2.addEventListener("mouseenter", () => {

    

    
    botones2.classList.add("sobrefoto");
    

    
   
   
});

detector2.addEventListener("mouseout", () => {
   
 
  
   botones2.classList.remove("sobrefoto");
     
   
    
   
});

botones2.addEventListener("mouseenter", () => {

    botones2.classList.add("sobrefoto");
});

//Slide 3 Eventos Boton

slidfoto3.addEventListener("mouseenter", () => {

    

    
    botones3.classList.add("sobrefoto");
    

    
   
   
});

detector3.addEventListener("mouseout", () => {
   
 
  
   botones3.classList.remove("sobrefoto");
     
   
    
   
});

botones3.addEventListener("mouseenter", () => {

    botones3.classList.add("sobrefoto");
});


// Funciones de seleccion

let seleccion_slid1 = 1;
let seleccion_slid2 = 1;
let seleccion_slid3 = 1;


let verificar_seleccion = (select) => {

    if(select > 3){

        return 1;

    }else if (select < 1){

        return 3;
    }
    else{

        return select;
    }

}


let seleccion = (event) =>{

    let i, j, z, selec;

    if(event.target == boton1 || event.target == boton2){

        i = 0; j = 1; z = 2;

        seleccion_slid1 = verificar_seleccion(seleccion_slid1);
        selec = seleccion_slid1;
       
    
    } else if (event.target == boton3 || event.target == boton4){

        i = 3; j = 4; z = 5;

        seleccion_slid2 = verificar_seleccion(seleccion_slid2);
        selec = seleccion_slid2;
    
    } else if(event.target == boton5 || event.target == boton6){

        i = 6; j = 7; z = 8;

        seleccion_slid3 = verificar_seleccion(seleccion_slid3);
        selec = seleccion_slid3;
    
    }

   
    switch(selec){
      
        case 1:
            foto[i].style.translate = "0px 0px";
            foto[j].style.translate = "0px 0px";
            foto[z].style.translate = "0px 0px";

            break;

        case 2:
            foto[i].style.translate = "-624px 0px";
            foto[j].style.translate = "-624px 0px";
            foto[z].style.translate = "-624px 0px";

            break;

        case 3:
            foto[i].style.translate = "-1248px 0px";
            foto[j].style.translate = "-1248px 0px";
            foto[z].style.translate = "-1248px 0px";

            break;


    }
    

}

boton1.addEventListener("click", (event) => {

    seleccion_slid1--;
    seleccion(event);
});

boton2.addEventListener("click", (event) => {

    seleccion_slid1++;
    seleccion(event);
});

boton3.addEventListener("click", (event) => {

    seleccion_slid2--;
    seleccion(event);
});

boton4.addEventListener("click", (event) => {

    seleccion_slid2++;
    seleccion(event);
});

boton5.addEventListener("click", (event) => {

    seleccion_slid3--;
    seleccion(event);
});

boton6.addEventListener("click", (event) => {

    seleccion_slid3++;
    seleccion(event);
});
