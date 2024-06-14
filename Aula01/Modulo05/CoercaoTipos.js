// Coersao de Tipos (Conversao de Tipos)

// Coersao Explicita(de forma manual)

const prompt = require("readline-sync");
const idade = prompt.question("Qual e a sua idade");

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);


// Tipo de conversao
console.log(Number("x")); // NaN: not a number
console.log(String(10));
console.log(String(10), typeof String(10));

console.log(Boolean(2));
console.log(Boolean(0));



// Coersao Implicita

console.log(1 + "1");
console.log("10" - 5);
console.log(10 - "5");
console.log(10 * "5");
console.log(10 / "5");

// Praticando

//Qual sera a saida desse codigo?
let n = 1 + "1" //11 string
n = n - 1       // 11 - 1 = 10 number
console.log(n); //10 number

//Qual sera a saida desse codigo?
console.log(2 + 3 + 4 + "5") // 9 number + 5 string = 95 string

//Qual sera a saida desse codigo?
console.log("5" + 2 + 3 + 4); // 5 string + 2 string + 3 string + 4 string = 5234 string

console.log("10" - "4" - "3" - 2 + "5")

// 10S - 4S = 6S
// 6S - 3S = 3S
// 3S - 2N = 1S
//1S + 5S = 15S