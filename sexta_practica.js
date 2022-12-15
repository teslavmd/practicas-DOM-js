export default function darkMode(darkBtn){
    let d = document,
    $body = d.querySelector('body'),
    $btn = d.querySelector(darkBtn),
    sun = '☀️',
    moon = '🌙';

    function dark(){
        $body.classList.add('dark-elements')
        $btn.textContent = sun;
        localStorage.setItem('theme', 'dark')
    }

    function light(){
        $body.classList.remove('dark-elements')
        $btn.textContent = moon;
        localStorage.setItem('theme', 'light')
    }

    d.addEventListener('click', e => {
        
        if(e.target.matches(darkBtn) || e.target.matches(`${darkBtn} *`)){
            if($btn.textContent === sun){
                light()
            }else {
                dark()
            }
        }
    })

    d.addEventListener('DOMContentLoaded', e => {
        if(localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'light');
        };

        if(localStorage.getItem('theme') === 'light'){
            light()
        }

        if(localStorage.getItem('theme') === 'dark'){
            dark()
        }
    })

}