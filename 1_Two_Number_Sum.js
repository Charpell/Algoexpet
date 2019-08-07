// Two Number Sum

// Write a function that takes in a non-empty array of distinct integers representing a target sum.
// If any two numbers in the input array sum up to the target sum, the function should return them in an 
// array, in sorted order. 

// Sample input: [3,5,-4,8,11,1,-1,6], 10
// Sample output: [-1,11]

// Solution 2
// O(n) time | O(n) space
const twoNumberSum = (array, targetSum) => {
  const nums = {}
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num].sort((a, b) => a - b);
    } else {
      nums[num] = true
    }
  }
  return [];
}

// Solution 3
// O(nlog(n)) time | O(1) space
const twoNumberSum = (array, targetSum) => {
  array.sort((a,b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right]
    if (currentSum === targetSum) {
      return [array[left], array[right]]
    } else if (currentSum < targetSum) {
      left++
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return []
}