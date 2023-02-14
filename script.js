 /* const meuArray = [26, 'joao', false]
//                0      1      2

const primeiroElemento = meuArray[0]
const segundoElemento = meuArray[1]
const terceiroElemento = meuArray[2]

console.log(primeiroElemento, segundoElemento, terceiroElemento)
 */

//  PRATICA GUIADA 1

/* Crie um array com 3 itens do tipo String
Crie um array com 3 itens do tipo Number
Crie um array com uma String, um número e um booleano;
Crie um array com apenas um valor. Um número.
Crie um array sem nenhum valor dentro. */

const minhasStrings = ['copo', 'plantas', 'vinho']

const meusNumeros = [24, 29 ,10]

const minhaListaDeCoisas = ['Ted', 5, true]

const meuNumeroSolitario= [2023]

const meuArraySolitario = []

// PRATICA GUIADA 2


// Cheque o length do primeiro array. O que acontece 
// se tentarmos acessar o índice 3 deste array?

const tamanhoMinhasStrings = minhasStrings.length
//console.log('Tamanho do array minhas strings' +tamanhoMinhasStrings)

const quartoElementos = minhasStrings[3]
//console.log(`Valor que esta na posição 3 do array minhasstrings ` + quartoElementos)


// Verifique se o terceiro array inclui cada um dos itens;

const temCoisa = minhaListaDeCoisas.includes('Ted')
//console.log(`minhalistadecoisas inclui 'Ted'`, temCoisa)

const temCoisa2 = minhaListaDeCoisas.includes(5)
//console.log(`minhalistadecoisas inclui 5`, temCoisa2)

const temCoisa3 =  minhaListaDeCoisas.includes(true)
//console.log(`minhalistadecoisas inclui True`, temCoisa3)

// No quarto array, imprima o valor do único item.

const valorItemUnico = meuNumeroSolitario[0]
//console.log(`Qual o valor do arrau meuarraysolitario ${valorItemUnico}`)

const tamanhoMeuNumeroSolitario = meuNumeroSolitario.length
//console.log(`Qual o tamanho da lista meunumerosolitario ${tamanhoMeuNumeroSolitario}`)

//Observe qual o seu índice, e imprima seu tamanho.


// PRATICA GUIADA 3


/* Crie uma cópia do primeiro array, utilizando a atribuição com 
sinal de igual.
Faça push() de uma nova string no array copiado
Imprima os dois arrays. Há diferença?
Como podemos resolver isso?
Com o array copiado corretamente, remova os itens dos índices
 2 e 3 do array copiado.
Imprima novamente ambos os arrays
*/

// Crie uma cópia do primeiro array, utilizando a atribuição com 
//sinal de igual.
 
const minhasStringsCopiaErrada = minhasStrings

//Faça push() de uma nova string no array copiado
//Imprima os dois arrays. Há diferença?

minhasStringsCopiaErrada.push('livro')

//Imprima os dois arrays. Há diferença?

//console.log('Array original : ' + minhasStrings)
//console.log('Copia : ' + minhasStringsCopiaErrada)

const minhasStringsCopiaCerta = minhasStrings.slice()
 //console.log('copia certa : ' + minhasStringsCopiaCerta)



//Com o array copiado corretamente, remova os itens dos índices
 //2 e 3 do array copiado.

 
 minhasStringsCopiaCerta.splice(2, 3)

 //console.log('Array original : ' + minhasStrings)

 //console.log('Copia Certa pos Splice : ' + minhasStringsCopiaCerta)

//


/* Crie um array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.

Depois disso, crie uma cópia deste array utilizando o método slice().

No array copiado: 
Remova o último item 
Adicione o número 6 no fim do array
Remova o número que está no índice 2 do array
Por fim, imprima os dois arrays */

const meuArrayDeNumeros = [1, 2, 3 , 4, 5]
const copiaMeuArrayDeNumeros = meuArrayDeNumeros.slice()


copiaMeuArrayDeNumeros.pop()
copiaMeuArrayDeNumeros.push(6)
copiaMeuArrayDeNumeros.splice(2, 1)

console.log(meuArrayDeNumeros)
console.log(copiaMeuArrayDeNumeros)
