//* Problem: Give an integer 'n', find the factorial of that integer.

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));

//* Here Big-O will be - O(n) because we uses one for loop in the function.
//* factorial(5)'s Big-O will be -O(4)
