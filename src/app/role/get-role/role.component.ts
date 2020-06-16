import { RoleService } from './../role.service';
import { Component, OnInit } from '@angular/core';
import { Role } from '../role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: Role[];

  totalItem = 0;

  pageIndex = 1;

  pageSize = 30;
  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.getRoles(this.pageIndex, this.pageSize);
  }

  getRoles(page:any, size:any): void {
    this.roleService.getRoles(page, size).subscribe((roles: any) => {
      this.roles = roles.content;
      this.totalItem = roles.totalElements;
    });
  }

  getCurrenIndex = (event:any) => {
    this.pageIndex = event;
    this.getRoles(this.pageIndex, this.pageSize);
  }
}
