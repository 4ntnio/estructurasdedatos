// La pila es una  estructura de datos que sigue la modalidad LIFO
// LIFO = LAST IN FIRST FIRST OUT

//PROGRAMACION ORIENTADA A OBJETOS
class Pila {
  //toda clase tiene un constructor para que funcione
  constructor() {
    //un atributo es una característica de la clase
    this.pila = {};
    this.contador = 0;
  }

  //mete elemento al final de la pila
  push(element) {
    this.pila[this.contador] = element;
    this.contador++;
    return this.pila;
  }
  //Saca el ultimo elemento y lo devuelve
  pop() {
    this.contador--;
    const element = this.pila[this.contador];
    delete this.pila[this.contador];
    return element;
  }

  // Solo muestra el ultimo elemento
  peek() {
    return this.pila[this.contador - 1];
  }

  //devuelve el tamaño de la pila
  size() {
    return this.contador;
  }

  print() {
    console.log(this.pila);
  }
}

const miPila = new Pila();
console.log(miPila.size());
console.log(miPila.print());
console.log(miPila.push("La roca"));
miPila.print();
console.log(miPila.push(5));
console.log(miPila.pop());
console.log(miPila.print());
