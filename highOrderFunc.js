/*
- Functions that operate on other functions, either by taking them as arguments or by returning them, 
are called higher-order functions. 
- Higher-order functions allow us to abstract over actions, not just values. 
*/

function repeat(n, action) {
    for (let i=0; i< n; i++) {
        action(i);
    }
}

let labels =[];
repeat(5, i => {
    labels.push(`Unit ${i+1}`); //template literal – make sure you use backticks
});
console.log(labels);

//functions provide new type of control flow
function unless(test, then) {
    if(!test) then();
}
repeat (3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
} ) 

//functions create new functions
function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

//Functions change other functions
function noisy(f) {
    return (...args /*use rest operator: access arguments from the enclosing function */ ) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;        
    }
}
noisy(Math.min)(3,2,1);

