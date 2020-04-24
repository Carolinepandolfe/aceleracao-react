'use strict'


//0,1,2,3,5,8,13,

let sequencia = [0,1];

const fibonacci = () =>{
    
    for (let i = 2; i<=10; i++){
        sequencia.push(sequencia[i - 2] + sequencia[i - 1])
    }
    return sequenciaFibbo;
}
let sequenciaFibbo = sequencia;



const isFibonnaci = (searchElement) => {
    if(sequenciaFibbo.includes(searchElement)){
        return true
    }
    else{
        return false
    }
}


module.exports = {
    fibonacci,
    isFibonnaci
}


