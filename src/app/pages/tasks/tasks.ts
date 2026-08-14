import { Component, OnInit, signal } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { TaskCardComponent } from '../../components/task-card/task-card';

@Component({
  selector: 'app-tasks',
  imports: [TaskCardComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class TasksComponent implements OnInit {

  tasks = signal<Task[]>([]);

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks.set(this.taskService.getTasks());
  }

  completeTask(id: number): void {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: true }
          : task
      )
    );
  }
}