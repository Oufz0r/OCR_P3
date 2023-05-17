
// Appel des catégories de l'api et création des boutons de filtre
fetch("/api/categories")
.then(function(res) {
    return res.json();
})
.then(function(value) {
    const entries = value.length;
    
    for(let n = 0; n < entries; n++)
    {
        let cateName = value[n].name;
        let categorieId = value[n].id;
        newBouton(cateName, categorieId, categorieOnClick, '');
    }
})
.catch(function(err) {
    console.log(err);
});





// Fonction pour la création des boutons (input:submit) de catégories
function newBouton(btnName, categorieId, categorieOnClick, def) {
    let newBtn = document.createElement("input");
    newBtn.setAttribute("type", "submit");
    newBtn.setAttribute("value", btnName);
    newBtn.setAttribute("class", "removeAtEdit");
    newBtn.setAttribute("data-categorie-id", categorieId);

    // Pour le bouton de catégorie par défaut (Tous) on applique le format couleur
    def != '' ? (
        newBtn.style.backgroundColor = "#1D6154",
        newBtn.style.color = "white"
    )
    : '';

    newBtn.addEventListener('click', categorieOnClick);
    let currentForm = document.querySelector("#formBtn");
    currentForm.appendChild(newBtn);

    newBtn.addEventListener("mouseover", (e) => {
        e.target.style.cursor  = "pointer";
    });

    // newBtn.addEventListener('mouseover', function(e) {
    //     e.target.style.backgroundColor = "#1D6154";
    //     e.target.style.color = "white";
    // });
    // newBtn.addEventListener('mouseout', function(e) {
    //     e.target.style.backgroundColor = "#FFFEF8";
    //     e.target.style.color = "#1D6154";
    // });
}



// Le bouton Tous
newBouton('Tous', '', categorieOnClick, 'default');



// let activeBtn = '';

// Filtre des projets par catégorie
function categorieOnClick(e) {
    e.preventDefault();
    // on reset les couleurs des boutons
    resetBtnColor();
    // on applique le format au bouton actif
    e.target.style.backgroundColor = "#1D6154";
    e.target.style.color = "white";
    let categorieDataId = e.target.getAttribute("data-categorie-id");
    // activeBtn = categorieDataId;
    // activeBtn != '' ? {} : '';
    // console.log(e.target);
    // console.log(categorieDataId);
    loadGallery(categorieDataId);
    // works
}


function resetBtnColor() {
    let allBtn = document.querySelectorAll(".removeAtEdit");
    for(n=0; n < allBtn.length; n++) {
        allBtn[n].style.backgroundColor = "#FFFEF8";
        allBtn[n].style.color = "#1D6154";
    }
}




// // Garder le bouton cliqué en vert
//     // On reset les boutons
//     buttons[n].setAttribute('data-on', '0');
//     buttons[n].style.backgroundColor = "#FFFEF8";
//     buttons[n].style.color = "#1D6154";
//     console.log('lol');
//     // On affecte data-on sur 1 au bouton cliqué
//     buttons[n].addEventListener('click', (e) => {
//         e.target.setAttribute('data-on', '1');
//         e.target.style.backgroundColor = "#1D6154";
//         e.target.style.color = "white";
//         console.log('lol2');
//     });
// // }