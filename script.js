'Criaçãp de Arreys'

const pets = ["gato", "cachorro", "papagaio"]
const numeros = [7,9,7]
const arrayMist = [10, "TiaValda", true]
const uniTem = [24]
const vaziozim = []

console.log (pets. length); '3' //serve pra ver quantos itens temno array'
console.log (pets[3]); 'undefine' // indefinido pq se conta apartir no 0, e não há mais de 3 itens
console.log(arrayMist.includes(10))
console.log(arrayMist.includes("TiaValda"))
console.log(arrayMist.includes(true))
console.log(uniTem)
console.log(uniTem.length)


const copiaPets = pets
console.log (copiaPets, pets)
copiaPets.push("Rato")
console.log(copiaPets, pets)
copiaPets.splice(2,2)

console.log(copiaPets,pets)
console.log(pets.sort())


// exercicio deFixação

const numer =[0, 8, 6, 2, 5]
console.log(numer)
console.log(numer.sort())
numer.pop()
console.log(numer)
numer.push(10)
console.log(numer)
numer.splice(1,1)
console.log(numer)
numer.reverse()
console.log(numer)
