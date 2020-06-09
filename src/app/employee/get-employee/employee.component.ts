import { Skill } from './../../skill/skill';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee, EmpSkill } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  skills: Skill[];

  empSkills: EmpSkill[];

  totalItem = 0;

  pageIndex = 1;

  pageSize = 10;

  male = "Male";
  female = "Female";

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees(this.pageIndex, this.pageSize);
  }

  getEmployees = (page:any, size:any) => {
    this.empService.getEmployees(page, size).subscribe(
      (emp:any) => {
      console.log("EmployeeComponent -> getEmployees -> emp", emp)
        this.employees = emp.content;
        this.totalItem = emp.totalElements;
      },
      err => {
        console.log("EmployeeComponent -> getEmployees -> err", err);
      }
    )
  }

  getCurrenIndex = (event:any) => {
    this.pageIndex = event;
    this.getEmployees(this.pageIndex, this.pageSize);
  }
}
