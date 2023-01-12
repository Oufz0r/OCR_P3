window.onload = function(){
    loadGallery();
    }








let htmlBox = document.querySelector("html");


let bodyBox = document.querySelector("body");

// Suppression du span du logo pour correction
const erreurTitre = document.querySelector("header span");
erreurTitre.remove();
// Création du span sous le logo
const newTitreBox = document.querySelector("header h1");
newSpan = document.createElement("span");
newTitreBox.appendChild(newSpan);
const newTitre = document.querySelector("header h1 span");
newSpan.textContent += "ARCHITECTE D'INTÉRIEUR";
newSpan.style.margin = "5px 0 0 0";
newSpan.style.fontSize = "10px";
newSpan.style.fontWeight = "400";



const headEr = document.querySelector("header");

// icon instagram
const imgHeader = document.querySelector("header img");
imgHeader.style.width = "20px";


// On se trouve sur la page projets, donc on met projets en gras
// const projetsLi = document.querySelectorAll("nav ul li");
// projetsLi[0].style.fontWeight = "600";


// On va chercher les li pour les espacer
let menuLi = document.querySelectorAll('nav ul li');
for(n=0; n < menuLi.length; n++)
{
    menuLi[n].style.marginLeft = '35px';
}





const mainBox = document.querySelector('main');
// mainBox.style.margin = "0 380px";
// mainBox.style.width = "950px";
// mainBox.style.width = "85%";






// Correction du texte de présentation on retire l'ancien
const erreurTexte = document.querySelector("#introduction article");
erreurTexte.remove();

// Recréation des éléments de présentation
const presentationBox = document.querySelector("#introduction");
newArticle = document.createElement("article");
presentationBox.appendChild(newArticle);



// Création de la div pour englober la photo et le texte de présentation
const introRight = document.querySelector("#introduction article");
// introRight.style.maxWidth = '470px';
nouvelleDiv = document.createElement("div");
introRight.appendChild(nouvelleDiv);



// nouveau titre h2
newH2 = document.createElement("h2");
newH2.setAttribute('class', 'titreIntro');
nouvelleDiv.appendChild(newH2);
newH2.textContent += "Designer d'espace";


// Nouveaux paragraphes
function newPar(text) {
    newParagraphe = document.createElement("p");
    newParagraphe.setAttribute('class', 'indexParagraph');
    newParagraphe.textContent += text;
    nouvelleDiv.appendChild(newParagraphe);
};


newPar("Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison finale du chantier.");
newPar("Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les couleurs dans le respect de l’esprit des lieux, et le choix adapté des matériaux. Le suivi du chantier sera assuré dans le souci du détail, le respect du planning et du budget.");
newPar("En cas de besoin, une équipe pluridisciplinaire peut être constituée : architecte DPLG, décorateur(trice).");


// const presImg = document.querySelector("#introduction img");

// div interne de l'article d'introduction
nouvelleDiv.style.width = "auto";








// Création du form
const newForm = document.createElement("form");
newForm.setAttribute("action", "#");
newForm.setAttribute("method", "get");
newForm.setAttribute("id", "formBtn");

let currentDiv = document.querySelector("#portfolio");
currentDiv.appendChild(newForm);






// Suppression de la galerie fixe dans section #portfolio
const galerie = document.querySelector("#portfolio .gallery");
galerie.remove();

// Création de la nouvelle galerie
const portfolioBox = document.querySelector("#portfolio");
newDiv = document.createElement("div");
portfolioBox.appendChild(newDiv);
portfolioBox.style.marginTop = "100px";

// Application de la class .gallery
const newGalerie = document.querySelector("#portfolio div");
newGalerie.classList.add("gallery");
// newGalerie.setAttribute("data-categorie-id", "");
newGalerie.style.marginTop = "20px";





// Vérification du token de la session
let userSessionId = sessionStorage.getItem("id");
let userSessionToken = sessionStorage.getItem("token");

userSessionId && userSessionToken ? editorMode() : "";





