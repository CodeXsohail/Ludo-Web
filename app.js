
var diceContainer;
var diceContainerNext;
var dicePosition = 1;
var tmpDiceElement;
var luckyValue = 0;
var newChance = false;
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

var initGreen = 0, initYellow = 0, initBlue = 0, initRed = 0;



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
    }
    else if (dicePosition == 2) {
        diceContainer = document.querySelector(".md2");
        diceContainerNext = document.querySelector(".md3");
    }
    else if (dicePosition == 3) {
        diceContainer = document.querySelector(".md3");
        diceContainerNext = document.querySelector(".md4");
    }
    else {
        diceContainer = document.querySelector(".md4");
        diceContainerNext = document.querySelector(".md1");
    }
}

function shiftDice(playerNo) {
    if (playerNo == 1) {
        setTimeout(() => {
            diceContainer.childNodes[0].remove();
            tmpDiceElement.classList.remove("dice-displace");
            diceContainerNext.appendChild(tmpDiceElement);

            dicePosition = 1;
            // document.querySelector(".md4").removeEventListener('click', suffleDice);
            document.querySelector(`.md${playerNo}`).addEventListener('click', suffleDice);

        }, 1000);
    }
    else {
        setTimeout(() => {
            diceContainer.childNodes[0].remove();
            tmpDiceElement.classList.remove("dice-displace");
            diceContainerNext.appendChild(tmpDiceElement);

            dicePosition++;
            // document.querySelector(`.md${playerNo - 1}`).removeEventListener('click', suffleDice);
            document.querySelector(`.md${playerNo}`).addEventListener('click', suffleDice);

        }, 1000);
    }
}

function removeListener(playerNo) {
    if (playerNo == 1) {
        document.querySelector(".md4").removeEventListener('click', suffleDice);
    }
    else {
        document.querySelector(`.md${playerNo - 1}`).removeEventListener('click', suffleDice);
    }
}

function addListener(playerNo) {
    if (playerNo == 1) {
        document.querySelector(".md4").addEventListener('click', suffleDice);
    }
    else {
        document.querySelector(`.md${playerNo - 1}`).addEventListener('click', suffleDice);
    }
}

document.querySelector('.md1').addEventListener('click', suffleDice);

