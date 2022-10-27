/* const strings = ["Samuka", "Ruan", "Marquitos"];
const numbers = [8, 4, 1];
const sortidos = ["Ítalo senta senta senta", 19, false];
const unico = [12397];
const vazio = [];

console.log(strings.length);
console.log(strings);
console.log(strings[2]);

console.log(numbers.includes(4))
console.log(numbers.includes(2))

console.log(unico) 

//========================================================

const copiaStrings1 = strings;
const copiaStrings2 = strings.slice();
strings.push("Ítalo do funk");
console.log(copiaStrings1);
console.log(copiaStrings2);

copiaStrings2.pop();
console.log(copiaStrings2);

copiaStrings1.splice(1,2);
console.log(copiaStrings1);

//=========================================================

numbers.sort();
console.log(numbers) */

const numero = [2, 23 ,243 ,325 ,231 ,534 ,134 ,123 ,43 ,12];
const numeroCopy = numero.slice();
numeroCopy.pop();
numeroCopy.push(6);
numeroCopy.splice(2,1);
console.log(`Primeiro Array ${numero}\nArray Copiado e modificado ${numeroCopy}`)