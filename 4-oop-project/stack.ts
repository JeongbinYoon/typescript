{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }

    push(value: string): void {
      if (this.size === this.capacity) {
        throw new Error("Stack is full!");
      }
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): string {
      // null == undefined, null !== undefined
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(3);
  stack.push("Jeongbin 1");
  stack.push("Bob 2");
  stack.push("Steve 3");
  // stack.push("Job 4");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  // stack.pop();
}
