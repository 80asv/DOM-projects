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
                const content = `<div class="card-container">
                                    <p class="card-word">${$inputWord.value}</p>
                                </div>`;
                $div.innerHTML += content;
            }

        }
    })
}
