// BST

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        let node = this.root;

        if (node === null) {
            this.root = new Node(data);
            return;
        }

        const searchTree = function(node) {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data);
                    return;
                } else if (node.left !== null) {
                    return searchTree(node.left);
                }
            } else if (data > node.data) {
                if (node.right === null) {
                    node.right = new Node(data);
                    return;
                } else if (node.right !== null) {
                    return searchTree(node.right);
                }
            } else {
                return null;
            }
        };

        return searchTree(node);
    }

    findMin() {
        let current  = this.root;
        while(current.left !== null) {
            current = current.left;
        }

        return current.data;
    }

    findMax() {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }

        return current.data;
    }

    isPresent(data) {
        let current = this.root;

        while (current.left === null && current.right === null) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current.current.right;
            } else if (data === current.data) {
                return true;
            }
        }

        return false;
    }

    remove(data) {
        const removeNode = function(node, data) {
            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (data > node.data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                if (node.left === null && node.right === null) {
                    return null;
                }

                if (node.left === null) {
                    return node.right;
                }

                if (node.right === null) {
                    return node.left;
                }

                // now, handling condition where there are two child notes

                let tempNode = node.right;
                
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }

                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node; 
            }
        }

        this.root = removeNode(this.root, data);
    }

    findMinHeight(node = this.root) {
        if (node === null) {
            return -1;
        }

        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);

        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node = this.root) {
        if (node === null) {
            return -1;
        }

        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);

        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    isBalanced() {
        return (this.findMinHeight() >= (this.findMaxHeight() - 1));
    }

    inOrder() {
        if (this.root === null) {
            return null;
        } else {
            let result = [];
            function inOrderTraversal(node) {
                if (node.left) {
                    inOrderTraversal(node.left);
                }
                result.push(node.data);
                if (node.right) {
                    inOrderTraversal(node.right);
                }
            };
            inOrderTraversal(this.root);
            return result;
        }
    }

    preOrder() {
        if (this.root === null) {
            return null;
        } else {
            let result = [];
            function preOrderTraversal(node) {
                result.push(node.data);
                if (node.left) {
                    preOrderTraversal(node.left);
                }
                if (node.right) {
                    preOrderTraversal(node.right);
                }
            };
            preOrderTraversal(this.root);
            return result;
        }
    }

    postOrder() {
        if (this.root === null) {
            return null;
        } else {
            let result = [];
            function postOrderTraversal(node) {
                if (node.left) {
                    postOrderTraversal(node.left);
                }
                if (node.right) {
                    postOrderTraversal(node.right);
                }
                result.push(node.data);
            };
            postOrderTraversal(this.root);
            return result;
        }
    }

    levelOrder() {
        if (this.root === null) {
            return null;
        } else {
            let result = [];
            let queue = [];
            queue.push(this.root);

            while (queue.length > 0) {
                let node = queue.shift();
                result.push(node.data);

                if (node.left) {
                    queue.push(node.left);
                }

                if (node.right) {
                    queue.push(node.right);
                }
            }

            return result;
        }
    }
}

const bst = new BST();

// bst.add(5);
// bst.add(6);
// bst.add(4);
// bst.add(7);
// bst.add(1);

// console.log(bst.findMin());
// console.log(bst.findMax());
// console.log(bst.isPresent(9));

// console.log("Removing a value");
// bst.remove(1);

// console.log(bst.findMin());
// console.log(bst.findMax());
// console.log(bst.isPresent(9));
// console.log(bst.root);

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(10);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
console.log("Min Height => " + bst.findMinHeight());
console.log("Max Height => " + bst.findMaxHeight());
console.log("Balanced => " + bst.isBalanced());
console.log("inOrder => " + bst.inOrder());
console.log("preOrder => " + bst.preOrder());
console.log("postOrder => " + bst.postOrder());
console.log("levelOrder => " + bst.levelOrder());