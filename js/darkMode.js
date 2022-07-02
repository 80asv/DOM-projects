export function darkMode(btnDarkMode){
    const d = document;

    d.addEventListener('click', e => {
        if(e.target.matches(btnDarkMode) || e.target.matches(`${btnDarkMode} *`)){
            d.querySelector(btnDarkMode).classList.toggle('active');
        }
    })
}
