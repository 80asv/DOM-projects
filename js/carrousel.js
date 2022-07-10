export default function carrousel(large, point) {
     
 const $large = document.querySelector(large);   
 const $point = document.querySelectorAll(point); 

 $point.forEach( (onePoint, i ) => {
    $point[i].addEventListener('click', (event) => {
        let position = i;
        let op = position * -20;

        $large.style.transform = `translateX(${op}%)`;

        $point.forEach( (onePoint, i ) => {
            $point[i].classList.remove('active');

        })

        $point[i].classList.add('active');
    })    
 });
    
    

    
}
