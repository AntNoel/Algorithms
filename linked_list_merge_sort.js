import { LinkedList, ListNode } from './linked_list.js';

const node1 = new ListNode(222);
const l = new LinkedList(node1);
l.add(24);
console.log(l.repr());

const split = (linked_list) => {
  /*
    Divide the unsorted linked_list at midpint into sublists
    Returns two sublinklists - left and right
    
    Takes overall 0(log n) time
    */

  if (!linked_list.head || !linked_list) {
    const left_half = linked_list;
    const right_half = null;
    return left_half, right_half;
  } else {
    let mid = Math.floor(linked_list.size() / 2);


  }

  //Left
  let let = [];
  for (let index = 0; index < mid; index++) {
      
      
  }

  return [left, right];
};

const merge_sort = (linked_list) => {
  /*
    Sorts a LinkedList in ascending order

    -Recursively divide the linkedlist into sublists containing a single node
    -Repeatedly merge the sublists to produce sorted sublist until one remains
    
    Returns a sorted linked list

    */

  if (linked_list.size() <= 1 || !linked_list) return linked_list;

  let left_half,
    right_half = split(linked_list);

  let left = merge_sort(left_half);
  let right = merge_sort(right_half);

  return merge(left, right);
};
