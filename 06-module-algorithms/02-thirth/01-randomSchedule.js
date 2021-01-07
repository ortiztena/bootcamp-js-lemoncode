let gap = { "María": [], "Pedro": [] , "Esther":[] , "Marcos": []};

var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00"
];


var myTeam = [
{
    name: "María",
    availability: new Array(8).fill(true)
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true)
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true)
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true)
  },
];


let random = function (x){
    
    for (let c of x){ 
    console.log("Disponibilidad de " + c.name);
    let yOn = [];
        for (let i = 0; i < c.availability.length ; i++) {
            c.availability[i] = !Math.round(Math.random(1,10));
            if (c.availability[i] === true) {
                gap[c.name] = yOn.push(1);
                console.log( WORK_HOURS[i] + " : " + "Si")
            }
            else {
                gap[c.name] = yOn.push(0); 
                console.log(WORK_HOURS[i] + " : " + "No")
            }
            
        } 
        gap[c.name] = yOn; 
    }
    gapFinder();
} 

let gapFinder = function () { 
    let noGap = [];
    for (let i = 0; i < 8; i++) {
        let groupA = (gap.María[i] === gap.Pedro[i]); 
        let groupB = (gap.Esther[i] === gap.Marcos[i]); 
        if (groupA === true && groupB === true) {
            console.log("Hueco encontrado en el horario: " + WORK_HOURS[i])
            noGap.push(true);
        }
     }

     if (noGap.indexOf(true) < 0) { 
        console.log("Lo siento. No hay hueco disponible en el equipo.")
        }
    }

random(myTeam);