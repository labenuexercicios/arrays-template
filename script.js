// criando arrays
const jogadores = ["cristiano", "mbappé", "messi", "neymar", "ronaldinho"];
const numero = [4,3,2,1,5, -1, 43, 10];
const arrayMisto = [10, "oi", true];
const umNumero = [2];
const melhorJogador=[];

console.log(jogadores.length); //verificando quantos indices possui
console.log(jogadores[2]); //messi
console.log(jogadores[9]); //undefined
console.log(arrayMisto.includes(10)); //verificando se array possui os 3 indices
console.log(arrayMisto.includes("oi")); //verificando se array possui os 3 indices
console.log(arrayMisto.includes(true)); //verificando se array possui os 3 indices
console.log(umNumero); //verificando posição, tamanho e quantidade de indices
console.log(umNumero.length); //verificando qntd de indices

// manipulando arrays

// const copiaJogadores = jogadores; //atribuir indice nas duas variaveis
// copiaJogadores.push("ronaldo") //atribuir indice nas duas variaveis
// console.log(copiaJogadores, jogadores); //atribuir indice nas duas variaveis

const copiaJogadores = jogadores.slice(); //atribuir indice somente na cópia
copiaJogadores.push("R. veiga") //atribuir indice somente na cópia
console.log(copiaJogadores, jogadores); //atribuir indice somente na cópia

copiaJogadores.splice(2,2); // remover indices, primeiro numero indica indice e segundo a quantidade de indices
console.log(copiaJogadores);

console.log(jogadores.sort()); //ordenando indices
console.log(numero.sort()); // ordenando indices em numeros (porem o sort organiza diferente pois usa modo unicode) 
console.log(arrayMisto)
















// exercicio fixação

// ordem numerica e ordem reversa
const numero1 = [9, 3, 5, 7];
console.log("ordem crescente ", numero1.sort());
console.log("ordem reversa", numero1.reverse());

//  removendo ultimo indice
numero1.splice(2,1);
console.log("removendo ultimo indice", numero1);

// adicionando numero 6
const copiaNumero1 = numero1.slice()
numero1.push(6);
console.log("adicionando numero especifico, no caso 6", numero1)

// removendo indice 
numero1.splice(1,1);
console.log("removendo indice 2", numero1)



























