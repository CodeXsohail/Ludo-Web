
var diceContainer;
var diceContainerNext;
var dicePosition = 1;
var tmpDiceElement;

var initGreen = false, initYellow = false, initBlue = false, initRed = false;

var pawnGReleased = [false, false, false, false];

var pawnYReleased = [false, false, false, false];

var pawnBReleased = [false, false, false, false];

var pawnRReleased = [false, false, false, false];

let main = document.querySelector("main");

//layout switcher for mobile/tab/desktop

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

//game functionalities

function selectPlayer() {

    if (dicePosition == 1) {
        diceContainer = document.querySelector(".md1");
        diceContainerNext = document.querySelector(".md2");
        // dicePosition++;
    }
    else if (dicePosition == 2) {
        diceContainer = document.querySelector(".md2");
        diceContainerNext = document.querySelector(".md3");
        // dicePosition++;
    }
    else if (dicePosition == 3) {
        diceContainer = document.querySelector(".md3");
        diceContainerNext = document.querySelector(".md4");
        // dicePosition++;
    }
    else {
        diceContainer = document.querySelector(".md4");
        diceContainerNext = document.querySelector(".md1");
        // dicePosition = 1;
    }
}

function shiftDice() {
    diceContainer.childNodes[0].remove();
    tmpDiceElement.classList.remove("dice-displace");
    diceContainerNext.appendChild(tmpDiceElement);
}

document.querySelector('.md1').addEventListener('click', suffleDice);

function diceMoveThenShift(luckyValue) {
    if (dicePosition == 1) {
        if (initGreen == true) {
            //movements lines

            setTimeout(shiftDice, 1000);
            dicePosition++;
            document.querySelector('.md1').removeEventListener('click', suffleDice);
            document.querySelector('.md2').addEventListener('click', suffleDice);
        }
        else {
            if (luckyValue == 6) {
                initGreen = true;
                let pawng = document.querySelectorAll(".pawn-g");
                pawng.forEach((pawn) => {
                    pawn.classList.add("pawn-blink-g");
                    pawn.addEventListener("click", (clicked) => {
                        clicked.target.style.position = "relative";
                        clicked.target.remove();
                        document.querySelector('.g-shell6').appendChild(clicked.target);

                        pawng.forEach((pawns) => {
                            pawns.classList.remove("pawn-blink-g");
                        });
                    });
                });
            }
            setTimeout(shiftDice, 1000);
            dicePosition++;
            document.querySelector('.md1').removeEventListener('click', suffleDice);
            document.querySelector('.md2').addEventListener('click', suffleDice);
        }
    }
    else if (dicePosition == 2) {
        if (initYellow == true) {
            //movements lines

            setTimeout(shiftDice, 1000);
            dicePosition++;
            document.querySelector('.md2').removeEventListener('click', suffleDice);
            document.querySelector('.md3').addEventListener('click', suffleDice);
        }
        else {
            if (luckyValue == 6) {
                initYellow = true;
                let pawny = document.querySelectorAll(".pawn-y");
                pawny.forEach((pawn) => {
                    pawn.classList.add("pawn-blink-y");
                    pawn.addEventListener("click", (clicked) => {
                        clicked.target.style.position = "relative";
                        clicked.target.remove();
                        document.querySelector('.y-shell6').appendChild(clicked.target);

                        pawny.forEach((pawns) => {
                            pawns.classList.remove("pawn-blink-y");
                        });
                    });
                });
            }
            setTimeout(shiftDice, 1000);
            dicePosition++;
            document.querySelector('.md2').removeEventListener('click', suffleDice);
            document.querySelector('.md3').addEventListener('click', suffleDice);
        }
    }
    else if (dicePosition == 3) {
        if (initBlue == true) {
            //movements lines

            setTimeout(shiftDice, 1000);
            dicePosition++;
            document.querySelector('.md3').removeEventListener('click', suffleDice);
            document.querySelector('.md4').addEventListener('click', suffleDice);
        }
        else {
            if (luckyValue == 6) {
                initBlue = true;
                let pawnb = document.querySelectorAll(".pawn-b");
                pawnb.forEach((pawn) => {
                    pawn.classList.add("pawn-blink-b");
                    pawn.addEventListener("click", (clicked) => {
                        clicked.target.style.position = "relative";
                        clicked.target.remove();
                        document.querySelector('.b-shell6').appendChild(clicked.target);

                        pawnb.forEach((pawns) => {
                            pawns.classList.remove("pawn-blink-b");
                        });
                    });
                });
            }
            setTimeout(shiftDice, 1000);
            dicePosition++;
            document.querySelector('.md3').removeEventListener('click', suffleDice);
            document.querySelector('.md4').addEventListener('click', suffleDice);
        }
    }
    else if (dicePosition == 4) {
        if (initRed == true) {
            //movements lines

            setTimeout(shiftDice, 1000);
            dicePosition = 1;
        }
        else {
            if (luckyValue == 6) {
                initBlue = true;
                let pawnr = document.querySelectorAll(".pawn-r");
                pawnr.forEach((pawn) => {
                    pawn.classList.add("pawn-blink-r");
                    pawn.addEventListener("click", (clicked) => {
                        clicked.target.style.position = "relative";
                        clicked.target.remove();
                        document.querySelector('.r-shell6').appendChild(clicked.target);

                        pawnr.forEach((pawns) => {
                            pawns.classList.remove("pawn-blink-r");
                        });
                    });
                });
            }
            setTimeout(shiftDice, 1000);
            dicePosition = 1;
        }
        document.querySelector('.md4').removeEventListener('click', suffleDice);
        document.querySelector('.md1').addEventListener('click', suffleDice);
    }
}

