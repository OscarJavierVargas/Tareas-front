import { Router } from '@angular/router';
import { TaskService } from './../task.service';
import { Component } from '@angular/core';
import { tarea } from '../tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {


  tasks: tarea[] = [];
  
  constructor(private servYask: TaskService,  private router: Router){}

  onSubmit(): void {
    this.servYask.getTasks().subscribe(data => {
       this.tasks = data;
    });

}

deleteTask(id:number): void {
  this.servYask.deleteTask(id).subscribe(() => {
    this.router.navigate(['/tasks']);
  });
  this.onSubmit();
}

}