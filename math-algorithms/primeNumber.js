//* Problem: Give a natural number 'n', determine if the number is prime or not

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(5));

//* Here Big-O will be - O(n) because we uses one for loop in the function.
//* isPrimes(5)'s Big-O will be -O(5)

//* OR more optimized way:
function isPrime2(n) {
  if (n < 2) {
    return false;
  }
  //* Integers larger than the square root don not need to be checked because, whenever 'n=a*b', one of the two factors 'a' and 'b' is less than or equal to the square root of 'n';
  //* n = 24; a=4; b=6; The square root of 24 is 4.89. a is less than the square root of n.
  //* n = 34; a=5; b=7; The square root of 35 is 5.91. a is less than the square root of n.
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime2(1));
console.log(isPrime2(5));

//* Here Big-O will be - O(sqrt(n)) because we uses one for loop in the function.
//* isPrimes2(5)'s Big-O will be -O(sqrt(5))
