const d = document;

export default function responsiveTester(form){
    const $form = d.getElementById(form);

    let tester;

    d.addEventListener('submit', e => {
        if(e.target === $form){
            e.preventDefault(); // cancelar el procesamiento del formulario
            tester = window.open($form.direction.value, "tester", `innerWidth = ${$form.width.value}, innerHeight = ${$form.height.value}`);
        }
    });

    d.addEventListener('click', e => {

        if(e.target === $form.close){
            tester.close();
            e.preventDefault();
        }
    })
}
