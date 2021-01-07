const product = { count: 3, price: 12.55, type: "alimentacion" };
const libro = { count: -1, price: 9.15, type: "libro" };
const cellphone = {count: 1, price: 225, type: "electronica"};

function getTotal(a){
    if (a.count <= 0 ) {return 0}
    else if (a.count > 0 && a.type == "alimentacion") {
        return getVat(a.price, 0.10) * a.count
    }
    else if (a.count > 0 && a.type == "libro") {
        return getVat(a.price, 0.04) * a.count
    }
    else {
        return getVat(a.price, 0.21) * a.count
    }
}

function getVat(b,tax){
    let iva = b * tax; 
    iva = Math.round(iva*100)/100;
    return (b + iva);
}



