const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addNode(this.rootTree, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(node.data > data) {
        node.left = addNode(node.left, data);
        return node;
      }

      node.right = addNode(node.right, data);
      return node;
    }
  }

  has(data) {
    return hasNode(this.rootTree, data);

    function hasNode(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      if(node.data > data) {
        return hasNode(node.left, data);
      }

      return hasNode(node.right, data);
    }
  }

  find(data) {
    return findNode(this.rootTree, data);

    function findNode(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      if(node.data > data) {
        return findNode(node.left, data);
      }

      return findNode(node.right, data);
    }
  }

  min() {
    if(!this.rootTree) {
      return null;
    }

    return minNode(this.rootTree);

    function minNode(node) {

      if(node.left) {
        return minNode(node.left);
      }

      return node.data
    }
  }

  max() {
    if(!this.rootTree) {
      return null;
    }

    return maxNode(this.rootTree);

    function maxNode(node) {

      if(node.right) {
        return maxNode(node.right);
      }

      return node.data
    }
  }

  remove(data) {
    return 1
  }
}

module.exports = {
  BinarySearchTree
};
