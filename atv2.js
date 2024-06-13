console.clear();
var teclado = require("prompt-sync")();
// declarando matriz usando o construtor array limitando a 3 linhas
var matrizDois = new Array(3);
for (var i = 0; i < 3; i++) {
    //Cria um Array vazio para preencher a linha correspondente ao i limitando a 3 linhas 
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 4; j++) {
        //Atribuindo via entrada de dados manual na variável nome
        var nome = teclado("Digite o nome que vai estar no endere\u00E7o [".concat(i, ", ").concat(j, "] da matriz: "));
        //Atribui na minha Matriz do endereço dado por i e j
        matrizDois[i][j] = nome;
    }
}
// imprime o matriz
console.log(matrizDois);
