import lateralMenu from "./lateral-menu.js";
import {contador, alarm} from "./clock.js";


document.addEventListener('DOMContentLoaded', () => {
    lateralMenu('.container-menu', '.btn-folded', '.container-logo', '.screen-menu__open', '.link-section');
    contador("#iniciar-reloj", "#detener-reloj", ".reloj", ".pause");
    alarm("assets/alarm.mp3","#iniciar-alarma", "#detener-alarma");
});


