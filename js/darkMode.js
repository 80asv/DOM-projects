export function darkMode(btnDarkMode){
    const d = document;

    const lightMode = () =>{
        d.querySelector(btnDarkMode).classList.remove('active');
        d.body.classList.remove('dark');
        localStorage.setItem("theme", "light");
    }
    const darkMode = () =>{
        d.querySelector(btnDarkMode).classList.add('active');
        d.body.classList.add('dark');
        localStorage.setItem("theme", "dark");
    }


    d.addEventListener('click', e => {
        if(e.target.matches(btnDarkMode) || e.target.matches(`${btnDarkMode} *`)){
            d.querySelector(btnDarkMode).classList.toggle('active');
            if(d.querySelector(btnDarkMode).classList.contains('active')){
                darkMode();
            } else {
                lightMode();
            }
       }
    })


    d.addEventListener('DOMContentLoaded', e => {
        if(localStorage.getItem("theme") === null){
            localStorage.setItem("theme", "light");
        }

        if(localStorage.getItem("theme") === "light"){
            lightMode();
        }

        if(localStorage.getItem("theme") === "dark"){
            darkMode();
        }

    })
}
