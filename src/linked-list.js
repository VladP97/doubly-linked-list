const Node = require('./node');

class LinkedList {
    constructor() {
        this._length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this._length != 0) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this._length++;

        return node;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var node = this._head;
        for (var i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }

    insertAt(index, data) {
        var node = this._head;
        for (var i = 0; i < this._length; i++) {
            if (i == index) {
                node.data = data
            }
            node = node.next;
        }
    }
}

isEmpty() {
    if (this._length = 0) {
        return true;
    } else {
        return false;
    }
}

clear() {
    this._length = 0;
    this._head = null;
    this._tail = null;
}

deleteAt(index) {
    var node = this._head;
    var befNode;
    var delNode;
    var aftNode;
    if (index == 0) {
        this._head = node.next;
        if (!this._head) {
            this._head.prev = null;
            return;
        } else {
            this._tail = null;
            return;
        }
    }
    if (index == this._length - 1) {
        this._tail = this._tail.prev;
        this._tail.next = null;
        return;
    }
    for (var i = 0; i < this._length; i++) {

        if (i == index) {
            befNode = node.prev;
            delNode = node;
            aftNode = node.next;
            befNode.next = aftNode;
            aftNode.prev = befNode;
            this._length--;
            return;
        }
        node = node.next;
    }
}

reverse() {
    var node = this._tail;
    var prevLength = this._length;
    for (var i = 0; i < prevLength; i++) {
        this.append(node.data);
        node = node.prev;
        this.deleteAt((-(i - prevLength)) - 1);
    }
}

indexOf(data) {
    var node = this._head;
    for (var i = 0; i < this._length; i++) {
        if (data == node.data) return i;
        node = node.next;
    }
    return -1;
}
}

module.exports = LinkedList;
