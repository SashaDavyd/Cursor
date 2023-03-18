// Lesson - 5


//              Метод перебору масиву ForEach

// const avangers = [
// 'Spider-man',
// 'Iron-man',
// 'Capitan America']

// avangers.forEach(function(item,index,arr){
//     console.log(item,index,arr)

// })


// const avan = [];

// avangers.forEach(function(item,index){
//  avan.push(item + ' - ' +  0)

// });
// console.log(avan)

// avangers.forEach((item,index)=>{
//     avan.push(item + ' - ' +  0)

//    });
//    console.log(avan)


// const avangers = [
//     'Spider-man',
//     'Iron-man',
//     'Capitan America'];

// const avan = [];

// function myForEach(arr,callback) {
// for(let item of arr){
//     callback(item)
// }
// }

// myForEach(avangers,(avanger) =>{
//     console.log(avanger)
// })



//          Метод MAP

// const avangers = [
// 'Spider-man',
// 'Iron-man',
// 'Capitan America']

// const res= avangers.map((avanger, i)=>{
// const str = `${i+1}. ${avanger}`;
// return avanger.length

// return str;

// })
// console.log(avangers)
// console.log(res)

//      Метод FILTER(якщу true то попадає в результат і навпаки)

// const avangers = [
// 'Spider-man',
// 'Iron-man',
// 'Capitan America']

// const res = avangers.filter((avanger)=>{
// return true;
// })
// console.log(res)

// const res = avangers.filter((avanger)=>{
//     return avanger.includes('-')
//     })
//     console.log(res);

//          Metod FIND(зупиняється на першому ТРУ і видає, але не масив)


// const avangers = [
//     'Spider-man',
//     'Iron man',
//     'Capitan America']

//     const res = avangers.find((avanger)=>{
//         // return avanger.includes('-')
//         return !avanger.includes('-')
//     })
//     console.log(res)

//  FindIndex

// const avangers = [
//         'Spider-man',
//         'Iron man',
//         'Capitan America']

//         const res = avangers.findIndex((avanger)=>{
//             // return avanger.includes('-')
//             return !avanger.includes('-')
//         })
//         console.log(res)


//    SORT 

// const avangers = [
//     'Spider-man',
//     'Iron man',
//     'Capitan America']

// const res = avangers.sort()
// console.log(res)

// const numbers = [22, 1, 3];
// const resN = numbers.sort()
//     console.log(resN)

//              EVERY

// const avangers = [
//     'Spider-man',
//     'Iron man',
//     'Capitan America']


//     const numbers = [22, 1, 3, 44,77,67,2,54,-1,907];

//    const res=  numbers.every((number)=>{
//         return number > 10
//     })

//     console.log(res)


// SOME

// const avangers = [
//     'Spider-man',
//     'Iron man',
//     'Capitan America']


//     const numbers = [22, 1, 3, 44,77,67,2,54,-1,907];

//     const res = numbers.some((number,i,arr)=>{
//         return number < -0
//     })
//     console.log(res)


//  REDUCE

// const avangers = [
//     'Spider-man',
//     'Iron man',
//     'Capitan America']


//     const numbers = [22, 1, 3, 44];
//    const result =   numbers.reduce((prevValue,item,index,arr)=>{
//         console.log(prevValue,item)
//         const res = prevValue + item
//         console.log('res',res)
//         return res
//     },0)
//     console.log(result)


// ReduceRight

// const numbers = [22, 1, 3, 44];

// const result =   numbers.reduceRight((prevValue,item,index,arr)=>{
//             console.log(prevValue,item)
//             const res = prevValue + item
//             console.log('res',res)
//             return res
//         },0)
//         console.log(result)




const avangers = [
    'Spider-man',
    'Iron man',
    'Capitan America']

const res1 = avangers.filter((avanger) => {
    return !avanger.includes('-')
})
const res2 = res1.map((avanger, index) => {
    return `${index + 1}. ${avanger}`
})
const res3 = res2.sort((a, b) => a > b ? -1 : 1)
console.log(res3)


const result = avangers.filter((avanger) => {
    return !avanger.includes('-')
}).map((avanger, index) => {
    return `${index + 1}. ${avanger}`
}).sort((a, b) => a > b ? -1 : 1)
console.log(result)