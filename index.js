import cuentaRegresiva from "./cuarta_practica.js";
import searchFilter from "./octava_practica.js";
import hamburgerBtn from "./primer_practica.js";
import volverArriba from "./quinta_practica.js";
import { activarDesactivarReloj, activarApagarAlarma }  from "./segunda_practica.js";
import { resposiveJs } from "./septima_practica.js";
import darkMode from "./sexta_practica.js";
import { moverConFlechas } from "./tercer_practica.js";


const $reloj = document.querySelector('.reloj');


document.addEventListener('DOMContentLoaded', (e)=>{
    hamburgerBtn('.hamb-btn', '.panel', '.panel-link');
    activarDesactivarReloj('#iniciar-reloj', '#parar-reloj', $reloj);
    activarApagarAlarma('#iniciar-alarma', '#parar-alarma', 'assets/perforar_1.mp3');
    moverConFlechas('#point', '#box');
    cuentaRegresiva('countdown', 'Jan 15,2023 00:00:00', 'FELIZ CUMPLEAÑOS!');
    volverArriba('.scroll-top-btn');
    resposiveJs('youtubeIframe',
    '(min-width : 1024px)', 
    `<a href="https://www.youtube.com/embed/16geDhp5Xmg">Ver Video</a>`, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/16geDhp5Xmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    searchFilter('.card-filter', '.card')
    // resposiveJs('mapIframe', '(min-width : 1024px)', 'Contenido Móvil', 'Contenido Escritorio');
})

darkMode('.dark-btn');

