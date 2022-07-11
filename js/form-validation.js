const d = document;

export default function formValidation(){
    //seleccionamos el formualrio a tratar
    const $form = document.querySelector('.contact');
    //seleccionamos los inputs que tengan el attributo required
    const $inputs = d.querySelectorAll('.contact [required]');

    //console.log($inputs);

    //por cada input con attributo required creamos adyacentemente un espan que marcara un error si la info no es adecuada
    $inputs.forEach(input => {
        // crear elemento span
        const $span = d.createElement('span');

        // asignamos id con el atributo name que contenta el elemento
        $span.id = input.name;
        // asignamos contenido que tenga en el atributo title
        $span.textContent = input.title;
        // asignamos clases para añadir estilos
        $span.classList.add('contact-form-error', 'none');
        // insertamos el elemento al html adyacentemente
        input.insertAdjacentElement('afterend', $span);
    });


    /* al momento de que el usuario escriba dentro de los inputs comensara a validar la informacion */ 
    d.addEventListener('keyup', (e) =>{
        // si el evento se delega dentro de los inputs el atributo required
        if(e.target.matches('.contact [required')){

            // buscar el atributo pattern que contiene la validacion con la exp reg
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;
                console.log(pattern);

            // si el input tienen atributo pattern    
            if(pattern && $input.value !== ''){
                //guardamos la exp regular
                let regExp = new RegExp(pattern);
                return !regExp.exec($input.value) ? d.getElementById($input.name).classList.add('active') : d.getElementById($input.name).classList.remove('active');
            }

            if(!pattern){
                return $input.value === '' ? d.getElementById($input.name).classList.add('active') : d.getElementById($input.name).classList.remove('active');
            }

        }
    });
}