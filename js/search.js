const colors = ['#248EA6', '#25C7D9', '#F2D338', '#F2622E', '#F23030', '#D382D9', '#829BD9', '#7CC5CF', '#04BF7B', '#F272D0'];
let numRandom = (max, min) => Math.floor(Math.random() * colors.length);


export function searchFilter(input, selector) {
    document.addEventListener('input', e => {
        if(e.target.matches(input)){
            // if(e.key === "Escape") e.target.value = '';
            document.querySelectorAll(selector).forEach(el => el.textContent.toLowerCase().includes(e.target.value) ? el.classList.remove('filter') : el.classList.add('filter'));
        }
    });
}


export function addWord(input, btnAdd, div){
    const $div = document.querySelector(div),
        $inputWord = document.querySelector(input);

    document.addEventListener('click', e => {
        if(e.target.matches(btnAdd) || e.target.matches(`${btnAdd} *`)){
            if(!($inputWord.value === '')){
                const content = `<div class="card-container" style="background-color: ${colors[numRandom(0, colors.length)]}">
                                    <p class="card-word">${$inputWord.value}</p>
                                </div>`;
                $div.innerHTML += content;
            }

        }
    })
}

export function colorCards(btnChange, cards){
    document.addEventListener('click', e =>{
        if(e.target.matches(btnChange) || e.target.matches(`${btnChange} *`)){
            console.log(numRandom(0, colors.length));
            document.querySelectorAll(cards).forEach(el => el.style.backgroundColor = `${colors[numRandom(0, colors.length)]}`);
            // $cards.forEach(el => el.style.backgroundColor = 'yellow');
        }
    })
}
