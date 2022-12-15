export default function volverArriba(btn){
    let d = document;

    d.addEventListener('scroll', e => {
      if(scrollY < 1080){
        d.querySelector(btn).classList.add('hidden')
      }else{
        d.querySelector(btn).classList.remove('hidden')
      }
   })

   d.addEventListener('click', e => {
    if(e.target.matches(btn)){
        window.scrollTo({behavior : 'smooth', top : 0})
      }
   })
}