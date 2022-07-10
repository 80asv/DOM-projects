import lateralMenu from "./lateral-menu.js";
import {contador, alarm} from "./clock.js";
import {moveball} from "./keyboard.js";
import {countdown} from "./countdown.js";
import scrollButton from "./scroll.js";
import {darkMode} from "./darkMode.js";
import responsiveMedia from "./responsive-obj.js";
import responsiveTester from "./responsive-tester.js";
import userAgent from "./user-agent.js";
import networkStatus from "./red-detection.js";
import webcamDetection from "./webcam-detec.js";
import getGeolocation from "./geolocation.js";
import {searchFilter, addWord, colorCards} from "./search.js";
import draw from "./digital-giveaway.js";
import carrousel from "./carrousel.js";


document.addEventListener('DOMContentLoaded', () => {
    lateralMenu('.container-menu', '.btn-folded', '.container-logo', '.screen-menu__open', '.link-section');
    contador("#iniciar-reloj", "#detener-reloj", ".reloj", ".pause");
    alarm("assets/alarm.mp3","#iniciar-alarma", "#detener-alarma");
    countdown(".btn-date.iniciar", ".btn-date.reiniciar", ".days", ".hours", ".minutes", ".seconds", ".title-countdown");
    scrollButton('#ir_arriba_boton', '.indicador_scroll');
    
    responsiveMedia("youtube",
        "(min-width: 1153px)",
        `<a class="link-rd" href="https://www.youtube.com/watch?v=4fkwg-vicbe" target="_blank" rel="noopener">
            <span class="btn-text">ver video</span>
            <span class="btn-icon"><i class="fa-solid fa-play"></i></span>
        </a>`,
        `<iframe width="800" height="450" src="https://www.youtube.com/embed/4FKwG-VICbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );

    responsiveMedia("gmaps",
        "(min-width: 1153px)",
        `<a class="link-rd" href="https://goo.gl/maps/Ep7tths33yr53ET67" target="_blank" rel="noopener">
            <span class="btn-text">ver video</span>
            <span class="btn-icon"><i class="fa-solid fa-location-dot"></i></span>
        </a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8448642165913!2d-73.74106634999998!3d4.052046500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e3a1b9c966923%3A0xd13381d3d6c71d2a!2sLa%20Concepci%C3%B3n%2C%20Villavicencio%2C%20Meta!5e0!3m2!1ses-419!2sco!4v1656957442944!5m2!1ses-419!2sco" width="800" height="568" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );

    responsiveTester('responsive-tester');
    userAgent('user-device');
    webcamDetection('webcam');
    getGeolocation('geolocation');
    searchFilter('.card-filter', '.card-container');
    addWord('.word-card', ".add-card", ".cards");
    colorCards('.color-card', '.card-container');
    draw('#winner', '.player');
    carrousel('.large', '.point');
});



// event keyboards
document.addEventListener("keydown", e =>{
    moveball(e, ".ball", ".stage");
})


darkMode('.btn-darkmode-bg');
networkStatus();
 
 
 
 
 
 
 
