// Palindrome Check 

// Write a function that takes in a non-empty string and that returns a boolean 
// representing wheather or not the string is a palindrome. A palindrome is defined 
// as a string that is written the same forward and backward 

// Sample input: 'abcdcba'
// Sample output: True 


// O(n) time | O(n) space 
function isPalindrome(string) {
  const reversedChars = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedChars.push(string[i])
  }
  return string === reversedChars.join("");
}

// O(n) time | O(1) space 
function isPalindrome(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--
  }
  return true
}