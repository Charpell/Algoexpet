// Nth Fibonacci

// The Fibonacci sequence is defined as follows: the first number of the sequence is 0,
// the second number is 1, and the nthe number is the sum of the (n -1)th and (n -2)th number.Fibonacci

// Sample input: 6
// Sample output: 5


// Solution 1
// 0(2^n) time | 0(n) space 
function getNthFib(n) {
  if (n === 2) {
    return 1
  } else if (n === 1) {
    return 0
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}

// Solution 2
// 0(n) time | 0(n) space
function getNthFib(n) {
  if (n in memoize) {
    return memoize[n]
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n]
  }
}

// Solution 3
// 0(n) time | 0(1)
function getNthFib(n) {
  const lastTwo = [0, 1]
  let counter = 3
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++
  }
  return n > 1 ? lastTwo[1] : lastTwo[0]
}