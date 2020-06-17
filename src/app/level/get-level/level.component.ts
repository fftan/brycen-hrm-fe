import { LevelService } from './../level.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  levels: [];
    
  totalItem = 0;

  pageIndex = 1;

  pageSize = 30;

  constructor(private levelService: LevelService) { }

  ngOnInit(): void {
    this.getLevels(this.pageIndex, this.pageSize);
  }

  getLevels = (page, size) => {
    this.levelService.getLevels(page, size).subscribe(
      (data: any) => {
      console.log("LevelComponent -> getLevels -> data", data)
        this.levels = data.content;
        this.totalItem = data.totalElements;
      }
    )
  }

  getCurrenIndex = (event:any) => {
    this.pageIndex = event;
    this.getLevels(this.pageIndex, this.pageSize);
  }
}
