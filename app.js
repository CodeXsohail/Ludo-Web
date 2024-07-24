
var diceContainer;
var dicePosition = 1;

var initGreen,initYellow,initBlue,initRed = false;



let main = document.querySelector("main");

function mobileSize() {
    if (window.innerWidth <= 630) {
        main.classList.remove("main-for-desktop");
        main.classList.add("main-for-phone");
    }

    else {
        main.classList.remove("main-for-phone");
        main.classList.add("main-for-desktop");
    }

}

window.addEventListener("resize", mobileSize);

mobileSize();






document.querySelector('.main-dice').addEventListener('click', suffleDice);




function selectPlayer() {

    if (dicePosition == 1) {
        diceContainer = document.querySelector(".md1");
        dicePosition++;
    }
    else if (dicePosition == 2) {
        diceContainer = document.querySelector(".md2");
        dicePosition++;
    }
    else if (dicePosition == 3) {
        diceContainer = document.querySelector(".md3");
        dicePosition++;
    }
    else
    {
        diceContainer = document.querySelector(".md4");
        dicePosition = 1;
    }
}



function suffleDice() {
    let randomValueIcon;
    let res = Math.floor(Math.random() * 6 + 1);
    selectPlayer();
    diceContainer.childNodes[0].remove();
    if (res == 1) {
        randomValueIcon = document.createElement("i");
        randomValueIcon.classList.add("fa-solid");
        randomValueIcon.classList.add("fa-dice-one");
        randomValueIcon.classList.add("dice-displace");
        diceContainer.appendChild(randomValueIcon);
        setTimeout(() => {
            randomValueIcon.style.top = "0px";
        },200);
        
    }
    else if (res == 2) {
        randomValueIcon = document.createElement("i");
        randomValueIcon.classList.add("fa-solid");
        randomValueIcon.classList.add("fa-dice-two");
        randomValueIcon.classList.add("dice-displace");
        diceContainer.appendChild(randomValueIcon);
        setTimeout(() => {
            randomValueIcon.style.top = "0px";
        },200);
    }
    else if (res == 3) {
        randomValueIcon = document.createElement("i");
        randomValueIcon.classList.add("fa-solid");
        randomValueIcon.classList.add("fa-dice-three");
        randomValueIcon.classList.add("dice-displace");
        diceContainer.appendChild(randomValueIcon);
        setTimeout(() => {
            randomValueIcon.style.top = "0px";
        },200);
    }
    else if (res == 4) {
        randomValueIcon = document.createElement("i");
        randomValueIcon.classList.add("fa-solid");
        randomValueIcon.classList.add("fa-dice-four");
        randomValueIcon.classList.add("dice-displace");
        diceContainer.appendChild(randomValueIcon);
        setTimeout(() => {
            randomValueIcon.style.top = "0px";
        },200);
    }
    else if (res == 5) {
        randomValueIcon = document.createElement("i");
        randomValueIcon.classList.add("fa-solid");
        randomValueIcon.classList.add("fa-dice-five");
        randomValueIcon.classList.add("dice-displace");
        diceContainer.appendChild(randomValueIcon);
        setTimeout(() => {
            randomValueIcon.style.top = "0px";
        },200);
    }
    else
    {
        randomValueIcon = document.createElement("i");
        randomValueIcon.classList.add("fa-solid");
        randomValueIcon.classList.add("fa-dice-six");
        randomValueIcon.classList.add("dice-displace");
        diceContainer.appendChild(randomValueIcon);
        setTimeout(() => {
            randomValueIcon.style.top = "0px";
        },200);
    }
    

}

