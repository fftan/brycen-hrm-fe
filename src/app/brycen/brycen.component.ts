import { getUser } from './../helpers/defineFunc';
import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brycen',
  templateUrl: './brycen.component.html',
  styleUrls: ['./brycen.component.css']
})
export class BrycenComponent implements OnInit{
  isCollapsed = false;
  
  title = getUser().full_name;
  
  constructor(private router: Router){}

  ngOnInit(): void {
    console.log("BrycenComponent -> title", this.title)
  }
  
  logout = () => {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
