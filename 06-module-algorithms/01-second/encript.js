const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡, '";  //a
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv) bnm"; //b
let encryptedText = document.getElementById("text2");
let decryptedText = document.getElementById("text1");

let transcript = function (codeA, codeB) {
    
    let word = "";
    for(let a of decryptedText.value){ 
        
        let indexA = codeA.indexOf(a);
        word+= codeB[indexA];
    }
    encryptedText.value = word;
    decryptedText.value = "";
}

const untranscript = function (codeA, codeB) {
    
    let word = "";
    for(let a of encryptedText.value){ 
        let indexA = codeA.indexOf(a);
        word+= codeB[indexA];
    }
    decryptedText.value = word;
    encryptedText.value = ""
}


 let decryptBtn = document.getElementById("dBtn");
 let encryptBtn = document.getElementById("eBtn");
 encryptBtn.addEventListener("click", ()=> transcript( plainAlphabet, encryptedAlphabet));
 decryptBtn.addEventListener("click", ()=> untranscript(encryptedAlphabet, plainAlphabet));


 


