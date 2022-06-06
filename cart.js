///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((cart, {price}) => cart + price, 0)

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    coupon = cartTotal - couponValue
    tax = coupon * 1.06 
    return tax
}

let cartTotal = 100
let couponValue = 30 

console.log(calcFinalPrice(cartTotal, couponValue))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    1. In a cart page it going to need your name because it is going to need to know who the oder belongs to
    2. In a cart page it going to need your phone number because if they need to call you for a delay or to call ask you about your order or to call you to tell you the order is done
    3. In a cart page it going to need your adress because when they are shipping or delivering the order they neome to drop it off
    4. In a cart page it going to need your credit card  information because you need to pay for the item you have just bought
    5. In a cart page it going to need a item and quantity of the items in the order because they need to know what to make and put in a box or bag for you
    6. In a cart page it is also goin tto need to tell you the price because you need to see the total of your hwole cart 
/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
 const customer = {
     name: 'Jackson Jerman',
     price: 80.55,
     address: '123 Candy Land Drive, Salt Lake City, Utah',
     phone: (801)-123-4567,
 }