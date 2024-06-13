/* 5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.
Nome: Pedro Otávio Camolesi */
console.clear();
var teclado = require("Prompt-sync")();
var matriz = [];
var linha = 3;
var coluna = 3;
for (var x = 0; x < linha; x++) {
    matriz[x] = [];
    for (var y = 0; y < coluna; y++) {
        var numColuna = parseInt(teclado("Digite um n\u00FAmero para ser armazenado no endere\u00E7o [".concat(x, ", ").concat(y, "]: ")));
        matriz[x][y] = numColuna;
    }
}
