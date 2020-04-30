const obj = {
    name: 'Fran',
    age: 52,
    country: 'COL'
};

//extraer elemnto de un objeto
let { name, ...all1 } = obj;
console.log(name, all1);
let { country,  ...all2 } = obj;
console.log(all2);
//nos muestra el elmento extraido y un objeto con los de mas elementos.


//utilidades de propagacion
//para anidar dos objetos
const obj3 = {
    name: 'Fran',
    age: 52,
}

const obj4 = {
    ...obj3,
    country: 'COL'
}

console.log(obj4);


//saber cuando a terminado el llamado y ejecutar alguna funcionalidad segun sea el caso.

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))



//como agrupar bloques de reject y poder acceder a cada uno de ellos    

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
console.log(match);
