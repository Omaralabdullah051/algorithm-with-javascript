//* Problem: Give a number 'n', find the first 'n' elements of the fibonacci sequence.

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(3));
console.log(fibonacci(8));
console.log(fibonacci(11));

//* Here Big-O will be - O(n) because we uses one for loop in the function.
//* fibonacci(3)'s Big-O will be O(4)
//* fibonacci(8)'s Big-O will be O(8)
//* fibonacci(11)'s Big-O will be O(11)
