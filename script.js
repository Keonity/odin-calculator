let numContainer = document.querySelector(".numButtons");
let calcDisplay = document.querySelector(".calculation");

let currNum = 0;
let currOp = "";
let secondNum = 0;
let currMode = "first";

function containsNumbers(str) {
    let nums = "1234567890";
    for (let i = 0; i < str.length; i++) {
        if (!nums.includes(str.charAt(i))) {
            return false;
        }; 
    }
    return true;
}

function sum(a, b) {
    calcDisplay.textContent = a + b;
    currNum = parseInt(calcDisplay.textContent);
    secondNum = 0;
    return a + b;
}

function multiply(a, b) {
    calcDisplay.textContent = a * b;
    currNum = parseInt(calcDisplay.textContent);
    secondNum = 0;
    return a * b;
}

function minus(a, b) {
    calcDisplay.textContent = a - b;
    currNum = parseInt(calcDisplay.textContent);
    secondNum = 0;
    return a - b;
}

function divide(a, b) {
    calcDisplay.textContent = a / b;
    currNum = parseInt(calcDisplay.textContent);
    secondNum = 0;
    return a/b;
}

numContainer.addEventListener("click", function(e) {
    // console.log(e.target.id);

    if (calcDisplay.textContent === "Calculation" || !containsNumbers(calcDisplay.textContent) || (currOp !== "" && secondNum === 0)) {
        calcDisplay.textContent = e.target.id;
    }
    else {
        calcDisplay.textContent += e.target.id;
    }
    
    if (currOp === "") {
        currNum = parseInt(calcDisplay.textContent);
    }
    else {
        secondNum = parseInt(calcDisplay.textContent);
    }
    /* console.log("Curr Num: " + currNum);
    console.log("Second Num: " + secondNum);
    console.log("Current Operator: " + currOp); */
});

let opContainer = document.querySelector(".opButtons");

opContainer.addEventListener("click", function(e) {
    if (currMode !== "op") {
        currMode == "op";
    } 

    // console.log(e.target.textContent);
    if (e.target.textContent !== '=') {
        calcDisplay.textContent = e.target.textContent;
        // currOp = calcDisplay.textContent;
    }
    // console.log("Current Operator A: " + currOp);

    if (secondNum === 0 && (e.target.textContent !== currOp)) {
        currOp = e.target.textContent;
    }
    // console.log("Current Operator B: " + currOp);

    if (secondNum !== 0) {
        if (e.target.textContent !== currOp) {
            switch (currOp) {
                case ('+'):
                    sum(currNum, secondNum);
                    break;
                case ('-'):
                    minus(currNum, secondNum);
                    break;
                case ('*'):
                    multiply(currNum, secondNum);
                    break;
                case ('/'):
                    divide(currNum, secondNum);
                    break;
                default:
                    if (containsNumbers(calcDisplay.textContent)) {
                        currNum = parseInt(calcDisplay.textContent);
                    }
                    secondNum = 0;
                    break;
            }
        }
        else {
            switch (currOp) {
                case ('+'):
                    sum(currNum, secondNum);
                    break;
                case ('-'):
                    minus(currNum, secondNum);
                    break;
                case ('*'):
                    multiply(currNum, secondNum);
                    break;
                case ('/'):
                    divide(currNum, secondNum);
                    break;
                default:
                    if (containsNumbers(calcDisplay.textContent)) {
                        currNum = parseInt(calcDisplay.textContent);
                    }
                    secondNum = 0;
                    break;
            }
        }
    }
    currOp = e.target.textContent;
    

});

clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function(event) {
    currNum = 0;
    currOp = "";
    secondNum = 0;
    calcDisplay.textContent = "Calculation";
});