import lateralMenu from "./lateral-menu.js";
import {contador, alarm} from "./clock.js";
import {moveball} from "./keyboard.js";
import {countdown} from "./countdown.js";
import scrollButton from "./scroll.js";
import {darkMode} from "./darkMode.js";

document.addEventListener('DOMContentLoaded', () => {
    lateralMenu('.container-menu', '.btn-folded', '.container-logo', '.screen-menu__open', '.link-section');
    contador("#iniciar-reloj", "#detener-reloj", ".reloj", ".pause");
    alarm("assets/alarm.mp3","#iniciar-alarma", "#detener-alarma");
    countdown(".btn-date.iniciar", ".btn-date.reiniciar", ".days", ".hours", ".minutes", ".seconds", ".title-countdown");
    scrollButton('#ir_arriba_boton', '.indicador_scroll');
    darkMode('.btn-darkmode-bg');
});



// event keyboards
document.addEventListener("keydown", e =>{
    moveball(e, ".ball", ".stage");
})

