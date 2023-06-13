//console.log('Hola Lauty')

// Clase 1 - Introducción 

// Palabras reservadas
//var-break-const-instanceof-etc. 

// Variables y valores -  caja <-- tipos de datos(string)
//var nombre = 'lauty'
//let apellido = 'amezaga'
//const CURSO = 'JAVASCRIPT'
//const curso = 'No es Java'

// Declaracion
//let apellido
//var nombre
//const curso (no se puede)

//var nombre_apellido
//var nombreApellidoAnio //camel case
//var NombreApellidoAnio //pascal case
// incorrecto
//var nombre y apellido

// Asignacion
//let edd = 30

// Inicializando variables
//const edad1 = 30
//
// reasignar
//edad =35
//edad1 = 35

// no usar variables creadas con var  
//porque puedo cambiar la variable desde cualquier lado


/*
let numero = 1
let numero2 = 2
const NUMERO3 = 3


let resultado = numero + numero2 // es 1+2
let resultadoResta = numero - numero2 // 1-2
let multiplicacion = numero * NUMERO3


// operaciones basicas con string 
let texto1 = 'Lautaro'
let texto2 = 'Amezaga'
const texto3 = ' '

let resultadoSuma = texto1 + texto2
let resultadoSuma1 = texto1 + 1
let resultadoSuma2 = texto1+texto3+texto2

console.log(resultadoSuma2);
*/

// Prompt
//let nombreIngresadoPrompt = prompt('Ingresar nombre, Amezaga')
//console.log(nombreIngresadoPrompthol);

// Alert
//alert('Bienvenidos a esta pagina')


// Ejemplo 
//let entrada = prompt('Ingrese una letra: ')
//let salida = 'El nombre ingresado es: ' + entrada
//console.log(salida);
//alert(salida)

// Ejemplo 2
//let entrada = Number ( prompt('Ingrese una Nombre: '))
//console.log(typeof entrada);

//let salida = entrada + 1
//console.log(salida);

// _________________________________________________________

// Clase 2 - Flujos 

// Const 
//let numero = 3
//let condition = true
// operadores lógicos
// ==, ===, >, <, >=, <=, !, !==, &&(and), ||(or)

//console.log('Hola comision 54 1');
//console.log('Hola comision 54 2');

// If estructura de control para evaluar una condición

// 3 --> '3' 
//if(numero === '3') {
//    console.log('Hola comision 54 3');
//}
//
//if(numero == 4) {
//    console.log('Hola comision 54 4');
//}

//let unColor = 'Verde'
//
//if(unColor !== 'Rojo') {
//    console.log('El color no es rojo');
//} else {
//    console.log('El color es rojo');
//}

// If sin el else, con !==. Eso se hace por buenas practicas
//if(unColor !== 'Rojo'){
//    console.log('El color no es rojo');
//}

//let nombreUsuario = prompt('Ingrese nombre de usuario: ')
//console.log(nombreUsuario);
//
//if (nombreUsuario === "") {
//    alert("No ingresaste el nombre")
//} else {
//    alert("El nombre es: " + nombreUsuario)
//}

//let edad = Number(prompt('Ingrese nombre de usuario: '))
////console.log(18);
//
//if (edad >= 18) {
//    alert('Es mayor de edad')
//} else {
//    alert('Es menor de edad')
//}

// If anidados
//let edad = Number(prompt('Ingrese la edad  del usuario: '))
//let edad = 20
//let condition = edad > 18 // --> true
//console.log(18);
//
//if (condition) {
//    alert('Es menor de edad')
//} else if(edad === 18){
//    alert('La edad es 18')
//} else if(edad > 18 ){
//    alert('La edad es mayor a 18')
//}

//if (condition) {
//    alert('Es menor de edad')
//} else {
//    alert('Es mayor de edad')
//}
//console.log(!true);

//let nombreIngresado = prompt('Ingresar el nombre')
//let apellidoIngresado = prompt('Ingresar el apellido')
//
//if ( (nombreIngresado !== '') && (apellidoIngresado !== '') ) { ''
//    //1
//    alert('Nombre: ' + nombreIngresado + 'y el apellido es: ' + apellidoIngresado)
//} else {
//    //2
//    alert('error : no has ingresado nombre y apellido')
//}

