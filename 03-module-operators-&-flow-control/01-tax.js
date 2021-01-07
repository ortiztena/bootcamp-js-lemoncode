const product = { count: 2, price: 12.55, type: "alimentacion" };
const libro = { count: -1, price: 9.15, type: "libro" };
const cellphone = {count: 1, price: 225, type: "electronica"};

function getSubtotal(a){
  return a.price;
}

function getVat(b){
  
  let tax = 0;
  
  if (b.type == "alimentacion"){
    tax = 0.10;
    let iva = b.price * tax; 
    iva = Math.round(iva*100)/100;
    return iva;
  }

  else if (b.type === "libro"){
    tax = 0.04;
    let iva = b.price * tax; 
    iva = Math.round(iva*100)/100;
    return iva;
  }

  else { 
    tax = 0.21; 
    let iva = b.price * tax; 
    iva = Math.round(iva*100)/100;
    return iva;
  }
}

function printProductPrice(x) {
  
  if (x.count <= 0 ) {return 0}
  
  else if (x.count > 0 ) {

    const subtotal = getSubtotal(x); // precio sin iva
    const vat = getVat(x);  // iva
    const total = subtotal + vat; // suma de ambos
                  
    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + " * " + `${x.count}`+ " = "  + total * x.count +"€");
  }
}
  
printProductPrice(product);
printProductPrice(libro);
printProductPrice(cellphone);
  