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

    }

    tail() {

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
        return true
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

}

reverse() {}

indexOf(data) {

}
}

module.exports = LinkedList;
