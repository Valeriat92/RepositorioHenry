function sumaTres(x){
    console.log( x + 3);
}

sumaTres(5);

//diferentes formas de definir funciones


function sumaTres(x){
    return x  + 3;
};


var sumaTres = function(x){
    return x + 3;
};

var sumaTres = (x) => {
    return x+3;
};

//las funciones siempre tienen que tener el return que es el valor que queremos que nos devuelva la misma
//el return termina la ejecución, todo lo que esté por debajo del return no se va a ejecutar.

//los parametros son palabras claves que nos permiten introducir información externa dentro de una función. 

//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
  }

  //Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
console.log (c); 