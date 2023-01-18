const output = document.querySelector(".output-container");
const inputNums = document.querySelector(".input-container");
const numbers = document.querySelectorAll("#number");
const clear = document.querySelector("#clear");
const operators = document.querySelectorAll("#operator")
const deleteButton = document.querySelector("#delete")
let inputString = "";
let outputString = "";

clear.addEventListener("click", allClear);
deleteButton.addEventListener("click", deleteItem)

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
            inputNums.innerHTML = inputString
        } else {
            inputString += nums.value
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
            inputString += operator.value;
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