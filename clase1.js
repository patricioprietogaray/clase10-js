// codigo en limpio
// declaracion de variables
// sintaxis vieja
// VAR

// no arroja error si no se declaro
console.log(variable);

// Declarar una variable es asignarle un lugar
// en la memoria, ej:
var nombre;
console.log('Variable declarada', nombre);

// inicializar una variable
nombre="Horacio";
console.log('Variable inicializada', nombre);

// variable actualizada
nombre="Raúl";
console.log('Variable actualizada', nombre);

// Declarar e inicializar es asignarle un lugar
// en memoria y cargarle un dato, ej:
var nombre="Cristian";
console.log('Variable declarada e inicializada', nombre);

// arroja error si no se declaro para LET
// CONST
console.log(variable);

// tipo de dato STRING
// sintaxis nueva
// LET

// Declarar una variable es asignarle un lugar
// en la memoria, ej:
let nombre;
console.log('Variable declarada', nombre);

// inicializar una variable
nombre="Horacio";
console.log('Variable inicializada', nombre);

// también puedo actualizar el valor
nombre="Raúl";
console.log('Variable actualizada', nombre);

// la variable no puede ser redeclarada
let nombre="Raúl";
console.log('Variable actualizada', nombre);


// tipo de dato STRING
// sintaxis nueva con CONST

// Declarar una constante es asignarle un lugar
// en la memoria y debe ser asignada en el mismo momento, ej:
const nombre="pepe";
console.log('Constante declarada e inicializada', nombre);

// no se puede actualizar el valor
// primitivo de una variable
nombre="Raúl";
console.log('No se puede actualizar', nombre);

/////////////

// tipo de dato string

const estoEsUnString = "Texto Corto";
console.log('estoEsUnString:', estoEsUnString);


// en este caso el lorem solo se ejecuta en el 
// html no en js
const estoEsUnString2 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem maiores, illo amet cupiditate rem debitis sunt dolore ut delectus ex fugiat similique recusandae incidunt dignissimos vitae, ratione ab? Facilis, velit?";
console.log('estoEsUnString2:', estoEsUnString2);

// el interprete deja acceder a los valores primitivos como se fueran
// valores compuestos (metodos y propiedades) es por ello que los
// valores primitivos tienen un acceso a ciertas propiedades.
console.log('longitud de la variable estoEsUnString es:',estoEsUnString.length);
console.log('longitud de la variable estoEsUnString2 es:',estoEsUnString2.length);

// propiedad lenght (sin parentesis)
console.log('propiedad .length',estoEsUnString.length);

// metodo toUpperCase con parentesis
console.log('metodo .toUpperCase()', estoEsUnString.toUpperCase());


/////////////

concatenar con tipo de datos string

const nombre='Sherlock', apellido='Holmes';

// atenti: const c1=dato, c2=dato; es igual a 
// const c1=dato;
// const c2=dato;

// operador + concatena strings
const saludo="Hola mi nombre es: "+nombre+' '+apellido+".";
console.log(saludo);

// otra forma de concatenar usando basticks ``
const saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`;
console.log(saludo2);
1:34

///////

// tipo de dato "NUMBER"

let numero=2022,
    numeroNegativo=-32,
    numeroConDecimales=3.14159;

console.log(numero);
console.log(numeroNegativo);
console.log(numeroConDecimales);

console.log(`numero ${numero} transformado a con el método .toString ${numero.toString()}.`);

const numero2=234;
const suma = numero + numero2;

console.log(`la suma de ${numero} y ${numero2} es ${suma}.`);


// concatena los numeros y no los suma
let num1 = 24;
let num2 = '64';
let sumita=num1+num2;
console.log(sumita);


// ahora resta los numeros los numeros pero antes los conviente
let num01 = 24;
let numString = '64';
let resta=num1-num2;
console.log(resta);

// js elige que hacer en el primer caso + es sumar y concatenar y por lo tanto
// al otro valor lo conviente en string

// en el segundo caso - es solo resta y por lo tanto transforma el otro string
// en numero y luego realiza la operación

// con la multiplicacion y la division hace lo suyo. 

// problemon como solucionamos?
// se puede redefinir
let num001 = 24;
let num002 = '64';
    num002=64; // redefino la variable
let sumitas=num001+num002;
console.log(sumitas);

// lo anterior con definicion de tipos da error
let num0001 = 24;
let num0002 = '64';

//num0002=num0002.Number;   //NaN
num0002=Number(num0002); //transformo un string en numero
    // num0002=64; // redefino la variable
let sumitass=num0001+num0002;
console.log('ultimo: '+sumitass);   

//

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