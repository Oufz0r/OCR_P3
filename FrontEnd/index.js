window.onload = function(){
    loadGallery();
    // document.cookie = "cookieName=cookieValue; max-age=2000; path=/;";
    // document.cookie = "cookieName=cookieValue; expires=20000;"
    }





document.body.style.backgroundColor = "#FFFEF8";
document.body.style.maxWidth = "1440px";

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



// nouveau titre h2
newH2 = document.createElement("h2");
newArticle.appendChild(newH2);
newH2.innerHTML += "Designer d'espace";

// Nouveaux paragraphes
function newPar() {
    newParagraphe = document.createElement("p");
    newArticle.appendChild(newParagraphe);
};

// Nouvelle div
function nouvelleDiv(e) {
    newDiv = document.createElement("div");
    e.appendChild(newDiv);
};


// Création de la div pour englober la photo et le texte de présentation
nouvelleDiv = document.createElement("div");
newArticle.appendChild(nouvelleDiv);


newPar();
newPar();
newPar();

const IntroTextColor = document.querySelector("#introduction article");
IntroTextColor.style.color = "#3D3D3D";
const newText = document.querySelectorAll("#introduction article p");
newText[0].innerHTML += "Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison finale du chantier.";
newText[1].innerHTML += "Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les couleurs dans le respect de l’esprit des lieux, et le choix adapté des matériaux. Le suivi du chantier sera assuré dans le souci du détail, le respect du planning et du budget.";
newText[2].innerHTML += "En cas de besoin, une équipe pluridisciplinaire peut être constituée : architecte DPLG, décorateur(trice).";


// resize photo
const presFig = document.querySelector("#introduction article");
// presFig.style.padding = "0px 0px 0px 100px";
presFig.style.marginLeft = "100px";

const presImg = document.querySelector("#introduction img");
presImg.style.width = "100%";
// presImg.style.padding = "0px 100px 0px 0px";

const mainBox = document.querySelector('main');
mainBox.style.margin = "0 auto";
// mainBox.style.width = "1250px";
mainBox.style.width = "1240px";






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



// Fonction pour la création des boutons (input:submit) de catégories
function newBouton(btnName, categorieId, categorieOnClick) {
    let newBtn = document.createElement("input");
    newBtn.setAttribute("type", "submit");
    newBtn.setAttribute("value", btnName);
    newBtn.setAttribute("data-categorie-id", categorieId);
    newBtn.style.cssText = `
    padding: 0px 10px 0px 10px;
    width: auto;
    min-width: 100px;
    height: 37px;
    margin: 20px 5px 20px 5px;
    border: solid 1px #1D6154;
    background: #FFFEF8;
    color: #1D6154;
    font-size: 16px;
    font-weight: 700;
    `;
    newBtn.addEventListener('click', categorieOnClick);
    let currentForm = document.querySelector("#formBtn");
    currentForm.appendChild(newBtn);
    newBtn.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "#1D6154";
        e.target.style.color = "white";
    });
    newBtn.addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = "#FFFEF8";
        e.target.style.color = "#1D6154";
    });
};






// Suppression de la galerie fixe dans section #portfolio
const galerie = document.querySelector("#portfolio .gallery");
galerie.remove();

// Création de la nouvelle galerie
const portfolioBox = document.querySelector("#portfolio");
newDiv = document.createElement("div");
portfolioBox.appendChild(newDiv);

// Application de la class .gallery
const newGalerie = document.querySelector("#portfolio div");
newGalerie.classList.add("gallery");
// newGalerie.setAttribute("data-categorie-id", "");
newGalerie.style.marginTop = "20px";


// Le bouton Tous
newBouton('Tous', '', categorieOnClick);



// Filtre des projets par catégorie
function categorieOnClick(e) {
    e.preventDefault();
    let categorieDataId = e.target.getAttribute("data-categorie-id");
    // console.log(e.target);
    console.log(categorieDataId);
    loadGallery(categorieDataId);
    // works
};









// Fonction pour rediriger au clique
function linkLogin() {
    window.location.href = "login.html";
};


// Intéraction avec le menu via login
stylizeLi = document.querySelectorAll("nav ul li");
stylizeLi[2].addEventListener("click", linkLogin);
// stylizeLi[0].addEventListener("click", scrollTo);


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
// footerWork.style.backgroundColor = "white";
// footerWork.style.height = "60px";
// footerWork.style.fontSize = "14px";
// footerWork.style.fontWeight = "300";
// footerWork.style.lineHeight = "60px";