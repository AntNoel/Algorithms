const split = (array) => {
  /*
    Divide the unsorted array at midpint into sublists
    Returns two sublists - left and right
    
    Takes overall 0(log n) time
    */
  const middle_index = Math.floor(array.length / 2);

  return [array.slice(0, middle_index), array.slice(middle_index)];
};

const merge = (left, right) => {
  /*
    Merges 2 arrays, sortning them in the process
    Returns a new merged list
    
    Takes 0(log n)
    */

  const sortedArray = [];
  let i = 0; //Indexes in the left list
  let j = 0; //Index in the right list

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
      j;
    }
  }

  return sortedArray.concat(left.slice(i)).concat(right.slice(j));
};

const merge_sort = (array) => {
  /*
    Sorts an array in ascending order
    Returns a new sorted list
    
    Divide: Find the midpoint of the list and divide into sublists
    Conquer: Recursively sort the sublists created in prev step
    Combine: Merge the sorted sublists created in previous step
    
    takes overall j0(kn log n ) time due to the slow slice operation, we could replace it with another method to make it faster
    */

  //Single element list or empty list
  if (array.length <= 1) return array;

  let [left_half, right_half] = split(array);
  let left = merge_sort(left_half);
  let right = merge_sort(right_half);

  return merge(left, right);
};

let alist = [54, 62, 92, 17, 77, 31, 44, 55, 20];
let listy = merge_sort(alist);

const verify_sorted = (array) => {
  if (array.length <= 1) return true;

  return array[0] < array[1] && verify_sorted(array.slice(1));
};
