const d = document;

export default function searchFilter(input, selector){

    d.addEventListener('input', e => {
        if(e.target.matches(input)){
             d.querySelectorAll(selector).forEach(el => {
                (el.textContent.toLowerCase().includes(e.target.value))? el.classList.remove('filter'):el.classList.add('filter')
             })


        }
    })
}