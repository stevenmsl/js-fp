//Make sure npm version > 6 or run the following command to upgrade it
//npm i -g npm
//install lodash 
//npm i --save lodash

//assign - assigns properties of one or many objects to a source object
var _ = require('lodash')
var title = { title: "Lodash Examples" };
var body = { content : "10 lodash functions you should know" }

var result = _.assign(title, body);
// result => { a: 'a property', b: 4, c: 'an other property' }
console.log(result);

//times - receives as arguments the number of iterations and a function to execute n times and returns an array of the results
var _ = require('lodash')
function getRandomInt() {
    return Math.round(Math.random() * 100);    
}
var result = _.times(5, getRandomInt);
console.log(result);

//debounce - will invoke a function after a certain amount of time since the last time it was invoked. 
var _ = require('lodash')
function validateRequired(value) {
    if (value) console.log("Valid");
    else console.log("Invalid");
}
var check =
    _.debounce(validateRequired, 1000);
//Even though ‘check’ will be called 5 times ‘validateRequired will only be called once after 1 second. 
//This can be used when you don’t want to show the error message instantly.
check(null);
check('test');
check(null);
check(null);
check('test 2');

//find - find an object using multiple properties
var _ = require('lodash')
var users = [
    { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
  ];

//Using multiple properties
var user = _.find(users, { lastName: "Doe", gender: "male" });
console.log(user);
//Using predicate
var underAgeUser = _.find(users, (user) => {return user.age < 18;} );
console.log(underAgeUser);


