function newFunction(name, age, country) {
    var name = name || 'Francisco';
    var age = age || 52;
    var country = country || 'COL'
    console.log(name, age, country);
}


//es6
//asignacion de valores por defecto
function newFunction2(name = 'Francisco', age = 52, country = 'COL') {
    console.log(name, age, country);    
}

newFunction2();
newFunction2('Juanda', 19, 'COL');

//template literal

let hello = 'Hello';
let world = 'World'
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);


//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);