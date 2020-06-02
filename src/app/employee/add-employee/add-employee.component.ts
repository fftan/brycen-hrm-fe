import { Component, OnInit } from '@angular/core';

// Components
import { Employee } from '../employee';
import { Role } from './../../role/role';
import { Status } from './../../status/status';
import { EmployeeService } from './../employee.service';
import { Department } from './../../department/department';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  departments: Department[];

  status: Status[];

  roles: Role[];

  dateFormat = 'yyyy/MM/dd';

  data = {
    username: '',
    full_name: '',
    password: '',
    id_card: 0,
    birthday: '',
    gender: 1,
    phone: '',
    email: '',
    position: '',
    department: {
      id: 0
    },
    status: {
      id: 0
    },
    role: {
      id: 0
    },
  }

  arrData = [
    { name: 'username', value: '1' },
    { name: 'full_name', value: '2' },
    { name: 'full_name', value: '3' },
    { name: 'full_name', value: '4' },
    { name: 'full_name', value: '' },
    { name: 'full_name', value: '' },
    { name: 'full_name', value: '' },
  ]

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getDepartments();
    this.getStatus();
    this.getRoles();
  }

  onChangeValue(event: any) {
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case 'username':
        this.data.username = value;
        break;
      case 'password':
        this.data.password = value;
        break;
      case 'full_name':
        this.data.full_name = value;
        break;
      case 'id_card':
        this.data.id_card = value;
        break;
      case 'birthday':
        this.data.birthday = value;
        break;
      case 'gender':
        this.data.gender = value;
        break;
      case 'phone':
        this.data.phone = value;
        break;
      case 'email':
        this.data.email = value;
        break;
      case 'position':
        this.data.position = value;
        break;
      case 'department':
        this.data.department = value;
        break;
      case 'status':
        this.data.status = value;
        break;
      case 'role':
        this.data.role = value;
        break;

      default:
        break;
    }
  }

  addEmployee = (data) => {
    this.empService.addEmployee(data as Employee).subscribe(
      emp => alert('successfully!'),
      err => {
      console.log("AddEmployeeComponent -> addEmployee -> err", err)
      }
    )
  }

  // Relationship method
  getDepartments() {
    this.empService.getDepartments().subscribe(
      dep => {
        this.departments = dep;
      },

      err => {
        console.log("AddEmployeeComponent -> getDepartment -> err", err)
      }
    )
  }

  getStatus() {
    this.empService.getStatus().subscribe(
      status => {
        this.status = status;
      },

      err => {
        console.log("AddEmployeeComponent -> getDepartment -> err", err)
      }
    )
  }

  getRoles() {
    this.empService.getRoles().subscribe(
      roles => {
        this.roles = roles;
      },

      err => {
        console.log("AddEmployeeComponent -> getDepartment -> err", err)
      }
    )
  }

}
