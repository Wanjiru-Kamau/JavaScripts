// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name
// 'orange' the program should fetch its price (30.00) and multiply with the quantity
// requested (2) and return total cost in this printed format (2 Oranges for KES
// 60.00).
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES
// 60.00"


let matunda={
    banana:30,
    mango:50,
    pawpaw:75,
    price:function(fruit,total){

    return ` ${total},${fruit} for KES ${this.banana * total}`
   
}
}
console.log(matunda.price("mango",3));
