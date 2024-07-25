
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

function shiftDice(playerNo) {
    if (playerNo == 1) {
        setTimeout(() => {
            diceContainer.childNodes[0].remove();
            tmpDiceElement.classList.remove("dice-displace");
            diceContainerNext.appendChild(tmpDiceElement);

            dicePosition = 1;
            document.querySelector(".md4").removeEventListener('click', suffleDice);
            document.querySelector(`.md${playerNo}`).addEventListener('click', suffleDice);

        }, 1000);
        // dicePosition = 1;
        // document.querySelector(".md4").removeEventListener('click', suffleDice);
        // document.querySelector(`.md${playerNo}`).addEventListener('click', suffleDice);
    }
    else {
        setTimeout(() => {
            diceContainer.childNodes[0].remove();
            tmpDiceElement.classList.remove("dice-displace");
            diceContainerNext.appendChild(tmpDiceElement);

            dicePosition++;
            document.querySelector(`.md${playerNo - 1}`).removeEventListener('click', suffleDice);
            document.querySelector(`.md${playerNo}`).addEventListener('click', suffleDice);

        }, 1000);
        // dicePosition++;
        // document.querySelector(`.md${playerNo - 1}`).removeEventListener('click', suffleDice);
        // document.querySelector(`.md${playerNo}`).addEventListener('click', suffleDice);
    }
}

document.querySelector('.md1').addEventListener('click', suffleDice);




function initPawnBySix(player) {
    let pawns = document.querySelectorAll(`.pawn-${player}`);
    
    function handleClick(event) {
        const clicked = event.target;
        clicked.style.position = "relative";
        clicked.remove();
        document.querySelector(`.${player}-shell6`).appendChild(clicked);

        let offState = Array.from(clicked.classList).find(cls => cls.startsWith(`pawn-${player}`) && cls.endsWith('-off'));
        
        let onState = offState.replace("off", "on");
        clicked.classList.remove(offState);
        clicked.classList.add(onState);


        console.log(offState, onState);
        pawns.forEach((pawn) => {
            pawn.classList.remove(`pawn-blink-${player}`);
            pawn.removeEventListener("click", handleClick); // Remove event listener
        });
    }

    pawns.forEach((pawn) => {
        pawn.classList.add(`pawn-blink-${player}`);
        pawn.addEventListener("click", handleClick);
    });

}



function diceMoveThenShift(luckyValue) {
    if (dicePosition == 1) {
        if (initGreen == true) {
            //movements lines
            if (luckyValue == 6) {
                initPawnBySix('g');
            }


            shiftDice(2);

        }
        else {
            if (luckyValue == 6) {
                initGreen = true;
                initPawnBySix('g');
            }

            shiftDice(2);
        }
    }
    else if (dicePosition == 2) {
        if (initYellow == true) {
            //movements lines


            shiftDice(3);
        }
        else {
            if (luckyValue == 6) {
                initYellow = true;
                initPawnBySix('y');
            }

            shiftDice(3);
        }
    }
    else if (dicePosition == 3) {
        if (initBlue == true) {
            //movements lines


            shiftDice(4);
        }
        else {
            if (luckyValue == 6) {
                initBlue = true;
                initPawnBySix('b');
            }

            shiftDice(4);
        }
    }
    else if (dicePosition == 4) {
        if (initRed == true) {
            //movements lines


            shiftDice(1);
        }
        else {
            if (luckyValue == 6) {
                initRed = true;
                initPawnBySix('r');
            }

            shiftDice(1);
        }
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

