//Array 1
const strings = ['Caneta','Régua','Isqueiro']

// Array 2
const numeros = [2, 13, -78]

// Array 3
const arrayMisto = ['bloquinho de notas', 4, true]

// Array 4
const numeroUnico = [1985]

// Array 5 
const arrayVazio = []

//PRÁTICA GUIADA
//Imprimindo o tamanho do Array 1
console.log(`TAMANHO DO ARRAY STRING`,strings.length);
console.log(`ACESSANDO O ITEM ÍNDICE 3`,strings[3]);
console.log('ACESSANDO O ITEM ÍNDICE 3',strings[2]);
console.log('ACESSANDO O ITEM ÍNDICE 3',strings[1]);
console.log('ACESSANDO O ITEM ÍNDICE 3',strings[0]);

//VERIFIQUE ITEMS DO ARRAY 3
console.log(arrayMisto.includes(4))
console.log(arrayMisto.includes('bloquinho de notas'))
console.log(arrayMisto.includes(true))

//IMPRIMINDO ITEM UNICO ARRAY 4
console.log(`ITEM ARRAY 4`,numeroUnico[0])
console.log(`TAMANHO ARRAY 4`,numeroUnico.length)

//PRÁTICA GUIADA PARTE 3
//Manipulção de ARRAYS

//Cópia do array 1 usando sinal de igual

const copiaStrings = strings.slice()
console.log(strings)
console.log('Cópia de strings:', copiaStrings)

copiaStrings.push('Agenda')
console.log(strings)
console.log('Cópia de Strings:', copiaStrings)

//Removendo os itens do indice 2 e 3 do copiaStrings
copiaStrings.splice(2, 2)
console.log('Cópia índice depois da remoção', copiaStrings)

// Ordenando Array 1

console.log('array strings antes da ordenação', strings)

strings.sort()
console.log('Array strings depois da ordenação', strings)

numeros.sort()
console.log('Array strings depois da ordenação', numeros)



//EXERCÍCIO DE FIXAÇÃO - 27-07-2022 Aula Mazzi

//Criação da variável com os arrays
const novoArray = [57, 24, 32, 1, 350]
console.log('Meu array original', novoArray)    

//Ordem crescente
novoArray.sort()
console.log('Meu novo array em ordem crescente', novoArray)

//Ordem reversa
novoArray.reverse()
console.log('Meu array em ordem reversa', novoArray)

//Removendo último item
novoArray.pop()
console.log('Removi o último item do array', novoArray)

//Adicionando número 6 ao array
novoArray.push(6)
console.log('Adicionei o número 6 ao array', novoArray)

//Removendo índice 2 do array
novoArray.splice(2,1);
console.log('Número do índice 2 foi removido', novoArray)
