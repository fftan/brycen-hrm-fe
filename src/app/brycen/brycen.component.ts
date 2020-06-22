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

  username: string;

  roles = [];

  constructor(
    private tokenService: TokenStorageService,
  ) { }

  ngOnInit() {
    this.username = this.tokenService.getUser().username;
  }

  checkRole = () => {
    const checkRole = this.tokenService.getUser().roles.find(x => x === 'ADMIN');
    return checkRole !== 'ADMIN';
  }

  logout() {
    this.tokenService.signOut();
  }
}
