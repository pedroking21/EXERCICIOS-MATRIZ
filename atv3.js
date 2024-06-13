/* 3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas. */
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = []; // declarando matriz
var linha = 2;
var coluna = 4;
// z percorre as linhas 
for (var z = 0; z < linha; z++) {
    // Criar um Array vazio para preencher a linha correspondente ao z
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        // Atribuição via entrada de dados manual na variavel número
        var numero = teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(z, ", ").concat(x, "] da matriz: "));
        // Atribui a variavel número a minhaMatriz do endereço dado por z e x
        minhaMatriz[z][x] = numero;
    }
}
// declara a matriz
console.log(minhaMatriz);
