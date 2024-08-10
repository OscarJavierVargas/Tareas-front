import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})


export class TaskService {

 // private apiUrl = `${environment.apiUrl}/tasks`;  http://localhost:9595/tareas
 private apiUrl = `http://localhost:9595/tasks`;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTask(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createTask(task: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, task,  { responseType: 'text' as 'json' });
  }

  updateTask(id: number, task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, task,  { responseType: 'text' as 'json' });
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`,  { responseType: 'text' as 'json' });
  }
}
