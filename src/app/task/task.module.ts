import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';



@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    TaskListComponent // Export TaskListComponent to use it in other modules
  ]
})
export class TaskModule { }
