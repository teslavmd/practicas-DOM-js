export function resposiveJs(id, mediaq, contentMobile, contentDesk){
    let d = document,
    breakpoint = window.matchMedia(mediaq)


    const responsive = e => {
        if(e.matches){
            d.getElementById(id).innerHTML = contentDesk;
        }else{
            d.getElementById(id).innerHTML = contentMobile;
        }

        console.log(e.matches)
    }

    breakpoint.addEventListener('change', responsive)

    responsive(breakpoint)


}