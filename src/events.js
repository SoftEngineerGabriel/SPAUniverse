import el from './elements.js'

export const homePage = () => {
    el.m.style.backgroundImage = "url('/assets/mountains-universe-1.png')";
    el.navHome.style.color = "white"
    el.navHome.style.fontWeight = "bold";
    el.navUniverse.style.color = "#E1E1E6"
    el.navUniverse.style.fontWeight = "normal"
    el.navExploration.style.color = "#E1E1E6"
    el.navExploration.style.fontWeight = "normal"
}

export const universePage = () => {
    el.m.style.backgroundImage = "url('/assets/mountains-universe02.png')";
    el.navHome.style.color = "#E1E1E6"
    el.navHome.style.fontWeight = "normal"
    el.navUniverse.style.color = "white"
    el.navUniverse.style.fontWeight = "bold"
    el.navExploration.style.color = "#E1E1E6"
    el.navExploration.style.fontWeight = "normal"
}

export const explorationPage = () => {
    el.m.style.backgroundImage = "url('/assets/mountains-universe-3.png')";
    el.navHome.style.color = "#E1E1E6"
    el.navHome.style.fontWeight = "normal"
    el.navUniverse.style.color = "#E1E1E6"
    el.navUniverse.style.fontWeight = "normal"
    el.navExploration.style.color = "white"
    el.navExploration.style.fontWeight = "bold"
}