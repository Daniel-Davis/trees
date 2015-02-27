function Node(data, left, right) { // declaring a new prototype with three arguments
 this.data = data;// sets the variable for data
 this.left = left; // sets the variable for left
 this.right = right; // sets the variable for right
 this.show = show; // this calls a function show()
} // end of prototype Node
function show() { // function show is declared with zero arguments
 return this.data; // returns the data of the object(node)
} // end of show function

function BST() { // declares function BST
 this.root = null; // the variable root gets null
 this.insert = insert; // function insert gets the output of insert
 this.inOrder = inOrder; // function inOrder gets the output of inOrder
 this.preOrder = preOrder; // function preOrder gets the output of preOrder
 this.postOrder = postOrder; // function postOrder gets the output of postOrder
 } // end of function BST

function insert(data) { // declares function insert that takes one argument, data
 var n = new Node(data, null, null); // initializes a new Node
 if (this.root === null) { // if root is null
   this.root = n; // the the local variable n gets the brand new root
   } // end of if statement
 else { // otherwise
   var current = this.root; // local variable current gets root
   var parent; // initialize a local variable parent, but with no given value
   while (true) { // while loop
     parent = current; // parent will get current
     if (data < current.data) { // if data is less than the current data
       current = current.left; // then current goes left
       if (current === null) { // if current is equal to null
         parent.left = n; // then parent's left gets new node
         break; // end loop
         } // end of if statement
     } // end of if statement
   else { // otherwise
     current = current.right; // current goes his right
     if (current === null) { // if it is null
       parent.right = n; // then give him a new node
       break; // end loop
       } // end of if statement
     } // end of else
   } // end of while loop
 } // end of else statement
} // end of function

