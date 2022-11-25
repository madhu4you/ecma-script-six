function studentGrades() {
    this.grades = [];
    this.add = function(num) {
        return this.grades.push(num);
        
    }

    this.average = function() {
        let total = this.grades.reduce((sum, value) => {
            return sum + value;
        }, 0);

        return parseFloat(total / this.grades.length);
    }
}


function words() {
    this.word = [];
    this.add = function(str) {
        return this.word.push(str);
    }

    this.forward = function() {
        return this.word.toString();
    }

    this.backword = function() {
        return this.word.reverse().toString();
    }
}

