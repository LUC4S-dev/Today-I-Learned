let nomes1 = ['Lucas', 'Julia', 'Bianca']
let nomes2 = ['Sérgio', 'Macário', 'Cida']

//console.log(`${nomes1}, ${nomes2}`);

// ou 
let nomes3 = nomes1.concat(nomes2);
// console.log (nomes3);

// ou
nomes3 = [...nomes1, ...nomes2];
// console.log(nomes3);

let bagunca = [100,1,4,6,2242,9];
bagunca.sort((a,b) => a-b);
console.log(bagunca);