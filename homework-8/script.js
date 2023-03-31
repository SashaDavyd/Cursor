class Student {
    #marks
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.#marks = [5, 4, 4, 5];
        this.dismiss = false;
    }

    getInfo() {
        if (!this.dismiss) {
            console.log(`Студент ${this.course} курсу ${this.university}  ${this.fullName}`);
        } else {
            return null
        }
    }
    getAverageMark() {
        if (!this.dismiss) {
            const averageMark = this.#marks.reduce((a, b) => (a + b)) / this.#marks.length;
            //    console.log(averageMark);
            return averageMark;
        } else {

            return null
        }
    }
    dismissStudent() {
        this.dismiss = true;
        return `Студента виключено`
    }
    recoverStudent() {
        this.dismiss = false;
        return `Студента поновлено`
    }
    get marks() {
        if (this.dismiss) {
            return null
        } else {
            console.log(this.#marks)
            return this.#marks
        }
    }

    set marks(value) {
        if (!this.dismiss) {
            this.#marks.push(value)
            console.log(this.#marks)
        } else {
            return null
        }
        // return this.#marks
    }

}
let student = new Student("Вищої школи Психотерапії м.Одеса, ", "1го", "Остап Родоманський Бендер")
student.getInfo()
student.marks = 5
console.log(student.getAverageMark())
// 
student.dismissStudent()
console.log(student.dismissStudent())
student.getInfo()
student.marks = 5
console.log(student.getAverageMark())

student.recoverStudent()
console.log(student.recoverStudent())
console.log(student.getAverageMark())



class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName)
        setInterval(() => { (this.getScholarship()) }, 30000)
    }
    getScholarship() {
        if (this.getAverageMark() >= 4.0 && !this.dismiss) {
            console.log(`Ви отримали стипендію 1400 гривень`)
        } else {
            console.log(`Ви не отримали стипендію`)
        }
    }

}
let getStudent = new BudgetStudent("Вищої школи Психотерапії м.Одеса, ", "1го", "Остап Родоманський Бендер")
getStudent.getInfo()
console.log(student.getAverageMark())
getStudent.getScholarship()
