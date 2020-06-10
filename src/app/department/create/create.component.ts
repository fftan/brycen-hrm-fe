import { DepartmentService } from './../department.service';
import { Department } from './../department';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  departments: Department[];

  data = {
    name: '',
    active: 0,
    start_day: Date.now(),
    persion_id: 4
  }

  validateResult = '';
  dateFormat = 'yyyy/MM/dd';

  validateValue = {
    name: '',
    start_day: '',
    active: '',
    persion_id: '',
  }

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

  onChangeValue(event: any) {
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case 'name':
        this.data.name = value;
        break;
      case 'start_day':
        this.data.start_day = value;
        break;
      case 'active':
        this.data.active = value;
        break;
      case 'persion_id':
        this.data.persion_id = value;
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

    if (!data.active) {
      this.validateValue.active = 'Please choose value';
      this.validateResult = 'error';
      return;
    }

    this.validateValue.name = '';
    this.validateValue.active = '';
  }

  addDepartments(data): void {
    console.log("CreateComponent -> addDepartments -> data", data)
    this.checkTypeField(data);
    this.departmentService.addDepartment(data as Department).subscribe(
      data => alert('successfully!'),
      err => {
        console.log("DepartmentComponent -> addDepartments -> err", err)
      }
    )
  }
}
