import { TokenStorageService } from 'src/app/common/services/token-storage.service';

import { Component, OnInit } from '@angular/core';
import * as CryptoJs from 'crypto-js';

// Components
import { Status } from '../status/status';
import { Employee } from './../employee/employee';
import { Department } from './../department/department';
import { ProfileService } from './profile.service';
import { Role } from '../role/role';
// import { getUser } from '../common/helpers/defineFunc';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: number;

  userInfo: Employee;

  dateFormat = 'yyyy/MM/dd';

  validateResult = '';

  validateValue = {
    full_name: '',
    id_card: '',
    gender: '',
  };

  data = {
    id: 0,
    full_name: '',
    id_card: 0,
    birthday: Date.now(),
    gender: true,
    phone: '',
    email: '',
    position: '',
    address: '',
    department: {},
    status: {},
  };

  constructor(private profileSerivce: ProfileService, private tokeService: TokenStorageService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  onChangeValue(event: any) {
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
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

      default:
        break;
    }
  }

  getProfile = () => {
    this.userId = this.tokeService.getUser().id;
    console.log("ProfileComponent -> getProfile -> this.userId", this.userId)
    this.profileSerivce.getUserById(this.userId).subscribe(
      (profile: any) => {
      console.log("ProfileComponent -> getProfile -> profile", profile)
        this.userInfo = profile;
        this.data.id = this.userInfo.id;
        this.data.full_name = this.userInfo.full_name;
        this.data.id_card = this.userInfo.id_card;
        this.data.birthday = this.userInfo.birthday;
        this.data.gender = this.userInfo.gender;
        this.data.phone = this.userInfo.phone;
        this.data.email = this.userInfo.email;
        this.data.position = this.userInfo.position;
        this.data.department['id'] = this.userInfo.department.id
        this.data.status['id'] = this.userInfo.status.id
      },
      err => {
        console.log("ProfileComponent -> getProfile -> err", err)

      }
    );
  }

  updateProfile = (data) => {
    console.log("ProfileComponent -> updateProfile -> data", data)
    // if (!data.emp.full_name) {
    //   this.validateValue.full_name = 'Please enter full name';
    //   this.validateResult = 'error';
    //   return;
    // }

    // if (!data.emp.id_card) {
    //   this.validateValue.id_card = 'Please enter  id card';
    //   this.validateResult = 'error';
    //   return;
    // }

    // if (!data.emp.gender) {
    //   this.validateValue.gender = 'Please enter gender';
    //   this.validateResult = 'error';
    //   return;
    // }

    this.validateValue.full_name = '';
    this.validateValue.id_card = '';
    this.validateValue.gender = '';
    this.validateResult = '';

    this.profileSerivce.updateProfile(data).subscribe(
      () => alert('successfully!'),
      err => {
      console.log("ProfileComponent -> updateProfile -> err", err)
        
      }
    )
  }
}
