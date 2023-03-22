function someName ( ) {} // F declaretion
const someName1 = function () {} // F expression


// Приховані властивості функції:
// [CALL] властивість функції
// LexicalEnvironment завязує змінні у момент створення
// function closure () {
//     return function(){};
// }

// const test = closure();
// test();

// function counter () {
//     let count = 0
//     return function(){
//         return count ++;
//     }
// }

// const count1=counter();
// count1();
// count1();
// count1();
// count1();
// count1();
// count1();
// count1();
// console.log(count1())

// const count2 = counter;
// count2();
// count2();
// count2();
// count2();
// count2();
// console.log(count2())

// const user = {
//     name: "JOHN",
//     lastName: 'Wick',
//     address: {
//         street: "DDDDD"
//     },
//     sayName: function(){
//         console.log(this.name)
//     }
// }

// function counter (){
//     this;
// }





// const ladder = {
//     maxSteps: 20,
// currentStep : 0,

// up: function(){
//     if (this.currentStep >= this.maxSteps){
//         console.warn('Max steps')
//         return this;
//     }
//     this.currentStep= this.currentStep +1
//     return this;
// },
// down: function (){
//     if (this.currentStep<=0){
//         return this;
//     }
//     this.currentStep = this.currentStep -1;
//     return this;
// },
// info: function (){
//     console.info('current step is:', this.currentStep)
//     return this;
// },
// }

// function add (a,b){
//     return a*b;
// }

// const multipleTwo = add.bind(null,2)




// Recursion


// function factorial (count){
    

//     if (count===1){
//         debugger;
//         return count;
//     }
// return count * factorial(count -1)
// }
// factorial(5)