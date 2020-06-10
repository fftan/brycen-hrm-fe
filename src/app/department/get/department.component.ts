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

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments(this.pageIndex, this.pageSize);
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
