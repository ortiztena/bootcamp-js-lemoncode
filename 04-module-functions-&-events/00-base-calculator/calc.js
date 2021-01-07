const selectOp = {
    sum: (numberA, numberB) => parseFloat(numberA) + parseFloat(numberB),
    res: (numberA, numberB) => numberA - numberB,
    mul: (numberA, numberB) => numberA * numberB,
    div: (numberA, numberB) => numberA / numberB,
}

let num1 = document.getElementById("1-Num");
let num2 = document.getElementById("2-Num");
let selection = document.getElementById("select");
let submit = document.getElementById("submit");
let result = document.getElementById("result");


submit.addEventListener("click", ()=> {
 
    let endResult = selectOp[selection.value](num1.value, num2.value);
    console.log(endResult);
    (isNaN)(endResult) ? window.alert("introduce numeros en los campos") : (result.value = endResult);
} );

