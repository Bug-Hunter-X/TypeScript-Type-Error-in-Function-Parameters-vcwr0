function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(5, 5); // Correct
console.log(result); // Output: 10

try {
  let result2 = add("hello", 5); // Throws an error
  console.log(result2);
} catch (error) {
  console.error(error.message); //Output: Both arguments must be numbers
}
//Another solution using type guards
function isNumber(val: any): val is number {
    return typeof val === 'number';
}

function add2(a: any, b: any): number {
    if(!isNumber(a) || !isNumber(b)) {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}
console.log(add2(5, 6)); // Output: 11

try {
    console.log(add2("hello", 5));
} catch (error) {
    console.error(error.message); //Output: Both arguments must be numbers
}