const d = document;
let x = 0, y = 0;

export function moveball(e, ball, stage){
    const $ball = d.querySelector(ball), 
          $stage = d.querySelector(stage),
          limitsBall = $ball.getBoundingClientRect(),
          limitsStage = $stage.getBoundingClientRect();
    switch(e.keyCode){
        case 38: // up
            e.preventDefault(); // detiene las acciones del 
           if(limitsBall.top > limitsStage.top) y--; 
        break;
            
        case 40: // down
            e.preventDefault();
           if(limitsBall.bottom < limitsStage.bottom) y++; 
        break;

        case 37: // left
            e.preventDefault();
           if(limitsBall.left > limitsStage.left) x--; 
        break;

        case 39: // right
            e.preventDefault();
           if(limitsBall.right < limitsStage.right) x++; 
        break;
    }

    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
