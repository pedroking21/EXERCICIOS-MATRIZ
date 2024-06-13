/* 5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.
Nome: Pedro Otávio Camolesi */

console.clear()
let teclado = require (`Prompt-sync`)();
let matriz: number[][] = [];

let linha = 3;
let coluna = 3;

for (let x = 0; x < linha; x++){
    matriz [x] = [];

    for (let y = 0; y < coluna; y++){
        let numColuna: number = parseInt(teclado(`Digite um número para ser armazenado no endereço [${x}, ${y}]: `));
        matriz[x][y] = numColuna
    }
}
