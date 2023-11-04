// FALSOS POSITIVOS

function parsear(objetoSerializado: string): { unaPropiedad: string } {
  return JSON.parse(objetoSerializado);
}

const objetoDeserializado = parsear(`{"cualquierSarasa":5}`);
console.log("Propiedad deserializada: ", objetoDeserializado.unaPropiedad);

// ANY

const vaca: any = { mugi: () => "mu" };
vaca.mugi().max(2);
vaca.ladra();

// UNSOUNDNESS

let hacerAlgoConUnaVaca: (vaca: Vaca) => void;

hacerAlgoConUnaVaca = (vacaLoca: VacaLoca) => {
  vacaLoca.grita();
};

hacerAlgoConUnaVaca({ mugi: () => "Mu" });
