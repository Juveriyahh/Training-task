const readline = require('readline-sync');
const n = readline.question("Enter the amount of no. you want to add:");
const arr = [];
function avg() {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        arr[i] = readline.question("Enter the no.:");
        sum += +arr[i];
    }
    const avg = sum / n;
    console.log(avg);
}
avg();
