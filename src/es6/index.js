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


let name = 'Francisco';
let age = 52;

//creacion de objetos
//antes es5
obj = { name: name, age: age};
console.log(obj)

//es6
obj2 = { name, age };
console.log(obj2);


//es6
//arrow function

const names = [
    {name: 'Francisco', age: 52},
    {name: 'Juanda', age: 19}
]

//si yo quiero iterar por cada uno de estos elementos para mostrarlos en la consola 
//usamos el metodo map.

//antes
let listOfName = names.map(function (item) {
    console.log(item.name);
});

//ahora es6 con funciones anonimas

let listOfName2 = names.map(item => console.log(item.name))

const listOfName3 = (name, age) => {
    //... codigo
}

const listOfName4 = name => {
    //bloque de codigo
}

const square = num => num * num;

//promesas
//algo va a pasar

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Todo ok');
        } else {
            reject('Ups algo salio mal');
        }
    });
}

//se pueden anidar muchos then
helloPromise()
    .then(response => console.log(response))
    .then( () => console.log('hola mundo'))
    .catch(error => console.log(error));


//clases
//programacion orientada a objetos

class calculator {
    constructor () {
        this.valueA = 0;
        this.valueB = 0;
    }
    // estos son metodos
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB
    }

    multiplica(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA * this.valueB
    }
}

const calc = new calculator();

console.log(calc.sum(2, 5));
console.log(calc.multiplica(2, 5));


//import y export
import { hello } from './module';

hello();

//generators

function* helloWord() {
    if (true) {
        yield 'Hello, ';
    }

    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWord();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//este caso es muy utili para fibonacci