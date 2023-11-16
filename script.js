function imprimirArray (){
  //digite a sua solução aqui
  let frutas = ["maçã","banana","uva"];
  let Numeros = [1109,1984,2023];
  let variado = ["Luiz",1984,true];
  let unico = [2020];
  let vazio = [];

  console.log(`Length: ${frutas.length}, terceiro elemento do array = ${frutas[2]}`);   //parte 1
  
  console.log(`${(variado.includes("Luiz") && variado.includes(1984) && variado.includes(true))}`);   //parte 2

  console.log(`${unico[0]} - ${unico.length}`)   //parte 3
}

imprimirArray()