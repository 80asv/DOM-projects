const d = document,
      w = window

export default function smartVideo(){
    // capturamos el video por medio del data attribute
    const $video = d.querySelectorAll("video[data-smart-video]");

    // creamos la funciona callback a ejecutar
    const cb = entries => {
        entries.forEach(entry => {
            //si ya se ha dado la interseccion
            if(entry.isIntersecting){
                //si el observador encontro el video lo reproducira
                entry.target.play();
            } else {
                //si el observador pierde de vista el video lo pausara
                entry.target.pause();
            }

            w.addEventListener('visibilitychange', e => d.visibilityState === 'visible' ? entry.target.play() : entry.target.pause());
        });
    }




    // instanciamos el observador
    const observer = new IntersectionObserver(cb, {threshold: 0.5});

    // elementos que reciben la atencion del observador

    $video.forEach(el => {
        // a cada elementro con el data attribute le asigna un obersador
        observer.observe(el);
    })



}