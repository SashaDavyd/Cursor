// LESSON 3  FUNCTION


// function sayHi(param1,param2....,paramN){
// тіло функціїї
// }


// function sayHi() {
//         console.log('Hello')
// }
// sayHi();

// const b= 'test';
// function sayHi(){
//         const a=5;
//         const b=1
//         console.log(b)
// }
// console.log(a) не працюватиме ; область видимості
// sayHi();


// function getSum(a,b){
//         console.log('a',a);
//         console.log('b',b);
// console.log(a+b)
// }

// getSum(5); забув вказати параметр "b"

//              РІШЕННЯ 

// function getSum(a, b = 10) {

//         console.log('a', a);
//         console.log('b', b);
//         console.log(a + b)
// }

// getSum(5,12);




// function getSum(a, b = 10) {
//         console.log(2)
// const sum=a+b;
// if (sum<0){
//         return 0
// }

//      return sum
// }
// console.log(1);

// const result=getSum(5, -20);

// console.log(3);


// function getSum(a, b = 10) {
// const sum=a+b;
// if (sum<0){
//         return 0
// }

//      return sum
// }

// const sum1= getSum(5,10);
// const sum2=getSum(-1,15);
// const sum3= getSum(-5,0);

// console.log(sum1,sum2,sum3)


// function getSum(a, b = 10, ok, err) {
//         const sum = a + b;
//         if (sum < 0) {
//                 err(sum + ' is less than 0' )
//                 return "00"
//         }
//         ok()
//         return sum
// }

// function sayYes() {
//         console.log('Yes');
// }

// function sayNo(str) {
//         console.log('No ' + str);
// }



// const res = getSum(5, -10, sayYes, sayNo);
// console.log('res', res)




//              function declaration(можемо викликати до оголошення функціїї)
// function getSum (a, b) {
//         const sum = a + b;
//         if (sum < 0) {
//                 return "00"
//         }
//         return sum
// };

//               function expression(не можемо викликати до оголошення функціїї!!!)
// const getSum=function (a, b) {
//         const sum = a + b;
//         if (sum < 0) {
//                 return "00"
//         }
//         return sum
// };
// const oneMoreSome= getSum;
// const result = oneMoreSome(5,15)
// console.log(result)


//               Стрілочні функції

// const getSum = (a,b) => {
//         return a + b
// }
// console.log(getSum(5,10));


// const getSum = (a,b) => a + b

// console.log(getSum(5,10));

// getSum(
//         5,
//         10,
//         () => console.log('Yes'),
//         () => console.log('No')
// )
// function getSum(a, b, yes, no) {
//         const sum = a + b;
//         if (sum < 0) {
//                 no()
//                 return "00"
//         }
//         yes()
//         return sum
// }

// const getSum= (a,b)=>{
//         return a+b
// }
// console.log(getSum(4,9));





//              ДОДАТКОВИЙ МАТЕРІАЛ

// function getSum (num,...rest){

//         console.log(num)
//         console.log(rest)
// }

// getSum(1,5,33,28,'all parametrs')

// var f =function say(num){
//         console.log('is say function')
//         if (num>1){
//         say()
//         }


// }
// f(2)


//                      IIFE
// (function(num){
//         console.log('IIFE '+ 5) 

// })(5)






//              HomeWork-3

// 1. Функція, яка отримує число і виводить найбільшу цифру з цього числа

function getMaxDigit(number) {
    let maxDigit = 0;
    while (number) {
        let lastOfnumber = number % 10;
        if (lastOfnumber > maxDigit) {
            maxDigit = lastOfnumber;
        }
        number = parseInt(number / 10);

    }
    return maxDigit;
}
// 2. Функція, яка визначає ступінь числа
function powNumber(number, pow) {
    let result = 1
    for (let i = 1; i <= pow; i++) {
        result *= number;
    }
    console.log(result)
    return result;
}

// 3. Функція, яка форматує ім'я
function nameUppercase(name) {
    const firstLetter = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(firstLetter)
    return firstLetter;
}

// 4. Функція, яка вираховує зарплату, після оплати податку

function cash(sum, tax = 19.5) {
    let salary = sum - (sum * tax / 100)
    return salary;
}

// 5. Функція, яка повертає випадкове ціле число із діапазона
function getRandomNumber(N, M) {
    let max = Math.max(N, M);
    let min = Math.min(N, M);
    return Math.floor(Math.random() * (max - min) + min);
}

// 6. Функція, яка рахує кількість букв, які повторюються
function countLetter(word, letter) {
    let count = 0;
    let length = word.length;
    for (let i = 0; i < length; i++) {
        if (letter.toLowerCase() === word.charAt(i).toLowerCase()) {
            count++;
        }
    }
    return count;
}




document.writeln(`Функція №1: ${getMaxDigit(3358817322)}`);
document.writeln(`Функція №2: ${powNumber(6, 2)}`)
document.writeln(`Функція №3: ${nameUppercase("оЛекСАНДр")}`)
document.writeln(`Функція №4: ${cash(10000, 20)}`)
document.writeln(`Функція №5: ${getRandomNumber(1000, 19.5)}`)
document.writeln(`Функція №6: ${countLetter("АсталАвісТасСС", "с")}`)

