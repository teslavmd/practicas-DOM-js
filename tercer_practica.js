export function moverConFlechas(pointer, box){
    let d = document,
    x = 0,
    y = 0;


    d.addEventListener('keypress', (e) => {
        let $limitBox = d.querySelector(box).getBoundingClientRect(),
        $limitPointer = d.querySelector(pointer).getBoundingClientRect();
        switch (e.key) {
            case 'w':
                if($limitBox.top < $limitPointer.top){y--}
                break;
            case 'a':
                if($limitBox.left < $limitPointer.left){x--} 
                break;
            case 's':
                if($limitBox.bottom > $limitPointer.bottom){y++}
                break;
            case 'd':
                if($limitBox.right > $limitPointer.right){x++}
                break;

        
            default:
                break;
        }
        d.querySelector(pointer).style.transform = `translate(${x*10}px, ${y*10}px)`
    })
}