//let nombreIngresado = prompt('Ingresar el nombre')
////let apellidoIngresado = prompt('Ingresar el apellido')
//
//if ( (nombreIngresado !== '') &&  ( (nombreIngresado === 'Fede') || (nombreIngresado = 'fede') ) ) { ''
//    //1
//    console.log('El nombre es Fede')
//} else {
//    //2
//    console.log('El nombre no es fede')
//}

//let numeroPrompt1 = prompt('Ingrese un numero: ') 
//if (numeroPrompt1>1000) {
//    console.log('El numero es mayor 1000');
//}
//
//let textoPrompt = prompt('Ingrese un texto: ')
//if (textoPrompt === 'Hola'){
//    console.log('El texto ingresado es Hola');
//}
//
//let numeroPrompt2 = prompt('Ingrese otro numero: ')
//if(numeroPrompt2>=10 && numeroPrompt2 <= 50){
//    console.log('El numero esta entre 1 y 50');
//}

//_________________________________________________________________________

// CLase 3 - Ciclos

// FOR_________________________________________
//function name(params) { // funcion      --> dato --> realiza una accion
    
//}

//for ( desde; hasta; actualización) { 0,5 10 (0 - 10), (100 -1000 ), 0,1,2,3,4,5,6,7,8,9 - 0 2 4 6 8  
//    //acción
//}

// For de 0 a 9

//for(let contador = 0 ; contador < 10; contador++){ // contador++, contador+=1 --> contador, contador+1
//    alert(contador)
//}

// For de 1 a 10

//for(let contador = 1 ; contador <= 10; contador++){ // contador++, contador+=1 --> contador, contador+1
//    alert(contador)
//}

//let numeroIngresado = parseInt(prompt('Ingresar un nombre: ')) //parseInt(me convierte a entero) - Numer
//for (let i = 1; i <= 10 ; i++) {
//    let resultado = numeroIngresado * i
//    alert(numeroIngresado + 'X' + i + '=' + resultado) // '3 X 1 = 3'
//}

// Break______________________________________

//for(let index = 1; index <= 10; index++ ){ // 1 2 3 4 5 6 7 8 9 10 
//    if (index === 5) {
//        break
//    }
//    alert(index)
//}

// Continue___________________________________

//for(let index = 1; index <= 10; index++ ){ // 1 2 3 4 5 6 7 8 9 10 
//    if (index === 5) {
//        continue
//    }
//    alert(index)
//}

// WHILE (Mientas) --> se cumple una condición____________________________

//let repetir = false 
//
//while(repetir){
//    console.log('Al infinito y mas allá');
//}

//let entrada = prompt('Ingresar algun dato: ')
//while (entrada !== 'ESC') { // Fede es distinto de ESC
//    alert('El usuario ingreso: ' + entrada)
//    entrada = prompt('Ingresar otro dato: ')
//}

// Do While______________________________

//let contador = 0 
//
//do{
//console.log(contador);
//contador+=2
//} while(contador < 10)

//let numero = 0
//do{
//    numero = prompt('Ingresar un número')
//    console.log(numero);
//}while(parseInt(numero))

// SWITCH________________________________

//if (numero === 1) {
//console.log('es un uno');
//}
//
//if (numero === 2) {
//console.log('es un dos');
//}
//
//if (numero === 3) {
//console.log('es un tres');
//}

//let numero = 10
//
//switch (numero) {
//    case 1:
//        console.log('es un uno');
//
//        break;
//    case 2:
//        console.log('es un dos');
//        
//        break;
//    case 3:
//        console.log('es un tres');
//        
//        break;
//    case 4:
//        console.log('es un cuatro');
//        
//        break;
//    case 5:
//        console.log('es un cinco');
//        
//        break;
//    case 6:
//        console.log('es un seis');
//        
//        break;
//    case 7:
//        console.log('es un siete');
//        
//        break;
//    case 8:
//        console.log('es un ocho');
//        
//        break;
//
//    default:
//        console.log('No es un numero que este entre 1 - 8');
//        break;
//}

//let entrada = prompt('Ingrese un nombre ')
//while (entrada !== 'ESC'){
//    switch (entrada) {
//    case 'ANA':
//        alert('Hola ANA')
//        break;
//    case 'FEDE':
//        alert('Hola FEDE')
//        break;
//
//    default:
//        alert('¿Quien sos?')
//        break;
//    }
//    entrada = prompt('Ingresar un nombre')
//}

