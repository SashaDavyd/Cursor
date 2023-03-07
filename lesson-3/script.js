// const age = prompt("скільки років?");
// console.log(age.trim());
// 0, null,undefind,NaN,'',false

// console.log(age);
// if (age>60) {
// alert ('забагато років')
// } else if(age>18){
// console.log('Ви повнолітній')
// } else {
//     alert('Ви неповнолітній')}


// Тринарний оператор

// const age = prompt("скільки років?");
// console.log(age.trim());


// const isAccessAllowed= age>18 ? 'yes':'no';

// const isAccessAllowed= age>18 ? 'yes' : age==0 ? 'It is not possible' : 'no';
// console.log(isAccessAllowed);

// const age = prompt("скільки років?");
// console.log(age.trim());

// switch(age){
//     case '18':
//         console.log('З повноліттям')
//         break
//         case '50' :
//         case '100' :
//         console.log('З ювілеєм')    
//         break
//         default:
//             console.log('Звичайний вік')
//             break
// }



// Умовні оператори

//  ||  - або
// && - і
// ! - не


// console.log(true || false || false);
// console.log(false || false || true);
// console.log(false||false);

// console.log(false&&false);
// console.log(true&&false);
// console.log(true&&true);


// console.log( 0 || 15 || ''||'test')


// const age=41;
// const sex='f'
// // if (age>18 && age<60){
// // console.log('Ви в нашомі клубі')
// // }

// if ((age<18 || age>60) && sex === 'f' ){
//     console.log('Ви нам не підходите ')
// }
// const a='221dddd'
// console.log(a);
// const result = !a;
// console.log(result);


//ЦИКЛИ


// let i =0;
// while (i < 3) {
// console.log(i);
// i++;
// }

// console.log('finish') 

// for (let i = 0; i <= 3 ; i++ ) {
// console.log(i);

// }

// let sum = 0;
// while (true) {
//     let value = +prompt("Введіть число", '');
//     if (!value) break; 
//     sum += value;
// }
// alert ('Сума ' + sum);

// let i = 0
// while (i < 10) {
//     if(i > 3) break;
//     console.log(i);
//     i++;
// }

// let j = 0
// while (j <10) {
// j++
// if (j <3)continue;
// console.log(j);

// }

// for (let i = 0; i < 3; i++){
//     console.log('i')
//     for (let j=0; j <3; j++) {

//         console.log('j');
//     }
// }


// Область видимості

// console.log(a);
// let a = 5;

// let a = 5;
// const b = 6;
// if (a>2) {
//     const c = 7;
// }

// console.log(c)





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
