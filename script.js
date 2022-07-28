// const arrayString = ['Arthur', 'Juliana', 'Bento']
// let arrayNumber = [1,10,4,2,34,5,5]
// let arraySortido = ['Arthur', 28, true]
// let arrayNum = [38]
// let arrayNull = []

// // console.log(arrayString.length)
// // console.log(arrayString[3])
// // console.log(arrayString)
// // console.log(arraySortido.includes('Arthur'&& 28 && true))

// // console.log(arrayNum)
// // console.log (arrayNull)

// // let copiaArrayString = arrayString
// // console.log(copiaArrayString)
// // copiaArrayString.push('Miguel','Magrinha','Pantera','Caxumbinha')
// // console.log(copiaArrayString, arrayString)

// let copiaArrayString = arrayString.slice()
// console.log(copiaArrayString)

// copiaArrayString.push('Pantera')
// console.log(copiaArrayString, arrayString)

// copiaArrayString.splice(2 , 2)
// console.log(copiaArrayString)

// arrayString.sort()
// arrayNumber.sort()

// console.log(arrayString, arrayNumber)

const arrayNumber = [9,1,4,76,1,34,2,8,55,13,68,45,21,16,34,83]
console.log(arrayNumber)

arrayNumber.sort()
console.log(arrayNumber)

// Alterando em ordem decrescente de duas formas. O .reverse é mais simples.
arrayNumber.sort(function(a,b){return b -a})
console.log(arrayNumber)

arrayNumber.reverse()
console.log(arrayNumber)


// Continuação exercicio:

arrayNumber.pop()
console.log(arrayNumber)

arrayNumber.push(99)
console.log(arrayNumber)

arrayNumber.splice(2,1)
console.log(arrayNumber)


