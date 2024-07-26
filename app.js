
var diceContainer;
var diceContainerNext;
var dicePosition = 1;
var tmpDiceElement;
var luckyValue = 0;
var token = {
    green: {
        first: {
            position: -2
        },
        second: {
            position: -2
        },
        third: {
            position: -2
        },
        fourth: {
            position: -2
        }
    },
    yellow: {
        first: {
            position: -2
        },
        second: {
            position: -2
        },
        third: {
            position: -2
        },
        fourth: {
            position: -2
        }
    },
    blue: {
        first: {
            position: -2
        },
        second: {
            position: -2
        },
        third: {
            position: -2
        },
        fourth: {
            position: -2
        }
    },
    red: {
        first: {
            position: -2
        },
        second: {
            position: -2
        },
        third: {
            position: -2
        },
        fourth: {
            position: -2
        }
    }
};

//default state of pawns which is not released from home

var initGreen = false, initYellow = false, initBlue = false, initRed = false;



//layout switcher for mobile/tab/desktop

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

function savePosition(player,tokenNumber,value,replace = false) {
    if (replace == true) {
        if (player == 'g') {
            if (tokenNumber == "token-g1") {
                token.green.first.position = value;
            }
            else if (tokenNumber == "token-g2") {
                token.green.second.position = value;
            }
            else if (tokenNumber == "token-g3") {
                token.green.third.position = value;
            }
            else if (tokenNumber == "token-g4") {
                token.green.fourth.position = value;
            }
        }
    
        if (player == 'y') {
            if (tokenNumber == "token-y1") {
                token.yellow.first.position = value;
            }
            else if (tokenNumber == "token-y2") {
                token.yellow.second.position = value;
            }
            else if (tokenNumber == "token-y3") {
                token.yellow.third.position = value;
            }
            else if (tokenNumber == "token-y4") {
                token.yellow.fourth.position = value;
            }
        }
    
        if (player == 'b') {
            if (tokenNumber == "token-b1") {
                token.blue.first.position = value;
            }
            else if (tokenNumber == "token-b2") {
                token.blue.second.position = value;
            }
            else if (tokenNumber == "token-b3") {
                token.blue.third.position = value;
            }
            else if (tokenNumber == "token-b4") {
                token.blue.fourth.position = value;
            }
        }
    
        if (player == 'r') {
            if (tokenNumber == "token-r1") {
                token.red.first.position = value;
            }
            else if (tokenNumber == "token-r2") {
                token.red.second.position = value;
            }
            else if (tokenNumber == "token-r3") {
                token.red.third.position = value;
            }
            else if (tokenNumber == "token-r4") {
                token.red.fourth.position = value;
            }
        }
    } else {
        if (player == 'g') {
            if (tokenNumber == "token-g1") {
                token.green.first.position += value;
                return token.green.first.position;
            }
            else if (tokenNumber == "token-g2") {
                token.green.second.position += value;
                return token.green.second.position;
            }
            else if (tokenNumber == "token-g3") {
                token.green.third.position += value;
                return token.green.third.position
            }
            else if (tokenNumber == "token-g4") {
                token.green.fourth.position += value;
                return token.green.fourth.position;
            }
        }
    
        if (player == 'y') {
            if (tokenNumber == "token-y1") {
                token.yellow.first.position += value;
                return token.yellow.first.position;
            }
            else if (tokenNumber == "token-y2") {
                token.yellow.second.position += value;
                return token.yellow.second.position;
            }
            else if (tokenNumber == "token-y3") {
                token.yellow.third.position += value;
                return token.yellow.third.position;
            }
            else if (tokenNumber == "token-y4") {
                token.yellow.fourth.position += value;
                return token.yellow.fourth.position;
            }
        }
    
        if (player == 'b') {
            if (tokenNumber == "token-b1") {
                token.blue.first.position += value;
                return token.blue.first.position;
            }
            else if (tokenNumber == "token-b2") {
                token.blue.second.position += value;
                return token.blue.second.position;
            }
            else if (tokenNumber == "token-b3") {
                token.blue.third.position += value;
                return token.blue.third.position;
            }
            else if (tokenNumber == "token-b4") {
                token.blue.fourth.position += value;
                return token.blue.fourth.position;
            }
        }
    
        if (player == 'r') {
            if (tokenNumber == "token-r1") {
                token.red.first.position += value;
                return token.red.first.position;
            }
            else if (tokenNumber == "token-r2") {
                token.red.second.position += value;
                return token.red.second.position;
            }
            else if (tokenNumber == "token-r3") {
                token.red.third.position += value;
                return token.red.third.position;
            }
            else if (tokenNumber == "token-r4") {
                token.red.fourth.position += value;
                return token.red.fourth.position;
            }
        }
    }
    

}


