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

  male = "Male";
  female = "Female";

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees = () => {
    this.empService.getEmployees().subscribe(
      emp => {
      console.log("EmployeeComponent -> getEmployees -> emp", emp)
        this.employees = emp;
      },
      err => {
        console.log("EmployeeComponent -> getEmployees -> err", err);
      }
    )
  }
}
