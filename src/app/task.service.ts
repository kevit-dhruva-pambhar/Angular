
export class TaskService{
    tasks = ['Task1' , 'Task2' , 'Task3' , 'Task4' , 'Task5' , 'Task6' , 'Task7' , 'Task8' , 'Task9' , 'Task10' , 'Task11' , 'Task12' , 'Task13' ];

    onAdd(task: string){
        if(task==""){
          alert('Please enter some task');
        }
        this.tasks.push(task);
    }

    onDelete(id: number){
        this.tasks.splice(id,1);
    }
        
    onTaskEdit(id:number,newvalue: string){
        this.tasks[id] = newvalue;
     }
}