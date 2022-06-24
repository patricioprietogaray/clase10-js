// tipo de dato BOOLEAN

let verdadero=true;
let falso=false;

console.log(verdadero);
console.log(falso);

console.log("---------------------------------");
// operadores de comparacion que devuelven valores booleanos

let mayorQue = 1 > 2;
let menorQue = 2 < 3;

let mayorOIgualQue = 10 >= 10;
let menorOIgualQue = 10 <= 10;

console.log(mayorQue);
console.log(menorQue);
console.log(mayorOIgualQue);
console.log(menorOIgualQue);
console.log("---------------------------------");

// comparacion doble igual y triple igual
let operadorDeIgualdad = 1 == '1';
console.log("comparacion == es igual a "+operadorDeIgualdad);
// compara si el dato es igual al otro (conversion de por medio)
// o sea que el sistema lo convertira primero si es necesario
// y luego hará la comparación

let operadorDeEstrictaIgualdad = 1==='1';
console.log("comparacion === es estrictamente igual a (con su tipo) "+operadorDeEstrictaIgualdad);

console.log("---------------------------------");

let operadorDeDiferencia = 1 != '1';
let operadorDeDiferenciaEstricta = 1 !== '1';

console.log("operador de diferencia entre 1 y '1': "+operadorDeDiferencia);
console.log("operador de diferencia estricta entre 1 y '1': "+operadorDeDiferenciaEstricta);

console.log("---------------------------------");

// no es un numero
let resp = "hola" * 2.5;
console.log("Una operación imposible: Hola * 2.5 = "+resp+" (Not a Number o no es un numero)");

console.log("---------------------------------");

let valorNulo=null;
console.log("valor nulo: "+valorNulo);
// se utiliza cuando se desea dejar vacio adrede, cuando el usuario
// deja un dato sin llenar en una tabla.

// dato indefinido
// esto es un error del programador
let indefinido;
console.log("dato indefinido: "+indefinido);