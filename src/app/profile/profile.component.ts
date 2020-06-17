import { Employee } from './../employee/employee';
import { Department } from './../department/department';
import { getUser } from './../helpers/defineFunc';
import { ProfileService } from './profile.service';

import { Component, OnInit } from '@angular/core';
import * as CryptoJs from 'crypto-js';
import { Status } from '../status/status';
import { Role } from '../role/role';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  departments: Department[];

  status: Status[];

  roles: Role[];

  user = getUser();

  userInfo: Employee;

  dateFormat = 'yyyy/MM/dd';

  validateResult = '';

  validateValue = {
    full_name: '',
    id_card: '',
    gender: '',
    department: '',
    status: '',
    role: '',
  }

  data = {
    emp: {
      full_name: '',
      id_card: 0,
      birthday: Date.now(),
      gender: true,
      phone: '',
      email: '',
      position: '',
      department: {
        id: 0
      },
      status: {
        id: 0
      },
    },
    emp_role: {
      employee: {
        id: 0
      },
      role: {
        id: 0
      }
    }
  }

  constructor(private profileSerivce: ProfileService) { }

  ngOnInit(): void {
    this.getProfile(this.user.id);
    this.getRoles();
    this.getStatus();
    this.getDepartments();
  }

  onChangeValue(event: any) {
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case 'full_name':
        this.data.emp.full_name = value;
        break;
      case 'id_card':
        this.data.emp.id_card = value;
        break;
      case 'birthday':
        this.data.emp.birthday = value;
        break;
      case 'gender':
        this.data.emp.gender = value;
        break;
      case 'phone':
        this.data.emp.phone = value;
        break;
      case 'email':
        this.data.emp.email = value;
        break;
      case 'position':
        this.data.emp.position = value;
        break;
      case 'department':
        this.data.emp.department = value;
        break;
      case 'status':
        this.data.emp.status = value;
        break;
      case 'role':
        this.data.emp_role.role = value;
        break;

      default:
        break;
    }
  }

  checkTypeField = (data) => {
    console.log("AddEmployeeComponent -> checkTypeField -> data", data)

    if (!data.emp.full_name) {
      this.validateValue.full_name = 'Please enter full name';
      this.validateResult = 'error';
      return;
    }

    if (!data.emp.id_card) {
      this.validateValue.id_card = 'Please enter  id card';
      this.validateResult = 'error';
      return;
    }

    if (!data.emp.gender) {
      this.validateValue.gender = 'Please enter gender';
      this.validateResult = 'error';
      return;
    }

    if (data.emp.department.id === 0) {
      this.validateValue.department = 'Please choose department';
      this.validateResult = 'error';
      return;
    }

    if (data.emp.status.id === 0) {
      this.validateValue.status = 'Please choose status';
      this.validateResult = 'error';
      return;
    }

    if (data.emp.role.id === 0) {
      this.validateValue.role = 'Please choose role';
      this.validateResult = 'error';
      return;
    }
    this.validateValue.full_name = '';
    this.validateValue.id_card = '';
    this.validateValue.gender = '';
    this.validateValue.department = '';
    this.validateValue.status = '';
    this.validateValue.role = '';
    this.validateResult = '';
  }

  getProfile = (id: number) => {
    this.profileSerivce.getUserById(id).subscribe(
      (profile: any) => {
        console.log("ProfileComponent -> getProfile -> profile", profile)
        this.userInfo = profile;
        console.log("ProfileComponent -> getProfile -> this.userInfo", this.userInfo)
        this.data.emp.full_name = this.userInfo.full_name;
        this.data.emp.id_card = this.userInfo.id_card;
        this.data.emp.birthday = this.userInfo.birthday;
        this.data.emp.gender = this.userInfo.gender;
        this.data.emp.phone = this.userInfo.phone;
        this.data.emp.email = this.userInfo.email;
        this.data.emp.position = this.userInfo.position;
        this.data.emp.status.id = this.userInfo.status.id;
        this.data.emp.department.id = this.userInfo.department.id;
        this.data.emp_role.role.id = this.userInfo['employee_role'].role.id;
      },
      err => {
        console.log("ProfileComponent -> getProfile -> err", err)

      }
    )
  }

  // Relationship method
  getDepartments = () => {
    this.profileSerivce.getDepartments().subscribe(
      dep => {
        console.log("AddEmployeeComponent -> getDepartments -> dep", dep)
        this.departments = dep['content'];
      },

      err => {
        console.log("AddEmployeeComponent -> getDepartment -> err", err)
      }
    )
  }

  getStatus = () => {
    this.profileSerivce.getStatus().subscribe(
      status => {
        this.status = status;
      },

      err => {
        console.log("AddEmployeeComponent -> getDepartment -> err", err)
      }
    )
  }

  getRoles = () => {
    this.profileSerivce.getRoles().subscribe(
      roles => {
        this.roles = roles;
      },

      err => {
        console.log("AddEmployeeComponent -> getDepartment -> err", err)
      }
    )
  }
}
