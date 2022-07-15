
// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };
// and takes two parameters (fruit, quantity) when initialized i.e.
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the
// getTotalCost( ) method.
// kioskCalc.getTotalCost( ) // returns “2 orange for KES 60”


class KioskCalculate{
    constructor(fruit, quantity){
        this.fruits = fruit
        this.quantity = quantity
        this.fruitsPriceList = {"orange":30,"mango":15,"avocado":40}
        this.getTotalCost = function(){
            return` ${quantity}  ${fruit} for KES ${quantity*this.price}`
        }
       }
    }
    KioskCalculate.prototype.price = 50

    var ourKiosk=  new KioskCalculate("avocado" , 3)
    console.log (ourKiosk.getTotalCost())