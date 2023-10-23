// implementing stack in JS

let Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count += 1;
    }

    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }
        
        this.count -= 1;
        let result = this.storage[this.count];
        delete this.storage[this.count];

        return result;
    }

    this.size = function() {
        return this.count;
    }

    this.peek = function() {
        return this.storage[this.count - 1];
    }
}

let myStack  = new Stack();
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.push(7);

console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.storage);