// modal.js
// Obtenir la modal
var modal = document.getElementById("adminModal");

// Obtenir l'élément qui ferme la modal
var span = document.getElementsByClassName("close")[0];

// Lorsque l'utilisateur clique sur le bouton, ouvrir la modal 
window.onload = function() {
    modal.style.display = "block";
}

// Lorsque l'utilisateur clique sur <span> (x), fermer la modal
span.onclick = function() {
    modal.style.display = "none";
}

// Lorsque l'utilisateur clique n'importe où en dehors de la modal, la fermer
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
