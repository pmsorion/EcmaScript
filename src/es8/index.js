const data = {
    frontend: 'Fran',
    backend: 'Juanda',
    design: 'Paola',
}

//como transformar un objeto a una matriz

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
    frontend: 'Fran',
    backend: 'Juanda',
    design: 'Paola',
}

//convertimos un objeto en un arreglo solo con los datos
const values = Object.values(data);
console.log(values);
console.log(values.length);

//añade a una cadena de caracteres otra en el inicio de la misma
const string = 'hello';
//añade a una cadena de caracteres otra en el inicio de la misma
console.log(string.padStart(7, 'hi'));
//añade a una cadena de caracteres otra al final de la misma de la misma
console.log(string.padEnd(12, '----'));
console.log('food'.padEnd(12, '  ----'));

const obj = {
    name: 'Fran',
}
