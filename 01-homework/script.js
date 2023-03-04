const milkPrice = 15.678;
const  applePrice = 123.965;
const  saloPrice = 90.2345;
console.log(milkPrice,applePrice,saloPrice);

// Максимальне число
let maxPrice=Math.max(milkPrice,applePrice,saloPrice)
console.log("Максимальна ціна: " , (maxPrice));

// Мінімальне число
let minPrice=Math.min(milkPrice,applePrice,saloPrice);
console.log("Мінімальна ціна: " , (milkPrice));

// Сума
let sum = milkPrice + applePrice + saloPrice;
console.log("Сума за всі товари: " , (sum));

// Без копійок

console.log("Ціна за товар без копійок: " , Math.trunc(milkPrice),Math.trunc(applePrice),Math.trunc(saloPrice));

// Сума з округленням в меншу сторону
let sumTrunc=Math.trunc(milkPrice) + Math.trunc(applePrice) + Math.trunc(saloPrice)
let sumAroundfloor = Math.floor(sumTrunc);
console.log("Сума товару без копійок, округлена в меншу сторону: "+(sumAroundfloor));


// Виведення суми з округленням в до 100-х
let sumAroundHundred=(Math.round(sumAroundfloor/100))*100;
console.log("Сума товару округлена до 100-х: " ,(sumAroundHundred));

// Булеве значення суми
console.log("Булеве значення суми: " , Boolean(sumAroundfloor%2));
// Сума решти без округлень
const cash= 500;
let equals =cash-sum ;
console.log("Решта: " , (equals));
//Середнє значення суми всіх товарів 
let avaregeSum=sum/3;
console.log("Середнє значення: " , (avaregeSum).toFixed(2));

// Знижка
const discountRandom=Math.random();
console.log("Знижка: " , discountRandom);
// Знижка та сума з округленням до 2-х знаків
let milkPricediscount=(milkPrice-((milkPrice*discountRandom))).toFixed(2);
console.log("Ціна на товар зі знижкою ",milkPricediscount);
// Чистий прибуток
const income=(applePrice/2)-(applePrice*discountRandom);
console.log("Чистий прибуток: " , income); 
// 
console.log("Максимальна ціна: " + maxPrice,"Мінімальна ціна: " + minPrice,"Вартість всіх товарів: " + sum,"Сума округлена в меншу сторону: " + sumAroundfloor, "Сума товару округлена до 100-х: " + sumAroundHundred , "Решта: " + equals , "Середнє значення: " + avaregeSum.toFixed(2));