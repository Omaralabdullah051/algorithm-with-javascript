//* Problem: Given an array of integers, sort the array.
//* It is not used in the real world senario. But we needs to know the working flow of this algorithms.

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort([8, 20, -2, 4, -6]));

//* Here the Big -O will be -O(n to the power 2). Quadratic Time Complexity.
