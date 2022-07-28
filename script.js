// //parte 1 criação de arrays

// const pets = ["gato","cachorro","tartaruga"];
// const numeros = [4,9,7,-7,10,56];
// const arrayMisto = [10,"Olá", true];
// const umItem = [1];
// const vazio = []

// //parte 2 observação

// console.log(pets.length);//3
// console.log(pets[3]);//undefined
// console.log(arrayMisto.includes(10));//true
// console.log(arrayMisto.includes("Olá"));//true
// console.log(arrayMisto.includes(true));//true
// console.log(arrayMisto.includes('true'));//false, pois nao tem esse esquema dentro do array na variavel
// console.log(umItem.length);


// // parte 3
// // const copiaPets = pets
// // console.log(copiaPets, pets);
// // copiaPets.push("rato");
// // console.log(copiaPets, pets);

// const copiaPets = pets.slice()
// console.log(copiaPets, pets);
// copiaPets.push("rato");
// console.log(copiaPets, pets);
// copiaPets.splice(2,3);
// //         (indice, quantidade)
// console.log(copiaPets, pets);
// console.log(pets.sort());
// console.log(numeros);
// console.log(numeros.sort());


// Exercicio de Fixaçãõ

const arrayNumero = [1,5,44,36,-8,-77];


console.log(arrayNumero); // original
console.log(arrayNumero.sort()); // crescente
arrayNumero.reverse(); //reverse
console.log(arrayNumero);
arrayNumero.pop();
console.log(arrayNumero);
arrayNumero.push(6);
console.log(arrayNumero);
arrayNumero.splice(2,1);
console.log(arrayNumero);

