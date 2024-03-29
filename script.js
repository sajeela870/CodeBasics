function isPrime(arr) {
    if (arr.length === 0) {
        console.log("Array is empty.");
        return false;
    }
    const num = arr[0];
    if (num < 2) {
        console.log("First element is not prime.");
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("First element is not prime.");
            return false;
        }
    }

    console.log("First element " + num + " is prime.");
    return true;
}

const array = [23, 40, 5, 27]; 
isPrime(array); 

// Task 2

var arr1 = [2,3,4,2,4,2,42,2,24,4,2,2,2];
var counts = {}; //count occurrence of item 
var compare = 0; //compare using stored value
var mostFrequent; //store most frequent item
(function(array){
    var len = array.length; 
   for(var i = 0; i< len; i++){
       var element = array[i];

       if(counts[element] === undefined){
           counts[element] = 1;
       }else{
           counts[element] = counts[element] + 1;
       }
       if(counts[element] > compare){
             compare = counts[element];
             mostFrequent = arr1[i];
       }
    }
  console.log( "The most freequent element is " + mostFrequent);
})(arr1);


//Task 3

for(let i=0; i <= 15; i++){
    if(i%2==0){
        console.log("The number "+ i + " is even");
    }
    else{
        console.log("The number "+ i + " is odd");
    }
}


//Task 4
function sumsq(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum+= numbers[i] * numbers[i] ;
    }
    return sum;
}
let numbers =  [2,3,4,5];
const result = sumsq(numbers);
console.log("The sum of squares of elements in an array is " + result);