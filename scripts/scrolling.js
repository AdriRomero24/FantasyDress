//Logica para scrolling de redes sociales

const whatsapp = document.getElementById("whatsapp_boton");
const instagram = document.getElementById("instagram_boton");
const tiktok = document.getElementById("tiktok_boton");

instagram.addEventListener("click", () =>{

    window.scrollTo({

        behavior: "smooth",
        top: 600
    });
});

tiktok.addEventListener("click", () =>{

    window.scrollTo({

        behavior: "smooth",
        top: 1200
    });
});

whatsapp.addEventListener("click", () =>{

    window.scrollTo({

        behavior: "smooth",
        top: 1750
    });
});