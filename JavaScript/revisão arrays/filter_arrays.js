
let array = [5, 50, 80, 9, 1, 2, 3, 5, 22, 27,10];




let novoArray = array.filter((valor) => valor > 10);

console.log(novoArray);

const pessoas = [
    {nome: 'Lucas', idade: 12},
    {nome: 'Marcia', idade: 14},
    {nome: 'André', idade: 17},
    {nome: 'Jana', idade: 8},
    {nome: 'Marcos', idade: 51},
];

let terminaComA = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith('a'));
console.log(terminaComA);

