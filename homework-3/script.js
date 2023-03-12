// 1. Функція, яка отримує число і виводить найбільшу цифру з цього числа

function getMaxDigit(number) {
    let maxDigit = 0;
    while (number) {
        let lastOfnumber = number % 10;
        if (lastOfnumber > maxDigit) {
            maxDigit = lastOfnumber;
        }
        number = parseInt(number / 10);

    }
    return maxDigit;
}
// 2. Функція, яка визначає ступінь числа
function powNumber(number, pow) {
    let result = 1
    for (let i = 1; i <= pow; i++) {
        result *= number;
    }
    console.log(result)
    return result;
}

// 3. Функція, яка форматує ім'я
function nameUppercase(name) {
    const firstLetter = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(firstLetter)
    return firstLetter;
}

// 4. Функція, яка вираховує зарплату, після оплати податку

function cash(sum, tax = 19.5) {
    let salary = sum - (sum * tax / 100)
    return salary;
}

// 5. Функція, яка повертає випадкове ціле число із діапазона
function getRandomNumber(N, M) {
    let max = Math.max(N, M);
    let min = Math.min(N, M);
    return Math.floor(Math.random() * (max - min) + min);
}

// 6. Функція, яка рахує кількість букв, які повторюються
function countLetter(word, letter) {
    let count = 0;
    let length = word.length;
    for (let i = 0; i < length; i++) {
        if (letter.toLowerCase() === word.charAt(i).toLowerCase()) {
            count++;
        }
    }
    return count;
}




document.writeln(`Функція №1: ${getMaxDigit(3358817322)}`);
document.writeln(`Функція №2: ${powNumber(6, 2)}`)
document.writeln(`Функція №3: ${nameUppercase("оЛекСАНДр")}`)
document.writeln(`Функція №4: ${cash(10000, 20)}`)
document.writeln(`Функція №5: ${getRandomNumber(1000, 19.5)}`)
document.writeln(`Функція №6: ${countLetter("АсталАвісТасСС", "с")}`)

