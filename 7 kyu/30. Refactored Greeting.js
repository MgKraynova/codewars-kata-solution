// https://www.codewars.com/kata/5121303128ef4b495f000001/train/javascript

class Person {
    constructor(name) {
        this.name = name;
    }

    greet(name) {
        return "Hello " + name + ", my name is " + this.name;
    }
}