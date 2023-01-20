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




//  ! Class and Instance
class Car{

    //constructor
    constructor(carName) {
        //class attribute
        this.name = carName;
        this.curSpeed = 0;
        this.gear = 0;

    }


    //class method
    printName() {
        console.log('Car name is:', this.name);
    }

    //class method
    accelerator() {
        this.curSpeed = this.curSpeed + 10;
        console.log('New car speed is:', this.curSpeed);
    }

    //class method
    changeGear(newGear) {
        this.gear = newGear;
        console.log('Gear changed to:', this.gear);
    }

}

//create an instance from the class
let a = new Car('Jaguar');
let b = new Car();
//call method for instance
// a.printName()
// b.printName()




//  ! Inheritance
class Bus extends Car{
    constructor(name, seats=50) {
        super(name)
        this.seats = seats;
    }

    getNrOfSeats() {
        console.log('This bus has:',this.seats,'seats.')
    }

    getDriver() {
        return this.driver;
    }
}

let bus = new Bus('School bus');
bus.accelerator();
bus.changeGear(2);
bus.printName();
bus.getNrOfSeats();



//  ! Encapsulation
class ShoppingCart{
    items = []; // [{name: 'iphone', price:1500}]

    //add products to cart
    addProduct(product) {
        let updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }
    
    
    //get total amount of shopping cart
    get totalAmount() {
        const sum = this.items.reduce((prevValue, curItem) => prevValue + curItem.price, 0);
        return sum;
    }
    
    
    set cartItems(value) {
        this.items = value;
        console.log('Items:', this.items, 'Total:', this.totalAmount);
    }

    

    //print cart items and total amount

}


let cart = new ShoppingCart();
cart.addProduct({ name: 'iphone', price: 1200 });// =[, { name: 'macbook', price: 2000 }];





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