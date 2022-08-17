const listaDePecas = ['Mola', 'Amortecedor', 'Cubo']

console.log("..................")
console.log("Início da listagem")
console.log("..................")

let pesoPeca = 99
if (pesoPeca > 100) {console.log("Peso correto, peça pode ser cadastrada")}
else {console.log("peso incorreto, peça não pode ser cadastrada")}

console.log("..................")

let quantidadeDePeca = 11
if (quantidadeDePeca > 10) {console.log("Ultrapassou quantidade por caixa, não foi possível cadastrar a peça")}
else {console.log("Quantidade correta, peça pode ser cadastrada")}

console.log(".................")
console.log("Final da listagem")
console.log(".................")

for(let index = 0; index < listaDePecas.lenght; index++) {
    const nomePeca = listaDePecas[index];
    if(nomePeca.lenght < 3) {console.log("Peça não encontrada, não pode ser cadastrado")}
    else{console.log("Peça encontrada, pode ser cadastrado")}
}

console.log(".................")