export default function lateralMenu(menu, btnClose, btnOpen, overlayScreen, menuLink){
    const d = document;

    d.addEventListener('click', (e) => {
        if(e.target.matches(btnClose) || e.target.matches(`${btnClose} *`) || e.target.matches(overlayScreen) || e.target.matches(menuLink) || e.target.matches(`${menuLink} *`)){
            d.querySelector(menu).classList.add('unfolded');
            d.querySelector(overlayScreen).classList.add('hidden');
            d.body.style.overflow = 'overlay';
            document.querySelector('.container-menu').scrollTo({behavior:"auto", top: 0})
            if(!(d.querySelector('.container-list-item').classList.contains('close'))){
                d.querySelector('.container-list-item').classList.add('close');
                d.querySelector('.icon-deploy').style.transform = 'rotate(0deg)';
            }
        } else if (e.target.matches(btnOpen) || e.target.matches(`${btnOpen} *`)){
            d.querySelector(menu).classList.remove('unfolded');
            d.querySelector(overlayScreen).classList.remove('hidden');
            d.body.style.overflow = 'hidden';
        }

        if(e.target.matches('.container-more') || e.target.matches(`${'.container-more'} *`)){
            d.querySelector('.container-list-item').classList.toggle('close');
            if(!(d.querySelector('.container-list-item').classList.contains('close'))){
                d.querySelector('.icon-deploy').style.transform = 'rotate(180deg)';
            } else {
                d.querySelector('.icon-deploy').style.transform = 'rotate(0deg)';
            }
        }
    })
}

