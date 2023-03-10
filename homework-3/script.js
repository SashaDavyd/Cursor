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




// let num =Number(prompt('Vvedit chislo: '));
// // console.log(num)
// let arrOfStr = Array.from(String(num));
// // console.log (arrOfStr)
// let arrOfNums = arrOfStr.map((str)=>Number(str));
// console.log(arrOfNums)

// function getMaxDigit(number){


// }


// function splitIntoArray(num) {

  
//  return Array.from(String(num),Number);
// }

// const arr1 = splitIntoArray(prompt('VVedit chislo'));
// console.log(arr1); 
// function getMaxOfArray(numArray){
//     return Math.max.apply(null,numArray);
// }
// console.log(getMaxOfArray(arr1))
// const max = Math.max(...arr1)
// console.log(max)

// const arr2 = splitIntoArray(4901);
// console.log(arr2); 





function getMaxDigit (number) {
    let maxDigit = 0
    if (number < 10) {
        maxDigit = number
        return maxDigit
    } else {
        numberLength = String(number).length
        varNum = number
        for (i = 1; i <= numberLength; i++) {
            varNumDivided = ((varNum / 10) % Math.floor(varNum / 10)) * 10
            if (varNumDivided > maxDigit) {
                maxDigit = Math.floor(varNumDivided)
            }
            varNum = Math.floor(varNum / 10)            
        }
        return maxDigit
    }
}


const number = 97654
console.log("Функція №1. Отримує найбільшу цифру з числа " + number + ". Результат: " + getMaxDigit(number))

