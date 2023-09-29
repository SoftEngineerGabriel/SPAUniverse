import { Router } from './router.js'
import el from './elements.js'
import { homePage, universePage, explorationPage } from './events.js';

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe" , "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html" )


el.handleClickHome.addEventListener('click', ()=>{
    homePage()
})


el.handleClickUniverse.addEventListener('click', () => {
    universePage()
})

el.handleClickExploration.addEventListener('click', ()=>{
    explorationPage()
})

document.body.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.btn-home-page')) {
        btnHomePage();
    }
});

function btnHomePage() {
    fetch('/pages/universe.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html;
            universePage()
        });
}

 router.handle()//essa função inicia executando pois ela chama o home para ser a tela inicial da aplicação

//nav home ao iniciar 

window.onpopstate = () => router.handle()
window.route = () => router.route()