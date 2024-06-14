// Estruturas de controle de fluxo

// Para ler via terminal e preciso instalar bibliotecas.
// npm install readline-sync

//Carregando a biblioteca
const prompt = require("readline-sync")
const idade = Number(prompt.question("Qual e a sua idade?"));
const eMaiorDeIdade = idade >= 18;

//Estrutura condicional: if/else
// Ex1
if(eMaiorDeIdade) {
    console.log("Voce e Maior de idade!");
} else {
    console.log("Voce e Menor de idade!");
}

// Ex2

// Media >= 7 => aprovado.
// Media < 7 && Media >= 5 => Prova Final.
// Media < 5 => Reprovado.

const mediaAluno = 6.9;
if(mediaAluno >= 7){
    console.log("Aprovado!");
} else if (mediaAluno >=5){
    console.log("Final!");
} else {
    Console.log("Reprovado!");
}


// Ex3
// Regras para dirigir
// Preciso ser maior de idade
// Preciso ter CNH
const idadePessoa = 18;
const temCnh = true;
if(idadePessoa >= 18 && temCnh){
    console.log("Voce pode dirigir.");
} else {
    console.log("Voce nao pode dirigir.");
}


// Switch Case

const permissoes = "aluno"; // aluno || professor || admin
switch(permissoes){
    case "aluno":
        console.log("Voce pode visualisar as aulas.");
        break;

    case "professor":
        console.log("Voce pode visualizar e alterar as aulas.");
        break;

    case "admin":
        console.log("Voce pode modificar todo o sistema.");
        break;

    default:
    console.log("Usuario nao identificado.");
}




// Operador Ternario

const idadeT1 = 21;
idadeT1 >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");

const idadeT2 = 16;
const mensagem2 = idadeT2 >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem2);

const idadeT3 = 18;
const mensagem3 = idadeT3 >= 18 ? "Obrigado a votar" : idadeT3 >= 16 ? "Ja pode votar" : "Nao pode votar";
console.log(mensagem3);