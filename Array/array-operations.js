// create an array
const newArr = [10,20,30,40]
const newArr1 = new Array();

// array methods

// .map()
// Transforms every item in an array based on a function you provide,
// returning a new array of the same length.

const prices = [10, 20, 30];
const withTax = prices.map(p => p * 1.2); // [12, 24, 36]

console.log(withTax)

// .filter()
// Returns a new array containing only the items that pass a specific true/false test.

const ages = [12, 18, 25, 15];
const adults = ages.filter(age => age >= 18); // [18, 25]

console.log(adults)

// .reduce() 
// Accumulates all items in an array into a single value (like a sum, an object, or a string). 
// It has a steep learning curve, but it's the most powerful method.

const cart = [10, 20, 30];
const total = cart.reduce((sum, item) => sum + item, 0); // 60

console.log(total)

// .find()
// Returns the first item that matches your condition. If nothing matches, it returns undefined
const users = [{id: 1, name: "Ali"}, {id: 2, name: "Sam"}];
const user = users.find(u => u.id === 2); // {id: 2, name: "Sam"}
console.log(user)

// .inculdes()
// The simplest way to check if an exact primitive value (like a string or number) exists in the array. 
// Returns true or false. 
const fruits1 = ['apple', 'banana'];
const bolleanVar = fruits1.includes('banana'); // true
console.log(bolleanVar)

// some() and every(): Check if at least one item (some)
const fruits2 = ['apple', 'banana'];
const bolleanVar1 = fruits2.some(item => item == 'apple'); // true
console.log(bolleanVar1)


// all items (every) pass a specific test, returning a boolean.
const fruits3 = ['apple', 'apple'];
const bolleanVar2 = fruits3.every(item => item == 'apple'); // true
console.log(bolleanVar2)

console.log(fruits3.every(item => item == 'bannada')) // false
