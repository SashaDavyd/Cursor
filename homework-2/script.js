let N = parseInt(prompt('Введіть початкове число N='));
console.log(N);


let M = parseInt(prompt('Введіть кінцеве число M='));
console.log(M);


// console.log(Boolean(confirm("Пропускати парні числа?")));
if (Number.isInteger(N) === false, Number.isInteger(N) === false) {
        console.log('Ці числа нам не підходять');
}

const oddOreven = (Boolean(confirm("Пропускати парні числа?")));
console.log(oddOreven);


let sum = 0;
for (let i = N; i <= M; i++) {
        if (i % 2 == 0) {
                if (oddOreven === false) {
                        sum += i;
                }
        } else {
                // console.log(i)
                sum += i;
               
        }
}


console.log(sum);