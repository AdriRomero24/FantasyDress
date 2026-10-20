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