import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../common/services/token-storage.service';

// Components
import { getUser } from '../common/helpers/defineFunc';

@Component({
  selector: 'app-brycen',
  templateUrl: './brycen.component.html',
  styleUrls: ['./brycen.component.css']
})
export class BrycenComponent implements OnInit {
  isCollapsed = false;

  title = getUser().full_name;
  roles = [];

  constructor(
    private tokenService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  checkRole = () => {
      return this.tokenService.getUser().roles.find(x => x === "EMPLOYEE");
  }

  logout() {
    this.tokenService.signOut();
  }
}
