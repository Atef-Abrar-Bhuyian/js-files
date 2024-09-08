const person = {
    name: 'Tod',
    age: 25,
    profession: 'teacher',
    married: true,
    salary: 10000,
    'fav places': ['bandorban', 'kuakata', 'cox']
}


// dot notation method (dot diye object er properties er value access kora)
console.log(person.salary);
console.log(person.profession);
const salary = person.salary;
console.log(salary);

// bracket notation
// third bracket diye object er properties access kora
console.log(person['married']);

const bibahito = person['married'];
console.log(bibahito);


// jodi space shoho thake tahole
// console.log(person.fav places)  ei rkm dile hbe na [ei khetre dot use kora jai na]
console.log(person["fav places"]);


// value change

person.salary = 50000;
person['age'] = 30;
person['fav places'] = ['bali', 'europe'];


const propName = 'profession';
person[propName] = 'DevOps';
console.log(person);