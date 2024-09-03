class Todo{
    constructor(id,task,status){
        this.id=id;
        this.task=task;
        this.status=status;
    }
}
class TodoList{
    constructor(){
        this.todos=[];
    }
    addTodo(data){
        const num=Math.floor(Math.random()*100000);
        const todo1=new Todo(num,data,'pending');
        this.todos.push(todo1);
    }
    removeTodo(id){
        this.todos=this.todos.filter(item=>item.id!==id);
    }
    getAll(){
        return this.todos;
    }
    updateStatus(name){
        this.todos=this.todos.map(item=>{
            if(item.task==name){
                item.status='completed';
            }
            return item;
        })
    }
}
const list1=new TodoList();
list1.addTodo('Assignment');
list1.addTodo('check copies');
console.log(list1.getAll());
list1.updateStatus('Assignment');
console.log(list1.getAll());

