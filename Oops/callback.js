let data=[];
const fetch=(cb)=>{
    setTimeout(()=>{
        console.log('data Fetched');
        data=[1,2,3,4,5,6];
        cb();
    },2000)
}
const display=()=>{
    console.log('Display function');
    console.log(data);   
}
fetch(display);