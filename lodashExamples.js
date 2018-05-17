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
var _ = require('lodash');
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

//keyBy - Creates an object composed of keys generated from the results of 
//running each element of collection thru iteratee. 
//The corresponding value of each key is the last element responsible for generating the key.
//What this means is that an object will be created with a list of properties 
//whose name is the value of the id property specified in the parameter.
//So, one of the properties created will have the name “1abc”, which is the value of the id property 
//of the first object in the posts array. And the value of this “1abc” property is the first object in the posts array.

/*
{ '1abc': { id: '1abc', title: 'First blog post', content: '...' },
  '2abc': { id: '2abc', title: 'Second blog post', content: '...' },
  '34abc': { id: '34abc', title: 'The blog post we want', content: '...' } }
*/
var _ = require('lodash');
var posts = [
    { id: "1abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
    { id: "34abc", title: "The blog post we want", content: "..." }
];

posts = _.keyBy(posts, "id");
console.log(posts);
console.log(posts["1abc"]);

//reduce - reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, 
//where each successive invocation is supplied the return value of the previous.
//So, in this case we reduce the users array into an object. This object will have two properties: 28 and 30. 
//Each property is an array used to collect users of a specific age.
var _ = require('lodash');
var users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Bill", age: 65 },
    { name: "Emily", age: 17 },
    { name: "Jack", age: 30 }
];

var reducedUsers = _.reduce(users, function (result, user) {
    if (user.age >= 18 && user.age <= 59) {
        //Use user’s age to create a new property and initialize it to an array.    
        (result[user.age] || (result[user.age] = [] )).push(user);        
    }
    return result; //make sure the result is supplied to the successive invocation
},{} //specify a default value  
);
console.log(reducedUsers);

//cloneDeep - recursively clones value. 
//As a result, a new object with a new address in memory will be created. 
//Any changes made to the new object will not affect the original object.
var _ = require('lodash');
var original = { foo: "bar"};
var copy = _.cloneDeep(original);
copy.foo = "new value";
console.log(original);
console.log(copy);








