let total = 0;
let prime = [];
let indice;
let premiumCounter = 0;

const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];


for ( i = 0; i < carrito.length; i++) { // Lista los items del carrito
   showLog(carrito[i]);
};

for ( i = 0; i < carrito.length; i++) {  // ALmacena el indice del ID buscado
   if (i.id === 54657){ indice = i};
};

carrito.splice(indice, 1);  // Elimina el objeto del carrito.


for ( i = 0; i < carrito.length; i++) { // comprueba los prime del carrito.
   checkPrime(carrito[i]);
};

for ( i = 0; i < carrito.length; i++) { // suma los precios x las cantidades.
   checkout(carrito[i]);
};



basket(); // comprueba gastos de envio con premium;
envio(); // añade descuento del 5% o no lo aplica;


// funciones // 

function showLog(x){
    console.log("id: " + x.id);
    console.log("name: " + x.name);
    console.log("price: " + x.price);
    console.log("count: " + x.count);
    console.log("premium: " + x.premium);
    console.log("");
};

function checkout(x){
    let amount = x.price * x.count;
    total += amount;
};

function checkPrime(x){

    if( x.premium == true) {
        premiumCounter++
        prime.push(x);
    }
};

function envio (){ // añade descuento del 5% o no lo aplica;
    if (carrito.lenght === premiumCounter ){
        console.log("Gastos de envío 0 ")
    }
    else (console.log("Con gastos de envío "))
}
 
function basket(){   // comprueba gastos de envio con premium;
    if (total > 50) {
    let discount = total * 0.95;
    discount = Math.round(discount * 100) / 100;
    total = discount;
    console.log(`${total} euros` + " Descuento aplicado del 5% por superar 50 de compra")
    }
    else {console.log(`${total} euros` + " Descuento del 5% no aplicado")}
}