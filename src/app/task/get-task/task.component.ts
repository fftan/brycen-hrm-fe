import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];

  totalItem = 0;

  pageIndex = 1;

  pageSize = 30;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks(this.pageIndex, this.pageSize);
  }

  getTasks = (page, size) => {
    this.taskService.getTasks(page, size).subscribe(
      (tasks: any) => {
        console.log("TaskComponent -> getTasks -> tasks", tasks)
        this.tasks = tasks.content;
        this.totalItem = tasks.totalElements;
      }
    )
  }

  getCurrenIndex = (event:any) => {
    this.pageIndex = event;
    this.getTasks(this.pageIndex, this.pageSize);
  }
}
