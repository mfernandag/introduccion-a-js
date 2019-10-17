// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
 
let userName = prompt("¿Cuál es tu nombre");
if(userName == "Fernanda"){
    console.log(`Hola, Tocayo!, yo también me llamo Fernanda`)
}

if(userName == "Juli"){
    console.log("Hola Juli, te llamás igual que mi sobri")
}else{
    console.log(`Hola ${userName}`)
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

let userAge = prompt("¿Cuántos años tenés?")
let myAge = "32";

if(userAge === myAge){
    console.log("Tenemos la misma edad")
}else if(userAge < myAge){
    console.log("Sos más joven que yo")
}else{
    console.log("Sos más grande que yo")
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let usersAge;
const askForAge = () => {
    return usersAge = prompt("¿Cuántos años tenés?")
}

let hasDocument = prompt("¿Tenés documento");

if(hasDocument == "si"){
    askForAge();
}
if(usersAge >= "18"){
    console.log("puede entrar al bar")
}else if(usersAge <18 || hasDocument == "no"){
    console.log("no puede entrar al bar")
}else{
    console.log("No se entendió la respuesta")
}