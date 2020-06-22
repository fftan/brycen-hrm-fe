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

  types: [];

  totalItem = 0;

  pageIndex = 1;

  pageSize = 3;

  type_id = 0;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getType();
    this.getTasks(this.pageIndex, this.pageSize, this.type_id);
  }

  getTasks = (page, size, type_id) => {
    this.taskService.getTasks(page, size, type_id).subscribe(
      (tasks: any) => {
        console.log("TaskComponent -> getTasks -> tasks", tasks)
        this.tasks = tasks.content;
        this.totalItem = tasks.totalElements;
      }
    )
  }

  // getTaskByTypeId = (id, page, size) => {
  //   this.taskService.getTaskByTypeId(id, page, size).subscribe(
  //     (tasks: any) => {
  //     console.log("TaskComponent -> getTaskByTypeId -> tasks", tasks)
  //       this.tasks = tasks.content;
  //     },
  //     err => {
  //     console.log("TaskComponent -> getTaskByTypeId -> err", err)
        
  //     }
  //   )
  // }

  getType = () => {
    this.taskService.getType().subscribe(
      (data: any) => {
      console.log("TaskComponent -> getType -> data", data)
        this.types = data;
      },
      err => {
      console.log("TaskComponent -> getType -> err", err)
        
      }
    )
  }


  // Make something
  getCurrenIndex = (event:any) => {
    this.pageIndex = event;
    this.getTasks(this.pageIndex, this.pageSize, this.type_id);
  }
}
