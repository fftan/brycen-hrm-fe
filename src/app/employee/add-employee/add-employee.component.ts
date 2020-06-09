import { Component, OnInit } from '@angular/core';

// Components
import { Skill } from './../../skill/skill';
import { Employee } from '../employee';
import { Role } from '../../role/role';
import { Status } from '../../status/status';
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

  validateResult = '';

  validateValue = {
    username: '',
    password: '',
    full_name: '',
    id_card: '',
    gender: '',
    department: '',
    status: '',
    role: '',
  }

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

  checkTypeField = (data) => {
    console.log("AddEmployeeComponent -> checkTypeField -> data", data)

    if (!data.username) {
      this.validateValue.username = 'Please enter username';
      this.validateResult = 'error';
      return;
    }

    if (!data.password) {
      this.validateValue.password = 'Please enter password';
      this.validateResult = 'error';
      return;
    }

    if (!data.full_name) {
      this.validateValue.full_name = 'Please enter full name';
      this.validateResult = 'error';
      return;
    }

    if (!data.id_card) {
      this.validateValue.id_card = 'Please enter  id card';
      this.validateResult = 'error';
      return;
    }

    if (!data.gender) {
      this.validateValue.gender = 'Please enter gender';
      this.validateResult = 'error';
      return;
    }

    if (data.department.id === 0) {
      this.validateValue.department = 'Please choose department';
      this.validateResult = 'error';
      return;
    }

    if (data.status.id === 0) {
      this.validateValue.status = 'Please choose status';
      this.validateResult = 'error';
      return;
    }

    if (data.role.id === 0) {
      this.validateValue.role = 'Please choose role';
      this.validateResult = 'error';
      return;
    }
    this.validateValue.username = '';
    this.validateValue.password = '';
    this.validateValue.full_name = '';
    this.validateValue.id_card = '';
    this.validateValue.gender = '';
    this.validateValue.department = '';
    this.validateValue.status = '';
    this.validateValue.role = '';
    this.validateResult = '';
  }

  addEmployee = (data) => {
    console.log("AddEmployeeComponent -> addEmployee -> data", data)
    this.checkTypeField(data);
    this.empService.addEmployee(data as Employee).subscribe(
      emp => alert('successfully!'),
      err => {
        console.log("AddEmployeeComponent -> addEmployee -> err", err)
      }
    )
  }

  // Relationship method
  getDepartments = () => {
    this.empService.getDepartments().subscribe(
      dep => {
        this.departments = dep;
      },

      err => {
        console.log("AddEmployeeComponent -> getDepartment -> err", err)
      }
    )
  }

  getStatus = () => {
    this.empService.getStatus().subscribe(
      status => {
        this.status = status;
      },

      err => {
        console.log("AddEmployeeComponent -> getDepartment -> err", err)
      }
    )
  }

  getRoles = () => {
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
