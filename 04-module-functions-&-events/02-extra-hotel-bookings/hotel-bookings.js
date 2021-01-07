

const prices = {
    standar: 100,
    junior_suite: 120,
    suite: 150,
    single: 0.75,
    double: 1,
    triple: 1.25,
    parking: 10,
};

let globalResult = 0;

let roomtype = document.getElementById("roomtype");
let acumulacion = document.getElementById("acumulacion");
let spa = document.getElementById("spa");
let roomsize = document.getElementById("roomsize");
let nights = document.getElementById("nights");
let cars = document.getElementById("cars");
let parking = document.getElementById("parking");
let submit = document.getElementById("submit");
let result = document.getElementById("result");


const spaCheck = ()=> {
    if (spa.checked === true) { 
        globalResult += (20 * nights.value);
        return 20}
    else return 0;
}

const parkingCheck = ()=> {
    if (cars.value === "0" && parking.value >= "1") {
        return window.alert("introduzca al menos un coche")
    } 
    else {
        let result = cars.value * parking.value * prices.parking;
        globalResult += result ;
        console.log( `Nº coches: ${cars.value} *` +` Nº Noches Parking: ${parking.value} = ` + `${result}€.` ) 
        return result;
    }
}

const checkout = ()=> {
    let result = nights.value * prices[roomtype.value] * prices[roomsize.value];
    globalResult += result;
    return globalResult;
}

const showLog = ()=> {
    
    console.log( "Nº Noches: " + nights.value )
    console.log( "Tipo de Habitacion: " + `${roomsize.value} en `+`${roomtype.value} 
    ` + `(${prices[roomtype.value] * prices[roomsize.value]}€).`);
    console.log(`SPA: ${spaCheck()}€.` );
    checkout();
    parkingCheck();
    console.log(`TOTAL: ${globalResult}€.`)
    result.value = `TOTAL: ${globalResult}€.`;
}

submit.addEventListener("click", ()=> {
    nights.value < 1 ? window.alert("reserva minima de una noche") : showLog() ;
    globalResult = 0;
});
