const output = document.querySelector(".output-container");
const inputNums = document.querySelector(".input-container");
const numbers = document.querySelectorAll("#number");
const clear = document.querySelector("#clear");
const operators = document.querySelectorAll("#operator")
const deleteButton = document.querySelector("#delete")
const equalButton = document.querySelector("#equal")
let inputString = "";
let outputString = "";
let initialNumber = "";
let secondaryValue = "";

clear.addEventListener("click", allClear);
deleteButton.addEventListener("click", deleteItem)
equalButton.addEventListener("click", evaluateFunction)

numbers.forEach(nums => {
    nums.addEventListener("click", function () {
        if (nums.value === "0") {
            if (inputString == "") {
                return
            }
        }
        if (nums.value === ".") {
            if (inputString.includes(".")) {
                return
            }
            inputString += nums.value
            initialNumber = inputString
            inputNums.innerHTML = inputString
        } else {
            inputString += nums.value
            initialNumber = inputString
            inputNums.innerHTML = inputString
        }
    })
});

operators.forEach(operator => {
    operator.addEventListener("click", function () {
        if (inputString.includes("+") || inputString.includes("-") ||
        inputString.includes("÷") || inputString.includes("*")) {
            return
        }
        if (inputString != "") {
            secondaryValue = initialNumber;
            inputString += operator.value;
            outputString = inputString
            inputNums.innerHTML = null;
            output.innerHTML = inputString;
            inputString = "";
        }
    })
})

function allClear() {
    inputString = "";
    outputString = "";
    output.innerHTML = outputString;
    inputNums.innerHTML = inputString;
}

function deleteItem() {
    inputString = inputString.slice(0, -1);
    inputNums.innerHTML = inputString;
}

function evaluateFunction() {
    outputString += inputString;
    output.innerHTML = outputString;

    if (outputString.includes("+")) {
        let total = parseFloat(secondaryValue) + parseFloat(initialNumber)
        inputNums.innerHTML = total.toString()
    }

    if (outputString.includes("-")) {
        let total = parseFloat(secondaryValue) - parseFloat(initialNumber)
        inputNums.innerHTML = total.toString()
    }

    if (outputString.includes("÷")) {
        let total = parseFloat(secondaryValue) / parseFloat(initialNumber)
        inputNums.innerHTML = total.toString()
    }

    if (outputString.includes("*")) {
        let total = parseFloat(secondaryValue) * parseFloat(initialNumber)
        inputNums.innerHTML = total.toString()
    }
}