export default function hamburgerBtn(panelBtn, panel, menuLink){
    let d = document;

    d.addEventListener('click', e => {

        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle('is-active');
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove('is-active');
        }
    })
}














