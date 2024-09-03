function si(p,r,n){
    const i= p*r*n;
    console.log(`${i}`);
}
function ac(pi,r){
    const area= pi*r*r;
    const circum= 2*pi*r;
    console.log(`Area of circle is: ${area} and Circumference is: ${circum}`); 
}
function table(ans){
    let result=1;
    for(let i=1;i<=10;i++){
        result= ans*i;
        console.log(`${result}`);
    }
}
function fib(){
    let sum=0;
    for(let i=0;i<=10;i++){
        sum+=i;
        console.log(`${sum}`);
    }
}
si(1,2,3);
ac(1,2);
table(5);
fib();