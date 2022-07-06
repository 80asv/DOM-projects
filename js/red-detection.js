export default function networkStatus(){
    const red = () => {
        const $div = document.getElementById('red');

        if(navigator.onLine){
            $div.innerHTML = '<i class="fa-solid fa-cloud"></i><span>online</span>';
            $div.classList.add('online');
            $div.classList.remove('offline');
            // console.log('online');
        } else {
            $div.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i><span>offline</span>';
            $div.classList.add('offline');
            $div.classList.remove('online');
            // console.log('offline');
        }

        setTimeout(() => $div.classList.remove('offline', 'online'), 5000);
    }
        window.addEventListener('online', () => red());
        window.addEventListener('offline', () => red());
}
