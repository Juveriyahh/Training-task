const arr1=[1,2,33,4,5,33,6,2];
function removedup(){
const arr=new Array();
for(let i=0;i<arr1.length;i++){
    if(arr1[i].includes(arr1[i+1]))
        {

        continue;
    }
    else{
        arr.push(arr1[i]);
    }
    
}
console.log(arr);

}
removedup();