// const arr1=["Mind","Sprint","PVT","LTD"];
// // const arr=[];
// function str(){
//     const x=" ";
// for(let i=0;i<4;i++){
//     x=arr1[i].toUpperCase();
//     arr1[i]=x;
// }
// console.log(arr1);

// }
// str();

const readline = require('readline-sync');
const n = readline.question("Enter the amount of strings you want to enter:");
const arr = [];
function display() {
    for (let i = 0; i < n; i++) {
        arr[i] = readline.question("Enter the string:");
        console.log(`${arr[i]} : ${arr[i].length}`);
        
    }
}
    display();
