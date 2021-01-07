const reservas = [
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 3
    },
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 4
    },
    {
      tipoHabitacion: "suite",
      pax: 2,
      noches: 1
    }
  ];

class CarritoDeLaCompra {
    constructor() {
        this._cesta = [];
        this._subtotal = 0;
        this._total = 0;
        this._tourDisc = 0.85; // 15% descuento en subtotal para TourOp
    }

    calculaFactor(tipoHabitacion) {
        switch(tipoHabitacion) {
         case 'standard':
            return 100;
         case 'suite':
            return 150;
        }
        return 1;
    }

    calculaPax(pax){
        if (pax <= 2 ) { return 0 }
        else if ( pax > 2) {return 40 * (pax - 2 )}
    }

    calculaSubtotal() {
        this._subtotal = this._cesta.reduce(
        (acumulado, { tipoHabitacion, pax, noches }) => 
        acumulado + ( this.calculaFactor(tipoHabitacion) + this.calculaPax(pax) * noches), 0);
    }

    calculaTotal(){
        this._total = this._subtotal * 1.21;
    }

    get subtotal() {
        return this._subtotal;
    }

    get total() {
        return this._total;
    }

    set cesta(cesta) {
        this._cesta = cesta;
        this.calculaSubtotal();
        this.calculaTotal();
    }


}

class CarritoDeLaCompraTouroperador extends CarritoDeLaCompra {
    

    calculaFactor() {
       return 100
    }

    calculaSubtotal() {
        this._subtotal = this._cesta.reduce(
        (acumulado, { pax, noches }) => 
        acumulado + ( this.calculaFactor() + this.calculaPax(pax) * noches ) * this._tourDisc, 0);
    }

    calculaTotal() {
        this._total = this._subtotal * 1.21;
    }
}



console.log('** Carrito de la compra normal ***');
const carrito = new CarritoDeLaCompra();
carrito.cesta = reservas;
console.log("subtotal", carrito.subtotal);
console.log("total", carrito.total);


console.log('** Carrito de la compra Tour Operador ***');
const carritoTouroperador = new CarritoDeLaCompraTouroperador();
carritoTouroperador.cesta = reservas;
console.log("subtotal", carritoTouroperador.subtotal);
console.log("total", carritoTouroperador.total);
