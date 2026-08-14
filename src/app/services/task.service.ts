import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
	providedIn: 'root',
})
export class TaskService {
	private tasks: Task[] = [
		{
			id : 1,
			title : 'Learn Angular',
			completed : false,
		},
		{
			id : 2,
			title : 'Build a project',
			completed : false,
		}
	];

	getTasks(): Task[] {
		return this.tasks;
	}

}
