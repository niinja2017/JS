// class Car {
//     constructor(make, model, year) {
//         this.make = make
//         this.model = model
//         this.year = year
//     }
//     static run() {
//         return 'speed up to 200'
//     }
// }

// class iranCar extends Car {
//     constructor(make, model, year, color) {
//         super(make, model, year)
//         this.color = color
//     }
//     static run(){
//         console.log(super.run())
//         return 'speed up to 40'
//     }
//     summery() {
//         return this.run()
//     }
// }
// let car1 = new Car('ford', 'irankhodro', 1845)
// let car2 = new iranCar('mustang','ford',1920,'red')

// console.log(car1.run())


























// exam 1

// class Person {
//     constructor(name , age) {
//         this.name = name
//         this.age = age
//     }

//     sayHello(){
//         return `Hello, my name is ${this.name} and I am ${this.age} years old`
//     }
// }

// let person1 = new Person('sobhan' , 20)
// console.log(person1.sayHello())

// exam 2

// class Car{
//     constructor(brand , model , year){
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }

//     getInfo(){
//         return `Car details ${this.brand} , ${this.model} , ${this.year}`
//     }
// }

// let car1 = new Car('irankhodro' , 'ford' , 1996)
// let car2 = new Car('sipa' , 'pride' , 1987)

// console.log(car2.getInfo())

// exam 3

// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     makeSound(){
//         return 'This animal makes a sound.'
//     }
// }

// class Cat extends Animal {
//     constructor(name){
//         super(name)
//     }

//     makeSound(){
//         return '!Meow'
//     }
// }

// let cat1 = new Cat('pishi')
// console.log(cat1.makeSound())
