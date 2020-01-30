'use strict';

var SIZES = {
    SIZE_SMALL : 'SIZE_SMALL',
    SIZE_LARGE : 'SIZE_LARGE'
}

var STUFFINGS = {
    STUFFING_CHEESE : 'STUFFING_CHEESE',
    STUFFING_SALAD : 'STUFFING_SALAD',
    STUFFING_POTATO : 'STUFFING_POTATO',
}

var TOPPINGS = {
    TOPPING_MAYO : 'TOPPING_MAYO',
    TOPPING_SEASONING : 'TOPPING_SEASONING',
}

var CALORIES = {
    [SIZES.SIZE_SMALL] : 20,
    [SIZES.SIZE_LARGE] : 40,
    [STUFFINGS.STUFFING_CHEESE] : 20,
    [STUFFINGS.STUFFING_SALAD] : 5,
    [STUFFINGS.STUFFING_POTATO] : 10,
    [TOPPINGS.TOPPING_MAYO] : 5,
    [TOPPINGS.TOPPING_SEASONING] : 0
}

var PRICES = {
    [SIZES.SIZE_SMALL] : 50,
    [SIZES.SIZE_LARGE] : 100,
    [STUFFINGS.STUFFING_CHEESE] : 10,
    [STUFFINGS.STUFFING_SALAD] : 20,
    [STUFFINGS.STUFFING_POTATO] : 15,
    [TOPPINGS.TOPPING_MAYO] : 20,
    [TOPPINGS.TOPPING_SEASONING] : 15
};

var Hamburger = (function() {
    function MyConstructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }
    MyConstructor.prototype.sizes = SIZES;

    MyConstructor.prototype.stuffings = STUFFINGS;

    MyConstructor.prototype.toppings = TOPPINGS;

    MyConstructor.prototype.calculateCalories = function calculateCalories() {
        var cal = 0;
        cal += CALORIES[this.size] + CALORIES[this.stuffing];
        this.toppings.forEach(function(item) {
            cal += CALORIES[item];
        });
        return cal;
    }
    MyConstructor.prototype.calculatePrice = function calculatePrice() {
        var price = 0;
        price += PRICES[this.size] + PRICES[this.stuffing];
        this.toppings.forEach(function(item) {
            price += PRICES[item];
        });
        return price;
    }
    MyConstructor.prototype.addTopping = function addTopping(topping) {
        this.toppings.push(topping);
    }
    return MyConstructor;
})();

var hamburger = new Hamburger(Hamburger.prototype.sizes.SIZE_SMALL, Hamburger.prototype.stuffings.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.prototype.toppings.TOPPING_MAYO);

console.log("Calories: " + hamburger.calculateCalories());

console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.prototype.toppings.TOPPING_SEASONING);

console.log("Price with sauce: " + hamburger.calculatePrice());


class Student {
    constructor(name, surname, birth) {
        this.name = name;
        this.surname = surname;
        this.birth = birth;
        this.marks = [];
        this.attendance = [];
    }
    getAge() {
        let d = new Date();
        let age = d.getFullYear() - this.birth;
        return age;
    }
    addMark(mark) {
        this.marks.push(mark);
    }
    getAverageMark() {
        let sumMark = 0;
        this.marks.forEach(function(mark) {
            sumMark += mark;
        })
        return sumMark/this.marks.length;
    }
    present() {
        if (this.attendance.length < 25) {
           this.attendance.push(true)
        }
    }
    absent() {
        if (this.attendance.length < 25) {
           this.attendance.push(false)
        }
    }
    summary() {
        let averageAttendance = 0;
        let sumAttendance = 0;
        this.attendance.forEach(function(attendance) {
            if (attendance == true) {
                sumAttendance++
            }
        })
        averageAttendance = sumAttendance/25;  
        let averageMark = 0;
        let sumMark = 0;
        this.marks.forEach(function(mark) {
            sumMark += mark;
        })
        averageMark = sumMark/this.marks.length;  
        if (averageAttendance > 0.9 && averageMark > 90) {
            console.log("Ути какой молодчинка!")
        } else if (averageAttendance > 0.9 || averageMark > 90) {
            console.log("Норм, но можно лучше")
        } else {
            console.log("Редиска!")
        }
    }
}

let studentFirst = new Student('Vasya', 'Shak', 2000);
console.log(studentFirst);
console.log(studentFirst.getAge());
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.absent();
studentFirst.absent();
studentFirst.absent();
studentFirst.addMark(100);
studentFirst.addMark(100);
studentFirst.addMark(100);
studentFirst.addMark(100);
studentFirst.addMark(100);
studentFirst.addMark(100);
studentFirst.addMark(100);
studentFirst.addMark(80);
studentFirst.addMark(100);
studentFirst.addMark(100);
studentFirst.addMark(100);
studentFirst.addMark(100);
studentFirst.addMark(100);
studentFirst.addMark(100);
studentFirst.addMark(80);
studentFirst.addMark(95);
studentFirst.addMark(95);
studentFirst.addMark(95);
studentFirst.addMark(95);
studentFirst.addMark(95);
studentFirst.addMark(95);
studentFirst.addMark(95);
studentFirst.addMark(95);
studentFirst.addMark(95);
studentFirst.addMark(95);
console.log(studentFirst.getAverageMark());
studentFirst.summary();





