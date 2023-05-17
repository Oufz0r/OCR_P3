

// utiliser newGalerie comme container


// Fonction pour créer une figure pour un projet du portfolio
function newFigure(imgUrl, imgTitle, imgId) {
    let newFig = document.createElement("figure");
        newGalerie.appendChild(newFig);
        newFig.setAttribute('data-id', imgId);
    newImg = document.createElement("img");
        newImg.crossOrigin = "anonymous";
        newFig.appendChild(newImg);
    newFigCap = document.createElement("figcaption");
        newFig.appendChild(newFigCap);

    // Application du src et alt
    newImg.setAttribute("src", imgUrl);
    newImg.setAttribute("alt", imgTitle);

    newFigCap.innerHTML += imgTitle;
    newFigCap.setAttribute('data-id', imgId);
    newFigCap.style.cssText = `font-size: 13px; font-weight: 400;`;
}





// Fonction pour charger tous les projets du portfolio
function loadGallery(categorieId) {
    fetch("/api/works")
    .then(function(res) {
        return res.json();
    })
    .then(function(value) {
        const entries = value.length;
        // clean la gallery
        newGalerie.innerHTML = "";
        for(let n = 0; n < entries; n++)
        {
            let imgId = value[n].id;
            let imgUrl = value[n].imageUrl;
            let imgName = value[n].title;
            let imgCatId = value[n].category.id;
            // Faire correspondre l'id du bouton (categorieId) et l'id du/des projet(s) (imgCatId)
            categorieId == imgCatId || !categorieId ? newFigure(imgUrl, imgName, imgId) : "";
        }
    })
    .catch(function(err) {
        console.log(err);
    });
}






// Affichage de la galerie au chargement de la page
window.onload = function(){
    loadGallery();
}





