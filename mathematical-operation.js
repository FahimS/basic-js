var price1 = 25;
var price2 = 35;

var total = price1+price2;
console.log(total);
var total = price1-price2;
console.log(total);
var total = price1*price2;
console.log(total);
var total = price1/price2;
console.log(total);
var total = price2%price1;
console.log(total);
total++;
console.log(total);
total--;
console.log(total);


// Math absolute round floor ceil random
var number = -5;
var absoluteNumber = Math.abs(number);
console.log(absoluteNumber);

var number = 5.534;
var result = Math.round(number);
console.log(result);

var number = 5.234;
var result = Math.ceil(number);
console.log(result);

var number = 5.994;
var result = Math.floor(number);
console.log(result);

var number = Math.random()*100;
var result = Math.round(number);
console.log(result);