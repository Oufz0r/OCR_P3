
function newFigureMini(imgId, imgUrl, imgTitle) {
    let newFig = document.createElement("figure");
        modalGalerie.appendChild(newFig);
        newFig.setAttribute("class", "projets");
        newFig.setAttribute("data-id", imgId);

    let newImg = document.createElement("img");
        newImg.crossOrigin = "anonymous";
        newImg.style.width = '80px';
        newFig.appendChild(newImg);

    let TrashIcon = document.createElement("span");
        newFig.appendChild(TrashIcon);
        TrashIcon.setAttribute("data-del-id", imgId);
        TrashIcon.setAttribute("class", 'trash');
    
// ajout de l'icon à l'intérieur de la TrashBox (span)
    let trashContent = document.createElement('i');
        TrashIcon.appendChild(trashContent);
        trashContent.setAttribute('class', 'fa-solid fa-trash-can');
        trashContent.setAttribute('data-del-id', imgId);

    let newFigCap = document.createElement("figcaption");
        newFigCap.setAttribute("data-id", imgId);
        newFigCap.setAttribute("class", "editSpan");
    let newFigCapSpan = document.createElement("span");
        newFigCapSpan.textContent += "éditer";
        newFig.appendChild(newFigCap);
        newFigCap.appendChild(newFigCapSpan);

    // Application du src et alt
    newImg.setAttribute("src", imgUrl);
    newImg.setAttribute("alt", imgTitle);


// Suppression du projet
function deleteImg(e) {
    let id = e.target.getAttribute("data-del-id");
    const nbToDel = document.querySelectorAll("[data-id='"+imgId+"']").length;
    for(n = 0; n < nbToDel; n++)
    {
        document.querySelector("[data-id='"+imgId+"']").remove();
    }

    let userToken = sessionStorage.getItem('token');

    // fetch("http://localhost:5678/api/works/"+id, {
    //     method: 'DELETE',
    //     headers: {
    //         'Accept': 'application/json', 
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${userToken}`
    //     },
    //     body: JSON.stringify({
    //         id: id
    //     })
    //     })
    //     .then(function(){
    //         // rien à ajouter
            
    //     })
    //     .catch(function(err) {
    //         // message d'erreur
    //         console.log(err);
    //     })
};


TrashIcon.addEventListener('click', deleteImg);
// TrashIcon.parentElement.addEventListener('click', deleteImg);

let moveIcon = document.createElement("span");
        newFig.appendChild(moveIcon);
let moveIconContent = document.createElement("i");
    moveIconContent.setAttribute('class', 'fa-solid fa-arrows-up-down-left-right');
    moveIcon.appendChild(moveIconContent);
    moveIcon.setAttribute('class', 'dragCross');


newFig.addEventListener('mouseover', (e) => {
    e.target.parentElement.querySelector(".dragCross").style.display = "inline";
});
newFig.addEventListener('mouseout', (e) => {
    e.target.parentElement.querySelector(".dragCross").style.display = "none";
});
};








function loadGalleryMini() {
    fetch("http://localhost:5678/api/works")
    .then(function(res) {
        return res.json();
    })
    .then(function(value) {
        const entries = value.length;
        // clean gallery
        newGalerie.innerHTML = "";
        for(let n = 0; n < entries; n++)
        {
            let imgId = value[n].id;
            let imgUrl = value[n].imageUrl;
            let imgName = value[n].title;
            let imgCatId = value[n].category.id;
            newFigureMini(imgId, imgUrl, imgName);
        }
    })
    .catch(function(err) {
        console.log(err);
    });
};








// Création de la modal
// function
// function createModal(titre) {
    
    // Création de la div contenant la modal
    const modalBox = document.createElement("div");
    htmlBox.insertBefore(modalBox, bodyBox);
    modalBox.setAttribute("id", "modalBox");
    modalBox.addEventListener('click', function(){
        closeModal();
    });
    let modal = document.createElement("div");
    modalBox.appendChild(modal);
    modal.setAttribute("id", "modal");
    modal.setAttribute("role", "modal");
    modal.setAttribute("aria-modal", "true");
    modal.addEventListener('click', function(e){
        e.stopPropagation();
    });
    
    let modalCross = document.createElement("span");
    // modal Cross close
    modal.appendChild(modalCross);
    let modalCrossContent = document.createElement('i');
    modalCrossContent.setAttribute('class', 'fa-solid fa-xmark');
    modalCross.appendChild(modalCrossContent);
    modalCross.addEventListener('click', closeModal);
    modalCross.setAttribute('class', 'modalCross');
    
    // titre
    let modalTitre = document.createElement("h2");
    modal.appendChild(modalTitre);
    // modalTitre.textContent = titre;
    modalTitre.textContent = 'Galerie photo';
    
    // modalPage1b();
// }
// end function




// ========= Création de la modal page 1 =========
// function modalPage1b() {
    // const modal = document.querySelector("#modal");
let modalPage1 = document.createElement("div");
    modalPage1.setAttribute('class', 'modalPage');
// let modalTitre = document.createElement("h2");
let modalGalerie = document.createElement("div");
let modalBar = document.createElement("hr");
let modalAddDel = document.createElement("div");
let modalAdd = document.createElement("input");
    modalPage1.setAttribute("id", "page1");
    modalAdd.setAttribute("type", "submit");
    modalAdd.setAttribute("value", "Ajouter une photo");
    modal.appendChild(modalPage1);
    modalPage1.append(modalGalerie, modalBar, modalAddDel);
    modalAddDel.appendChild(modalAdd);

// création de la flèche retour
let modalArrow = document.createElement("span");
    modalArrow.setAttribute('class', 'modalArrow')
let modalArrowContent = document.createElement('i');
    modalArrowContent.setAttribute('class', 'fa-solid fa-arrow-left');
    modalArrow.appendChild(modalArrowContent);
    modal.appendChild(modalArrow);

// modal Titre h2
    // modalTitre.textContent = "Galerie photo";

// affichage de la galerie (overflow?)
    modalGalerie.style.cssText = `
    display: flex;
    flex-flow: row wrap;
    margin: 0px 90px 30px 90px;
    overflow: auto;
    `;

loadGalleryMini();

// bar HR de séparation
    modalBar.style.cssText = `
    width: 420px;
    background: #B3B3B3;
    height: 1px;
    border: none;
`;
// ModalGalerie ###
modalTitre.style.cssText = `
    font-size: 26px;
    font-weight: 400;
    font-family: 'Work Sans';
    color: black;
    margin-bottom: 30px;
`;
// section Add Del
modalAddDel.style.cssText = `
    display: flex;
    flex-direction: column;
    color: #D65353;
    font-family: 'Syne';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
`;
    // bouton Add
modalAdd.style.cssText = `
    width: 237px;
    height: 37px;
    border: none;
    font-weight: 600;
`;
// text supprimer la galerie
modalAddDel.innerHTML += "<p>Supprimer la galerie</p>";
// } // end modalPage1









//========= Création de la modal page 2 =========
// function modalPage2() {
let modalPage2 = document.createElement("div");
modalPage2.setAttribute("id", "page2");
modalPage2.style.display = "none";
modal.appendChild(modalPage2);
modalPage2.style.cssText = `
display: none;
flex-direction: column;`;
// création du titre
// modalTitre = document.createElement("h2");
// modalTitre.innerHTML += "Ajout photo";
// modalTitre.style.cssText = `
//     font-size: 26px;
//     font-weight: 400;
//     font-family: 'Work Sans';
//     color: black;
//     margin-bottom: 30px;
// `;
// modalPage2.appendChild(modalTitre);
// création du formulaire
let formulaire = document.createElement("form");
modalPage2.appendChild(formulaire);
formulaire.style.cssText = `
display: flex;
flex-direction: column;`;
// input file
let inputFile = document.createElement("input");
inputFile.setAttribute("type", "file");
inputFile.setAttribute("name", "image");
inputFile.setAttribute("id", "img-file");
inputFile.setAttribute("accept", "image/png, image/jpeg");
inputFile.addEventListener('click', imgRemove);
inputFile.addEventListener('input', imgChange);
inputFile.addEventListener('input', inputChange);
formulaire.appendChild(inputFile);
inputFile.style.cssText = `
width: 0.1px;
height: 0.1px;
opacity: 0;
overflow: hidden;
position: absolute;
z-index: -1;
`;
let fileLabel = document.createElement("label");
fileLabel.setAttribute("for", "img-file");
fileLabel.setAttribute("id", "labelBox");
formulaire.appendChild(fileLabel);
fileLabel.style.cssText = `
display: flex;
flex-direction: column;
align-items: center;
background: #E8F1F6;
border-radius: 3px;
margin-bottom: 30px;
max-height: 169px;
overflow: hidden;
`;
// icone du file input
let labelDiv = document.createElement("div");
fileLabel.appendChild(labelDiv);
labelDiv.innerHTML += '<i class="fa-regular fa-image"></i>';
labelDiv.setAttribute("id", "labelImg");
labelDiv.style.cssText = `
font-size: 60px;
color: #B9C5CC;
margin-top: 20px;
`;
// bouton du file input
labelDiv = document.createElement("div");
fileLabel.appendChild(labelDiv);
labelDiv.setAttribute("id", "labelBtn");
labelBtn = document.createElement("div");
labelDiv.appendChild(labelBtn);
labelBtn.innerHTML += "+ Ajouter photo";
labelBtn.style.cssText = `
display: flex;
justify-content: center;
align-items: center;
width: 176px;
height: 36px;
background: #CBD6DC;
color: #306685;
border: none;
font-family: 'Work Sans';
font-weight: bold;
font-size: 14px;
font-style: normal;
border-radius: 50px;
margin: 15px 0px 7px 0px;
`;
// restrictions du file input
labelDiv = document.createElement("div");
fileLabel.appendChild(labelDiv);
labelDiv.setAttribute("id", "labelMax");
labelDiv.innerHTML += 'jpg, png : 4mo max';
labelDiv.style.cssText = `
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 11px;
color: #444444;
margin-bottom: 20px;
`;
// titre
fileLabel = document.createElement("label");
fileLabel.setAttribute("for", "titre");
formulaire.appendChild(fileLabel);
fileLabel.innerHTML = 'Titre';
fileLabel.style.cssText = `
text-align: left;
font-family: 'Work Sans';
font-weight: 500;
font-size: 14px;
margin-bottom: 10px;`;
let inputTitre = document.createElement("input");
inputTitre.setAttribute("type", "text");
inputTitre.setAttribute("name", "titre");
inputTitre.setAttribute("id", "titre");
inputTitre.addEventListener('input', inputChange);
formulaire.appendChild(inputTitre);
inputTitre.style.cssText = `
border: none;
height: 50px;
box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.09);
margin-bottom: 20px;
font-family: 'Work Sans';
font-size: 14px;
padding-left: 15px;
`;
// selection catégorie
fileLabel = document.createElement("label");
fileLabel.setAttribute("for", "categorie");
formulaire.appendChild(fileLabel);
fileLabel.innerHTML = 'Catégorie';
fileLabel.style.cssText = `
text-align: left;
font-family: 'Work Sans';
font-weight: 500;
font-size: 14px;
margin-bottom: 10px;`;
let selectCategorie = document.createElement("select");
selectCategorie.setAttribute("id", "categorie");
selectCategorie.addEventListener('input', inputChange);
selectCategorie.innerHTML += "<option></option>";
formulaire.appendChild(selectCategorie);
selectCategorie.style.cssText = `
border: none;
height: 50px;
box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.09);
margin-bottom: 0px;
font-family: 'Work Sans';
font-size: 14px;
padding-left: 15px;
`;
// barre hr
modalBar = document.createElement("hr");
modalPage2.appendChild(modalBar);
modalBar.style.cssText = `
    width: 420px;
    background: #B3B3B3;
    height: 1px;
    border: none;
    margin-top: 50px;
`;
// bouton valider
modalAdd = document.createElement("input");
modalAdd.setAttribute("type", "submit");
modalAdd.setAttribute("value", "Valider");
modalAdd.setAttribute("id", "buttonUpload");
modalPage2.appendChild(modalAdd);
modalAdd.style.cssText = `
    width: 237px;
    height: 37px;
    border: none;
    font-weight: 600;
    background: #A7A7A7;
`;


// pick dans l'api les différentes catégories
// les ajouter à selectCategorie comme <option>
fetch("http://localhost:5678/api/categories")
.then(function(res) {
    return res.json();
})
.then(function(value) {
    const entries = value.length;
    
    for(let n = 0; n < entries; n++)
    {
        let cateName = value[n].name;
        let cateId = value[n].id;
        newOption = document.createElement("option");
        selectCategorie.appendChild(newOption);
        newOption.innerHTML += cateName;
        newOption.setAttribute("value", cateName);
        newOption.setAttribute("data-id-cat", cateId);
    }
})
.catch(function(err) {
    console.log(err);
});
// } // end modalPage1













function showImg(url) {
    document.getElementById("labelImg").style.display = 'none';
    document.getElementById("labelBtn").style.display = 'none';
    document.getElementById("labelMax").style.display = 'none';

    let formBox = document.getElementById("labelBox");
    let imgIncoming = document.createElement("img");
    imgIncoming.setAttribute("src", "assets/images/"+url);
    imgIncoming.setAttribute("id", "imageToUpload");
    imgIncoming.style.width = '129px';
    formBox.appendChild(imgIncoming);
}



function imgRemove() {
    document.getElementById("imageToUpload").remove();
    document.getElementById("labelImg").style.display = 'inline';
    document.getElementById("labelBtn").style.display = 'inline';
    document.getElementById("labelMax").style.display = 'inline';
}


function imgChange(e) {
    checkFile = e.target.files[0].name;
    checkFile != null ? showImg(checkFile) : "";
}



function inputChange() {
    checkImg = document.getElementById("img-file").value;
    checkTitre = document.getElementById("titre").value;
    checkCategorie = document.getElementById("categorie").value;
    checkImg != "" && checkTitre != "" && checkCategorie != "" ? buttonGreen() : buttonGrey();
}

function buttonGreen() {
    document.getElementById("buttonUpload").style.backgroundColor = "#1D6154";
}

function buttonGrey() {
    document.getElementById("buttonUpload").style.backgroundColor = "#A7A7A7";
}










// Changement de la modal en "Ajout photo"
modalAddDel.firstChild.addEventListener('click', () => {
    modalPage1.style.display = "none";
    modalPage2.style.display = "flex";
    modalArrow.style.display = "flex";
    modalTitre.textContent = 'Ajout photo';
});

// Retour à la modal Galerie
modalArrow.addEventListener('click', () => {
    modalPage1.style.display = "flex";
    modalPage2.style.display = "none";
    modalArrow.style.display = "none";
    modalTitre.textContent = 'Galerie photo';
});





// Ajout d'un projet
function addNewProject(title, imageUrl, categoryId) {
let userToken = sessionStorage.getItem('token');

    fetch("http://localhost:5678/api/works", {
        method: 'POST',
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        },
        body: JSON.stringify({
            id: id,
            title: title,
            imageUrl: imageUrl,
            categoryId: categorieId,
            userId: 1
        })
        })
        .then(function(){
            // rien à ajouter
            
        })
        .catch(function(err) {
            // message d'erreur
            console.log(err);
        })
}