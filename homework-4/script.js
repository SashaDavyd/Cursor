// const arr = new Array();
// const Array= [];

// const Array= [
// 'Spider-man', 
// 'Iron man',
// true,
// function(){alert('this is array')},
// null,
// 'Jessica Jones'
// ];
// console.log(Array.length);
// console.log(Array.length - 1);
// console.log(Array.at(1));
// console.log(Array.at(-1));

// Array [2];



// const heroes = [
//     'Spider-man',
//     'Iron man',
//     'Black Panther',
//     'Capitan America',
//     'Jessica Jones',
//     'Ant-Man'
// ];
// push,pop, shift,unshift

// const res = heroes.push('Capitan America');
// console.log('res ', res);
// heroes.push('Petro Poroshenko')
// console.log(heroes);
// const res = heroes.pop()
// console.log('res ', res);
// const res = heroes.shift()
// console.log('res ', res);
// const res = heroes.unshift("Lutsenko")
// console.log('res ', res);

// const heroes2 = [
//     'Spider-man',
//     'Iron man',
//     'Black Panther',
//     'Capitan America',
//     'Jessica Jones',
//     'Ant-Man'
// ];
// heroes[0]='Djeck';
// console.log(heroes);
// heroes.length = 1;
// console.log(heroes);
// heroes.length = 0;
// console.log(heroes);


// const heroesUpperCase = [];


// for (let i=0;i<heroes.length;i++){
//     const hero = heroes[i];
//     const upperCase=  hero.toUpperCase();
// heroesUpperCase.push(upperCase);
// }
// console.log(heroesUpperCase);

// for (let hero of heroes) {
//     const upperCase = hero.toUpperCase();
//     heroesUpperCase.push(upperCase);
// }

// const matrix = [
// [1,2,66],
// [33,2,1],
// [55,3,1]
// ];
// console.log(matrix[0][1]);
// console.log(matrix[1][1]);
// for (let arr of matrix) {
//     for(let i of arr) {
//         console.log(i)
//     }
// }

// for (let i=0; i < matrix.length; i++ ) {
//     const arr = matrix[i];
//     for ( let j = 0; j < arr.length; j++)
//     console.log(arr[j])
// }


// for (let i=0; i < matrix.length; i++ ) {
//     for ( let j = 0; j < matrix.length; j++){
//     const el = matrix[i][j];
//     console.log(matrix[i][j]);
//     }
// }


// const avangers = [
//     'Spider-Man',
//     'Iron Man',
//     'Black Panter',
//     'Capitan America',
//     'jesica Jones',
//     'Ant Man'
// ];

// avangers.splice(0, 0, 'Petro', 'Lutsenko' );
// console.log(avangers);
// avangers.splice(1, 0, 'Petro', 'Lutsenko' );
// console.log(avangers);
// avangers.splice(1, 2 );
// console.log(avangers);
// avangers.splice(1, 2, 'Petro', 'Lutsenko' );
// console.log(avangers);
// const  res = avangers.splice(1, 2, 'Petro', 'Lutsenko' );
// console.log(res)

// const res = avangers.slice(1,3);
// console.log(res);


// const avangersTeam1 = [
//     'Spider-Man',
//     'Iron Man',
//     'Black Panter',
//     'Capitan America',
// ];

// const avangersTeam2 = [
//     'jesica Jones',
//     'Ant Man'
// ];

// const avangers = avangersTeam1.concat(avangersTeam2, [2,3],'333')
// console.log(avangers);

// const avangers = [...avangersTeam1,...avangersTeam2,...['222'],...['444'],...['ddd']];
// console.log(avangers);


// console.log(avangers.indexOf('jesica Jones'));
// console.log(avangers.lastIndexOf('jesica Jones'));
// console.log(avangers.includes('jesica Jones'));


// console.log(avangers.join())

// const str = '22,true,arr'
// console.log(str.split(','));
// console.log(str.split(''));

// let a = 1;
// let b=2;
// let sum

// function getSum(param1, param2){
//     return param1 + param2
// }
// sum = getSum(a,b)
// console.log(sum)




//              HOMEWORK-4


const students = ["Олександр","Ігор","Олена","Іра","Олексій","Світлана",];
const themes = ["Диференційне рівняння","Теорія автоматів","Алгоритмим і структури даних"];
const marks = [4,5,5,3,4,5];



function pairs (student) {
const studentsPairs =[];
studentsPairs.push(
    [student[0],student[2]],
    [student[1],student[3]],
    [student[4],student[5]]
    );
return studentsPairs;
}

const studentsPair=pairs(students);
console.log(studentsPair)

function theme (pairs,themes){
const pairsTheme = [];
pairsTheme.push(
[pairs[0],themes[0]],
[pairs[1],themes[1]],
[pairs[2],themes[2]]

)
return pairsTheme;

}
const pairsTheme = theme(studentsPair,themes)
console.log(pairsTheme)











