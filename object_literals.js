// let firstName='Hakan';
// let lastName='TAŞDELEN';

// let firstName1='Emin';
// let lastName1='TAŞDELEN';


// let hakan=['Hakan','TAŞDELEN',25];
// let emin=['Emin','TAŞDELEN',19];

// Object Literals
let val;
let person = {
    firstName: 'Hakan',
    lastName: 'TAŞDELEN',
    age: 25,
    hobbies: ['yüzme', 'okuma', 'okçuluk'],
    address: {
        city: 'Mersin',
        country: 'Türkiye'
    },
    Birthday: function () {
        return 2020 - this.age;
    }
};
val = person;
val = person.firstName;
val = person.lastName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies.length;
val = person.address;
val = person.address.city;
val = person.address['city'];
val = person.Birthday();
console.log(val);
console.log(typeof person);

let val1;
let people = [
    { firstName: 'Hakan', lastName: 'TAŞDELEN' },
    { firstName: 'Emin', lastName: 'TAŞDELEN' },
    { firstName: 'Serkan', lastName: 'TAŞDELEN' }
];
//console.log(people);
val1 = people;
val1 = people[1];
val1 = people[1].firstName;
for (let i = 0; i < people.length; i++) {
    console.log(people[i].firstName);
}
//console.log(val1);