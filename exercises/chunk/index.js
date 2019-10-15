// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  /**
   * Sol 1
   * O(N)
   */
  // let bigArray = [];
  // while(array.length !== 0) {
  //   bigArray.push(array.splice(0, size));
  // }
  // return bigArray;

  /**
   * Sol 2
   * O(N)
   */

   let chunked = [];
   for(let i = 0; i < array.length; i++) {
     console.log(chunked);
     let last = chunked[chunked.length - 1];
     if(!last || last.length === size) {
      chunked.push([array[i]]);
     } else {
      last.push(array[i]);
     }
   }
   return chunked;
}

module.exports = chunk;
