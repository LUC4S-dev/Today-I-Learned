
// map vai alterar a estrutura do array
 
const numero = [5,10,80,1,2,3,5,6];

const dobro = numero.map((e) => e*2);

console.log(dobro);

const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome: 'Lucas', idade:21},
    {nome: 'Gabriel', idade:19},
    {nome: 'Marcos', idade:44},
    {nome: 'Maria', idade:13},
    {nome: 'Julia', idade:20},
];

const nomes = pessoas.map((valor) => valor.nome);

console.log(nomes);

const comIds = pessoas.map((obj, i) =>{
    obj.id = (i+1);
    return obj;
});
console.log(comIds);

