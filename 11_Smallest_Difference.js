// Smallest Difference

// Write a function that takes in two non-empty arrays of integers. The function should find the pair of 
// numbers (one from the first array, one from the second array) whose absolute difference is closest to zero. 
// The function should return an arry contianing these two numbers, with the number from the first array in the first position. 
// Assume that there will only be one pair of numbers with the smallest difference. 

// Sample input: [-1,5,10,20,28,3], [26,134,135,15,17]
// Sample output: [28,26]

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b)
  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum
      idxOne++
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo++
    } else {
      return [firstNum, secondNum]
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum]
    }
  }
  return smallestPair
}