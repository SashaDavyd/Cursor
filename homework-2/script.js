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

let N = parseInt(prompt('Введіть початкове число N='));
console.log(N);
// if (Number.isInteger(N)===false){
//         alert("Це не ЦІЛЕ число!!!");
//         // prompt('Введіть ЦІЛЕ число N')
// }

let M = parseInt(prompt('Введіть кінцеве число M='));
console.log(M);
// if (Number.isInteger(M)===false){
//         alert("Це не ЦІЛЕ число!!!");
//         // prompt('Введіть ЦІЛЕ число M')
// }

// console.log(Boolean(confirm("Пропускати парні числа?")));
if (Number.isInteger(N) === false, Number.isInteger(N) === false) {
        console.log('Ці числа нам не підходять');
}

const oddOreven = (Boolean(confirm("Пропускати парні числа?")));
console.log(oddOreven);


let sum = 0;
for (let i = N; i <= M; i++) {
        if (i % 2 == 0) {
                if (oddOreven === false) {
                        sum += i;
                }
        } else {
                // console.log(i)
                sum += i;
               
        }
}


console.log(sum);