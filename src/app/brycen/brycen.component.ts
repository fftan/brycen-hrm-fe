import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../common/services/token-storage.service';

// Components

@Component({
  selector: 'app-brycen',
  templateUrl: './brycen.component.html',
  styleUrls: ['./brycen.component.css']
})
export class BrycenComponent implements OnInit {
  isCollapsed = false;

  // title = getUser().full_name;
  roles = [];

  constructor(
    private tokenService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  checkRole = () => {
    const checkRole = this.tokenService.getUser().roles.find(x => x === 'ADMIN');
    return checkRole !== 'ADMIN';
  }

  logout() {
    this.tokenService.signOut();
  }
}
