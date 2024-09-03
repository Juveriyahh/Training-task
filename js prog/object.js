let person={
    firstname: "Juveriyah",
    lastName: "Hassan",
    address:{
        Street:"OMR STREET",
        Zipcode:"222001"
    },
    display:function(){
        console.log(this.firstname+" "+this.lastName+"\nAddress is: "+ this.address.Street, this.address.Zipcode);
        
    }

}
// person.display();
// console.log(person.firstname);
for(let key in person){
    if(person[key] instanceof Object){
        for(let k in person[key]){
            console.log(k+" "+ person[key][k]);
        }     
    }
    else{
        console.log(key+" "+person[key]);
        
    }
}