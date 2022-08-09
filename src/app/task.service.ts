import { ITask } from "./task-list/task-list.component";
export class TaskService{
    tasks: ITask[] = [];
    
    onAdd(task: string){
      const obj ={
        task:task,
        edit:false
      }
        if(!task.trim()){
          alert('Please enter some task');
          return;
        }
        this.tasks.push(obj);
    }

    onDelete(id: number){
        this.tasks.splice(id,1);
    }
        
    onTaskEdit(id:number,newvalue: string){
        this.tasks[id].task = newvalue;
     }
}