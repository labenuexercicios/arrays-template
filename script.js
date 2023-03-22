// // Vamos criar alguns arrays, e refletir a respeito deles:
// // Crie um array com 3 itens do tipo String
// // Crie um array com 3 itens do tipo Number
// // Crie um array com uma String, um número e um booleano;
// // Crie um array com apenas um valor. Um número.
// // Crie um array sem nenhum valor dentro.

// const arrayStrings = ["urian", "renata", "mateus"]
// const arrayNumber = [10, 8, 6]
// const arraySNB = ["bom dia!", 5, true]
// const array1Valor = [100]
// const arraySemValor = []

// // Vamos tentar acessar índices específicos dos arrays construídos anteriormente:
// // Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?
// // Verifique se o terceiro array inclui cada um dos itens;
// // No quarto array, imprima o valor do único item. 
// // Observe qual o seu índice, e imprima seu tamanho.

// console.log(arrayStrings.length)
// console.log(arrayStrings[1])
// console.log(arraySNB)
// comsole.log(typeof arraySNB[2] === "boolean")
// console.log(array1Valor[0])

// Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
// Faça push() de uma nova string no array copiado
// Imprima os dois arrays. Há diferença?
// Como podemos resolver isso?
// Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
// Imprima novamente ambos os arrays

// const array = ["mateus", "Reilloca", "lucca"]
// const arrayCopia = array.slice()
// arrayCopia.push("mica")

// console.log("array original", array)
// // console.log("array arrayCopia", arrayCopia)
// console.log("array copia", arrayCopia)

// arrayCopia.splice(2,2)

// console.log(arrayCopia)


//EXERCÍCIO EM AULA

const numeros = [8, 15, 92, 37, 12, 45]
const numerosCopia = numeros.slice()
numerosCopia.pop()
numerosCopia.push(6)
numerosCopia.splice(2,1)

console.log(numeros)
console.log(numerosCopia)


