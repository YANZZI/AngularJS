(function() {
    'use strict'

var numero, num;
console.log("Digite un numero");
ParImpar (68);
function ParImpar(num){
    for(numero = 0; numero < num; numero ++){

        if(numero %2 == 0){
            console.log("Par:", numero);

        }else{console.log ("Impar : ", numero);}
    }

}
})();