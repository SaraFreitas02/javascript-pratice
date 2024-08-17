//Math
const numberChosen = document.getElementById("number-chosen"); 
let number = 0;

if (!numberChosen) {
    console.error("Missing elements!");
}

function addition() {
    number++;
    numberChosen.textContent = number; 
}

function subtraction() {
    number--; 
    numberChosen.textContent = number;  
}

//Language Switcher
let greeting = document.getElementById("greeting");

function english() {
    greeting.textContent = "Hello";
}

function portuguese() {
    greeting.textContent = "Olá";
}

//Language Selector
let language = document.getElementById("language");

let h1 = document.querySelector("#language-selector h1");

let p = document.querySelector("#language-selector p");

let button = document.querySelector("#language-selector button");

language.addEventListener('change',
    function languageChanger() {
        if (language.value === "en") {
            h1.textContent = "Store Name";
            p.textContent = "Product";
            button.textContent = "Buy Now";
        }
        else if (language.value === "pt") {
            h1.textContent = "Nome da Loja";
            p.textContent = "Produto";
            button.textContent = "Comprar Agora";
        }
    }
);

//Radio Button Message
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const message = document.getElementById("message");

const htmlMess = document.createElement("p");
htmlMess.textContent = "Basic... You are basic..."
const cssMess = document.createElement("p");
cssMess.textContent = "Ooooh... you like pretty things!";
const jsMess = document.createElement("p");
jsMess.textContent = "Aspiring programmer?"


if (!html || !css || !js || !message) {
    cosole.error("Missing Elements");
}

html.addEventListener('change', function htmlAlert() {
    if (html.checked === true) {
        if (!message.contains(htmlMess)) {
            message.appendChild(htmlMess);
        }
        if (message.contains(cssMess)) {
            message.removeChild(cssMess);
        }
        if (message.contains(jsMess)) {
            message.removeChild(jsMess);
        }
    }
});


css.addEventListener('change', function cssAlert() {
    if (css.checked === true) {
        if (!message.contains(cssMess)) {
            message.appendChild(cssMess);
        }
        if (message.contains(htmlMess)) {
            message.removeChild(htmlMess);
        }
        if (message.contains(jsMess)) {
            message.removeChild(jsMess);
        }
    }
});

js.addEventListener('change', function jsAlert() {
    if (js.checked === true) {
        if (!message.contains(jsMess)) {
            message.appendChild(jsMess);
        }
        if (message.contains(htmlMess)) {
            message.removeChild(htmlMess);
        }
        if (message.contains(cssMess)) {
            message.removeChild(cssMess);
        }
    }
});

//Number Generator
const guessedNum = document.getElementById("guessed-number");
const form = document.getElementById("form"); 
const chosen = document.getElementById("chosen");
const genNum = document.getElementById("gen-num");
const num = document.getElementById("number"); 
const mess = document.getElementById("message");

function generateNumber(){
 chosen.textContent = "You guessed: " + guessedNum.value;
 genNum.textContent = "Number Generated:"; 
 num.textContent = Math.ceil(Math.random()*10);
 if (guessedNum.value === num.textContent){
 mess.textContent = "You won!" 
} else {
 mess.textContent = "You lost... better luck next time!" 
};
 form.reset(); 
}