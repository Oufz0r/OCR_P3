
// Appel des catégories de l'api et création des boutons de filtre
fetch("http://localhost:5678/api/categories")
.then(function(res) {
    return res.json();
})
.then(function(value) {
    const entries = value.length;
    
    for(let n = 0; n < entries; n++)
    {
        let cateName = value[n].name;
        let categorieId = value[n].id;
        newBouton(cateName, categorieId, categorieOnClick);
    }
})
.catch(function(err) {
    console.log(err);
});





// Fonction pour la création des boutons (input:submit) de catégories
function newBouton(btnName, categorieId, categorieOnClick) {
    let newBtn = document.createElement("input");
    newBtn.setAttribute("type", "submit");
    newBtn.setAttribute("value", btnName);
    newBtn.setAttribute("class", "removeAtEdit");
    newBtn.setAttribute("data-categorie-id", categorieId);
    newBtn.setAttribute('data-on', '0');

    newBtn.addEventListener('click', categorieOnClick);
    let currentForm = document.querySelector("#formBtn");
    currentForm.appendChild(newBtn);

    newBtn.addEventListener('mouseover', function(e) {
        let buttonsDataOn = newBtn.getAttribute('data-on');
        e.target.style.backgroundColor = "#1D6154";
        e.target.style.color = "white";
    });
    newBtn.addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = "#FFFEF8";
        e.target.style.color = "#1D6154";
    });
}



// Le bouton Tous
newBouton('Tous', '', categorieOnClick);





// Filtre des projets par catégorie
function categorieOnClick(e) {
    e.preventDefault();
    let categorieDataId = e.target.getAttribute("data-categorie-id");
    // console.log(e.target);
    // console.log(categorieDataId);
    loadGallery(categorieDataId);
    // works
}



// Garder le bouton cliqué en vert
    // On reset les boutons
    // buttons[n].setAttribute('data-on', '0');
    // buttons[n].style.backgroundColor = "#FFFEF8";
    // buttons[n].style.color = "#1D6154";
    // console.log('lol');
    // On affecte data-on sur 1 au bouton cliqué
    // buttons[n].addEventListener('click', (e) => {
    //     e.target.setAttribute('data-on', '1');
    //     e.target.style.backgroundColor = "#1D6154";
    //     e.target.style.color = "white";
    //     console.log('lol2');
    // });
// }