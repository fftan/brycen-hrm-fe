import { Skill } from './../../skill/skill';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee, EmpSkill } from '../employee';
import { AuthService } from 'src/app/common/guard/auth.service';
import { TokenStorageService } from 'src/app/common/services/token-storage.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  totalItem = 0;

  pageIndex = 1;

  pageSize = 10;

  male = "Male";
  female = "Female";

  constructor(
    private empService: EmployeeService,
    private authService: AuthService,
    private tokenService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.getEmployees(this.pageIndex, this.pageSize);
  }

  checkRole = () => {
    return this.tokenService.getUser().roles.find(x => x === "EMPLOYEE");
  }

  getEmployees = (page: any, size: any) => {
    this.empService.getEmployees(page, size).subscribe(
      (emp: any) => {
        this.employees = emp.content;
        console.log("EmployeeComponent -> getEmployees -> this.employees", this.employees)
        this.totalItem = emp.totalElements;
      },
      err => {
        this.authService.isError(err);
      }
    )
  }

  getCurrenIndex = (event: any) => {
    this.pageIndex = event;
    this.getEmployees(this.pageIndex, this.pageSize);
  }
}
