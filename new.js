class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 2000);
console.log(heroPerson);
const friendlyPerson = new Person('Masum', 'Billah', 5000);
console.log(friendlyPerson);

function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('Gran', 'Papa', 1200);
console.log(oldPerson);
