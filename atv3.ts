/* 3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas.
Nome: Pedro Otávio Camolesi */

console.clear();

let teclado = require (`prompt-sync`)();
let minhaMatriz: string[][] = []; // declarando matriz

let linha = 2;
let coluna = 4;

// z percorre as linhas 
for (let z = 0; z < linha; z++) {
    // Criar um Array vazio para preencher a linha correspondente ao z
    minhaMatriz[z] = []

    for (let x = 0; x < coluna; x++) {
        // Atribuição via entrada de dados manual na variavel número
        let numero: string = teclado(`Digite o número que vai estar no endereço [${z}, ${x}] da matriz: `);

        // Atribui a variavel número a minhaMatriz do endereço dado por z e x
        minhaMatriz[z][x] = numero;
    }
}
// declara a matriz
console.log(minhaMatriz);