export default function scrollSpy(btnClose, panel){
    const $panel = document.querySelector(panel),
          $btn = document.querySelector(btnClose);

    document.addEventListener('click', e => {
        if(e.target.matches(btnClose) || e.target.matches(`${btnClose} *`)){
            $panel.classList.toggle('open');
            $btn.classList.toggle('open');
        }
    })
}