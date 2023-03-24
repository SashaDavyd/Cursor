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

// 1
const getSubject = (student) => {
    const studentsSubjects = [];
    for (let key in student.subjects) {
        studentsSubjects.push((key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()).replaceAll('_', ' '))
    }
    return studentsSubjects
}
console.log(getSubject(students[1]))

// 2

const getAverageMark = (student) => {
    let sum = 0
    const marksArr = Object.values(student.subjects).reduce((a, b) => { return a.concat(b) });

    for (let i = 0; i < marksArr.length; i++) {
        sum += marksArr[i]
    }

    return (sum / marksArr.length).toFixed(2)
}
console.log(getAverageMark(students[0]))

// 3
const getStudentInfo = (student) => {
    const studentInfo = {};

    studentInfo.course = student.course;
    studentInfo.name = student.name;
    studentInfo.averageMark = getAverageMark(student)

    return studentInfo;
}
console.log(getStudentInfo(students[0]))

// 4 

const getStudentsName = (students) => {
    const studentsName = students.map((item) => item.name).sort();

    return studentsName

}

console.log(getStudentsName(students))

// 5

const getBestStudent = (students) => {

    let mark = 0;
    let bestStudent;
    students.forEach(student => {
        if (mark < getAverageMark(student)) {
            mark = getAverageMark(student);
            bestStudent = student.name;
        }
    });
    return bestStudent
}
console.log(getBestStudent(students));

// 6

const calculateWordLetters = (word)=>{
    result = {};
    word = word.split('');
for (const item of word ){
    result[item] = result[item] ? result[item] + 1: 1;
}
// const res = Object.keys(result).filter((item)=>result[item])
return result
}

console.log(calculateWordLetters('приввітпп'))