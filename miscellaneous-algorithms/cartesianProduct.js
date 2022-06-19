//* Problem: Given two finite non-empty sets, find their Cartesian Product.

function cartesianProduct(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}

console.log(cartesianProduct([1, 2], [3, 4, 5]));

//* Here Big-O will be -O(mn) because here two array's length is not same. if the two array's length is same and we use two for loop Big-O will be -O(n to the power 2) Quadratic Time Complexity.

//* But Here Big-O will be -O(mn)