function openModal() {
    createModal('Galerie photo', modalPage1());
};


function closeModal() {
    document.querySelector("#modalBox").remove();
};





// Fonction pour créer une icone d'édition
function createIcon(classes, parent, name, fonction) {
    let creation = document.createElement('i');
        creation.setAttribute('class', classes);
        parent.appendChild(creation);
        parent.innerHTML += ' '+name;
        parent.addEventListener('click', fonction);
}





// mise en place des fonctions d'edition une fois connecté
function editorMode() {
    // Bandeau d'édition
    let divEditorBig = document.createElement("div");
        divEditorBig.setAttribute('class', 'editorBig');
    let editBigIcon = document.createElement('i');
        editBigIcon.setAttribute('class', 'fa-regular fa-pen-to-square');
        divEditorBig.appendChild(editBigIcon);
        divEditorBig.textContent += 'Mode édition';
    let editBigInput = document.createElement('input');
        editBigInput.setAttribute('type', 'submit');
        editBigInput.setAttribute('value', 'publier les changements');
        divEditorBig.appendChild(editBigInput);

        // divEditorBig.innerHTML += `<i class="fa-regular fa-pen-to-square"></i> Mode édition
        // <input type="submit" value="publier les changements">`;

    let editBtn = divEditorBig.querySelector("input[type='submit']");
        htmlBox.insertBefore(divEditorBig, bodyBox);



    // Petit lien d'édition
    let divEditorSmall = document.createElement("div");
        divEditorSmall.setAttribute('class', 'editDiv editDiv1');
        // Création de l'icon
        createIcon('fa-regular fa-pen-to-square', divEditorSmall, 'modifier');
        // divEditorSmall.innerHTML += `<i class="fa-regular fa-pen-to-square"></i> modifier`;

        // insertion du lien
        introRight.insertBefore(divEditorSmall, introRight.children[0]);

    
    divEditorSmall = document.createElement("div");
        divEditorSmall.setAttribute('class', 'editDiv editDiv2');
        // Création de l'icon
        createIcon('fa-regular fa-pen-to-square', divEditorSmall, 'modifier');

    // insertion du lien
    let presLeft = document.querySelector("#introduction figure");
        mainBox.insertBefore(divEditorSmall, mainBox.children[1]);


    divEditorSmall = document.createElement("div");
        divEditorSmall.setAttribute('class', 'editDiv editDiv3');
        // Création de l'icon
        createIcon('fa-regular fa-pen-to-square', divEditorSmall, 'modifier', openModal);
        // divEditorSmall.addEventListener('click', openModal);
        // divEditorSmall.innerHTML += `<i class="fa-regular fa-pen-to-square"></i> modifier`;

    // insertion du lien avant "Mes Projets"
        portfolioBox.insertBefore(divEditorSmall, portfolioBox.children[0]);


    // display none des boutons de catégorie et ajout de marge
        document.querySelector("#formBtn").style.display = "none";
        document.querySelector("#portfolio h2").style.marginBottom = '80px';


    // passer le li login en logout une fois connecté
        stylizeLi = document.querySelectorAll("nav ul li");
        stylizeLi[2].textContent = "logout";
};










// corriger Email en E-mail
let emailLabel = document.querySelector('label[for="email"]');
emailLabel.textContent = 'E-mail';




// Fonction pour rediriger au clique sur login
function linkLogin() {
    window.location.href = "login.html";
};

// Fonction pour supprimer la session au clique sur logout
function linkLogout() {
    sessionStorage.clear();
    window.location.href = "index.html";
};


// Intéraction avec le menu via login
stylizeLi = document.querySelectorAll("nav ul li");

// en fonction de l'état connecté ou non connecté
userSessionId && userSessionToken ? stylizeLi[2].addEventListener("click", linkLogout) : stylizeLi[2].addEventListener("click", linkLogin);


// let footerWork = document.querySelector("footer");
// footerWork.setAttribute('class', 'foot-rework');