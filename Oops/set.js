const array=[1,2,3,4,5,6,7,8,9];
const set=new Set(array);
console.log(set);
for(let s of set.entries()){
    console.log(s[0]);
    
}
