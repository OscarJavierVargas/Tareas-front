import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from '../status';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {


  
  task: any = {
    id: 0,
    title: '',
    description: '',
    createdAt: new Date(),
    estatus: ''
  };
  isEditMode = false;
  statusOptions = Object.values(Status);

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.taskService.getTask(id).subscribe(data => {
        if (data) {
          this.task = data;
          this.isEditMode = true;
        } else {
        
          this.task = { 
            id: 0,
            title: '',
            description: '',
            createdAt: new Date(),
            estatus: ''
          };
          this.isEditMode = false;
        }
      });
    } else {
      
      this.isEditMode = false;
      this.task = { 
        id: 0,
        title: '',
        description: '',
        createdAt: new Date(),
        estatus: ''
      };
    }
  }

  saveTask(): void {
    if (this.isEditMode) {
      this.taskService.updateTask(this.task.id, this.task).subscribe(() => {
      //  this.router.navigate(['tasks']);
      });
    } else {
      this.taskService.createTask(this.task).subscribe(() => {
      //  this.router.navigate(['tasks']);
      });
    }
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.task.id).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
