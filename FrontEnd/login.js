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
footerWork.setAttribute('class', 'foot-rework');





let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#password');

let msgLogDiv = document.querySelector('#msgdiv');
msgLogDiv.style.marginTop = "20px";
msgLogDiv.style.color = "darkred";




// mise en storage du token
function storeTkn(id, token) {
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("token", token);
    // alert(id+"/"+token);
    window.location.href = "index.html";
};




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
        let msgLog = "";
        let userId = value.id;
        let userToken = value.token;
        userId !== null && userToken != null ? storeTkn(userId, userToken) : msgLog = "Erreur dans l’identifiant ou le mot de passe";
        msgLogDiv.innerHTML += msgLog;
        // vérification
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
    msgLogDiv.innerHTML = "";
    let userEmail = document.querySelector('#email').value;
    let userPassword = document.querySelector('#password').value;
    // console.log(userEmail+"/"+userPassword);
    logIn(userEmail,userPassword);
});



// Au click dans un des deux input de login on clean la div de message d'erreur
inputEmail.addEventListener('click', () => {
    msgLogDiv.innerHTML = '';
});

inputPassword.addEventListener('click', () => {
    msgLogDiv.innerHTML = '';
});