export class Router{
    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event){
        event = event || window.event;
        event.preventDefault(); //remover a função padrão dos links do nav
    
        window.history.pushState({}, "", event.target.href) //vai pegar os históricos dos links.
        this.handle()
    }
    
    handle(){
        const {pathname} = window.location; //localizar em qual página estamos
    
        const route = this.routes[pathname] || this.routes[404]; // qualquer endereço fora da aplicação ele irá retonar a página de 404, indicando erro.
    
        fetch(route).then(data => data.text()).then(html => {document.querySelector("#app").innerHTML = html}) //ela irá colocar as páginas html dentro da nossa aplicação (#app) com isso irá mudar ao ser clicado em qualquer link do nav.
    
    }
}

























































