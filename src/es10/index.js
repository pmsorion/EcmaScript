let array = [1,2,3,[1,2,3,[1,2,3]]];
//devuelve una matriz con cualquier submatriz que indiquemos
//el digito que esta dentro del metodo flat, es la profundidad de la matriz
console.log (array.flat(2));

let array2 = [1,2,3,4,5];
//me permite mapear cada elemento y despues pasarle una funcion
//aplanarlo segun el resultado
console.log(array2.flatMap(value => [value, value * 2]));

//eliminar los espacios en blanco al inicio de un string
let hello = '          hello world';
console.log(hello);
console.log(hello.trimStart());

//eliminar los espacios en blanco al final de un string
let hello2 = 'hello world                 ';
console.log(hello2);
console.log(hello2.trimEnd());

//nueva forma para pasar errores en catch
try {
    
} catch  {
    error
}
//convierte una matriz o arreglo en un objeto
let entries = [["name", "fran"], ["age", 52]];
console.log(Object.fromEntries(entries));

let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);