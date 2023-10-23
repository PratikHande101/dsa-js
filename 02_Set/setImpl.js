// Set

// functions: has, values, add, remove, size, union, intersection, difference, subset;

let mySet = function() {
    let collection = [];

    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    }

    this.values = function() {
        return collection;
    }

    this.add = function(element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }

    this.remove = function(element) {
        if (this.has(element)) {
            let index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }

        return false;
    }

    this.size = function() {
        return collection.length;
    }

    this.union = function(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(function(e) {
            unionSet.add(e);
        });

        secondSet.forEach(function(e) {
            unionSet.add(e);
        })

        return unionSet;
    }

    this.intersection = function(otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();

        firstSet.forEach(function(e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });

        return intersectionSet;
    }

    this.difference = function(otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();

        firstSet.forEach(function(e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            } 
        });

        return differenceSet;
    }

    this.subset = function(otherSet) {
        let firstSet = this.values();
        let flag = true;
        firstSet.forEach(function(e) {
            if (!otherSet.has(e)) {
                flag = false;
                return flag;
            }
        })

        return flag;
    }
}

let myFirstSet = new mySet();
myFirstSet.add(1);
myFirstSet.add(2);
myFirstSet.add(3);

let mySecondSet = new mySet();
mySecondSet.add(1);
mySecondSet.add(2);
mySecondSet.add(3);
mySecondSet.add(4);
mySecondSet.add(5);
mySecondSet.remove(5);

console.log(myFirstSet.values());
console.log(myFirstSet.has(2));
console.log(myFirstSet.size());
console.log("Creating a second set...");
console.log(mySecondSet.values());

console.log("Taking an unions of two sets");
let myUnionSet = myFirstSet.union(mySecondSet);
console.log(myUnionSet.values());

console.log("Taking an intersection of two sets");
let myIntersectionSet = myFirstSet.intersection(mySecondSet);
console.log(myIntersectionSet.values());

console.log("Taking a difference of two sets");
let myDifferenceSet = myFirstSet.difference(mySecondSet);
console.log(myDifferenceSet.values());

console.log("Checking for subset...");
let isSubset = myFirstSet.subset(mySecondSet);
console.log(isSubset);