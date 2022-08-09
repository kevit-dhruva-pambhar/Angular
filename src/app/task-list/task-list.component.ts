import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

export interface ITask {
  task: string,
  edit: boolean
}


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})


export class TaskListComponent implements OnInit {
  tasks: ITask[];
  currentTask: string;
  

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }

  delete(id: number){
   this.taskService.onDelete(id);
  }

  getValue(id: number){
    // console.log(id);
    this.tasks[id].edit = true;
    this.currentTask = this.tasks[id].task; 
  }

  taskEdit(id:number,newvalue: string){
   this.taskService.onTaskEdit(id,newvalue);
   this.tasks[id].edit = false;
  }

}
