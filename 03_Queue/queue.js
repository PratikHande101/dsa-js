//  Queue

// functions: print, enqueue, dequeue, front, size, isEmpty


let Queue = function() {
    let collection = [];

    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        collection.push(element);
    }

    this.dequeue = function() {
        return collection.shift();
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length === 0);
    }
}

let myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.enqueue(7);
myQueue.print();

myQueue.dequeue();

myQueue.print();
console.log(myQueue.front());
console.log(myQueue.size());

