fetch("http://localhost:5678/api/works")
.then(function(res) {
    if(res.ok) {
        return res.json();
    }
});

document.body.style.backgroundColor = "#FFFEF8";

// Correction du Logo
const erreurTitre = document.querySelector("header span");
erreurTitre.style.margin = "5px 0 0 0";
erreurTitre.style.fontSize = "10px";
erreurTitre.style.fontWeight = "400";



// Redirection de login vers login.html
const loginGo = document.querySelectorAll("nav ul li");
loginGo[2].innerHTML = "<a href=\"login.html\">login</a>";