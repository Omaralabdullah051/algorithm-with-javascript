//* Problem: Given an array of integers, sort the array.

function insertionsort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

console.log(insertionsort([0, 20, -2, 4, -6]));

//* Here the Big -O will be -O(n to the power 2). Quadratic Time Complexity.
