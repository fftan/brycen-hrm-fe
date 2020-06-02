import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Components
import { Department } from './department';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: Department[];

  readonly APIUrl = "192.168.4.203/departments";

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments();
  }

  //   async changeTypeStatus: () => void {
  //   await this.getDepartments();
  //   this.departments.map(item => {
  //     if (item.status) {
  //       return status = "Đang hoạt động";
  //     } else {
  //       return status = "Ngừng hoạt động";
  //     }
  //   })
  // }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments)
  }
}
