import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TareasComponent } from './tareas/tareas.component';



const routes: Routes = [
  { path: '', component: TareasComponent },
  { path: 'tasks/:id', component: TaskDetailComponent },
  { path: '**', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
