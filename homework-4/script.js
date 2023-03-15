const students = ["Олександр","Ігор","Олена","Іра","Олексій","Світлана",];
const themes = ["Диференційне рівняння","Теорія автоматів","Алгоритмим і структури даних"];
const marks = [4,5,5,3,4,5];



const pairsStudents =  (student) => {
const pairs =[];
pairs.push(
    [student[0],student[2]],
    [student[1],student[3]],
    [student[4],student[5]]
    );
return pairs;
}

const pairs = pairsStudents(students);
console.log(pairs)


const pairsTheme = (students,themes) => {
    const stPairs = [];
    for (let i=0; i < students.length; i++){
        stPairs.push([students[i][0]+ ' i ' + students[i][1],themes[i]]);  
    }
    return stPairs;
    
    
}
const studentsThemes = pairsTheme(pairs,themes);
console.log(studentsThemes)


const marksStudents = (students,marks) => { 
    const stMarks = [];
    for (let i=0; i < students.length; i++){

        stMarks.push([students[i], parseInt(marks[i])]);
    }
return stMarks;

}

const studentsMarks = marksStudents(students,marks);
console.log(studentsMarks);



function pairsMarks  (pairs) {
const pairsThemesMarks = pairs;
for (i = 0; i < pairs.length; i++ ){
    pairsThemesMarks[i].push(Math.floor(Math.random()*(5-1)+1));
}
return pairsThemesMarks;

}
const markForpairs = pairsMarks (studentsThemes);
console.log(markForpairs)