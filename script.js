
//criação de array

//array 1
const strings = ['mamão', 'uva', 'maçã']

//array 2
const number = [1, 25, 10]

//array 3
const mista = [15,'marcos',true]

//array 4
const soUm = [1984]

//array 5
const vazio = []


//imprimimdo o tamanho array

console.log('O tamanho da string é:', strings.length)
console.log('Indice 3 do array:', strings[3]) //undefenid pois não existe indice 3 visto que em array iniciamos a contagem sempre do zero. No caso do exemplo temos um indice que vai de 0 a 2. 
console.log('Possui?', mista.includes(15))
console.log('Possui?', mista.includes('marcos'))
console.log('Possui?', mista.includes(true))
console.log('O valor do item é:', soUm[0])
console.log('O tamamnho da array 4 é:', soUm.length)

//variável.length = Imprime o tamanho de uma array
//variável.includes() = Faz uma verificação do código e retorna true or false em um item

//MANIPULAÇÃO

//const copiaStrings = strings
copiaStrings = strings.slice()
console.log('Original:', strings)
copiaStrings.push('pera')
console.log('Cópia alterada:', copiaStrings)
copiaStrings.splice(2,2)
console.log('Array alterado com remoção', copiaStrings)

//ordenando array

console.log('Antes da ordenação', strings)
strings.sort()
console.log('Depois da ordenação', strings)
console.log('Antes da ordenação dos números', number)
number.sort()
console.log('Após a ordenação com sort', number)

//o sort ordena apenas de maneira alfabética, incluindo números, ou seja, número com mais de um caracter serão ordenados levando em consideração apenas o primeiro carcter.

//FIXAÇÃO

novoArray = [10, 548, 950, 42, 5]
console.log('Original', novoArray)
novoArray.sort()
console.log('Ordenado', novoArray)
novoArray.reverse()
console.log('Modo reverso', novoArray)
novoArray.pop()
console.log('Removido último array', novoArray)
novoArray.push(6)
console.log('Adicionado novo número', novoArray)
novoArray.splice(2,1)
console.log('Resultado final',novoArray)

