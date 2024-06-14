// Entrada de Dados
// Testar arquivo em browser.js
// Comando prompt nao funciona dentro do terminal do node.

// Para ler via terminal e preciso instalar bibliotecas.
// npm install readline-sync

//Carregando a biblioteca
// const readlineSync = require("readline-sync")


//Carregando a biblioteca
const prompt = require("readline-sync")

const nome = prompt.question("Qual o seu nome?");
// console.log("Seu Nome e:", nome);
const sobrenome = prompt.question("Qual o seu Sobrenome?");
// console.log("Seu Sobrenome e:", sobrenome);

console.log("Seu Nome e:", nome);
console.log("Seu Sobrenome e:", sobrenome);




//Mostara a resposta na tela
// document.write("Seu nome e: ", nome);


