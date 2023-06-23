// questão esquenta

const meuArray = [24, 'jordana', false]
// indices         0      1       2
const primeiroElemento = meuArray[0]
const segundoElemento = meuArray[1]
const terceiroElemento = meuArray[2]
console.log(primeiroElemento,segundoElemento,terceiroElemento)

/*Prática guiada I
Crie um array com 3 itens do tipo String
Crie um array com 3 itens do tipo Number
Crie um array com uma String, um número e um booleano;
Crie um array com apenas um valor. Um número.
Crie um array sem nenhum valor dentro.*/

const minhasStrings = ['livro', 'caneta', 'vinho']


const meusNumeros = [7, 19, 89]

const minhaListaDeVariasCoisas = ['Belchior', 19, true]

const meuNumeroSolitario = [7]

const nenhumValor = []

/* prática guiada II
Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?
Verifique se o terceiro array inclui cada um dos itens;
No quarto array, imprima o valor do único item. 
Observe qual o seu índice, e imprima seu tamanho.*/

const tamanhoMinhasStrigs = minhasStrings.length
console.log(`Tamanho do array minhasStrings`, tamanhoMinhasStrigs)

const quartoElementoMinhasStrings = minhasStrings[3]
console.log(`Valor que está na posição 3 do array minhasStrings:`, quartoElementoMinhasStrings)

const temBelchior = minhaListaDeVariasCoisas.includes('Belchior')
console.log(`MinhaListaDeVariasCoisas inclui 'Belchior'?`, temBelchior)

const temDois = minhaListaDeVariasCoisas.includes(2)
console.log(`minhaListaDeVariasCoisas inclui 2?,`, temDois)

const temTrue = minhaListaDeVariasCoisas.includes(true)
console.log(`minhaListaDeVariasCoisas inclui true?`, temTrue)

const valorItemUnico = meuNumeroSolitario[0]
console.log(`Qual o valor do 'número solitário?'`, valorItemUnico)

const tamanhoMeuNumeroSolitario = meuNumeroSolitario.length
console.log(`Qual o tamanho da lista meuNumeroSolitario?`, tamanhoMeuNumeroSolitario)

/* prática guiada III
Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
Faça push() de uma nova string no array copiado
Imprima os dois arrays. Há diferença?
Como podemos resolver isso?
Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
Imprima novamente ambos os arrays*/

const minhasStringsCopiaErrada = minhasStrings

minhasStringsCopiaErrada.push('livro')

console.log(`Array original`, minhasStrings)
console.log(`Cópia ERRADA`, minhasStringsCopiaErrada)

const minhaStringsCopiaCerta = minhasStrings.slice()
console.log(`Cópia CERTA`, minhaStringsCopiaCerta)

minhaStringsCopiaCerta.slice(2, 2)

console.log(`Array Original`, minhasStrings)
console.log(`Cópia CERTA pós splice():`, minhaStringsCopiaCerta)


// exercício de fixação:
/*Crie um array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.

Depois disso, crie uma cópia deste array utilizando o método slice().

No array copiado: 
Remova o último item 
Adicione o número 6 no fim do array
Remova o número que está no índice 2 do array
Por fim, imprima os dois arrays*/

const minhaListaDeNumeros = [7, 15, 37, 4, 1979, 55]

const minhaListaDeNumerosCopia = minhaListaDeNumeros.slice()

minhaListaDeNumerosCopia.pop()

minhaListaDeNumerosCopia.push(6)

minhaListaDeNumerosCopia.splice(2, 1)

console.log(`Original:`, minhaListaDeNumeros)
console.log (`Cópia:`, minhaListaDeNumerosCopia)





