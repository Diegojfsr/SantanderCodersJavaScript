// Declaracao de Variaveis


var nome = "Diego"; //string
var idade = 27; //number
var altura = 1.75;  //number
var estudando = true; //boolean


var nomeSobrenome = "Diego Jefferson"; //string camelcase


// Variavel nao comeca com numero nem simbolos
// camelcase
// Tipagem dinamica
// Tipagem fraca
// Case sensitive

console.log("Nome: ", nome,"variavel tipo: ", typeof nome);
console.log("Idade: ", idade, "variavel tipo: ", typeof idade);
console.log("Altura: ", altura, "variavel tipo: ", typeof altura);
console.log("Estudando: ", estudando, "variavel tipo: ", typeof estudando);


var semConteudo;    //Declarando uma variavel sem atribuir conteudo a ela.(undefined)

// Declarando mutiplas variaveis na mesma linha 
 var curso = "Frontend em React", topico = "JavaScript Basico I";
console.log(curso,"e tambem", topico);


// Escopos: var, let, const

let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9;
// mediaDoAluno = 5; // nao e permitido alterar const

console.log(notaDoAluno, mediaDoAluno);



// Hoisting e Escopos
 
console.log(notaDoAlunoVar); //variavel do tipo var e carregada antes de ser declarada. Variavel do tipo Var tem escopo global.

// let notaDoAlunoLet = 9;
// console.log(notaDoAlunoLet); //variavel do tipo let dara um erro, ela tem que ser declarada primeiro. Variavel do tipo let tem escopo local.

var notaDoAlunoVar = 8; //Pode ser declarada opos ser impressa.
let notaDoAlunoLet = 9; //Tem que ser declarada antes de ser impressa.