function initPawnBySix(player) {
    let pawns = document.querySelectorAll(`.pawn-${player}`);

    function handleClick(event) {
        const clicked = event.target;
        let onState;
        let offState;
        let checkState;
        let tokenNumber;
        
        clicked.style.position = "relative";
        clicked.remove();

        //when pawn is released
        checkState = Array.from(clicked.classList).find(cls => cls.startsWith(`pawn-${player}`) && cls.endsWith('-on'));
        if (checkState) {
            tokenNumber = Array.from(clicked.classList).find(cls => cls.startsWith(`token-${player}`));
            let newPosition = savePosition(player,tokenNumber,6);
            console.log(newPosition);
            document.querySelector(`.${player}-shell${newPosition}`).appendChild(clicked);
            console.log(checkState);
        }

        //when pawn is not released
        offState = Array.from(clicked.classList).find(cls => cls.startsWith(`pawn-${player}`) && cls.endsWith('-off'));
        if (offState) {
            onState = offState.replace("off", "on");
            clicked.classList.remove(offState);
            clicked.classList.add(onState);
            // clicked.classList.add(`p-${player}`);
            console.log(offState, onState);
            document.querySelector(`.${player}-shell0`).appendChild(clicked);
            tokenNumber = Array.from(clicked.classList).find(cls => cls.startsWith(`token-${player}`));
            savePosition(player,tokenNumber,0,true);
        }
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



function diceMoveThenShift() {
    if (dicePosition == 1) {
        if (initGreen == true) {
            //movements lines
            if (luckyValue == 6) {
                initPawnBySix('g');
            }
            else {
                shiftDice(2);
            }


            // shiftDice(2);

        }
        else {
            if (luckyValue == 6) {
                initGreen = true;
                initPawnBySix('g');
            } else {
                shiftDice(2);
            }

            // shiftDice(2);
        }
    }
    else if (dicePosition == 2) {
        if (initYellow == true) {
            //movements lines
            if (luckyValue == 6) {
                initPawnBySix('y');
            }
            else {
                shiftDice(3);
            }

           
        }
        else {
            if (luckyValue == 6) {
                initYellow = true;
                initPawnBySix('y');
            } else {
                shiftDice(3);
            }

           
        }
    }
    else if (dicePosition == 3) {
        if (initBlue == true) {
            //movements lines
            if (luckyValue == 6) {
                initPawnBySix('b');
            } else {
                shiftDice(4);
            }

            
        }
        else {
            if (luckyValue == 6) {
                initBlue = true;
                initPawnBySix('b');
            } else {
                shiftDice(4);
            }

           
        }
    }
    else if (dicePosition == 4) {
        if (initRed == true) {
            //movements lines

            if (luckyValue == 6) {
                initPawnBySix('r');
            } else {
                shiftDice(1);
            }
           
        }
        else {
            if (luckyValue == 6) {
                initRed = true;
                initPawnBySix('r');
            } else {
                shiftDice(1);
            }

          
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
        luckyValue = 1;
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
        luckyValue = 2;
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
        luckyValue = 3;
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
        luckyValue = 4;
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
        luckyValue = 5;
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
        luckyValue = 6;
        diceMoveThenShift(res);
    }
}

