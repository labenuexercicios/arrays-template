//
const arrayString = ["Melancia", "Limão", "Laranja"]
// indices                0         1           2
// length                  3
const arrayNumber = [12, 45, 3]
const arrayMix = ["Ana", 36, false]
const arrayUmValor = [5]
const arrayEmpty = []
console.log(arrayString.length)
console.log(arrayString[3])
console.log(arrayMix.includes(false))
console.log(arrayUmValor[0])
console.log(arrayUmValor.length)

// manipulação
const copia = arrayString.slice()
console.log(copia)
copia.push("Mamão")
console.log("Array original", arrayString)
console.log(copia)
copia.pop()
copia.splice(2, 2)
console.log(copia)

//para guardar na cabeça
const number = [07, 19, 24, 50, 82, 100]
const copia1 = number.slice()
console.log("number", number)
console.log("copia", copia1)
copia1.pop()
console.log("copia sem o último item", copia1)
copia1.push(6)
console.log("acrescenta o numero 6", copia1)
copia1.splice(1, 1)
console.log("remover o índice 2", copia1)
console.log(copia1)