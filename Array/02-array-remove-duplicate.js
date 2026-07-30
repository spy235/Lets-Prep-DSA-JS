const arr = [0,0,1,1,1,2,2,3]
    let i=0
    let j=1;

    while(j<=nums.length){
        if(nums[i]!=nums[j]){
            i++;
            // shift it to left
            nums[i] = nums[j]
        }
          j++;
    }
console.log(i) // [0,1,2,3,4,----]