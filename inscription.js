
const formInscription = document.getElementById("formInscription");

if (formInscription) {
    formInscription.addEventListener("submit", function (e) {
        e.preventDefault();

        const motDePasse = document.getElementById("motDePasse").value;
        const confirmation = document.getElementById("confirmation").value;
        const message = document.getElementById("message");

        if (motDePasse !== confirmation) {
            message.textContent = "Les mots de passe ne correspondent pas.";
            message.style.color = "red";
        } else {
            message.textContent = "Formulaire valide !";
            message.style.color = "green";
        }
    });
}

const formConnexion = document.getElementById("formConnexion");

if (formConnexion) {
    formConnexion.addEventListener("submit", function (e) {
        e.preventDefault();

        document.getElementById("messageConnexion").textContent =
            "Formulaire valide ! La vérification du compte reste à connecter.";
    });
}