class Stck {

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

const s = new Stck();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
const res = s.push(6);
console.log(res);
s.showItem();

s.pop();
s.showItem();
s.clear();
console.log(s.size(), s.isEmpty());
s.showItem()
