// Lesson 8

// class Cat {
//     eat() {
//         console.log("cat is aeting")
//     }
//     walk() {
//         console.log("Cat is walking")
//     }
//     breath() {
//         console.log("Cat is braething")
//     }
// }

// class Dog {
//     eat() {
//         console.log("dog is aeting")
//     }
//     walk() {
//         console.log("dog is walking")
//     }
//     breath() {
//         console.log("dog is braething")
//     }
// }

// new Cat().eat();


// class Person1 {
//     teach_progamming(){
//         console.log("Teach programming")
//     }
// }

// class Person2 {
//     cooking(){
//         console.log("Amazing cooking")
//     }

// }

// new Person1().teach_progamming();



// class Client {
//     constructor(firstname,yaers_old,mariied_status) {

//         this.name = firstname;
//         this.years =yaers_old;
//         this.mariied =mariied_status;
//     }

//     show_info() {

//         console.log(`${this.name} who is ${this.years} old,whose married status ${this.mariied} bought ${product} product`)
//     }

// }

// class Admin {
//     change() {
//         console.log("Change ")
//     }
// }
// class Dealer {
//     add() {
//         console.log("Add")
//     }
// }

// new Client().buy("Mans shampoo")
// new Client().buy("Beer")
// new Client().buy("Magazine")
// new Client().buy("Papers")

// let client = new Client("Mark", 26, true);
// client.show_info();


// class Client {
//     #premission;
//     constructor(name, years, mariied) {

//         this.name = name;
//         this.years = years;
//         this.mariied = mariied;
//         this.#premission = 'guest';

//         console.log('Tuo can change your premission to: guest, unauthorized user')
//     }

//     show_info() {

//         console.log(`${this.name} who is ${this.years} old,whose married status ${this.mariied} bought`)
//     }
//     set change_premission(value) {
//         if (value == 'guest' || value == 'unauthorized user') {
//             this.#premission = value;
//             console.log('Succesfully changed')
//         } else {
//             console.log('Error')
//         }
//     }
//     get change_premission() {
//         console.log('Warning')
//         return this.#premission = value
//     }


// }


// let client = new Client("Mark", 26, true);
// client.show_info();
// ;
// client.name = 'Alex'
// console.log(client.name)

// client.show_info()
// client.change_premission = 'guest'
// client.change_premission('admin')



class Users {
    constructor(name, years, mariied) {
        this.name = name;
        this.years = years;
        this.mariied = mariied;
    }
    show_info() {
        console.log(`${this.name} who is ${this.years} old,whose married status ${this.mariied} bought`)
    }
}
class Admin extends Users {
    constructor(name, years, mariied,work) {
        super(name, years, mariied)
        this.work = work;
    }
    change_post(){
        console.log('Changing post...')
    }
   
}
class Guest extends Users {
    constructor(name, years, mariied,travelling) {
        super(name, years, mariied)
        this.travelling = travelling
          
    }
}

let admin = new Admin('Olena',22,true)
let guest = new Guest('Pasha',22,true)
