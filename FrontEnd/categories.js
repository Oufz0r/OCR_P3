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




