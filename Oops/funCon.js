// function Employee(id,name,department,salary){
//     this.id=id;
//     this.name=name;
//     this.department=department;
//     this.salary=salary;
// }
// Employee.prototype.show=function(){
//     console.log(this.id);
//     console.log(this.name);
//     console.log(this.department);
//     console.log(this.salary);
// }
// const emp1=new Employee(1,"Jiya","Digital","20000000");
// const emp2=new Employee(2,"Juv","Digital","30000000");
// emp1.show();
// emp2.show();
class Employee{
    constructor(id,name,department,salary){
        this.id=id;
        this.name=name;
        this.department=department;
        this.salary=salary;
    }
    show(){
        console.log(this.id);
        console.log(this.name);
        console.log(this.department);
        console.log(this.salary);
    }
}
const emp1=new Employee(1,"Jiya","Digital","20000000");
const emp2=new Employee(2,"Juv","Digital","30000000");
emp1.show();
emp2.show();