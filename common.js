let imgMenu = false

//document.getElementById("menuButton").addEventListener("click", menuButton);

function menuButton() {
    let menuButton = document.getElementById("menuButton")

    if (imgMenu === false) {
        displayMenu()
        menuButton.src="/img/page_accueil/cross.png"
        imgMenu = true
    } else if (imgMenu === true) {
        displayMenu()
        menuButton.src="/img/page_accueil/menu.png"
        imgMenu = false
    }
}

function displayMenu() {
    let navbar = document.getElementById("navbar")
    let main = document.querySelector('main')

    if (navbar.style.display === "block") {
        navbar.style.display = "none" 
        main.style.display = "block"
        menuCross.style.display = "none"
        // METTRE LE #MENULIST EN BACKGROUND COLOR GRIS 
    } else {
        navbar.style.display = "block"
        main.style.display = "none"
        /* 
        - mettre le menu cacher par defaut en mobile
        - qd on clic sur le bouton hamberger : cacher la page et afficher le menu
        - ajouter une animation depuis la gauche pour afficher le menu
         */
        //title.style.display = "none"
    }
}
