// Priority Queue

// functions: print, enqueue, dequeue, front, size, isEmpty

let priorityQueue = function() {
    let collection = [];

    this.print = function() {
        console.log(collection);
    }

    this.isEmpty = function() {
        return (collection.length === 0);
    }

    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            let added  = false;

            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }

            if(!added) {
                collection.push(element);
            }
        }
    }

    this.dequeue = function() {
        let value = collection.shift();
        return value[0];
    }

    this.front = function() {
        return collection[0][0];
    }

    this.size = function() {
        return collection.length;
    }
}

let myQueue = new priorityQueue(); 

myQueue.enqueue([5, 3]);
myQueue.enqueue([6, 2]);
myQueue.enqueue([7, 4]);
myQueue.print();

myQueue.dequeue();

myQueue.print();
console.log(myQueue.front());
console.log(myQueue.size());