document.body.style.backgroundColor = "#FFFEF8";
document.body.style.maxWidth = "1440px";

const mainBox = document.querySelector("main");
mainBox.style.display = "flex";
mainBox.style.flexDirection = "column";

const mainLink = document.querySelector("main a");
mainLink.style.display = "flex";
mainLink.style.justifyContent = "center";
mainLink.style.color = "black";

// Correction du Logo
const erreurTitre = document.querySelector("header span");
erreurTitre.style.margin = "5px 0 0 0";
erreurTitre.style.fontSize = "10px";
erreurTitre.style.fontWeight = "400";


const loginGo = document.querySelectorAll("nav ul li");
loginGo[2].style.fontWeight = "bold";

const imgHeader = document.querySelector("header img");
imgHeader.style.width = "20px";

const formLog = document.querySelector("form");
formLog.style.alignItems = "center";

const inputTxt = document.querySelectorAll("input");
inputTxt[0].style.width = "379px";
inputTxt[1].style.width = "379px";

const inputSubmit = document.querySelector("input[type='submit']");
inputSubmit.style.width = "179px";
inputSubmit.style.height = "36px";
inputSubmit.style.fontSize = "14px";
inputSubmit.style.fontWeight = "700";

let footerWork = document.querySelector("footer");
footerWork.style.cssText = `
position: absolute;
background-color: white;
height: 60px;
width: 100%;
bottom: 0;
left: 0;`;












function logIn(email,password) {
    fetch("http://localhost:5678/api/users/login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: email,
                password: password
            }
        )
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(value){
        console.log(value);
        // vérification
        // localStorage
    })
    .catch(function(err) {
        // message d'erreur
        console.log(err);
    })
};



// on pick le bouton de connexion et on affecte une fonction anonyme d'envoi de données
const loginBtn = document.querySelector('input[type="submit"]');
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let userEmail = document.querySelector('#email').value;
    let userPassword = document.querySelector('#password').value;
    console.log(userEmail+"/"+userPassword);
    logIn(userEmail,userPassword);
});



