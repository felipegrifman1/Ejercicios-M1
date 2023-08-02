'use strict';

function BinarioADecimal(num) {
   let numero = 0;
   let numeroFinal = num.split("").reverse();


   for (let i = 0; i < numeroFinal.length; i++){
      numero = numero + numeroFinal[i] * 2 ** i;
   }
   return numero
}

function DecimalABinario(num) {
   let resultado = "";
   while (num > 0){
    num % 2
   ? resultado = '1' + resultado
   : resultado = '0' + resultado
   num = Math.floor(num / 2);
   }
   return resultado
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
