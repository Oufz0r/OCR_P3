window.onload = function(){
    loadGallery();
    // document.cookie = "cookieName=cookieValue; max-age=2000; path=/;";
    // document.cookie = "cookieName=cookieValue; expires=20000;"
    }







document.body.style.backgroundColor = "#FFFEF8";
document.body.style.maxWidth = "1440px";


let htmlBox = document.querySelector("html");
htmlBox.style.display = "flex";
htmlBox.style.flexDirection = "column";
htmlBox.style.alignItems = "center";
let bodyBox = document.querySelector("body");
bodyBox.style.width = "100%";




// Suppression du span du logo pour correction
const erreurTitre = document.querySelector("header span");
erreurTitre.remove();
// Création du span sous le logo
const newTitreBox = document.querySelector("header h1");
newSpan = document.createElement("span");
newTitreBox.appendChild(newSpan);
const newTitre = document.querySelector("header h1 span");
newSpan.innerHTML += "ARCHITECTE D'INTÉRIEUR";
newSpan.style.margin = "5px 0 0 0";
newSpan.style.fontSize = "10px";
newSpan.style.fontWeight = "400";







// Correction du texte de présentation
const erreurTexte = document.querySelector("#introduction article");
erreurTexte.remove();

// Recréation des éléments de présentation
const presentationBox = document.querySelector("#introduction");
newArticle = document.createElement("article");
presentationBox.appendChild(newArticle);
presentationBox.style.justifyContent = "space-between";



// Création de la div pour englober la photo et le texte de présentation
const introRight = document.querySelector("#introduction article");
nouvelleDiv = document.createElement("div");
introRight.appendChild(nouvelleDiv);



// nouveau titre h2
newH2 = document.createElement("h2");
nouvelleDiv.appendChild(newH2);
newH2.innerHTML += "Designer d'espace";

// Nouveaux paragraphes
function newPar() {
    newParagraphe = document.createElement("p");
    nouvelleDiv.appendChild(newParagraphe);
};



newPar();
newPar();
newPar();

const introArticle = document.querySelector("#introduction article");
introArticle.style.color = "#3D3D3D";
const newText = document.querySelectorAll("#introduction article p");
newText[0].innerHTML += "Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison finale du chantier.";
newText[1].innerHTML += "Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les couleurs dans le respect de l’esprit des lieux, et le choix adapté des matériaux. Le suivi du chantier sera assuré dans le souci du détail, le respect du planning et du budget.";
newText[2].innerHTML += "En cas de besoin, une équipe pluridisciplinaire constituée de : architecte DPLG, décorateur(trice).";



// resize photo
// introArticle.style.padding = "0px 0px 0px 100px";
introArticle.style.marginLeft = "140px";

const presImg = document.querySelector("#introduction img");
presImg.style.width = "100%";
// presImg.style.padding = "0px 100px 0px 0px";

const mainBox = document.querySelector('main');
mainBox.style.margin = "0 auto";
mainBox.style.width = "950px";
// mainBox.style.width = "85%";

// div interne de l'article d'introduction
// nouvelleDiv.style.width = "410px";
nouvelleDiv.style.width = "auto";

const headEr = document.querySelector("header");
headEr.style.width = "1140px";
// headEr.style.width = "100%";
headEr.style.margin = "50px auto";

const imgHeader = document.querySelector("header img");
imgHeader.style.width = "20px";






// Création du form
const newForm = document.createElement("form");
newForm.setAttribute("action", "#");
newForm.setAttribute("method", "get");
newForm.setAttribute("id", "formBtn");
newForm.style.cssText = `
display: flex;
width: auto;
justify-content: center;
`;
let currentDiv = document.querySelector("#portfolio");
currentDiv.appendChild(newForm);






// Suppression de la galerie fixe dans section #portfolio
const galerie = document.querySelector("#portfolio .gallery");
galerie.remove();

// Création de la nouvelle galerie
const portfolioBox = document.querySelector("#portfolio");
newDiv = document.createElement("div");
portfolioBox.appendChild(newDiv);
portfolioBox.style.marginTop = "150px";

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
    modalBox.style.display = 'flex';
};


