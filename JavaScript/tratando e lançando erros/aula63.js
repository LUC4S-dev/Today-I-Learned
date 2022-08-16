
// Try and catch
try{
    console.log(naoExisto);
}   

catch(err){
    console.log("naoExisto NÃO EXISTE");
   console.log(err);
}

// Throw

function soma(x, y){
    if( typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('x e y precisam ser números.')
    }

    return x + y;
}

