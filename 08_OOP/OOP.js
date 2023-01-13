/**
 * Programming Paradigms
 *  1. Procedural: 
 *      Driven from imperative programming. 
 *      Procedures simply contain a series of computational steps to be carried out 
 * 
 *  2. Functional:
 *      programs are constructed by applying and composing functions.
 * 
 *  3. Object Oriented Programming(OOP)
 *      Object-oriented programming (OOP) is a programming paradigm 
 *      fundamental to many programming languages, including Java and C++. 
 */


/**
 * Three main concepts: 
 *      - Classes and Instances:
 *            > Class is an extensible program-code-template for creating object,
 *              providing initial values for state and implementation of behavior. 
 * 
 *            > Instance is a specific realization of any object. (something made from a template)
 * 
 *      - Inheritance:
 *          Inheritance is the procedure in which one class 
 *          inherits the attributes and methods of another class.
 * 
 * 
 *      - Encapsulation:
 *          Encapsulation refers to the building of data with the mechanisms or methods that operate
 *          on the data, or the limiting of direct access to some data.
 */


// ! Class
class Car{
    
    //constructor
    constructor(carName='car', curSpeed=0) {
        //class attribute
        this.name = carName;
        this.curSpeed = curSpeed;
        this.gear = 0
        
    }
    
    

    //class methods
    accelerate() {
        this.curSpeed = this.curSpeed + 10;
        console.log('Current speed is:', this.curSpeed);
    }

    changeGear(newGear) {
        this.gear = newGear;
        console.log('Car is in gear', this.gear)
    }

    static printCarName() {
        console.log('This car is called:', this.name);
    }

}


// ! Instance
// let myCar = new Car("BMW", 100);
// console.log('car speed initial value', myCar.curSpeed)
// myCar.accelerate()
// myCar.changeGear(1);
// myCar.printCarName();

//call method with instance
// Car.printCarName();





//  ! Inheritance       
// class Bus inherits all attributes and methods of class Car
class Bus extends Car{
    isDoorOpen = false;


    doorOpen() {
        this.isDoorOpen = true;
        console.log('Is the door open:', this.isDoorOpen);
    }
    
    
    doorClose() {
        this.isDoorOpen = false;
        console.log('Is the door open:', this.isDoorOpen);

    }

    accelerate() {
        this.curSpeed = this.curSpeed + 2;
        console.log('current speed is:', this.curSpeed);
    }
}

let bus = new Bus('SchoolBus', 5);
// bus.changeGear(3)
// bus.doorOpen();
// bus.doorClose();
// bus.accelerate();



//  ! Encapsulation
class shoppingCart{
    items = [];


    addProduct(product) {
        let updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    get totalAmount() {
        const sum = this.items.reduce((prevValue, curItem) => prevValue + curItem.price, 0);
        return sum;
    }

    set cartItems(value) {
        this.items = value;
        console.log('items', this.items, 'and total:', this.totalAmount);
    }
}

let cart = new shoppingCart();
cart.addProduct({
    name: 'iphone',
    price: 1200
})
cart.addProduct({
    name: 'macbook',
    price: 2200
});




/**
 * Online Shop exercise
 * 
 * classes
 *      - Product
 *          > Attributes: id, name, category, price, image
 *          > Methods: renderProduct()  in html
 * 
 *      - Shopping Cart
 *          > Attributes: id, items, date, customer
 *          > Methods: addProduct(), removeProduct(), addCustomer()
 * 
 *      - Customer 
 *          > Attributes: id, name, address, phone
 *          > Methods: updatePhone(), updateAddress()
 */


class Animal{
    constructor() {
        let name;
        let color;
    }


    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }
}

let animal = new Animal();
animal.setName('dog');
console.log(animal.getName());
console.log(animal.name)