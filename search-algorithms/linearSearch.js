//* Problem: Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target elements is not found.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 20, 2], 10));
console.log(linearSearch([-5, 2, 5, 20, 1], 1));
console.log(linearSearch([-5, 2, 10, 3, 2], 20));

//* Here Big -O will -O(n).
