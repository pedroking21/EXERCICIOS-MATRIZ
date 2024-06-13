console.clear();
let teclado = require (`prompt-sync`)();
// declarando matriz usando o construtor array limitando a 3 linhas
let matrizDois: string[][] = new Array(3);

for (let i = 0; i < 3; i++){
    //Cria um Array vazio para preencher a linha correspondente ao i limitando a 3 linhas 
    matrizDois[i] = new Array(3);

    for (let j = 0; j < 4; j++){
        //Atribuindo via entrada de dados manual na variável nome
        let nome: string = teclado(`Digite o nome que vai estar no endereço [${i}, ${j}] da matriz: `);

        //Atribui na minha Matriz do endereço dado por i e j

        matrizDois[i][j] = nome;
    }
}

// imprime o matriz
console.log(matrizDois);