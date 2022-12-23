

// utiliser newGalerie comme container


// Fonction pour créer une figure
function newFigure(imgUrl, imgTitle) {
    let newFig = document.createElement("figure");
        newGalerie.appendChild(newFig);
    newImg = document.createElement("img");
        newImg.crossOrigin = "anonymous";
        newFig.appendChild(newImg);
    newFigCap = document.createElement("figcaption");
        newFig.appendChild(newFigCap);

    // Application du src et alt
    newImg.setAttribute("src", imgUrl);
    newImg.setAttribute("alt", imgTitle);

    newFigCap.innerHTML += imgTitle;
    newFigCap.style.cssText = `font-size: 13px; font-weight: 400;`;
};






function loadGallery(categorieId) {
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
            let imgUrl = value[n].imageUrl;
            let imgName = value[n].title;
            let imgCatId = value[n].category.id;
            categorieId == imgCatId || !categorieId ? newFigure(imgUrl, imgName) : "";
        }
    })
    .catch(function(err) {
        console.log(err);
    });
};


