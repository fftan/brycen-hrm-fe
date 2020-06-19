import { AuthService } from './../common/guard/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Components
import { LoginService } from './login.service';
import { TokenStorageService } from '../common/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  

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
    private authService: AuthService,
    private loginService: LoginService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
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
    this.loginService.login(data).subscribe(
      (data: any) => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.authService.login(this.isLoggedIn);
      },
      err => {
      console.log("LoginComponent -> onClick -> err", err)
        alert('Username or password wrong');
        this.isLoginFailed = true;
        this.isLoggedIn = false;
        this.authService.login(this.isLoggedIn);
        this.route.navigate(['/login']);
      }
    );
  }
}
