export default function scrollSpy(btnClose, panel){
    const $panel = document.querySelector(panel),
          $btn = document.querySelector(btnClose);

    document.addEventListener('click', e => {
        if(e.target.matches(btnClose) || e.target.matches(`${btnClose} *`)){
            $panel.classList.toggle('open');
            $btn.classList.toggle('open');
        }
    })





    // scroll spy

    const $sections = document.querySelectorAll('section[data-scroll-spy]');

    const cb = (entries) => {
        /* console.log(entries); */

        entries.forEach(entry => {

            const id = entry.target.getAttribute('id');

            if(entry.isIntersecting){
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active');
            } else {
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
            }
        })
    }

    const observer = new IntersectionObserver(cb, {
        //root:
        /* rootMargin: '-350px', */
        threshold: [0.5, 0.75],
    });

    $sections.forEach(el => observer.observe(el));
}