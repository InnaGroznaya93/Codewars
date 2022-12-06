let calculate = function(args3){
    let sum = 0;
     for(let i = 0; i < arguments.length; i++) {
       sum += arguments[i];
     }
     return function(args2) {
       for(let j = 0; j < arguments.length; j++) {
         sum +=arguments[j]
       }
        return sum
     } 
   }