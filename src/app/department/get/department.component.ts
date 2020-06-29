import { TokenStorageService } from './../../common/services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Components
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: Department[];

  totalItem = 0;

  pageIndex = 1;

  pageSize = 10;

  constructor(private departmentService: DepartmentService, private tokenService: TokenStorageService) { }

  ngOnInit() {
    this.checkRole();
    this.getDepartments(this.pageIndex, this.pageSize);
  }

  checkRole = () => {
    const checkRole = this.tokenService.getUser().roles.find(x => x === 'ADMIN' || x === "PM");
    console.log("LevelComponent -> checkRole -> checkRole", checkRole)
    return checkRole;
  }

  getDepartments(page:any, size:any): void {
    this.departmentService.getDepartments(page, size).subscribe((departments:any) => {
      this.departments = departments.content;
      this.totalItem = departments.totalElements;
    })
  }

  getCurrenIndex = (event:any) => {
    this.pageIndex = event;
    this.getDepartments(this.pageIndex, this.pageSize);
  }
}
