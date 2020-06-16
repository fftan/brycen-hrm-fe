import { Permission } from './../permission';
import { Component, OnInit } from '@angular/core';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  permissions: Permission[];

  totalItem = 0;

  pageIndex = 1;

  pageSize = 30;
  constructor(private permissionService: PermissionService) { }

  ngOnInit(): void {
    this.getPermissions(this.pageIndex, this.pageSize);
  }

  getPermissions(page:any, size:any): void {
    this.permissionService.getPermissions(page, size).subscribe((permissions: any) => {
      this.permissions = permissions.content;
      console.log("PermissionComponent -> getPermissions -> this.permissions", this.permissions)
      this.totalItem = permissions.totalElements;
    });
  }

  getCurrenIndex = (event:any) => {
    this.pageIndex = event;
    this.getPermissions(this.pageIndex, this.pageSize);
  }
}
