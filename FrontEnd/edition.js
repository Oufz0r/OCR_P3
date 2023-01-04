
function newFigureMini(imgId, imgUrl, imgTitle) {
    let newFig = document.createElement("figure");
    let modalGalerie = document.querySelector(".modalGalerie");
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
        // newGalerie.innerHTML = "";
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
function createModal(titre, modalContent) {
    
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
    modalTitre.textContent = titre;
    modalTitre.setAttribute('class', 'modalTitre');
    // modalTitre.textContent = 'Galerie photo';

    modal.appendChild(modalContent);
}
// end function




// ========= Création de la modal page 1 =========
function modalPage1() {
let page1 = document.createElement("div");
    page1.setAttribute('class', 'modalPage flex-col');
    page1.setAttribute("id", "page1");
let modalGalerie = document.createElement("div");
    modalGalerie.setAttribute('class', 'modalGalerie');
let modalBar = document.createElement("hr");
    modalBar.setAttribute('class', 'modalBar');
let modalAddDel = document.createElement("div");
    modalAddDel.setAttribute('class', 'modalAddDel');
let modalAdd = document.createElement("input");
    modalAdd.setAttribute('class', 'modalAdd');
    modalAdd.setAttribute("type", "submit");
    modalAdd.setAttribute("value", "Ajouter une photo");
    modalAddDel.appendChild(modalAdd);
    page1.append(modalGalerie, modalBar, modalAddDel);

loadGalleryMini();

// text supprimer la galerie
modalAddDel.innerHTML += "<p>Supprimer la galerie</p>";

// Changement de la modal en "Ajout photo"
modalAddDel.firstChild.addEventListener('click', () => {
    document.querySelector(".modalPage").innerHTML = '';
    document.querySelector(".modalPage").appendChild(modalPage2());
    document.querySelector(".modalTitre").textContent = 'Ajout photo';
    // createModal('Ajout photo', modalPage2());
});

return page1;
} // end modalPage1








//========= Création de la modal page 2 =========
function modalPage2() {
let page2 = document.createElement("div");
page2.setAttribute("id", "page2");
page2.setAttribute("class", "modalPage flex-col");
page2.style.display = "flex";

// création du formulaire
let formulaire = document.createElement("form");
formulaire.setAttribute('class', 'flex-col');
formulaire.setAttribute('id', 'formulaire');
formulaire.setAttribute('enctype', 'multipart/form-data');
page2.appendChild(formulaire);

// input file
let inputFile = document.createElement("input");
    inputFile.setAttribute("type", "file");
    inputFile.setAttribute("name", "image");
    inputFile.setAttribute("id", "img-file");
    inputFile.setAttribute("accept", ".png, .jpeg");
    inputFile.addEventListener('click', imgRemove);
    inputFile.addEventListener('input', imgChange);
    inputFile.addEventListener('input', inputChange);
    formulaire.appendChild(inputFile);

let fileLabel = document.createElement("label");
    fileLabel.setAttribute("for", "img-file");
    fileLabel.setAttribute("id", "labelBox");
    formulaire.appendChild(fileLabel);

// icone du file input
let labelDiv = document.createElement("div");
    fileLabel.appendChild(labelDiv);
    labelDiv.innerHTML += '<i class="fa-regular fa-image"></i>';
    labelDiv.setAttribute("id", "labelImg");

// bouton du file input
labelDiv = document.createElement("div");
    fileLabel.appendChild(labelDiv);
    labelDiv.setAttribute("id", "labelBtn");
labelBtn = document.createElement("div");
    labelDiv.appendChild(labelBtn);
    labelBtn.textContent = "+ Ajouter photo";

// restrictions du file input
labelDiv = document.createElement("div");
    fileLabel.appendChild(labelDiv);
    labelDiv.setAttribute("id", "labelMax");
    labelDiv.textContent = 'jpg, png : 4mo max';

// titre
fileLabel = document.createElement("label");
    fileLabel.setAttribute("for", "titre");
    formulaire.appendChild(fileLabel);
    fileLabel.textContent = 'Titre';

let inputTitre = document.createElement("input");
    inputTitre.setAttribute("type", "text");
    inputTitre.setAttribute("name", "titre");
    inputTitre.setAttribute("id", "titre");
    inputTitre.setAttribute("class", "inputUpload");
    inputTitre.addEventListener('input', inputChange);
    formulaire.appendChild(inputTitre);

// selection catégorie
fileLabel = document.createElement("label");
    fileLabel.setAttribute("for", "categorie");
    formulaire.appendChild(fileLabel);
    fileLabel.textContent = 'Catégorie';

let selectCategorie = document.createElement("select");
    selectCategorie.setAttribute("id", "categorie");
    selectCategorie.setAttribute("class", "inputUpload margin30");
    selectCategorie.addEventListener('input', inputChange);
// création de l'option vide
let optionEmpty = document.createElement('option');
    selectCategorie.appendChild(optionEmpty);
    formulaire.appendChild(selectCategorie);


// barre hr
modalBar = document.createElement("hr");
    formulaire.appendChild(modalBar);
    modalBar.setAttribute('class', 'modalBar');

// bouton valider
modalValide = document.createElement("input");
modalValide.setAttribute("type", "submit");
modalValide.setAttribute("value", "Valider");
modalValide.setAttribute("id", "buttonUpload");
formulaire.appendChild(modalValide);

modalValide.addEventListener('click', (e) => {
    e.preventDefault();
    addNewProject();
});

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

// création de la flèche retour
let modalArrow = document.createElement("span");
    modalArrow.setAttribute('class', 'modalArrow')
let modalArrowContent = document.createElement('i');
    modalArrowContent.setAttribute('class', 'fa-solid fa-arrow-left');
    modalArrow.appendChild(modalArrowContent);
    page2.appendChild(modalArrow);

// Retour à la modal Galerie
modalArrow.addEventListener('click', () => {
    document.querySelector(".modalPage").innerHTML = '';
    document.querySelector(".modalPage").appendChild(modalPage1());
    document.querySelector(".modalTitre").textContent = 'Galerie photo';
});

return page2;
} // end modalPage1








// on affiche la miniature de l'image qu'on désire envoyer en faisant disparaitre l'intérieur de l'input file
function showImg(url) {
    document.getElementById("labelImg").style.display = 'none';
    document.getElementById("labelBtn").style.display = 'none';
    document.getElementById("labelMax").style.display = 'none';

    // On récupère l'image choisie et on affiche un preview dans #labelBox
    let imageFile = document.getElementById('img-file').files[0];
    let formBox = document.getElementById("labelBox");
    let image = document.createElement('img');
        image.setAttribute("id", "imageToUpload");
        image.style.maxHeight = '169px';
        image.file = imageFile;
        formBox.appendChild(image);

    let reader = new FileReader();
        reader.onload = (function(aImg) {return function(e) { aImg.src = e.target.result;}; }) (image);
        reader.readAsDataURL(imageFile);
}




// on fait réapparaitre le contenu information de l'input file
function imgRemove() {
    document.getElementById("imageToUpload").remove();
    document.getElementById("labelImg").style.display = 'inline';
    document.getElementById("labelBtn").style.display = 'inline';
    document.getElementById("labelMax").style.display = 'inline';
}



// Si on reclique sur l'input file on reset son contenu
function imgChange(e) {
    checkFile = e.target.files[0].name;
    checkFile != null ? showImg(checkFile) : "";
}



// si chaque input a du contenu on passe le bouton en vert
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









// Ajout d'un projet
function addNewProject() {
    let userToken = sessionStorage.getItem('token');

        checkImg = document.getElementById("img-file").value;
        checkTitre = document.getElementById("titre").value;
        checkCategorie = document.getElementById("categorie").value;

        checkImg != "" && checkTitre != "" && checkCategorie != "" ? addNewProjectApply(checkTitre, checkImg, checkCategorie) : formError('Il manque quelque chose à votre formulaire.');
        

        // Fonction pour clean la div msgErrorUpload
        function clearMsgRefuse() {
            msgRefuse.textContent = '';
        }

        // On efface le message au bout de 3 secondes
        setTimeout(clearMsgRefuse, 3000);
        
}


// Fonction pour afficher une erreur dans le formulaire
function formError(msg) {
    // On affiche un message d'erreur
    formulaire = document.querySelector("#formulaire");
    test = document.querySelector("#buttonUpload");
    msgRefuse = document.createElement('div');
    msgRefuse.setAttribute('id', 'msgErrorUpload');
    msgRefuse.textContent = msg;
    formulaire.insertBefore(msgRefuse, test);
}







function addNewProjectApply(title, imageUrl, categoryId) {
    let userToken = sessionStorage.getItem('token');

    // On récupère l'image choisie
    let imageFile = document.getElementById('img-file').files[0];    

                // application dans l'api
                // fetch("http://localhost:5678/api/works", {
                //     method: 'POST',
                //     headers: {
                //         'Accept': 'application/json', 
                //         'Content-Type': 'application/json',
                //         'Authorization': `Bearer ${userToken}`
                //     },
                //     body: JSON.stringify({
                //         title: title,
                //         image: imageFile,
                //         category: categoryId
                //     })
                //     })
                //     .then(function(value){
                //         // rien à ajouter
                //     })
                //     .catch(function(err) {
                //         // message d'erreur
                //         console.log(err);
                //     })
                //     alert('Envoyé!');

        // On vérifie l'extension de l'image
                imageFile.type == 'image/png' || imageFile.type == 'image/jpeg' || imageFile.type == 'image/jpg' ? formError('Formulaire Valide') : formError("Le format de votre image n'est pas valide.");
        // On vérifie le poids de l'image
                imageFile.size <= 4000000 ? "" : formError("L'image dépasse la taille maximum autorisée.");

                    console.log(title, "\n", imageFile, "\n", categoryId);

} // fin de fonction