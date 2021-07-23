export class ListNode {
  //An object for storing a single node of a linked list
  //Models 2 attributes - data and the link to the next node in the list
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  /*
    Singly Linked List
    
    */
  constructor(head = null) {
    this.head = head;
  }

  is_empty() {
    return this.head ? true : false;
  }
  size() {
    //Returns the number of nodes in the list
    //Takes 0(n) of time
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  add(data) {
    //Accepts some data to add inside a list into a node
    const newNode = new ListNode(data);
    newNode.next = this.head;

    this.head = newNode;
  }

  repr() {
    /*
      Returns a string rep of the node
      */
    const nodes = [];
    let current = this.head;
    while (current) {
      if (current === this.head) {
        nodes.push(`Head: ${current.data}`);
      } else if (!current.next) {
        nodes.push(`Tail: ${current.data}`);
      } else {
        nodes.push(`${current.data}`);
      }
      current = current.next;
    }
    return nodes.join('=>');
  }

  search(value) {
    /*
      Searches for  value and returns the node containing the value or null if none have it
      Takes 0(n) time
      */
    let current = this.head;
    while (current) {
      if (current.data === value) return current;
      if (!current.next) return null;

      current = current.next;
    }
  }

  insert(newData, index) {
    /*
      Inserts a new Node containing data at index position
      Insertion takes 0(1) time but finding the node at the insertion point takes 0(n) time.
      Overall 0(n) time
      
      */
    if (index === 0) this.add(newData);

    if (index > 0) {
      const newNode = new ListNode(newData);
      let position = index;
      let current = this.head;
      while (position > 1) {
        if (position === 1) {
          newNode.next = current.next;
          current.next = newNode;
          break;
        }
        current = current.next;
        position--;
      }
    }
  }
  remove(key) {
    /*
      Takes in a key/value that we want to find and finds it and removes the node and returns the node or none if the key doesnt exist
      
      Takes 0(n) time
      
      */

    let current = this.head;
    let removedNode = null;
    while (current) {
      console.log(`The current is`, current);
      //Head removals
      if (current.data === key && current === this.head) {
        console.log('This is the head node');
        removedNode = current;
        this.head = current.next;
        break;
      }
      //All other removals
      if (current.next.data === key) {
        console.log('This is all other nodes ');
        //Change the current pointer to the next's next
        removedNode = current.next;
        current.next = current.next.next;
        removedNode.next = null;
        break;
      }

      current = current.next.next ? current.next : null;
    }
    return removedNode;
  }

  nodeAtIndex(index) {
    /*
      Takes in an index and returns the node at the specified Index
      */

    if (index === 0) return this.head;

    let current = this.head;

    for (let i = 0; i <= index; i++) {
      if (!current) break;
      if (i === index) {
        console.log('Found the index!');
        return current;
      }
      current = current.next;
    }
    return 'That index doesnt exist';
  }
  removeAtIndex(index) {
    /*
      Given an index remove the node at that specified index
      */

    //Removal at head
    if (index === 0) {
      const oldHead = this.head;
      this.head = this.head.next;
      oldHead.next = null;
    }

    let current = this.head;
    let removedNode = null;

    for (let i = 0; i < index; i++) {
      if (index - i === 1) {
        //Node right before
        removedNode = current.next;
        current.next = current.next.next;
        removedNode.next = null;
        break;
      }
      current = current.next;
    }
    return removedNode;
  }
}

const n1 = new ListNode(30);
const l = new LinkedList(n1);
l.add(20);
l.add(10);
l.removeAtIndex(0);
