//função construtora -> ibjetos
//função fabrica -> objetos
//construtora -> Pessoa (new)



function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () =>{
        console.log( this.nome + ' É um método');
    };

}

const p1 = new Pessoa ('Lucas', 'Siqueira');
const p2 = new Pessoa ('Irineu', 'kawgklw');  
p1.metodo();