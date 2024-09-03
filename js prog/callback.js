// setTimeout(()=>console.log("Tesst"),3000);
const array=[1,2,3,4,5,6,7,8,9];
const arr=array.map(value=>value*3);
console.log(arr);
const arr1=array.filter(value=>value%2==0);
console.log(arr1);
array.forEach((value,index)=>{console.log(`index ${index}: ${value}`);
})
const result=[67,45,89,98,38];
console.log(result.every(value=>value>=35));
console.log(result.every(value=>value==90));

const found=result.find(value=>value==30);
console.log(found);
const index=result.findIndex(value=>value==38);
console.log(index);

const sum=array.reduce((acc,curr)=>acc+curr,0);
console.log(sum);
const min=array.reduce((acc,curr)=>acc<curr?acc:curr,array[0]);
console.log(min);
const max=array.reduce((acc,curr)=>acc>curr?acc:curr,array[0]);
console.log(max);

