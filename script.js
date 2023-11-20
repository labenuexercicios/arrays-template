//Prática Exercício 1
/* function imprimirArray() {
  const arrayString = ["Vitória", "Rio de Janeiro", "Belo Horizonte", "São Paulo"];
  const arrayNumber = [1, 10, 100];
  const arrayMult = ["São Paulo", 1000, true];
  const arraySingle = [2];
  const arraySemValor = [];

  console.log(arrayString);
  console.log(arrayNumber);
  console.log(arrayMult);
  console.log(arrayString.length);
  console.log(arrayString[3]);
  console.log(arraySingle, arraySingle.indexOf(2), arraySingle.length);
} */

//Prática Exercício 2
/* function imprimirArray() {
  const cidades = ["Vitória", "Rio de Janeiro", "Belo Horizonte"];
  const cidades2 = cidades;

  console.log(`Cidades: ${cidades}`);
  console.log(`Cidades2: ${cidades2}`);

  cidades.push("São Paulo");

  console.log(`Cidades: ${cidades}`);
  console.log(`Cidades2: ${cidades2}`);

  const cidades3 = cidades.slice();
  console.log(`Cidades: ${cidades}`);
  console.log(`Cidades3: ${cidades3}`);

  cidades.push("Natal");
  console.log(`Cidades: ${cidades}`);
  console.log(`Cidades3: ${cidades3}`);

  cidades3.splice(2, 2);
  console.log(cidades3);
} */

function imprimirArray() {
  const array1 = [1, 4, 2, 8, 9, 7, 3];
  const arrayCopia = array1.slice();

  arrayCopia.pop();
  arrayCopia.push(6);
  arrayCopia.splice(2, 1);
  console.log(array1);
  console.log(arrayCopia);
}

imprimirArray()