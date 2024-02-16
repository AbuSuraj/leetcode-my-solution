class Queue {
    constructor(capacity) {
        this.maxCapacity = capacity;
        this.items = [];
        this.rear = 0;
        this.front = 0;
    }

    isEmpty() {
        return this.rear === 0;
    }

    enqueue(element) {
        if (this.rear === this.maxCapacity) {
            console.log('Overflow');
            return;
        }
        this.items[this.rear++] = element;
    }

    dequeue() {
        if (this.front === this.rear) {
            console.log('Underflow');
            return;
        }
        // console.log(this.rear);
        for (let i = 0; i < this.rear - 1; i++) {
            this.items[i] = this.items[i + 1];
        }
        this.rear--;
        this.items.length = this.rear;
    }

    frontElement() {
        if (this.isEmpty()) return 'No elements in Queue';
        return this.items[0];
    }

    rearElement() {
        if (this.isEmpty()) return 'No elements in Queue';
        return this.items[this.rear - 1];
    }

    isFull() {
        return this.rear === this.maxCapacity;
    }

    showItem() {
        console.log(this.items);
    }
}
 const queue = new Queue(4);

 queue.enqueue(1);
 queue.enqueue(2);
 queue.enqueue(3);
queue.showItem();
queue.dequeue();

// queue.enqueue(45);
// queue.enqueue(44);
 queue.showItem();
 console.log(queue.rearElement());
