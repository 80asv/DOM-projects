export function contador(btnIniciar, btnDetener, reloj, pause){
    const d = document;
    const clock = () => {
        
        if (d.querySelector(reloj).classList.contains('close')) return 0;

        let date = new Date();

        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let ampm = "AM";

        if(h == 0){
            h = 12;
        }
    
        if(h>12){
            h = h - 12;
            ampm = "PM";
        }
    
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
    
        let time = h + ":" + m + ":" + s + " " + ampm;

        d.querySelector(reloj).innerText = time;
        d.querySelector(reloj).textContent = time;

        setTimeout(clock, 1000);
    }

    d.addEventListener('click', (e) => {

        if(e.target.matches(btnIniciar) || e.target.matches(`${btnIniciar} *`)){
            // apertura del reloj
            d.querySelector(reloj).classList.toggle('close');
            d.querySelector(btnIniciar).disabled = true;
            d.querySelector(pause).innerHTML = 'RUNNING';
            d.querySelector(pause).style.color = '#50db50';
            // inicio funcion de hora
            clock();


        } else if (e.target.matches(btnDetener) || e.target.matches(`${btnDetener}`)) {
            // cierre del reloj
            d.querySelector(pause).innerHTML = 'IN PAUSE';
            d.querySelector(pause).style.color = 'red';
            d.querySelector(reloj).classList.add('close');
            d.querySelector(btnIniciar).disabled = false;


        }   
    });
}


export function alarm(sound, btnIniciarAlarma, btnDetenerAlarma){
    const d = document;
    
    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;

    d.addEventListener('click', (e)=>{
        
        if(e.target.matches(btnIniciarAlarma)){
           alarmTempo = setTimeout(()=>{
                $alarm.play();
           }, 1000); 

            e.target.disabled = true;
        } else if (e.target.matches(btnDetenerAlarma)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnIniciarAlarma).disabled = false;
        }
    })
}

