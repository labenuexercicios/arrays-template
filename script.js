// Exercício de aprendizagem

const arrayString = ["Dhouglas","Ornilo","de"]
const arrayNumber = [2, 6, 26]
const arraySortido = ["Dhouglas", 26, true]
const arrayNum = [20]
const arrayVazio = []

// imprimir o comprimento de cada array (quantos elementos tem)
console.log(arrayString.length)
// imprimir todo array, quantidade e elementos
console.log(arrayString)

const nome = "Dhouglas"

// imprimir o comprimeto da variavel (em numeros)
console.log("Lenght do nome:", nome.length)

// imprimir a posição do elemento da variavel e mostra qual é a string da posição
console.log("Lenght do nome:", nome[0])

// imprimir a posição de cada elemento do array
// sendo 0 o primeiro.
console.log(arrayString[0])

// .includes procura se aquele elemento existe no array e responde em booleano
console.log(arraySortido.includes("Dhouglas"))
console.log(arraySortido.includes(10))
console.log(arraySortido.includes(true))

// testes de amostra de array completo, posição e comprimento
console.log(arrayNum)
console.log(arrayNum[0])
console.log(arrayNum.length)

// testes de amostra de array completo e comprimento de array vazio
console.log(arrayVazio)
console.log(arrayVazio.length)

/* ---------------------------------------------------------------- */

// utiliza-se .slice() para fazer uma cópia de um array
const copiaArrayString = arrayString.slice()

// impressão teste para mostrar que continua tudo igual
console.log("original", arrayString)
console.log("copia", copiaArrayString)

// .push adiciona uma nova string no final do array
copiaArrayString.push("Lima")

// impressão para teste (original e copia sendo a copia com string adicional)
console.log(arrayString)
console.log(copiaArrayString)

// .pop remove e mostra o último elemento
// console.log(copiaArrayString.pop())

// .splice() remove um elemento específico a partir de cada posição do elemento
// exemplo: "Dhouglas" "Ornilo" "de" "Lima", no caso abaixo eu removeria "Ornilo"
// copiaArrayString.splice(1, 1)
// console.log(copiaArrayString)

// .sort() deixa em ordem alfabética ou ordem crescente
// se tiver letras maiúsculas e minúsculas ele não ordena corretamente
// em caso de numeral, só vai até 1 a 9. (isso para o método tradicional sem callback)
// copiaArrayString.sort()
// console.log("Ordem alfabética", copiaArrayString)

// arrayNumber.sort()
// console.log("Ordem numerica", arrayNumber)

/* -------------------------------------------------------------------------- */

// Exercício de Fixação

/* 1) Crie um novo array. Ele deve possuir apenas números, e estes números não
devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array. */
const arrayRandomNumbers = [26, 22, 40, 35, 57, 60]

/* 2) Depois disso, crie uma cópia deste array utilizando o método slice(). */
const copiaArrayRandomNumbers = arrayRandomNumbers.slice()

/* 3) No array copiado: */

/*  3.1 Remova o último item */
copiaArrayRandomNumbers.pop()

/*  3.2 Em seguida adicione o número 6 no fim do array. */
copiaArrayRandomNumbers.push(6)

/*  3.3 Depois, remova o número que está no índice 2 array. */
/* No exemplo abaixo eu removo o número 40. (A partir do primeiro número que eu escolho
"2" (lembrando que o primeiro começa do 0) eu removo "1 número")*/
copiaArrayRandomNumbers.splice(2, 1)

/*  3.3 Depois, remova o número que está no índice 2 array. */
console.log("Original:", arrayRandomNumbers)
console.log("Cópia:", copiaArrayRandomNumbers)


