import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJs from 'crypto-js';

// Components
import { LoginService } from './login.service';
import { localstore } from '../helpers/defineObj';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = {
    username: '',
    password: '',
  };

  validateValue = {
    username: '',
    password: '',
  };

  validateResult = '';
  messageFail = '';

  constructor(
    private route: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  onChangeValue = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'username':
        this.data.username = value;
        break;
      case 'password':
        this.data.password = value;
        break;
      default:
        break;
    }
  }

  onClick = (data) => {
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

    this.validateValue.username = '';
    this.validateValue.password = '';
    this.validateResult = '';
    this.loginService.login(data.username, data.password).subscribe(
      (emp: any) => {
          const jsonEmployee = JSON.stringify(emp);
          const encryptData = CryptoJs.AES.encrypt(jsonEmployee, localstore.scretkey.trim()).toString();
          localStorage.setItem(localstore.USER_LOGIN, encryptData);
          this.route.navigate(['/brycen']);
      },
      err => {
        console.log("LoginComponent -> onClick -> err", err)
      }
    )
  }

}
