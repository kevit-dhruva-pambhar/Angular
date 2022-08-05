
export class TaskService{
    tasks = ['Task1' , 'Task2' , 'Task3' , 'Task4' , 'Task5' , 'Task6' , 'Task7' , 'Task8' , 'Task9' , 'Task10' , 'Task11' , 'Task12' , 'Task13' ];

    onAdd(task: string){
        // console.log(this.tasks.push(task));
        if(task==""){
          alert('Please enter some task');
        }
        this.tasks.push(task);
    }

    onDelete(id: number){
            // console.log(this.tasks.splice(id,1));
            this.tasks.splice(id,1);
    }
        
    onTaskEdit(id:number,newvalue: string){
            // console.log(this.tasks[id]);
            this.tasks[id] = newvalue;
     }
}