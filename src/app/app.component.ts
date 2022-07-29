import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  // edit: number[] = [];
  clicked: boolean;
  tasks = ['Task1' , 'Task2' , 'Task3' , 'Task4' , 'Task5' , 'Task6' , 'Task7' , 'Task8' , 'Task9' , 'Task10' , 'Task11' , 'Task12' , 'Task13' ];

  onDelete(id: number){
    // console.log(this.tasks.splice(id,1));
    this.tasks.splice(id,1);
  }

  onAdd(task: string){
    // console.log(this.tasks.push(task));
    if(task==""){
      alert('Please enter some task');
    }
    this.tasks.push(task);
    }

  // onEditButtonClick(id: number){
    // this.edit.push(id);
    // console.log(this.edit);
  // }

  onTaskEdit(id:number,newvalue: string){
    // this.edit=[];
     // console.log(this.tasks[id]);
    this.tasks[id] = newvalue;
  }

  

}

 
