function mostraHora(){
let data = new Date();

return data.toLocaleTimeString('pt-BR',
{
  hour12: false  
    });
}

console.log(mostraHora());


setInterval(function(){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 10000);