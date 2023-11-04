interface Programa {
  corre(): void;
}

function ejecutar(programa: Programa) {
  programa.corre();
}

class Saludador implements Programa {
  corre() {
    console.log("¡Hola!");
  }
}

class Conejito {
  private energia = 100;

  corre() {
    this.energia -= 20;
    return this.energia;
  }
}

// Esto compila
ejecutar(new Saludador());

// ¡Esto también!
ejecutar(new Conejito());

// $ node_modules/.bin/ts-node 0_tipadoEstructural_interfaz.ts
