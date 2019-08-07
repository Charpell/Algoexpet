// Binary Search 

// Write a function that takes in a sorted array of integers as well as a target integer. 
// The function should use the Binary Search algorithm to find if the target number is contained 
// in the array and should return its index if it is, otherwise -1

// Sample input: [0, 1, 21, 33, 45, 45, 61], 33
// Sample output: 3 


function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1)
}

function binarySearchHelper(array, target, left, right) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (target === potentialMatch) {
      return middle
    } else if (target < potentialMatch) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return -1
}