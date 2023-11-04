type A = {
  a: string;
  b: string;
};

type B = {
  b: string;
  c: string;
};

type Interseccion = A & B;
const valor2: Interseccion = {
  a: "unA",
  b: "unB",
  c: "unC",
};

type Union = A | B;
let valor3: Union;
valor3 = {
  b: "unB",
  c: "unC",
};
valor3 = {
  a: "unA",
  b: "unB",
};
