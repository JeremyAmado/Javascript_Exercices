//  let Carro = {
//      marca: 'Toyoda',
//      tipo:'sedan',
//      Puertas:3
//  }

class Carro {

    constructor(marca1, tipo1, Puertas) {

        this.marca = marca1;

        this.tipo = tipo1;

        this.Puertas = Puertas;

        this.Creadoen = 'hoy';

        this.encendido = false;

        this.gasolina = 100;

        this.limte = 0
    }

    encenderCarro() {
        if (this.encendido) {
            console.error('el carro ya encendio');
        } else {
            this.encendido = true;
            console.log('el carro esta encendido');
        }
 
        return this;

    }

    realizarViaje(consumo) {


        if (!this.encendido) return console.log('carro apagado');

        if (consumo > this.gasolina) return console.log('no puede realizar el viaje');

        this.gasolina = this.gasolina - consumo;
        return ' le queda' + this.gasolina;


    }

}



let carro = new Carro('mazda', 'hunday', 2);
let carro1 = new Carro('tumama', 'es gay', 2)


console.log(carro1);
console.log(carro);