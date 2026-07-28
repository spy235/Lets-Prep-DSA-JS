// optimal
const arr = [30,20,10,60,40,50]

let largest = arr[0]
let secondLargest = -1

for(let i=1;i<arr.length;i++){
    
    // check for the largest
    if(arr[i]>largest){
        secondLargest = largest
        largest = arr[i]
    }
    // check for the largest should be greater but secondlargest should be greater
    else if(arr[i]<largest && secondLargest<arr[i]){
        secondLargest = arr[i]
    }

}
console.log(secondLargest)