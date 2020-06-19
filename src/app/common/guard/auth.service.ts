import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  roles: any[] = [];
  token = '';

  isLoggedIn = false;

  constructor(
    private router: Router,
    private tokenService: TokenStorageService
  ) { }

  public login(isLoggedIn): boolean {
    this.isLoggedIn = isLoggedIn;
    if (isLoggedIn === true) {
      this.roles = this.tokenService.getUser().roles;
      console.log("AuthService -> login -> this.roles", this.roles)
      const roleAdmin = this.roles.find(x => x === "ADMIN");
      const roleEmp = this.roles.find(x => x === "EMPLOYEE");
      if (roleAdmin) {
        this.router.navigate(['/brycen'])
      } else {
        this.router.navigate(['/brycen/profile'])
      }
    }
    return this.isLoggedIn;
  }

  checkRole = () => {
    return this.tokenService.getUser().roles.find(x => x === "EMPLOYEE");
  }

  isLogin(): boolean {
    const checkLogin = this.tokenService.getUser() === null;
    if (checkLogin) {
      this.router.navigate(['/login'])
    }
    return this.tokenService.getUser() !== null;
  }

  isError(err): void {
    console.log("AuthService -> isError -> err", err)
    if(err.status === 403){
      this.router.navigate(['/brycen/**'])
    } 
  }

  logout(): void {
    this.tokenService.signOut();
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];