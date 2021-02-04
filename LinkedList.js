function createNode(value) {
  return {
    value,
    next: null,
  };
}
function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,

    push: function (value) {
      const node = createNode(value);

      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length += 1;
        return node;
      } else {
        this.tail.next = node;
        this.tail = node;
        this.length += 1;
        return node;
      }
    },
    pop: function () {
      if (this.isEmpty()) {
        return null;
      }
      const node = this.tail;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return node;
      }
      let current = this.head;
      let penult;
      while (current) {
        if (current.next === this.tail) {
          penult = current;
          break;
        }
        current = current.next;
      }
      penult.next = null;
      this.tail = penult;
      this.length -= 1;
      return node;
    },
    get: function (index) {
      //list kosong
      if (index < 0 || index > this.length) {
        return null;
      }
      if (index === 1) {
        return this.head;
      }

      //list item 1
      let current = this.head;
      let i = 0;
      while (i < index) {
        current = current.next;
        i += 1;
      }
      return current;
      //list item >1
    },
    delete: function (index) {
      if (index < 0 || index > this.length1) {
        return null;
      }
      if (index === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        this.length -= 1;
        return deleted;
      }
      let current = this.head;
      let prev;
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      const deleted = current;
      prev.next = current.next;
      this.length - 1;
      return deleted;
    },
    //delete
    isEmpty: function () {
      return this.length === 0;
    },
    print: function () {
      const values = [];
      let current = this.head;
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      return values.join("=>");
    },
  };
}
const list = createLinkedList();

const values = ["a", "b", "c", "d"];
const node = values.map(function (val) {
  list.push(val);
});
console.log(list.isEmpty());
list.pop();
console.log(list.delete(1));
console.log(list.print());
