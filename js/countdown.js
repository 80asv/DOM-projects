export function countdown(playCount, stopCount, dd, hh, mm, ss, title){
    const d = document;

    let days = undefined, hours = undefined, minutes = undefined, seconds = undefined, limitTime = undefined;
    let $days = d.querySelector(dd);
    let $hours = d.querySelector(hh);
    let $minutes = d.querySelector(mm);
    let $seconds = d.querySelector(ss);
    let $titleCountDown = d.querySelector(title);
    let countDownDate = undefined;
    let countDownTempo = undefined;
    const cuentaAtras = {
        titulo: null,
        fecha: null
    }
   


    if(localStorage.getItem("cuenta")) {
        d.querySelector(".input-date").disabled = true;
        d.querySelector(playCount).disabled = true;
        addEventListener('DOMContentLoaded', () => {
        let countDownLocalStorage = JSON.parse(localStorage.getItem("cuenta"));
        d.querySelector(title).classList.remove('close');
        $titleCountDown.innerHTML = `${countDownLocalStorage.titulo}`;
 
            
        countDownDate = new Date(countDownLocalStorage.fecha).getTime();
            countDownTempo = setInterval(()=>{
                let now = new Date().getTime();
                limitTime = countDownDate - now,
                days = Math.floor(limitTime/(1000 * 60 * 60 * 24));
                hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))).slice(-2);
                minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60))/(1000 * 60))).slice(-2); 
                seconds = ("0" + Math.floor((limitTime % (1000 * 60))/(1000))).slice(-2);

                $days.textContent = `${days}`;
                $hours.textContent = `${hours}`;
                $minutes.textContent = `${minutes}`;
                $seconds.textContent = `${seconds}`;
                d.querySelectorAll('.box span').forEach(e => e.style.color = '#000');
           }, 1000);

        })
    }

    d.addEventListener('click', (e) =>{
       
        if(e.target.matches(playCount)){
        
        while (d.querySelector(".input-date").value === '' || d.querySelector(".input-title").value === ''){
            d.querySelector('.input-title').style.borderColor = "red";
            d.querySelector('.input-title').style.borderWidth = "3px";
            d.querySelector('.input-date').style.borderColor = "red";
            d.querySelector('.input-date').style.borderWidth = "3px";
            return 0;
        }
            d.querySelector('.input-title').style.borderColor = null;
            d.querySelector('.input-title').style.borderWidth = null;
            d.querySelector('.input-date').style.borderColor = null
            d.querySelector('.input-date').style.borderWidth = null;
            d.querySelector(".input-date").disabled = true;
            d.querySelector(playCount).disabled = true;
            cuentaAtras.titulo = d.querySelector(".input-title").value;
            cuentaAtras.fecha = d.querySelector(".input-date").value + " 00:00:00";

            d.querySelector(title).classList.remove('close');
             $titleCountDown.innerHTML = `${cuentaAtras.titulo}`;
            
            localStorage.setItem("cuenta", JSON.stringify(cuentaAtras));

            countDownDate = new Date(cuentaAtras.fecha).getTime(); 

            countDownTempo = setInterval(()=>{
                let now = new Date().getTime();
                limitTime = countDownDate - now;
                days = Math.floor(limitTime/(1000 * 60 * 60 * 24));
                hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))).slice(-2);
                minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60))/(1000 * 60))).slice(-2);
                seconds = ("0" + Math.floor((limitTime % (1000 * 60))/(1000))).slice(-2);

                $days.textContent = `${days}`;
                $hours.textContent = `${hours}`;
                $minutes.textContent = `${minutes}`;
                $seconds.textContent = `${seconds}`;
                d.querySelectorAll('.box span').forEach(e => e.style.color = '#000');
                
           }, 1000);




        } else if (e.target.matches(stopCount)) {
            localStorage.clear(); 
            clearInterval(countDownTempo);
            d.querySelector(".input-date").value = '';
            d.querySelector(".input-title").value = '';
            d.querySelector(".input-date").disabled = false;
            d.querySelector(playCount).disabled = false;
            d.querySelector(title).innerHTML = '';
            $days.textContent = `00`;
            $hours.textContent = `00`;
            $minutes.textContent = `00`;
            $seconds.textContent = `00`;
            d.querySelectorAll('.box span').forEach(e => e.style.color = 'rgb(203 203 203)');
       }
        
    });

}
