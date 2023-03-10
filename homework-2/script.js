let M = 0
let N = 0
while (true){
        let n = +parseInt(prompt('Введіть початкове число N= '));
        let m = +parseInt(prompt('Введіть кінцеве число M= '));
        N = n;  
        M = m;
        if (Number.isInteger(N) && Number.isInteger(M) &&  N>0 &&  N<M) break;
}
console.log(N);
console.log(M);


const oddOreven = confirm("Пропускати парні числа?");




let sum = 0;
for (let i = N; i <= M; i++) {
        if (i % 2 == 0) {
                if (oddOreven === false) {
                        sum += i;
                }
        } else {
                sum += i;

        }
};


console.log(sum);