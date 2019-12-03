/*
Flyweight Design Pattern
---------------------------
In computer programming, flyweight is a software design pattern. A flyweight is an object that minimizes memory usage by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory. Often some parts of the object state can be shared, and it is common practice to hold them in external data structures and pass them to the objects temporarily when they are used.
*/

class Car  {
    constructor(model, price){
        this.model = model
        this.price = price
    }
}

class CarFactory {
   constructor(){
    this.cars = []
   }

   create(model, price) {
       const canditate = this.getCar(model)

       if(canditate) {
           return canditate
       }

       const newCar = new Car(model, price)
       this.cars.push(newCar)
       return newCar
   }

   getCar(model) {
    return this.cars.find( car => car.model === model)
   }    
}

const factory = new CarFactory()
const bmwX6 = factory.create('bmw', 10000) 
const audi = factory.create('audi', 12000)
const bmwX3 = factory.create('bmw', 8000)
console.log(bmwX3);