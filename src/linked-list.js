const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length != 0) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;

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
        for (var i = 0; i < this.length; i++) {
            if (i == index) return node.data;
            node = node.next;
        }
    }

    insertAt(index, data) {
        var node = this._head;
        for (var i = 0; i < this.length; i++) {
            if (i == index) {
                node.data = data
            }
            node = node.next;
        }
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        var node = this._head;
        for (var i = 0; i < this.length; i++) {
            node.data = null;
            node = node.next;
        }
        this.next = 0;
        this.prev = 0;
        this.length = 0;
    }

    deleteAt(index) {
        var arr = [];
        var node = this._head;
        var j = 0;
        for (var i = 0; i < this.length; i++) {
            if (i != index) {
                arr[j] = node.data;
                j++;
            }
            node = node.next;
        }
        this.clear();
        for (var i = 0; i < arr.length; i++) {
            this.append(arr[i])
        }
    }

    reverse() {
        var node = this._tail;
        var prevLength = this.length;
        for (var i = 0; i < prevLength; i++) {
            this.append(node.data);
            node = node.prev;
        }
        for (var i = 0; i < prevLength; i++) {
            this.deleteAt(0);
        }
    }

    indexOf(data) {
        var node = this._head;
        for (var i = 0; i < this.length; i++) {
            if (data == node.data) return i;
            node = node.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
