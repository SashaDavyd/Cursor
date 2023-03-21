
// 1 Function
getRandomArray = (length, min, max) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return arr;
};
const getArray = getRandomArray(15, -10, 100);
console.log('Масив випадкових чисел: ' + getArray);

// 2 Function

// 3 Function

const getAverage = (numbers) => {
    const averangeNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            averangeNumber.push(numbers[i])
        }
    }
    const sum = averangeNumber.reduce((prevValue, item) => {
        const res = prevValue + item;
        return res
    }, 0)
    const averange = sum / numbers.length;
    return averange
};
const averange = getAverage(getArray);
console.log('Середнє значення: ' + averange)

// 5 Functioun

const filterEvenNumber = getArray.filter((numbers) => {
    return numbers % 2 === 0;
})
console.log('Фільтр парних чисел: ' + filterEvenNumber);

// 6 Function
const countPositiveNumbers = (numbers) => {
    const positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) { positiveNumbers.push(numbers[i]) }

    }
    return positiveNumbers.length;
}
console.log('Кількість чисел більших 0: ' + countPositiveNumbers(getArray));



// 7 Function
const getDividedByFive = getArray.filter((numbers) => {
    return numbers % 5 === 0;
})
console.log('Числа, які діляться на 5 без остачі: ' + getDividedByFive);

// 8 Function 

const badWords = ['shit', 'fuck'];

function replaceBadWords(string, words) {
    const wordsSplit = string.split(' ');
    let wordsJoin = wordsSplit.join(' ');
    for (i = 0; i < words.length; i++) {
        if (words[i] === words[i]) {
            proba = wordsJoin.replace(words[i], '****').split(' ')
            wordsJoin = proba.join(' ')
        }
    }
    return wordsJoin
};
console.log("Погані слова: " + badWords);
console.log(replaceBadWords("Are you fucking kidding bullshit?", badWords));
console.log(replaceBadWords("Holly shit!", badWords));
console.log(replaceBadWords("It's bullshit!", badWords));