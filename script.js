/* //resumo

const variavel = "olá"

const arrayDeCoisas = ["Olá", "Bom dia", "Como vai?", 1, 3, 4, 5 ]
// indice               0       1        2          3  4  5  6 ......
// declaração=[]

//acessar informação
console.log(arrayDeCoisas[2]) */
//array.length = verifica a quantidade de itens
//array.includes() = serve para encontrar um item no array
//array.indexOf() = Encontra o indice de um item


//Exercício prática
function imprimirArray (){
  //digite a sua solução aqui
  const testeStrings = ["Gabigol", "Bruno Henrique", "De Arrascaeta"]
  const testeNumeros = [27, 33, 29]
  const testeMisto = ["Flamengo", 2019, true]
  const testeUnitario = [2022]
  const testeVazio = []
  
  //prática 1
  console.log(testeStrings[2])
  //prática 2
  console.log(testeStrings.length)
  console.log(testeMisto.includes("Flamengo"))
  console.log(testeMisto.includes("2019"))
  console.log(testeMisto.includes(2019))
  console.log(testeMisto.includes(true))
  console.log(testeUnitario[0], testeUnitario.indexOf(2022), testeUnitario.length)
  console.log(testeNumeros[0], testeNumeros.indexOf(27), testeNumeros.length)

  //prática 3




}


imprimirArray()