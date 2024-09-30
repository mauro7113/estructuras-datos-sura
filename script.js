//let numero = null
//let resultado = numero + numeroDos


//let variasCosas = [1, "string", true, null, []]
//console.log(variasCosas)

//let nombre = "Jaime Zapata"
//let variasCosas = [1, "string", true, null, [2,3,4,5], nombre]

//console.log(variasCosas[2])
//if(variasCosas[2]){
//    console.log("Este elemento es true")
//}
//console.log(variasCosas)

/*let nombres = ["Carlos", "Sebastian", "Liliana", "Isabella", "Mateo", "Yeris" ]
for (let index = 0; index < nombres.length; index++) {
    if (nombres[index] == "Isabella") {
        console.log(nombres[index] + "Existe una base de datos")
    }
}

*/

/*for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index])
    
}
for (let index = 0; index < nombres.length; index++) {
    nombres[index] = prompt("ingrese un nombre: ")
    
}

for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index])
    
}
*/

/*let nombres = ["carlos", "Isabella", "Sebastian", "Liliana", "Isabella", "Mateo", "Yeris", "Isabella"]
let limite = nombres.length + 2
for (let index = nombres.length; index < (nombres.length + 2); index++) {
    
    nombres[index] = prompt("ingrese un nombre: ")
    
}
*/

let nuevosNombres = []
for (let index = 0; index < 10; index++) {
    nuevosNombres[index] = prompt("Ingrese un Nombre: ")
    
}
for (let index = 0; index < nuevosNombres.length; index++) {
    console.log(nuevosNombres[index])
    
}