export default function lateralMenu(menu, btnClose, btnOpen, overlayScreen, menuLink){
    const d = document;

    d.addEventListener('click', (e) => {
        if(e.target.matches(btnClose) || e.target.matches(`${btnClose} *`) || e.target.matches(overlayScreen) || e.target.matches(menuLink) || e.target.matches(`${menuLink} *`)){
            d.querySelector(menu).classList.add('unfolded');
            d.querySelector(overlayScreen).classList.add('hidden');
            d.body.style.overflow = 'overlay';
        } else if (e.target.matches(btnOpen) || e.target.matches(`${btnOpen} *`)){
            d.querySelector(menu).classList.remove('unfolded');
            d.querySelector(overlayScreen).classList.remove('hidden');
            d.body.style.overflow = 'hidden';
        }
    })
}