// function imprimirArray (){
// //digite a sua solução aqui
//   //let frutas = ["banana", "kiwi", "goiaba"]
//   let numeros = [2, 5, 7]
//   let tudoMisturado = ["carro", true, 5 ]
//   let umValor = [1]
//   let nenhumValor = []

  //console.log(frutas.length)
  //console.log(frutas[3]);  // undefined
 //console.log(tudoMisturado.includes('carro', 'true', '5'))
 //console.log(umValor[0], umValor.indexOf('carro'), umValor.length);


//  let frutas = ["banana", "kiwi", "goiaba"]
  //let frutas2 = frutas; 
//  let frutas2 = frutas.slice(); 

 //frutas2.splice(1,2)
 //\frutas.push("abacaxi")
//  frutas2.pop()
//  console.log(frutas2)

//  console.log(frutas);
//  console.log(frutas2);



// }

// imprimirArray()

const numeros = [2, 5, 7, 4, 5, 8, 9, 33]
//const numerosCopia = numeros.slice()
//const numerosCopia = numeros.push(6)
const numerosCopia = numeros.splice(2, 1);

console.log(numeros)
console.log(numerosCopia)
//console.log(numerosCopia.push(6))