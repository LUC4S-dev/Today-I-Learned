// atribuição por desestruturação
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
const [n1,n2,n3,n4, ...resto] = numeros;

console.log(n1,n2,n3);