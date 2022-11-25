function List() {
    this.listSize = 0;
    this.pos = 0;
    this.data = [];
    this.clear = function () {
        delete this.data;
        this.data = [];
        this.listSize = 0;
    };
    this.find = function (element) {
        for (let i = 0; i < this.data.length; ++i) {
            if (this.data[i] === element) {
                return i;
            }
        }
        return -1;
    };
    this.toString = function () {
        return this.data;
    };
    this.insert = function (element, after) {
        let insertPos = this.find(after);
        if (insertPos > -1) {
            this.data.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    };
    this.append = function (element) {
        this.data[this.listSize++] = element;
    };
    this.remove = function (element) {
        let foundAt = this.find(element);
        if (foundAt > -1) {
            this.data.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    };
    this.front = function () {
        this.pos = 0;
    };
    this.end = function () {
        this.end = this.listSize - 1;
    };
    this.prev = function () {
        if (this.pos > 0) {
            --this.pos;
        }
    };
    this.next = function () {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    };
    this.length = function () {
        return this.listSize;
    };
    this.currPos = function () {
        this.pos;
    };
    this.moveTo = function (position) {
        this.pos = position;
    };
    this.getElement = function () {
        return this.data[this.pos];
    };
    this.contains = function (element) {
        let foundAt = this.find(element);
        return (foundAt > -1) ? true : false;
    };

}


var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.log(names.getElement()); // displays Clayton

names.next();
console.log(names.getElement()); // displays Raymond

names.next();
names.next();
names.prev();
console.log(names.getElement()); // displays Cynthia


for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
}