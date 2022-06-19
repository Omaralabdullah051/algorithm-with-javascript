//* Problem: Give a positive integer 'n', determine if the number is a power of 2 or not.

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));

//* Here Big-O will be - O(logn) because input size reduced by half.
//* isPowerOfTwo(5)'s Big-O will be -O(log5)

//* OR optimized way:
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(2));

//* Here isPowerOfTwoBitWise(2)'s Big-O will be -O(1) constant time complexity.