function closeModal() {
    modalBox.style.display = 'none';
};








// mise en place des fonctions d'edition
function editorMode() {
    // Bandeau d'édition
    let divEditorBig = document.createElement("div");
    divEditorBig.style.cssText = `
    font-family: Work Sans;
    z-index: 2;
    background: black;
    width: 100%;
    color: white;
    font-size: 14px;
    font-weight: 400;
    padding: 10px 0px 10px 0px;
    text-align: center;`;
    divEditorBig.innerHTML += `<i class="fa-regular fa-pen-to-square"></i> Mode édition
    <input type="submit" value="publier les changements">`;
    let editBtn = divEditorBig.querySelector("input[type='submit']");
    editBtn.style.cssText = `
    font-family: Work Sans;
    font-size: 14px;
    font-weight: 600;
    background: white;
    color: black;
    width: auto;
    border: none;
    padding: 11px 23px 11px 23px;
    margin: 0px 0px 0px 20px;`;
    htmlBox.insertBefore(divEditorBig, bodyBox);

    // Petit lien d'édition
    let divEditorSmall1 = document.createElement("div");
    divEditorSmall1.style.cssText = `
    max-width: 100px;
    color: black;
    font-size: 15px;
    font-weight: 400;
    margin: 15px 0px 15px 0;`;
    divEditorSmall1.innerHTML += `<i class="fa-regular fa-pen-to-square"></i> modifier`;
    // insertion du lien
    introArticle.insertBefore(divEditorSmall1, introArticle.children[0]);

    
    let divEditorSmall2 = document.createElement("div");
    divEditorSmall2.style.cssText = `
    color: black;
    max-width: 100px;
    font-size: 15px;
    font-weight: 400;
    margin: -40px 0 0 0;`;
    divEditorSmall2.innerHTML += `<i class="fa-regular fa-pen-to-square"></i> modifier`;
    // insertion du lien
    let presLeft = document.querySelector("#introduction figure");
    mainBox.insertBefore(divEditorSmall2, mainBox.children[1]);


    let divEditorSmall3 = document.createElement("div");
    divEditorSmall3.addEventListener('click', openModal);
    divEditorSmall3.style.cssText = `
    position: relative;
    bottom: -25px;
    left: 180px;
    margin: 0 auto;
    width: 100px;
    color: black;
    font-size: 15px;
    font-weight: 400;`;
    divEditorSmall3.innerHTML += `<i class="fa-regular fa-pen-to-square"></i> modifier`;
    // insertion du lien
    portfolioBox.insertBefore(divEditorSmall3, portfolioBox.children[0]);

    // suppression des boutons de catégorie et ajout de marge
    document.querySelector("#formBtn").style.display = "none";
    document.querySelector("#portfolio h2").style.marginBottom = '80px';

    // login to logout
    stylizeLi = document.querySelectorAll("nav ul li");
    stylizeLi[2].remove();
    let logoutLink = document.createElement("li");
    let ulBox = document.querySelector("nav ul");
    ulBox.insertBefore(logoutLink, ulBox.children[2]);
    logoutLink.innerHTML += "logout";

};













// Fonction pour rediriger au clique
function linkLogin() {
    window.location.href = "login.html";
};

function linkLogout() {
    sessionStorage.clear();
    window.location.href = "index.html";
};


// Intéraction avec le menu via login
stylizeLi = document.querySelectorAll("nav ul li");

// en fonction de l'état connecté ou non connecté
userSessionId && userSessionToken ? stylizeLi[2].addEventListener("click", linkLogout) : stylizeLi[2].addEventListener("click", linkLogin);

// stylizeLi[2].addEventListener("click", linkLogin);


// stylizeLi[2].addEventListener("click", () => {
//     window.location.href = "login.html";
// });


let footerWork = document.querySelector("footer");
footerWork.style.cssText = `
background-color: white;
height: 60px;
font-size: 14px;
font-weight: 300;
line-height: 60px;`;