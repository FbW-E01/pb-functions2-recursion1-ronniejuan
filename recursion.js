// # Recursion

// #### Calculate the sum of natural number up to n
// * Write a JavaScript program to compute the sum of an array of integers


// ```javascript
//     const array = [1, 2, 3, 4, 5, 6]
//     sum(array)  // return 21
// ```

const sum = function(arr){
    if(arr.length < 1) return 0;
    return arr.pop() + sum(arr); 
}
console.log(sum([1, 2, 3, 4, 5, 6]));

