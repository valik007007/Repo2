'use strict'

var person = {}

person.name = 'Pylyp';
person.surname = 'Shevchenko';
console.log(person);

person.name = 'Serghii';
console.log(person);

delete person.name;
console.log(person);