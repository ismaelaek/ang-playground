import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})
export class TaskCardComponent {

  task = input.required<Task>();

  completed = output<number>();

  completeTask(): void {
    this.completed.emit(this.task().id);
  }
}