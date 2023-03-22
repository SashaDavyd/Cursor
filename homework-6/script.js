//  ОБ'ЄКТИ


// const obj = new Object()

// const obj = {};

// const obj = {
// name: 'Andrii',
// age : 32,
// 'Full name' : 'Andrii D'
// };

// console.log(obj.name)
// console.log(obj['Full name'])

// obj.name = 'A'
// delete obj.age
// obj['Full name']

// const key = 'age';
// console.log(obj[key])


// obj.nickName = 'DAR'
// console.log(obj)
// console.log(obj.test)
// console.log(obj.test !== undefined)

// console.log('age' in obj)  перевіряє чи є значення у об'єкті
// console.log('test' in obj) перевіряє чи э таке значення КЛЮЧА


// function createUser(name,surname){
//     return {
//         name: name,
//         // name:
//         surename: surname,
//         // surname:
//         isAdmin: false,

//     }
// }
// const user = createUser('Andrii',
// 'D')
// console.log(user)



// const obj = {
//     name: 'Andrii',
//     age: 32,
//     'full name': 'Andrii D'
// };


// for (let key in obj){

//     console.log(obj[key])
// }

//    const res = Object.keys(obj)
//    console.log(res)

//    const res = Object.values(obj)
//    console.log(res)

// const res = Object.entries(obj)
// console.log(res)


// const obj = {
//     name: 'Andrii',
//     age: 32,
//     'full name': 'Andrii D',
//     skills: ['HTML','CSS','JS']
// };


// console.log(obj.skills[0])

// const obj = {
//     name: 'Andrii',
//     age: 32,
//     'full name': 'Andrii D',
//     skills: {
//         soft:['comunicative'],
//         hard:['HTML','CSS','JS']
//     }
// };
// console.log(obj['skills']['hard'][2])

// const obj2={};
// for (let key in obj){
//     obj2[key]=obj[key]
// }

// obj.age=null;
// console.log(obj2)

// cloneDeep {} Бібліотека лодаж для клонування багаторівневих об'єктів



//  Клонування однорівневих об'єктів

// const obj = {
//     name: 'Andrii',
//     age: 32,
// };


// const obj2={};
// Object.assign(obj2,obj)

// console.log(obj2)
// obj.age = null;
// console.log(obj2)


// const obj = {
//     name: 'Andrii',
//     age: 32,
//     sayHello: function(){
//         console.log('Hello')
//     }
// };

// obj.sayHello()



// const obj = {
//     name: 'Andrii',
//     age: 32,
//     sayHello: function(){
//         console.log(`Hello, I am ${obj.name}`)
//     }
// };

// obj.sayHello()


// const obj = {
//     name: 'Andrii',
//     age: 32,
//     sayHello(greatings= 'Hello'){
//         console.log(`${greatings}, I am ${obj.name}`)
//     }
// };

// obj.sayHello()


// let obj = {
//     name: 'Andrii',
//     age: 32,
//     sayHello(greatings= 'Hello'){
//         console.log(`${greatings}, I am ${obj.name}`)
//     }
// };

// const obj2 = obj
// obj = null
// console.log(obj)
// console.log(obj2.name)


// let obj = {
//     name: 'Andrii',
//     age: 32,
//     sayHello(greatings= 'Hello'){
//         console.log(`${greatings}, I am ${obj.name}`)
//     }
// };

// const obj2 = obj
// obj = null
// console.log(obj)
// console.log(obj2.name)

// obj2.sayHello()



//                  THIS

// let obj = {
//     name: 'Andrii',
//     age: 32,
//     sayHello(greatings= 'Hello'){
//         console.log(`${greatings}, I am ${this.name}`)
//     }
// };

// const obj2 = obj
// obj = null
// console.log(obj)
// console.log(obj2.name)

// obj2.sayHello()


//           ТАК НЕ ПРАЦЮЄ із цією функцією
// let obj = {
//     fullname: 'Andrii',
//     age: 32,
//     sayHi(greatings= 'Hello'){
//         const handleHello = function(){
//             console.log('hello, ' + this.fullname)
//         }
//         handleHello()
//     }
// };

// obj.sayHi()



//          ТАК ПРАЦЮЄ із стрілочною функцією
// let obj = {
//     fullname: 'Andrii',
//     age: 32,
//     sayHi(greatings= 'Hello'){
//         const handleHello = ()=>{
//             console.log('hello, ' + this.fullname)
//         }
//         handleHello()
//     }
// };

// obj.sayHi()

//                      Деструктиризація

// const arr =['Andrii', 'Dovbenko']



// const [name, surename]=arr
// console.log(surename)


// const arr =['Andrii', 'Dovbenko','HTML','CSS',"JS"]

// const [name, surename, ...skills]=arr
// console.log(skills)


// const options= {
// title: 'Menu',
// width: 100,
// height: 200

// }

// const {width} = options
// const width = options.width
// console.log(width)


// const {width,height} = options
// console.log(width)
// console.log(height)


// const options= {
//     title: 'Menu',
//     width: undefined,
//     height: 200

//     }

//     const {width = 0,height} = options
//     console.log(width)


// const options= {
//     title: 'Menu',
//     width: undefined,
//     height: 200

//     }

//     const {width = 0,height: h} = options
//     console.log(width)
//     console.log(h)





// const arr = [1,2,5,66, -33]
// const max = Math.max(...arr)
// console.log(max)




const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];
console.log(students)

// 
const getSubject = (student)=>{
    const studentsSubjects = [];
    for (let key in student.subjects){
    studentsSubjects.push((key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()).replaceAll('_',' '))
}
return studentsSubjects
}
console.log(getSubject(students[1]))

// 

const getAverageMark = (student)=>{
let  sum=0
const marksArr = Object.values(student.subjects).reduce((a,b)=>{return a.concat(b)});

for (let i=0; i<marksArr.length;i++){
sum += marksArr[i]
}

return (sum/marksArr.length).toFixed(2)
}
console.log(getAverageMark(students[0]))

// 