function suffleDice() {
    let res = Math.floor(Math.random() * 6 + 1);
    selectPlayer();
    diceContainer.childNodes[0].remove();
    if (res == 1) {
        tmpDiceElement = document.createElement("i");
        tmpDiceElement.classList.add("fa-solid");
        tmpDiceElement.classList.add("fa-dice-one");
        tmpDiceElement.classList.add("dice-displace");
        diceContainer.appendChild(tmpDiceElement);
        setTimeout(() => {
            tmpDiceElement.style.top = "0px";
        }, 200);

        diceMoveThenShift();
    }
    else if (res == 2) {
        tmpDiceElement = document.createElement("i");
        tmpDiceElement.classList.add("fa-solid");
        tmpDiceElement.classList.add("fa-dice-two");
        tmpDiceElement.classList.add("dice-displace");
        diceContainer.appendChild(tmpDiceElement);
        setTimeout(() => {
            tmpDiceElement.style.top = "0px";
        }, 200);
        diceMoveThenShift();
    }
    else if (res == 3) {
        tmpDiceElement = document.createElement("i");
        tmpDiceElement.classList.add("fa-solid");
        tmpDiceElement.classList.add("fa-dice-three");
        tmpDiceElement.classList.add("dice-displace");
        diceContainer.appendChild(tmpDiceElement);
        setTimeout(() => {
            tmpDiceElement.style.top = "0px";
        }, 200);
        diceMoveThenShift();
    }
    else if (res == 4) {
        tmpDiceElement = document.createElement("i");
        tmpDiceElement.classList.add("fa-solid");
        tmpDiceElement.classList.add("fa-dice-four");
        tmpDiceElement.classList.add("dice-displace");
        diceContainer.appendChild(tmpDiceElement);
        setTimeout(() => {
            tmpDiceElement.style.top = "0px";
        }, 200);
        diceMoveThenShift();
    }
    else if (res == 5) {
        tmpDiceElement = document.createElement("i");
        tmpDiceElement.classList.add("fa-solid");
        tmpDiceElement.classList.add("fa-dice-five");
        tmpDiceElement.classList.add("dice-displace");
        diceContainer.appendChild(tmpDiceElement);
        setTimeout(() => {
            tmpDiceElement.style.top = "0px";
        }, 200);
        diceMoveThenShift();
    }
    else {
        tmpDiceElement = document.createElement("i");
        tmpDiceElement.classList.add("fa-solid");
        tmpDiceElement.classList.add("fa-dice-six");
        tmpDiceElement.classList.add("dice-displace");
        diceContainer.appendChild(tmpDiceElement);
        setTimeout(() => {
            tmpDiceElement.style.top = "0px";
        }, 200);


        diceMoveThenShift(res);
    }
}