function savePosition(player, tokenNumber, value, replace = false) {
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

function NextPositionValidation(player) {

    let checkCode = [true, true, true, true]

    if (player == 'g') {
        if (token.green.first.position + luckyValue > 56) {
            checkCode[0] = false;
        }

        if (token.green.second.position + luckyValue > 56) {
            checkCode[1] = false;
        }

        if (token.green.third.position + luckyValue > 56) {
            checkCode[2] = false;
        }

        if (token.green.fourth.position + luckyValue > 56) {
            checkCode[3] = false;
        }


    } else if (player == 'y') {

        if (token.yellow.first.position + luckyValue > 56) {
            checkCode[0] = false;
        }

        if (token.yellow.second.position + luckyValue > 56) {
            checkCode[1] = false;
        }

        if (token.yellow.third.position + luckyValue > 56) {
            checkCode[2] = false;
        }

        if (token.yellow.fourth.position + luckyValue > 56) {
            checkCode[3] = false;
        }

    } else if (player == 'b') {

        if (token.blue.first.position + luckyValue > 56) {
            checkCode[0] = false;
        }

        if (token.blue.second.position + luckyValue > 56) {
            checkCode[1] = false;
        }

        if (token.blue.third.position + luckyValue > 56) {
            checkCode[2] = false;
        }

        if (token.blue.fourth.position + luckyValue > 56) {
            checkCode[3] = false;
        }

    } else if (player == 'r') {

        if (token.red.first.position + luckyValue > 56) {
            checkCode[0] = false;
        }

        if (token.red.second.position + luckyValue > 56) {
            checkCode[1] = false;
        }

        if (token.red.third.position + luckyValue > 56) {
            checkCode[2] = false;
        }

        if (token.red.fourth.position + luckyValue > 56) {
            checkCode[3] = false;
        }

    }

    return checkCode;

}

function tokenMove(player, nextPlayer) {

    let customArray = [];
    let pawns;
    let validationNo = [];
    if (luckyValue == 6) {
        // pawns = document.querySelectorAll(`.pawn-${player}`);
        validationNo = NextPositionValidation(player);
        if (validationNo[0]) {
            customArray.push(...document.querySelectorAll(`.${player}1-on`));
        }
        if (validationNo[1]) {
            customArray.push(...document.querySelectorAll(`.${player}2-on`));
        }
        if (validationNo[2]) {
            customArray.push(...document.querySelectorAll(`.${player}3-on`));
        }
        if (validationNo[3]) {
            customArray.push(...document.querySelectorAll(`.${player}4-on`));
        }

        let offPlayer = document.querySelectorAll(`.pawn-${player}`);

        // Iterate over each element in the NodeList
        offPlayer.forEach((element) => {
            const foundClass = Array.from(element.classList).find((cls) => cls.startsWith(`${player}`) && cls.endsWith('-off'));
            customArray.push(...document.querySelectorAll(`.${foundClass}`));
        });
        
        pawns = customArray;

    } else {
        
        validationNo = NextPositionValidation(player);
        if (validationNo[0]) {
            customArray.push(...document.querySelectorAll(`.${player}1-on`));
        }
        if (validationNo[1]) {
            customArray.push(...document.querySelectorAll(`.${player}2-on`));
        }
        if (validationNo[2]) {
            customArray.push(...document.querySelectorAll(`.${player}3-on`));
        }
        if (validationNo[3]) {
            customArray.push(...document.querySelectorAll(`.${player}4-on`));
        }
        pawns = customArray;
        // pawns = document.querySelectorAll(`.${player}1-on, .${player}2-on, .${player}3-on, .${player}4-on`);
        removeListener(nextPlayer);
        pawns.forEach((pawn) => {
            pawn.style.zIndex = "2";
        });
    }

    function handleClick(event) {
        const clicked = event.target;
        let onState;
        let offState;
        let checkState;
        let tokenNumber;

        clicked.style.position = "relative";
        clicked.remove();

        //when pawn is released
        checkState = Array.from(clicked.classList).find(cls => cls.startsWith(`${player}`) && cls.endsWith('-on'));
        if (checkState) {
            tokenNumber = Array.from(clicked.classList).find(cls => cls.startsWith(`token-${player}`));
            let newPosition = savePosition(player, tokenNumber, luckyValue);
            // console.log(`${tokenNumber} = ${newPosition}`);
            let currPosition = savePosition(player, tokenNumber, 0);
            // console.log(currPosition);

            if(currPosition != 56) {

            
            //collision handling
            let checkStamp = Array.from(document.querySelector(`.${player}-shell${newPosition}`).classList).find(cls => cls.startsWith('stamp'));
            if (checkStamp) {
                console.log('stamp found');
            } else {

                let shellChilds = document.querySelector(`.${player}-shell${newPosition}`).childNodes;
                let shellChild;
                for (shellChild of shellChilds) {
                    let selfPawn = Array.from(shellChild.classList).find(cls => cls.startsWith(`pawn-${player}`));
                    let arrow = Array.from(shellChild.classList).find(cls => cls.startsWith('fa-arrow'));
                    if (!selfPawn && !arrow) {
                        shellChild.remove();
                        let othersPawnColor = Array.from(shellChild.classList).find(cls => cls.startsWith('pawn-'));
                        if (othersPawnColor == 'pawn-g') {
                            initGreen--;

                            let parentCircle;
                            let currState = Array.from(shellChild.classList).find(cls => cls.startsWith('g') && cls.endsWith('-on'));
                            console.log(currState);
                            if (currState) {
                                let resetState = currState.replace("on", "off");
                                shellChild.classList.remove(currState);
                                shellChild.classList.add(resetState);
                                shellChild.style.position = "absolute";
                                if (currState == 'g1-on') {
                                    parentCircle = document.querySelector(".player-innercircle-g.circle1");
                                } else if (currState == 'g2-on') {
                                    parentCircle = document.querySelector(".player-innercircle-g.circle2");
                                } else if (currState == 'g3-on') {
                                    parentCircle = document.querySelector(".player-innercircle-g.circle3");
                                } else if (currState == 'g4-on') {
                                    parentCircle = document.querySelector(".player-innercircle-g.circle4");
                                }
                                console.dir(parentCircle);
                                parentCircle.appendChild(shellChild);
                                newChance = true;
                            }
                        }
                        else if (othersPawnColor == 'pawn-y') {
                            initYellow--;

                            let parentCircle;
                            let currState = Array.from(shellChild.classList).find(cls => cls.startsWith('y') && cls.endsWith('-on'));
                            console.log(currState);
                            if (currState) {
                                let resetState = currState.replace("on", "off");
                                shellChild.classList.remove(currState);
                                shellChild.classList.add(resetState);
                                shellChild.style.position = "absolute";
                                if (currState == 'y1-on') {
                                    parentCircle = document.querySelector(".player-innercircle-y.circle1");
                                } else if (currState == 'y2-on') {
                                    parentCircle = document.querySelector(".player-innercircle-y.circle2");
                                } else if (currState == 'y3-on') {
                                    parentCircle = document.querySelector(".player-innercircle-y.circle3");
                                } else if (currState == 'y4-on') {
                                    parentCircle = document.querySelector(".player-innercircle-y.circle4");
                                }
                                console.dir(parentCircle);
                                parentCircle.appendChild(shellChild);
                                newChance = true;
                            }
                        }
                        else if (othersPawnColor == 'pawn-b') {
                            initBlue--;

                            let parentCircle;
                            let currState = Array.from(shellChild.classList).find(cls => cls.startsWith('b') && cls.endsWith('-on'));
                            console.log(currState);
                            if (currState) {
                                let resetState = currState.replace("on", "off");
                                shellChild.classList.remove(currState);
                                shellChild.classList.add(resetState);
                                shellChild.style.position = "absolute";
                                if (currState == 'b1-on') {
                                    parentCircle = document.querySelector(".player-innercircle-b.circle1");
                                } else if (currState == 'b2-on') {
                                    parentCircle = document.querySelector(".player-innercircle-b.circle2");
                                } else if (currState == 'b3-on') {
                                    parentCircle = document.querySelector(".player-innercircle-b.circle3");
                                } else if (currState == 'b4-on') {
                                    parentCircle = document.querySelector(".player-innercircle-b.circle4");
                                }
                                console.dir(parentCircle);
                                parentCircle.appendChild(shellChild);
                                newChance = true;
                            }
                        }
                        else if (othersPawnColor == 'pawn-r') {
                            initRed--;

                            let parentCircle;
                            let currState = Array.from(shellChild.classList).find(cls => cls.startsWith('r') && cls.endsWith('-on'));
                            console.log(currState);
                            if (currState) {
                                let resetState = currState.replace("on", "off");
                                shellChild.classList.remove(currState);
                                shellChild.classList.add(resetState);
                                shellChild.style.position = "absolute";
                                if (currState == 'r1-on') {
                                    parentCircle = document.querySelector(".player-innercircle-r.circle1");
                                } else if (currState == 'r2-on') {
                                    parentCircle = document.querySelector(".player-innercircle-r.circle2");
                                } else if (currState == 'r3-on') {
                                    parentCircle = document.querySelector(".player-innercircle-r.circle3");
                                } else if (currState == 'r4-on') {
                                    parentCircle = document.querySelector(".player-innercircle-r.circle4");
                                }
                                console.dir(parentCircle);
                                parentCircle.appendChild(shellChild);
                                newChance = true;
                            }
                        }


                    }

                }

            }



            document.querySelector(`.${player}-shell${newPosition}`).appendChild(clicked);

        }
            if (luckyValue != 6) {
                if (newChance) {
                    addListener(nextPlayer);
                    newChance = false;
                } else {
                    shiftDice(nextPlayer);
                }
            } else {
                if(newChance) {
                    newChance = false;
                }
            }


        }



        //when pawn is not released
        if (luckyValue == 6) {
            offState = Array.from(clicked.classList).find(cls => cls.startsWith(`${player}`) && cls.endsWith('-off'));
            if (offState) {
                onState = offState.replace("off", "on");
                clicked.classList.remove(offState);
                clicked.classList.add(onState);
                document.querySelector(`.${player}-shell0`).appendChild(clicked);
                tokenNumber = Array.from(clicked.classList).find(cls => cls.startsWith(`token-${player}`));
                savePosition(player, tokenNumber, 0, true);
                if (player == 'g') {
                    initGreen++;
                }
                else if (player == 'y') {
                    initYellow++;
                }
                else if (player == 'b') {
                    initBlue++;
                }
                else if (player == 'r') {
                    initRed++;
                }
            }
        }

        

        pawns.forEach((pawn) => {
            pawn.classList.remove(`pawn-blink-${player}`);
            pawn.removeEventListener("click", handleClick); // Remove event listener
            pawn.style.zIndex = "1";
        });
    }

    pawns.forEach((pawn) => {
        pawn.classList.add(`pawn-blink-${player}`);
        pawn.addEventListener("click", handleClick);
    });

}

function selectForMovement() {
    if (dicePosition == 1) {
        if (initGreen > 0) {
            if (luckyValue == 6) {
                tokenMove('g');
            }
            else {
                tokenMove('g', 2);
            }

        }
        else {
            if (luckyValue == 6) {
                // initGreen = 1;
                tokenMove('g');
            } else {
                removeListener(2);
                shiftDice(2);

            }
        }
    }
    else if (dicePosition == 2) {
        if (initYellow > 0) {
            if (luckyValue == 6) {
                tokenMove('y');
            }
            else {
                tokenMove('y', 3);
            }


        }
        else {
            if (luckyValue == 6) {
                // initYellow = 1;
                tokenMove('y');
            } else {
                removeListener(3);
                shiftDice(3);

            }


        }
    }
    else if (dicePosition == 3) {
        if (initBlue > 0) {
            if (luckyValue == 6) {
                tokenMove('b');
            } else {
                tokenMove('b', 4);
            }


        }
        else {
            if (luckyValue == 6) {
                // initBlue = 1;
                tokenMove('b');
            } else {
                removeListener(4);
                shiftDice(4);

            }


        }
    }
    else if (dicePosition == 4) {
        if (initRed > 0) {
            if (luckyValue == 6) {
                tokenMove('r');
            } else {
                tokenMove('r', 1);
            }

        }
        else {
            if (luckyValue == 6) {
                // initRed = 1;
                tokenMove('r');
            } else {
                removeListener(1);
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
        selectForMovement();
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
        selectForMovement();
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
        selectForMovement();
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
        selectForMovement();
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
        selectForMovement(res);
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
        selectForMovement();
    }
}
