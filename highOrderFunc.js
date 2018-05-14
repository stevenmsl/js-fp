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

