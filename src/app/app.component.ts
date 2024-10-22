import { Component } from '@angular/core';
import { Task } from './task/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  handleTaskCompleted(task: Task) {
    console.log('Task completed:', task);
  }
}
