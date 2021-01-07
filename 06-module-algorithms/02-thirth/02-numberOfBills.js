var numberOfBills = 3878

var quinientos = Math.trunc(numberOfBills / 500);
var doscientos = Math.trunc(numberOfBills % 500 / 200);
var cien = Math.trunc(numberOfBills % 500 % 200 / 100);
var cincuenta = Math.trunc(numberOfBills % 500 % 200 % 100 / 50);
var veinte = Math.trunc(numberOfBills % 500 % 200 % 100 % 50 / 20);
var diez = Math.trunc(numberOfBills % 500 % 200 % 100 % 50 % 20 / 10);
var cinco = Math.trunc(numberOfBills % 500 % 200 % 100 % 50 % 20 % 10 / 5);
var resto = (numberOfBills % 500 % 200 % 100 % 50 % 20 % 10 % 5);


var dsQuinientos = quinientos + (' de 500,');
var dsDoscientos = doscientos + (' de 200,');
var dsCien = cien + (' de 100');
var dsCincuenta = cincuenta + (' de 50,');
var dsDiez = diez + (' de 10,');
var dsCinco = cinco + (' de 5,');
var dsResto = ('El resto son ') + resto + (' euros.');
console.log(dsQuinientos, dsDoscientos, dsCien, dsCincuenta, dsDiez, dsCinco, dsResto);

if (numberOfBills == ((quinientos*500) + (doscientos*200) + (cien*100) + (cincuenta*50) + (veinte*20) + (diez*10) + (cinco*5) + (resto)));
{ console.log("Todo es correcto.");
}

