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

// push() (Adds to the end)
const cart = ['apple', 'banana'];
const newLength = cart.push('orange', 'grape'); 

console.log(cart);      // ['apple', 'banana', 'orange', 'grape'] (Mutated!)
console.log(newLength); // 4

// pop() (Removes from the end)
const tasks = ['clean', 'cook', 'work'];
const removedTask = tasks.pop(); 

console.log(tasks);       // ['clean', 'cook'] (Mutated!)
console.log(removedTask); // 'work'

// unshift() (Adds to the beginning)
const queue = ['Alice', 'Bob'];
queue.unshift('VIP Charlie'); 

console.log(queue); // ['VIP Charlie', 'Alice', 'Bob'] (Mutated!)

// shift() (Removes from the beginning)
const line = ['First', 'Second', 'Third'];
const nextUp = line.shift(); 

console.log(line);   // ['Second', 'Third'] (Mutated!)
console.log(nextUp); // 'First'

// splice() is the Swiss Army knife of array mutators. 
// You can use it to remove, add, or replace items at any specific index.
// Syntax: splice(startIndex, deleteCount, itemToAdd1, itemToAdd2...)

const months = ['Jan', 'March', 'April', 'June'];

// 1. Insert 'Feb' at index 1 (delete 0 items)
months.splice(1, 0, 'Feb');
console.log(months); // ['Jan', 'Feb', 'March', 'April', 'June']

// 2. Replace 'June' (at index 4) with 'May' (delete 1 item, add 'May')
const removed = months.splice(4, 1, 'May');
console.log(months);  // ['Jan', 'Feb', 'March', 'April', 'May'] (Mutated!)
console.log(removed); // ['June'] (splice always returns an array of removed items)

// slice() (Copies a section)
//These methods leave your original arrays completely untouched and 
// hand you a brand new array to work with.
// Syntax: slice(startIndex, endIndex) (End index is not included in the copy)
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const middleAnimals = animals.slice(1, 4); 

console.log(middleAnimals); // ['bison', 'camel', 'duck'] (New array!)
console.log(animals);       // ['ant', 'bison', 'camel', 'duck', 'elephant'] (Untouched!)

// Pro-tip: Calling .slice() with no arguments makes a shallow copy of the whole array
const exactCopy = animals.slice();

// concat() (Merges arrays)
const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

const combined = letters.concat(numbers);

console.log(combined); // ['a', 'b', 'c', 1, 2, 3] (New array!)
console.log(letters);  // ['a', 'b', 'c'] (Untouched!)





