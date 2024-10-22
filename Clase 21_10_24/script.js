//FUNCION FLECHA

//1-************************* */
function mifuncion (a,b)
{
    return a+b;
}
//2-************************* */
console.log (mifuncion (2,3));

//estructura de funcion flecha

let salu2 = () => { };
//3-************************* */
let sal2 = (nombre) => 
{

  return 'Saludos' + nombre;

};

console.log (saludo ('Juan'));

//4-************************* */

let saludar =nombre => 'Saludos' + nombre;

console.log (saludo ('PONSHA'));

//5-********pasar multiples parametros***************** */
let suma =(a,b) => a+b;
console.log(suma(5,8));

//6-**********crear objeto en funcion flecha*************** */

let obj = () => ({nombre:'PEDRO', edad:20})

//llamamos al objeto y accedemos a la propiedad
//let persona = obj().nombre;
console.log(obj().nombre);

//7-***********************

let arrFunc = () => [1,2,3,4,5];
//accediendo a todo el array
console.log(arrFunc());
//accediendo al array
console.log(arrFunc()[4]);
