import el from './elements.js'
import { homePage, universePage, explorationPage } from './events.js';

el.handleClickHome.addEventListener('click', ()=>{
    homePage()
})


el.handleClickUniverse.addEventListener('click', () => {
    universePage()
})

el.handleClickExploration.addEventListener('click', ()=>{
    explorationPage()
})

const routes = {
    "/": "/pages/home.html",
    "/universe" : "/pages/universe.html",
    "/exploration": "/pages/exploration.html",
    404 : "/pages/404.html"
}

function route(event){
    event = event || window.event;
    event.preventDefault(); //remover a função padrão dos links do nav

    window.history.pushState({}, "", event.target.href) //vai pegar os históricos dos links.
    handle()
}

function handle(){
    const {pathname} = window.location; //localizar em qual página estamos

    const route = routes[pathname] || routes[404]; // qualquer endereço fora da aplicação ele irá retonar a página de 404, indicando erro.

    fetch(route).then(data => data.text()).then(html => {document.querySelector("#app").innerHTML = html}) //ela irá colocar as páginas html dentro da nossa aplicação (#app) com isso irá mudar ao ser clicado em qualquer link do nav.

}


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

 handle()//essa função inicia executando pois ela chama o home para ser a tela inicial da aplicação

//nav home ao iniciar 

window.onpopstate = () => handle()
window.route = () => route()