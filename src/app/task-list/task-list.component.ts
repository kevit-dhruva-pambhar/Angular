import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: string[];
  currentTask: string;
  edit: boolean[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }

  delete(id: number){
   this.taskService.onDelete(id);
  }

  getValue(id: number){
    // console.log(id);
    this.edit[id] = true;
    this.currentTask = this.tasks[id]; 
  }

  taskEdit(id:number,newvalue: string){
   this.taskService.onTaskEdit(id,newvalue);
   this.edit[id] = false;
  }




}
