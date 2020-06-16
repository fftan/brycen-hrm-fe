import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

// Components
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // array get from server
  projects = [];
  employees = [];
  departments = [];
  // array filter
  offshoreProjects = [];
  products = [];
  OJTEmployee = [];
  BEmployee = [];
  ProEmployee = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData = () => {
    this.dashboardService.getData().subscribe(
      (data: any) => {
        console.log("DashboardComponent -> getData -> data", data)
        this.projects = data['task'];
        this.employees = data['emp'];
        this.filterData(data)
      },
      err => {
        console.log("DashboardComponent -> getData -> err", err)

      }
    )
  }

  getDepartment = () => {
    this.dashboardService.getDepartment().subscribe(
      (data:any) => {
        this.departments = data.content;
      }
    )
  }

  filterData = (data) => {
    console.log("DashboardComponent -> filterData -> data", data)
    this.offshoreProjects = data.task.filter(x => x.offshore === true);
    this.products = data.task.filter(x => x.product === true);
    this.OJTEmployee = data.emp.filter(x => x.status.id === 1);
    this.BEmployee = data.emp.filter(x => x.status.id !== 1);
    this.ProEmployee = data.emp.filter(x => x.employee_role[0].role.id !== 2);
  }
}
