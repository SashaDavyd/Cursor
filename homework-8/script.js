class Student {
    #marks
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.#marks = [5, 4, 4, 5]
    }

    getInfo() {
        console.log(`Студент ${this.course} курсу ${this.university}  ${this.fullName}`)
    }


    get marks() {
        console.log(this.#marks)
        return this.#marks
    }

    set marks(value) {
        this.#marks.push(value)
        console.log(this.#marks)
        // return this.#marks
    }

}
let student = new Student("Вищої школи Психотерапії м.Одеса, ", "1го", "Остап Родоманський Бендер")
student.getInfo()
student.marks = 5