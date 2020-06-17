import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  types: [];

  dateFormat = "yyyy/MM/dd";

  data = {
    name: '',
    description: '',
    estimate: '',
    start_date: Date,
    end_date: Date,
    create_date: Date,
    type: {
      id: 0
    }
  };
  validateResult = '';

  validateValue = {
    name: '',
    offshore: '',
    product: '',
    type: ''
  }

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getType();
  }

  onChangeValue(event: any) {
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case 'name':
        this.data.name = value;
        break;
      case 'description':
        this.data.description = value;
        break;
      case 'estimate':
        this.data.estimate = value;
        break;
      case 'start_date':
        this.data.start_date = value;
        break;
      case 'end_date':
        this.data.end_date = value;
        break;
      case 'create_date':
        this.data.create_date = value;
        break;
      case 'type':
        this.data.type = value;
        break;
      default:
        break;
    }
  }

  checkTypeField = (data) => {

    if (!data.name) {
      this.validateValue.name = 'Please enter name';
      this.validateResult = 'error';
      return;
    }
    if (data.type.id === 0) {
      this.validateValue.type = 'Please enter offshore';
      this.validateResult = 'error';
      return;
    }

    this.validateValue.name = '';
    this.validateValue.type = '';
    this.validateResult = '';
  }

  addTask = (data) => {
    this.checkTypeField(data);
    this.taskService.addTask(data).subscribe(
      (data: any) => {
        console.log("AddRoleComponent -> addRole -> data", data)
        alert('successfully!')
      },
      err => {

      }
    )
  }

  // Relationship
  getType = () => {
    this.taskService.getType().subscribe(
      (data:any) => {
      console.log("AddTaskComponent -> getType -> data", data)
        this.types = data;
      }
    )
  }
}