//_____________________________________________________________________________________

//Clase 4 - Funciones

//function saludar() {
//    //instrucciones
//    console.log('Hola esto es un saludo');
//    console.log('Hola esto es un saludo');
//    console.log('Hola esto es un saludo');
//    console.log('Hola esto es un saludo');
//}
//
//saludar()
//saludar()
//saludar()
//saludar()

// Ejemplo

//function ingresarNombre() {
//    let nombreIngresado = prompt('Ingresar nombre: ')
//    console.log('El nombre ingresado es ' + nombreIngresado)
//}

// .....
//let nombreIngresado = prompt('Ingresar nombre')
//console.log('El nombre ingresado es ' + nombreIngresado)

//let nombreIngresado = prompt('Ingresar nombre')
//console.log('El nombre ingresado es ' + nombreIngresado)

//ingresarNombre()
//ingresarNombre()

//let numero = 0 
//while (numero < 2 ) {
//    ingresarNombre()
//    numero++
//}



// Parametros
//let nombreIngresado = prompt('Ingresar nombre: ')
//let apellidoIngresado = prompt('Ingresar apellido: ')

//function saludar(nombre, apellido, edad, dni) { // 255 se puede tener
//    console.log('Bienvenido sr/a ' + nombre + ' ' + apellido + ' ' + 'y su edad es' + ' ' + edad + dni);
//}
//uno o dos parametros(Buenas practicas)
//saludar('Lautaro', 'Amezaga',  35, 454565)

//let resultado = 0
//
//function mostrarResultado(resultadoParam) {
//    console.log('El resultado es', resultadoParam);
//}
//
//function sumar(numero1, numero2) {
    //return (Corta la ejecucion, hace lo mismo que el break )
//    console.log(numero1);
//    console.log(numero2);
//    //resultado = numero1 + numero2
//    return numero1 + numero2 // retorna un valor, y vo lo tenes que asignar en resultado sino lo perdes 
//}


//resultado = sumar(3,10)

//mostrarResultado(sumar(3,10))

// Calculadora con funciones + switch

//function calculadora(numero1, numero2, operacion) {
//    switch (operacion) {
//        case '+':
//            return numero1 + numero2
//        break;
//        case '-':
//            return numero1 - numero2
//        break;
//        case '*':
//            return numero1 * numero2
//        break;
//        case '/':
//            if (numero2 === 0) {
//                return 'no se puede dividir por 0'
//            }
//            return numero1 / numero2
//        break;
//        default:
//            return 'Debe definir una operacion correcta + - * /'
//        break;
//    }
//}

//let resultado = calculadora(10, 3, '+')
//console.log(resultado);

//console.log(calculadora(10, 1 , '/'));

// Scope - Rango o ámbito variables y funciones tienen un scope

//let resultadoGlobal = 0

//function sumar(paramametro1, paramametro2) { // ámbito
//    let resultadoLocal = 0
//    resultado = paramametro1 + paramametro2
//    console.log(resultadoLocal);
//    if (true) {
//        let resultadoLocal2 = 1
//        console.log(resultadoLocal2); 
//    }
//}


//sumar(5, 6)

//console.log(resultadoGlobal);

// Ejemplo
//function sumar(numero1, numero2) {
//    let resultado = numero1 + numero2
//    console.log(resultado);
//}

//function restar(numero1, numero2) {
//    let resultado = numero1 - numero2
//    console.log(resultado);
//}

//sumar(3,10)
//restar(3,10)


// Funcion anónima

//const saludos = function name(params) { // let o const
//    console.log(params);
//}
//
//saludos('fede')

//const sumar = function (param1, param2) { // let o const
//    console.log(param1 + param2);
//}
//
//sumar(10, 3)

// Funciones de tipo flecha (¡¡NUEVA!!)
//const sumar2 = (param1, param2) => { // let o const
//    console.log(param1 + param2)
//}
//
//sumar2(10, 3)


//const suma = (a,b) =>{
//    return a + b
//}
//
//const resta = (a,b) =>{
//    return a - b
//}

//const suma = (a,b) => a + b
//const resta = (a,b) => a - b


//const calcularIva = valorProducto => valorProducto * 0.21 
//
//const calcularValorProducto = valor => {
//    console.log(valor)
//    return valor + calcularIva(valor)
//}

//console.log(calcularValorProducto(100))


