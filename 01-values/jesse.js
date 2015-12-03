console.log(Infinity.length);
console.log("Z" < "a");

// successful type coercion
console.log("10" - 5);
console.log("10" * 5);
console.log("10" / 5);
console.log(10 - "5");
console.log(10 * "5");
console.log(10 / "5");

// unsuccessful type coercion
console.log("10" + 5);
console.log(10 + "5");

// learned: `-`, `*`, `/`
// perform successul type coercion because
// `+` works with string concatenation
// 
// better:
// Type coercion will convert integers
// to strings when using the `+` operator. 
// Otherwise, strings will be converted to integers