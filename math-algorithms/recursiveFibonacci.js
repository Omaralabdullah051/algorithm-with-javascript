//* Problem: Give a number 'n', find the first 'n' elements of the fibonacci sequence.

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));

//* Recursive time complexity is -O(2 to the power of n)
