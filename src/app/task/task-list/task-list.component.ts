import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Output() taskCompleted = new EventEmitter<Task>();

  tasks: Task[] = [
    { id: 1, title: 'Task 1', status: 'pending', type: 'work' },
    { id: 2, title: 'Task 2', status: 'complete', type: 'personal' },
    { id: 3, title: 'Task 3', status: 'pending', type: 'shopping' },
    { id: 4, title: 'Task 4', status: 'complete', type: 'work' }
  ];

  completeTask(task: Task) {
    task.status = 'complete';
    this.taskCompleted.emit(task);
  }
}
