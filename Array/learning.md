# JavaScript Array Methods & Algorithms Quick Revision

## 1. Algorithm: Find the Second Largest Element (Optimal)
**Time Complexity:** `O(N)` | **Space Complexity:** `O(1)`

```javascript
const arr = [30, 20, 10, 60, 40, 50];

let largest = arr[0];
let secondLargest = -1;

for(let i = 1; i < arr.length; i++){
    // Check if the current element is greater than the largest
    if(arr[i] > largest){
        secondLargest = largest;
        largest = arr[i];
    }
    // Check if the current element is smaller than the largest but greater than the second largest
    else if(arr[i] < largest && secondLargest < arr[i]){
        secondLargest = arr[i];
    }
}
console.log(secondLargest); // Output: 50
```

---

## 2. Array Creation
```javascript
const newArr = [10, 20, 30, 40]; // Literal notation (Recommended)
const newArr1 = new Array();     // Constructor notation
```

---

## 3. Transformation & Iteration 
*These methods iterate over the array and return **new arrays** or **values**, leaving the original array untouched.*

### `.map()`
Transforms every item in an array based on a function, returning a new array of the same length.
```javascript
const prices = [10, 20, 30];
const withTax = prices.map(p => p * 1.2); 
console.log(withTax); // [12, 24, 36]
```

### `.filter()`
Returns a new array containing only the items that pass a specific true/false test.
```javascript
const ages = [12, 18, 25, 15];
const adults = ages.filter(age => age >= 18); 
console.log(adults); // [18, 25]
```

### `.reduce()`
Accumulates all items in an array into a single value (like a sum, an object, or a string).
```javascript
const items = [10, 20, 30];
const total = items.reduce((sum, item) => sum + item, 0); 
console.log(total); // 60
```

---

## 4. Searching & Validation 
*These methods check for the existence of values and return **specific values** or **booleans**.*

### `.find()`
Returns the **first item** that matches your condition. Returns `undefined` if nothing matches.
```javascript
const users = [{id: 1, name: "Ali"}, {id: 2, name: "Sam"}];
const user = users.find(u => u.id === 2); 
console.log(user); // {id: 2, name: "Sam"}
```

### `.includes()`
The simplest way to check if an exact primitive value exists in the array. Returns `true` or `false`.
```javascript
const fruits = ['apple', 'banana'];
console.log(fruits.includes('banana')); // true
```

### `.some()` & `.every()`
*   **`some()`**: Checks if *at least one* item passes a test.
*   **`every()`**: Checks if *all* items pass a test.
```javascript
const apples = ['apple', 'apple'];
console.log(apples.some(item => item === 'apple'));  // true
console.log(apples.every(item => item === 'apple')); // true
console.log(apples.every(item => item === 'banana'));// false
```

---

## 5. Mutators: Adding & Removing Elements
*⚠️ **Warning:** These methods modify (mutate) the original array.*

### Add / Remove at the END
*   **`.push()`**: Adds to the end, returns the new array length.
*   **`.pop()`**: Removes from the end, returns the removed item.
```javascript
const cart = ['apple', 'banana'];
cart.push('orange', 'grape'); // Mutated! cart = ['apple', 'banana', 'orange', 'grape']
const removedItem = cart.pop(); // Returns 'grape'. cart = ['apple', 'banana', 'orange']
```

### Add / Remove at the BEGINNING
*   **`.unshift()`**: Adds to the beginning.
*   **`.shift()`**: Removes from the beginning.
```javascript
const queue = ['Alice', 'Bob'];
queue.unshift('VIP Charlie'); // Mutated! queue = ['VIP Charlie', 'Alice', 'Bob']
const nextUp = queue.shift(); // Returns 'VIP Charlie'. queue = ['Alice', 'Bob']
```

### The Swiss Army Knife: `.splice()`
Use it to remove, add, or replace items at any specific index. 
**Syntax:** `splice(startIndex, deleteCount, itemToAdd1, itemToAdd2...)`
```javascript
const months = ['Jan', 'March', 'April', 'June'];

// 1. Insert 'Feb' at index 1 (delete 0 items)
months.splice(1, 0, 'Feb'); 
console.log(months); // ['Jan', 'Feb', 'March', 'April', 'June']

// 2. Replace 'June' (at index 4) with 'May' (delete 1 item, add 'May')
const removed = months.splice(4, 1, 'May'); 
console.log(months);  // ['Jan', 'Feb', 'March', 'April', 'May']
console.log(removed); // ['June'] (splice always returns an array of removed items)
```

---

## 6. Non-Mutators: Copying & Merging
*These methods leave your original arrays completely untouched and hand you a brand new array to work with.*

### `.slice()`
Copies a section of an array. **End index is not included in the copy.**
```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const middleAnimals = animals.slice(1, 4); 

console.log(middleAnimals); // ['bison', 'camel', 'duck'] (New array!)
console.log(animals);       // ['ant', 'bison', 'camel', 'duck', 'elephant'] (Untouched!)

// Pro-tip: Calling .slice() with no arguments makes a shallow copy of the whole array
const exactCopy = animals.slice();
```

### `.concat()`
Merges two or more arrays together.
```javascript
const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];
const combined = letters.concat(numbers); 

console.log(combined); // ['a', 'b', 'c', 1, 2, 3] (New array!)
console.log(letters);  // ['a', 'b', 'c'] (Untouched!)
```