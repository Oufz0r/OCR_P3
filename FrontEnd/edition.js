
function newFigureMini(imgId, imgUrl, imgTitle) {
    let newFig = document.createElement("figure");
        modalGalerie.appendChild(newFig);
        newFig.setAttribute("class", "projets");
        newFig.style.cssText = `
        margin: 5px;
        position: relative;`;
    let newImg = document.createElement("img");
        newImg.crossOrigin = "anonymous";
        newImg.style.width = '80px';
        newFig.appendChild(newImg);
    let TrashIcon = document.createElement("span");
        newFig.appendChild(TrashIcon);
        TrashIcon.setAttribute("data-del-id", imgId);
        TrashIcon.innerHTML = '<i class="fa-solid fa-trash-can" data-del-id='+imgId+'></i>';
        TrashIcon.style.cssText = `
        position: absolute;
        right: 5px;
        top: 5px;
        width: 17px;
        height: 17px;
        color: white;
        font-size: 10px;
        background: black;
        line-height: 17px;
        border-radius: 3px;
    `;
    let newFigCap = document.createElement("figcaption");
        newFig.appendChild(newFigCap);

    // Application du src et alt
    newImg.setAttribute("src", imgUrl);
    newImg.setAttribute("alt", imgTitle);

    newFigCap.innerHTML += "<span>éditer</span>";
    newFigCap.style.cssText = `
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    margin-top: -3px;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
`;


function deleteImg(e) {
    let id = e.target.getAttribute("data-del-id");
};

TrashIcon.addEventListener('click', deleteImg);


moveIcon = document.createElement("span");
        let projetsAll = document.getElementsByClassName("projets");
        let firstFigure = projetsAll[0];
        firstFigure.appendChild(moveIcon);
            // moveIcon.setAttribute("data-move-id", imgId);
            moveIcon.innerHTML = '<i class="fa-solid fa-arrows-up-down-left-right" data-move-id='+imgId+'></i>';
            moveIcon.style.cssText = `
            position: absolute;
            right: 25px;
            top: 5px;
            width: 17px;
            height: 17px;
            color: white;
            font-size: 12px;
            background: black;
            line-height: 18px;
            border-radius: 3px;
            `;
            

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













// Création de la div contenant la modal
const modalBox = document.createElement("div");
// mainBox.appendChild(modalBox);
htmlBox.insertBefore(modalBox, bodyBox);
modalBox.setAttribute("id", "modalBox");
modalBox.addEventListener('click', function(){
    closeModal();
});
// display none de base, flex pour voir
modalBox.style.cssText = `
position: fixed;
display: none;
justify-content: center;
top: 0;
left: 0;
color: red;
background: rgba(0, 0, 0, 0.3);
width: 100%;
height: 100%;
z-index: 1;`; // display none

// Création de la modal
const modal = document.createElement("div");
modalBox.appendChild(modal);
modal.setAttribute("id", "modal");
modal.addEventListener('click', function(e){
    e.stopPropagation();
});
modal.style.cssText = `
    position: fixed;
    z-index: 1;
    border-radius: 10px;
    color: black;
    background: white;
    width: 630px;
    height: 731px;
    margin: 150px auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`; // none

// contenu de la modal
const modalCross = document.createElement("span");
const modalTitre = document.createElement("h2");
const modalGalerie = document.createElement("div");
const modalBar = document.createElement("hr");
const modalAddDel = document.createElement("div");
const modalAdd = document.createElement("input");
modalAdd.setAttribute("type", "submit");
modalAdd.setAttribute("value", "Ajouter une photo");
modal.appendChild(modalCross);
modal.appendChild(modalTitre);
modal.appendChild(modalGalerie);
modal.appendChild(modalBar);
modal.appendChild(modalAddDel);
modalAddDel.appendChild(modalAdd);
// modal Cross close
modalCross.innerHTML += '<i class="fa-solid fa-xmark"></i>';
modalCross.addEventListener('click', closeModal);
modalCross.style.cssText = `
position: absolute;
width: 15px;
height: 15px;
top: 35px;
right: 35px;
color: black;
`;
// modal Titre h2
modalTitre.innerHTML += "Galerie photo";
// affichage de la galerie
modalGalerie.style.cssText = `
display: flex;
flex-flow: row wrap;
margin: 30px 90px;
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
    padding: 0px 50px 0px 50px;
    width: 237px;
    height: 37px;
    border: none;
    background: #1D6154;
    color: white;
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    font-family: 'Syne';
`;
// text supprimer la galerie
modalAddDel.innerHTML += "Supprimer la galerie";





