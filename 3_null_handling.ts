// MANEJO DE NULL

let quizasUnaVaca: Vaca | null;
if (Math.random() > 0.5) {
  quizasUnaVaca = null;
} else {
  quizasUnaVaca = new VacaLoca();
}
let _unaVaca = quizasUnaVaca!;
let quizasUnaRespuesta = quizasUnaVaca?.mugi();
const respuesta = quizasUnaRespuesta ?? "*Silencio*";
