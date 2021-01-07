const bookCollection = [
    { isbn: 23453, author: "J. Simmons", pages: 250, title: "The Dark", read: true },
    { isbn: 56456, author: "Peter Black", pages: 120, title: "Feed", read: false },
    { isbn: 43243, author: ["A. Smith", "F. Gant"], pages: 340, title: "Fire", read: true },
    { isbn: 23223, author: undefined, pages: 260, title: "Eve", read: true },
    { isbn: 89232, author: "Anna Willis", pages: 610, title: "The Run", read: false },
    ];

const user = {
id: 4451234,
name: "Javi",
surname: "Calzado",
age: 36,
location: {
    country: "Spain",
    city: "Málaga",
    postalCode: 29017,
    },
};

/* Implementa una función llamada hasId que admita 
como parámetro un objeto y compruebe si dicho objeto
tiene una propiedad llamada id (debe devolver booleano 
true/false). */

const hasId = user => user.hasOwnProperty("id");  
console.log("hasId ", hasId(user)); 

/*Implementa una función llamada head tal que, dado un 
array como entrada, devuelva el primer elemento. */

const head = ([first]) => first;
console.log("head: ", head(bookCollection)); 

/* Implementa una función llamada tail tal que, dado un array como entrada,
 devuelva un nuevo array con todos los elementos menos el primero.*/

const tail = ([ ,...resto ]) => resto;
console.log("tail: ", tail(bookCollection));

/* Implementa una función llamada swapFirstToLast tal que, 
dado un array como entrada, devuelva un nuevo array donde 
el primer elemento ha sido colocado en la última posición. */

const sampleArray = ["uno", 2, true];
const swapFirstToLast = ([firstItem, ...restItems]) => [...restItems, firstItem];
console.log("SwapFirstToLast: ", swapFirstToLast(sampleArray));


/* Implementa una función llamada excludeId tal que, dado un objeto como entrada, 
devuelva dicho objeto clonado excepto la propiedad id si la hubiera. */

const userId = {
    id: 4451234,
    name: "Javi",
    surname: "Calzado",
    age: 36,
    };

const excludeId = objeto => {
    let {name, surname, age} = objeto;
    let copy = {name, surname, age};
    return copy;
}

console.log( "excludeId: " , excludeId(userId));

/*Implementa una función llamada wordsStartingWithA tal que,
 dado un array de palabras como entrada, devuelva otro array filtrado 
 con aquellas palabras que empiecen por a */

 const ciudades = ["Madrid", "Sevilla" , "Alicante", "Barcelona", "Almeria"];
 const wordsStartingWithA = cities => cities.filter(city => city[0].toLowerCase() === "a");

 console.log("wordsStartingWithA :", wordsStartingWithA(ciudades));

/*Implementa una función llamada concat tal que admita múltiples argumentos de tipo string 
y devuelva otro string con la concatenación de todos, separados por |. */

const concat = (group1, group2) =>  group1.concat(group2).join(" | ");
console.log("Concat: ", concat(ciudades, sampleArray));

/*Implementa una función llamada multArray que admita un array de números (arr) 
y otro parámetro que sea un número (x) y devuelva un nuevo array donde cada elemento 
ha sido multiplicado por x. */

const numbers = [ 2, 4, 5, 6, 7];
const multArray = (arr, num) => arr.map(x => x*num);
console.log("multArray: " , multArray(numbers, 10)); 

/* Implementa una función llamada calcMult que admita múltiples 
números como argumento y devuelva como resultado el producto de todos ellos. */

const calcMult = (arr, num1, num2) => arr.map(x => x * num1 * num2);
console.log("calcMult: " , multArray(numbers, 10, 10));