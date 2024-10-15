// /* =========== FUNCIONES EN JS =========== */


// function hello() {
//     console.log('Hola JS');
//     console.log('Hola HTML');
//     console.log('Hola CSS');
// }


// hello()

// /**
//  * Funcion 
//  *  retorna una cadena que dice `Hola JS`
//  */
// function hello() {
//     return 'Hola JS';
// }

// // const result = hello();
// console.log(hello());

// function hello() {
//     return {
//         nombre: 'Roul'
//     }
// }

// console.log(hello());
//funcion que retorna a otra funcion
/*
function hello() {
    return function() {
        return 'Hola JS';
    }
}

console.log(hello())

*/

//====== USO DE PARAMETROS EN FUNCIONES =====
/*
function hellpconJS(name){
return 'Hola ' + name

}

console.log('Oscar');
console.log('Poncho');
console.log('Ramos');
console.log('Fernando');
console.log('STIVE');

*/

//PASAR MAS DE UN PARAMMETRO A LA FUNCION
/*
function hellpconJS(x,y){
    return x + y;
    
    }

    console.log(hellpconJS(10,20));   
    console.log(hellpconJS(10,80));  
    */
/*
 function hellpconJS(x,y=0)
   {

        return x * y;
        
    } 
        
console.log(hellpconJS(10)); 
*/

//=== OBJETOS ===
const user = {
nombre : 'Oscar',
apellidoM : 'Garcia',
edad:'16',
estadoCivil:'Soltero',
domicilio:  {

ciudad:'CDMS',
calle:'NO SE',
numero:'OSHO',

},
amigos:['Oscar', 'Oscar'],
activo:false,
sendMensaje: function(){
 return 'enviame mensaje'
    
    }

}

//alert ciudad, calle, numero..
//console, los amigos
//alert (Activo o Dado baja)
//consola nombre, apellidos, estado civil...11
//alert (estado del mensaje)

alert(`${user.domicilio.ciudad}, ${user.domicilio.calle} ${user.domicilio.numero}`)
alert(user.activo)

                 console.log(user.amigos);


console.log(`${user.nombre} ${user.apellidoM}, ${user.estadoCivil}`);

                alert(user.sendMensaje())



