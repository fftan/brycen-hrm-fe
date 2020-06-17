import { TypeService } from './../type-project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-project',
  templateUrl: './type-project.component.html',
  styleUrls: ['./type-project.component.css']
})
export class TypeProjectComponent implements OnInit {

  types: [];
    
  totalItem = 0;

  pageIndex = 1;

  pageSize = 30;

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
    this.getTypes(this.pageIndex, this.pageSize);
  }

  getTypes = (page, size) => {
    console.log("TypeProjectComponent -> getTypes -> page", page)
    this.typeService.getTypes(page, size).subscribe(
      (data:any) => {
      console.log("TypeProjectComponent -> getTypes -> data", data)
        this.types = data.content;
        this.totalItem = data.totalElements;
      }
    )
  }

  getCurrenIndex = (event:any) => {
    this.pageIndex = event;
    this.getTypes(this.pageIndex, this.pageSize);
  }
}
