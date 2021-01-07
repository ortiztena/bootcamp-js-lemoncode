const empleado = {
    bruto: 24000,
    hijos: 2,
    pagas: 14
}

const empleado_2 = {
    bruto: -24000,
    hijos: 2,
    pagas: 14
}

const empleado_3 = {
    bruto: 24000,
    hijos: -1,
    pagas: 14
}

const empleado_4 = {
    bruto: 12000,
    hijos: 1,
    pagas: 14
}

function getNet(x) { // calcula el sueldo neto anual

    if (x.bruto <= 0) {
        return "la $ cantidad introducida debe ser mayor que cero";
    }
    else if (x.bruto < 12000) {
        return calNet(x.bruto, x.hijos, 0);
    }
    else if (12000 <= x.bruto < 24000) {
        return calNet(x.bruto, x.hijos, 0.08);
    }
    else if (24000 <= x.bruto < 34000) {
        return calNet(x.bruto, x.hijos, 0.16);
    }
    else if (x.bruto >= 34000) {
        return calNet(x.bruto, x.hijos, 0.30);
    }
}


function calNet(a, b, percent) { 

    if (b < 0) { return "n hijos debe ser un número igual o mayor que cero" }

    else if (b === 0) {
        return a - (a * percent);
    }

    if (b > 0 && a >= 12000) {
        let neto = a - (a * (percent - 0.02));
        return neto;
    }

    else if (b > 0 && a < 12000) {
        return a - (a * percent);
    }

}

function netMonth(x) { // calcula el sueldo neto mensual
    let net = getNet(x);
    if (typeof net === "string") {
        return console.log(net);
    }

    else {
        let op = getNet(x) / x.pagas;
        op = Math.round(op * 100) / 100;

        return console.log("Sueldo neto mensual = " + op + " $");
    }
}

netMonth(empleado);
netMonth(empleado_2);
netMonth(empleado_3);
netMonth(empleado_4);