function mostra(msg){
    console.log(msg)
}

console.log('ola')
const arrayStrings = ['Orci', 'Ana','Arthur']
const numeros = [46,43,10]
const misto =['Orci', 46, true,'Orci', 46, true,'Orci', 46, true]
const unico = [1]
const vazio = []
console.log(arrayStrings)
console.log(arrayStrings[0])// mostra o elemento do indice [0] do array
console.log(typeof unico[0])// mostra o tipo de elemento no indice [0]
    const teste = arrayStrings[1]
    console.log(teste)
console.log(numeros.includes(46))// pra ver se o elemento 46 esta no array, retorna True ou False
console.log(arrayStrings.length)// mostra o numero de elementos dentro do array
console.log(arrayStrings[arrayStrings.length-1])
const copyMisto = misto
console.log(misto)
console.log(copyMisto)
const copyMisto2 = copyMisto.slice()
copyMisto2.push('Ana')
console.log(copyMisto2)
copyMisto2.unshift('Guto')// adiciona ao inicio do array
console.log(copyMisto2)
console.log(copyMisto2.join(" "))// .join concatena o array em uma string
copyMisto2.splice(1,2)// exclui apartir do indice 1 dois elementos
const novoArray = copyMisto2.splice(2,3)// cria um array com os itens selecionados do array copyMisto2
console.log(novoArray)
mostra(novoArray)
console.log('-=-*')
console.log(copyMisto2)
//copyMisto2.push(prompt('Insira um item'))
console.log(copyMisto2)
console.log(numeros.sort())


// exercicios de fixaçao

const apenasNumeros = [1,5,2,4,3,6,7,8,9]
const copiaApenas = apenasNumeros.slice()// copia sem alterar o primeiro
console.log(copiaApenas)//
copiaApenas.pop()// remove o ultimo item
console.log(copiaApenas)
copiaApenas.push(6)// adiciona 6 ao final
console.log(copiaApenas)
copiaApenas.splice(2,1)// exclui item apartir do item 2 que é o indice 1
console.log(copiaApenas)
console.log('-=-')
mostra(copiaApenas)