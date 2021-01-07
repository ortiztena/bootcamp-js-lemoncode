const selectOp = {
    sum: (numberA) => globalResult += parseFloat(numberA) ,
    res: (numberA) => globalResult -= numberA ,
    mul: (numberA) => globalResult *= numberA  ,
    div: (numberA) => globalResult /= numberA ,
};

const sign = {
    sum: " + ",
    res: " - ",
    mul: " * ",
    div: " / ",
};

let globalResult = 0;

let num1 = document.getElementById("1-Num");
let acumulacion = document.getElementById("acumulacion");
let selection = document.getElementById("select");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let reset = document.getElementById("reset");


selection.addEventListener("change", ()=>{
    let endResult = selectOp[selection.value](num1.value);
    console.log(endResult);
    
   
    acumulacion.innerText += (sign[selection.value] + num1.value);
    globalResult = endResult;
    num1.value = "";
    selection.value = "default"

});

submit.addEventListener("click", ()=> {
    
    let endResult = globalResult;
    (isNaN)(endResult) ? window.alert("introduce numeros en los campos") : (result.value = endResult);
    num1.value = ""
    globalResult = 0;
} );

reset.addEventListener("click", ()=> {
    globalResult = 0;
    num1.value = "";
    result.value = "";
    acumulacion.innerText = "";
})