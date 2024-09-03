function check(age){
    const promise=new Promise((resolve,reject)=>{
        if(age>18)
            resolve('valid');
        else
        reject("Not valid");
    })
    return promise;
}
check(20).then(resp=>resp.toUpperCase()).then(resp=>console.log(resp)).catch(err=>console.log(err));