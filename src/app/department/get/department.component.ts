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

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
    })
  }
}
