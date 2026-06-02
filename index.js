// Dummy array for testing purposes
const dummyArray = [14, 7, 23, 10, 3, 42, 19];

// 1. Arrow Function: Find the maximum number in the array and use for loop and 
//  if conditon 
const findMaxNumber = (arr) => {
    let max = arr[0];
for (let i = 1; i < arr.length; i++) {
if (arr[i] > max) {
  max = arr[i];
 }
}
 return max;
};
// 2. Anonymous Function Expression: Calculate the sum of all elements
const calculateSum = function (arr) {
    let sum = 0;
   for (let num of arr) {
  sum += num;
    }
return sum;
};
// 3. Named Function Declaration: Count the number of odd numbers
function countOddNumbers(arr) {
 let oddCount = 0;
 for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddCount++;
}
    }
 return oddCount;
}
// Displaying the results of each operation to the user on console.log
console.log("Testing Array:", dummyArray);
console.log("");
console.log("Maximum Number:", findMaxNumber(dummyArray));
console.log("Sum of all elements:", calculateSum(dummyArray));
//  odd number in arrya 
console.log("Number of odd numbers:", countOddNumbers(dummyArray));