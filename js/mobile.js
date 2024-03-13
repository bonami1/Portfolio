// Sélectionnez tous les éléments avec la classe "tabBtn"
const tabBtns = document.querySelectorAll('.tabBtn');

// Ajoutez un gestionnaire d'événements à chaque bouton
tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Récupérez la valeur de l'attribut "data-tab" pour déterminer quelle div doit être affichée/ masquée
        const tabId = btn.getAttribute('data-tab');
        clickTab(tabId);
    });
});

// Fonction pour afficher/masquer la div en fonction de l'ID
function clickTab(tabId) {
    const tabDiv = document.getElementById(tabId);
    if (tabDiv.style.display === "block") {
        tabDiv.style.display = "none";
    } else {
        tabDiv.style.display = "block";
    }
}
