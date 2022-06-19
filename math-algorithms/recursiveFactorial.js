//* Problem: Give an integer 'n', find the factorial of that integer.

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));

//* Here Big-O will be -O(n)
