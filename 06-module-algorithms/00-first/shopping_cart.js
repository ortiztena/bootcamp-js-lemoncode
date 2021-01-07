// Constantes.
const REGULAR_TYPE = 0.21;
const LOWER_TYPE = 0.04;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

let ol = document.createElement("ol");
let li = document.createElement("li");
let main = document.getElementById("main");
main.appendChild(ol);

const showProducts = productList => {
  for (let a of productList) {
  li = document.createElement("label");
  li.setAttribute("id", a.description);
  li.innerText = a.description + ` -  ${a.price}€/ud.`;
  ol.appendChild(li);
  createProduct(a);
  }
}

function createButton(x) {
  let button = document.createElement("button");
  button.setAttribute("id", "btn");
  button.setAttribute("type", "submit");
  button.innerText = "Calcular";
  main.appendChild(button); 
  button.addEventListener("click", ()=> calculo(x));
}

function calculo(x) {
  let stotal = 0;
  let siva = 0;
  let granTotal = 0;
  subtotal.innerText = subtotal.id;
  iva.innerText = iva.id;
  total.innerText = total.id;

  for (let f of x) {
    if (f.units > 0) {
    stotal += (f.price * f.units); // calcula subtotal
    siva += (f.price * f.tax * f.units); // calcula iva
    }
  granTotal = siva + stotal; // suma el total
  }
  stotal = round(stotal); 
  siva = round(siva);
  granTotal = round(granTotal);
  // Presenta en el HTML los resultados
  subtotal.innerText += " " + stotal + "€";
  iva.innerText += " " + siva + "€";
  total.innerText += " " + granTotal + "€";
}

const round = (x) => {return Math.round(x*100)/100} // funcion redondeo

const createH = valor => { // funcion creadora h4
  let h4 = document.createElement("h4");
  h4.setAttribute("id", valor);
  h4.innerText = valor;
  main.appendChild(h4);
}

const createProduct = product => { // funcion anidadora inputs + condicionates
  let input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("class", product.description);
  input.addEventListener("change", function (e) {

  if(e.target.valueAsNumber < 0) {
    alert("selección incorrecta ");
    input.value = 0;
  }
  else if(e.target.valueAsNumber > product.stock) {
    alert("stock máximo de: " + product.description + " = " + product.stock);
    input.value = product.stock;
  }
  else { product.units = event.target.valueAsNumber} ;
  });
  li.appendChild(input);
}

showProducts(products);
createButton(products);
createH("subtotal");
createH("iva");
createH("total");
let subtotal = document.getElementById("subtotal");
let iva = document.getElementById("iva");
let total = document.getElementById("total");