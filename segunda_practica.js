let d = document
export function activarDesactivarReloj(idActivar, idDesactivar, clock){
    let tempoClock;
    
    
    d.addEventListener('click', (e) => {
     
        if(e.target.matches(idActivar)){
            tempoClock = setInterval(()=>{
                let hours = new Date().toLocaleTimeString()     
                clock.innerHTML = `<h3>${hours}</h3>`
            },1000)
            d.querySelector(idActivar).setAttribute('disabled', '')
        }
            
        if(e.target.matches(idDesactivar)){
            clearInterval(tempoClock);
            clock.innerHTML = null;           
            d.querySelector(idActivar).removeAttribute('disabled', '')
            
        }
        })

}

export function activarApagarAlarma(prender, apagar, sonido){
    let alarmaTempo;
    const $alarm = d.createElement('audio')
    $alarm.src = sonido;

    d.addEventListener('click', (e) => {


        if(e.target.matches(prender)){
            alarmaTempo = setTimeout(()=>{
              $alarm.play()  
            },2000)

            e.target.disabled = true;
        }

        if(e.target.matches(apagar)){
            $alarm.pause()
            $alarm.currentTime = 0
            clearInterval(alarmaTempo)
            d.querySelector(prender).disabled = false;

        }

    })


}