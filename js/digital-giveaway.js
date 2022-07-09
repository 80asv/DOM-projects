import confetti from 'https://cdn.skypack.dev/canvas-confetti';

export default function draw(btnWinner, selector){
    let time = 5;
    let $result = document.createElement('p');
    const  $players = document.querySelectorAll(selector);

    const getWinner = () => {
        const random = Math.floor(Math.random()*$players.length),
            winner = $players[random];
        winner.classList.add('winner');

        return `the winner is ${winner.textContent}!`;
    }

    const count = () =>{
        let $btn = document.querySelector(btnWinner);
        $btn.textContent = time;

        if(time == 0){
            let result = getWinner(selector);
            $result.innerHTML = `${result}`;
            $result.classList.add('p-winner');
            document.querySelector('#section10 .container-section').insertBefore($result, $btn);
            confetti();
            $btn.textContent = 'get winner!';
            time = 5;
        } else {
            time--;
            setTimeout(count, 1000);
        }
    } 

    document.addEventListener('click', e => {
        if(e.target.matches(btnWinner)){
            if(document.querySelector('.p-winner')){
                document.querySelector('#section10 .container-section').removeChild($result);
            }
            $players.forEach(el => el.classList.remove('winner'));
            count();
        }
    })
}

