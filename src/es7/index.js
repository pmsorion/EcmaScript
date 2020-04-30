//metodo que nos permite averiguar si un numero determinado se encuentra en un arreglo
let numero = 2;
let numbers = [1,3,4,5,7,5,6,9];

if (numbers.includes(numero)) {
    console.log(`si se encuentra el valor ${numero}`);
} else {
    console.log(`no se encuentra el valor ${numero}`);
}

//elevar a una potencia

let base = 2, exponent = 3
let result = base ** exponent;
console.log(result);