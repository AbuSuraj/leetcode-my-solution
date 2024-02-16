class Stack {
    constructor(){
        // this.max = 5;
        this.items = [];
        this.len = 0;
    }

    push(item){
        // if(this.len>=this.max){return 'Overflow';}

        this.items[this.len++] = item;
        console.log(`${item} add to the stack. stack size is now ${this.len}`);

        return this.len;
    }

    pop(){
        if(this.len===0)return 'Underflow';

        const tempArr = [];
        const removedItem = this.items[this.len-1];
        this.len--;
        // const arr = [];
        // let i = 0;
        // while(i < this.count) {
        //   arr[i] = this.items[i]
        //   i += 1
        // }
        // this.items = arr;
        this.items.length = this.len;
        console.log(`${removedItem} item has been poped`);
        return removedItem;
    }

    top(){
        return this.items[this.len-1]
    }

    isEmpty(){
        return this.len ===0;
    }

    size(){
        return this.len;
    }

    clear(){
        this.items = [];
        this.len = 0;
    }

    showItem(){
        console.log(this.items);
    }
}

let stack = new Stack();
console.log(stack.size());
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(stack.top());
stack.showItem()