class Cifras {
  constructor(numero) {
    this.numero = numero;
  }

  esPar() {
    return this.numero % 2 === 0;
  }
}

const c = new Cifras(42);
console.log(c.esPar()); // true
console.log(new Cifras(7).esPar()); // false