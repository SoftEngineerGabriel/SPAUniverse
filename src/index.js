const handleClickHome= document.querySelector('#home')
const handleClickUniverse = document.querySelector('#universe')
const handleClickExploration = document.querySelector('#exploration')
const elApp = document.getElementById('app')
const myhtml = document.querySelector('html')

handleClickHome.addEventListener('click', ()=>{
    elApp.classList.add('home')
})

handleClickUniverse.addEventListener('click', ()=>{
    myhtml.classList.add('secondaryDefault')
    myhtml.classList.remove('home')
})

handleClickExploration.addEventListener('click', ()=>{
    myhtml.classList.add('secondaryDefault')
    myhtml.classList.remove('home')
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
    console.log(pathname);

    const route = routes[pathname] || routes[404]; // qualquer endereço fora da aplicação ele irá retonar a página de 404, indicando erro.

    fetch(route).then(data => data.text()).then(html => {document.querySelector("#app").innerHTML = html}) //ela irá colocar as páginas html dentro da nossa aplicação (#app) com isso irá mudar ao ser clicado em qualquer link do nav.

}

handle() //essa função inicia executando pois ela chama o home para ser a tela inicial da aplicação