class Account{
    constructor(acc_holder_name,acc_no,balance){
        this.acc_holder_name=acc_holder_name;
        this.acc_no=acc_no;
        this.balance=balance;
    }
    Deposit(data){
        this.balance+=data;
        console.log(this.balance);
    }
    Withdraw(data){
        if(this.balance>=data){
            this.balance-=data;
            console.log("Cash withdrawn");
            console.log(`Balance is:${this.balance}`);
        }
        else{
            console.log("Insufficient balanace");
            
        }
    }
    checkBalance(){
        console.log(this.balance);
        
    }

}
class SavingAccount extends Account{
    constructor(acc_holder_name,acc_no,balance,interest=0.01){
        super(acc_holder_name,acc_no,balance);
        this.interest=interest;
    }
    Deposit(data){
        const int =data*this.interest/100;
        super.Deposit(data+int);
    }
}
class CurrentAccount extends Account{
    constructor(acc_holder_name,acc_no,balance,overdraft=500){
        super(acc_holder_name,acc_no,balance);
        this.overdraft=overdraft;
    }
    Withdraw(data){
        if(this.balance<=this.balance+this.overdraft){
            super.Withdraw(data);
        }
        else{
            console.log("no sufficient balance");
            
        }

    }
}
class userInterface{
    constructor(){
        this.acc=null;
    }
    createAccount(){
        this.acc=new SavingAccount("Juveriyah",12,1000);

    }


}
const item=new SavingAccount("Juveriyah",12,1000);
    item.Deposit(1000);
    item.Withdraw(500);
    item.checkBalance();
    item.Deposit(100);

