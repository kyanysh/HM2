///////1 задача

class Transport {
    constructor(title, model, color) {
        this.title = title;
        this.model = model;
        this.color = color;
    }
    startEngine() {
        console.log(`On ${this.title} ${this.model} engine started`);
    }
}

class Car extends Transport {
    constructor(title, model, color, maxSpeed, speed) {
        super(title, model, color);
        this.maxSpeed = maxSpeed;
        this.speed = speed;
    }
    _currentSpped = 0;

    currentSpped() {
        console.log(`Current Speed: ${this._currentSpped}`);
    }
    gas() {
        if (this._currentSpped + this.speed > this.maxSpeed) {
            this._currentSpped = this.maxSpeed;
            this.currentSpped()
        }
        if (this._currentSpped >= this.maxSpeed) {
            console.log(`Max speed on car ${this.title} ${this.model}: ${this.maxSpeed}`);
        } else {
            this._currentSpped += this.speed;
            this.currentSpped()
        }
    }
}

const Mercedes = new Car('Mercedes', 'W210', 'Black', 300, 20)
Mercedes.gas()
Mercedes.gas()
Mercedes.gas()
Mercedes.gas()
Mercedes.gas()
Mercedes.gas()
Mercedes.gas()
Mercedes.gas()
Mercedes.gas()

///////2 задача

class User {
    constructor(name, surname, year) {
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname, year);
    }
    getFullName() {
        console.log(this.name + "," + this.surname);
    }
    getCourse() {
        console.log(new Date().getFullYear() - this.year);
    }
}

const student = new Student('Kyanush', 'Badanov', 2019)
student.getCourse()
student.getFullName()