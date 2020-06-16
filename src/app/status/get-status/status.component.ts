import { Component, OnInit } from '@angular/core';

// Components
import { StatusService } from './../status.service';
import { Status } from '../status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  status: Status[];

  totalItem = 0;

  pageIndex = 1;

  pageSize = 30;

  constructor(private statusService: StatusService) { }

  ngOnInit(): void {
    this.getStatus(this.pageIndex, this.pageSize);
  }

  getStatus = (page, size) => {
    this.statusService.getStatus(page, size).subscribe(
      (status:any) => {
        this.status = status.content;
        this.totalItem = status.totalElements;
      }
    )
  }

  getCurrenIndex = (event:any) => {
    this.pageIndex = event;
    this.getStatus(this.pageIndex, this.pageSize);
  }
}
