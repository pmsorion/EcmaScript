//antes
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
//antes
let hello = 'Hello';
let world = 'World'
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//multi linea en los script
//antes

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \n'
+ 'ut labore et dolore magna aliqua. Ut enim ad minim veniam'
console.log(lorem);

//es6
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam`;
console.log(lorem2);

let person = {
    'name': 'Francisco',
    'age': 52,
    'country': 'COL'
}
//antes
console.log(person.name, person.age, person.country);

//es6
//desestructurar un objeto
let { name, age, country } = person;
console.log(name, age);


//antes
let team1 = [ 'Fran', 'Juanda', 'Camilo' ];
let team2 = [ 'Paola', 'Paula', 'Claudia' ];

let education1 = [ 'David', 'Fran', 'Juanda', 'Camilo', 'Paola', 'Paula', 'Claudia' ]
console.log(education1);


//es6
//operardor de propagacion
let education2 = [ 'David', ...team1, ...team2];
console.log(education2);

//es6
// que es let
//let esta disponible solo en el scope donde ha sido declarado

{
    var globalVar = 'Global var';
}
console.log(globalVar);

{
    let globaLet = 'Global Let';
    console.log(globaLet);
    //de esta forma si esta disponible
}
console.log(globaLet);
//ReferenceError: globaLet is not defined

//es6
//const
//no se rpueden reasignar valores a una constante

const a = 'b';
a = 'c';
//TypeError: Assignment to constant variable.
