
                // 1 -  Filter 

// JavaScript's `filter()` method creates a new array by selecting elements that meet a specified condition set by a provided function.
/*

                // Using filter in arrays
                
                const myNums = [1,2,3,4,5,6,7,8,9,10]

// one way
const newNums1 = myNums.filter( (num) => num > 4 );

console.log(newNums1)

// one more way
// Note : here we are have used curcly braces so we have to add a return statement . (discussed before in 4-)
const newNums2 = myNums.filter( (num) => {
    return num > 4
} );

console.log(newNums2)
*/



                // 2 - Using filter in arrays with (for each) loop

const myNums = [1,2,3,4,5,6,7,8,9,10]

// Applying Filtering in arrays using (for each) loop
myNums.forEach( (nums)=> {
    if(nums>4){
        console.log(nums)
    }
})

// Applying Filtering in arrays using (for each) loop and storing the filtered elements in the new array
const newNums = []

myNums.forEach( (num)=> {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)
