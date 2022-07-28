//PARTE 01 - Criação de Arrays

const arrayString = ["amor", "dor", "paz"];
const arrayNum = [31,29,4];
const arrayMisto = ["coxinha", 7, true];
const umItem = [2]
const vazio = []

// PARTE 02 - Checagem dos Arrays

console.log(arrayString.length); // 3
console.log(arrayString[3]); // undefined

console.log(arrayMisto.includes("7"));
console.log(arrayMisto.includes("empadinha"));
console.log(arrayMisto.includes(7));

console.log(umItem.length);
console.log(umItem[2]);



// PARTE 03 - Manipulação de Arrays

// const copiaArrayString = arrayString
// console.log(arrayString, copiaArrayString);
// copiaArrayString.push("alegria")
// console.log(arrayString, copiaArrayString)

const copiaArrayString = arrayString.slice();
console.log(arrayString, copiaArrayString);
copiaArrayString.push("alegria");
console.log(arrayString, copiaArrayString);

copiaArrayString.splice(2,2)
console.log(copiaArrayString);

console.log(arrayString.sort(), arrayNum.sort());

//PARTE 04 - Exercício de Fixação

console.log("EXERCÍCIO DE FIXAÇÃO");

const numerosOriginais = [5, 31, 7, 4, 69, 29, 22]
const numeros = numerosOriginais.slice()

console.log(`Array normal: ${numerosOriginais}`);

console.log(`Array com sort(): ${numeros.sort()}`);

console.log(`Array com reverse(): ${numeros.reverse()}`);

numeros.pop()
console.log(`Removido o último número da array: ${numeros}`);

numeros.push(6)
console.log(`Adicionado o número 6 à array: ${numeros}`);

numeros.splice(2,1)
console.log(`Removido o índice 2 da array: ${numeros}`);