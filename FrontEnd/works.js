

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



// Le bouton Tous
newBouton('Tous', '', categorieOnClick);



// Fonction pour la création des boutons (input:submit) de catégories
function newBouton(btnName, categorieId, categorieOnClick) {
    let newBtn = document.createElement("input");
    newBtn.setAttribute("type", "submit");
    newBtn.setAttribute("value", btnName);
    newBtn.setAttribute("class", "removeAtEdit");
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




// Filtre des projets par catégorie
function categorieOnClick(e) {
    e.preventDefault();
    let categorieDataId = e.target.getAttribute("data-categorie-id");
    // console.log(e.target);
    console.log(categorieDataId);
    loadGallery(categorieDataId);
    // works
};