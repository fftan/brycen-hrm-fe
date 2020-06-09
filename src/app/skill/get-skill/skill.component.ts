import { SkillService } from '../skill.service';
import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills: Skill[];

  totalItem = 0;

  pageIndex = 1;

  pageSize = 10;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.getSkills(this.pageIndex, this.pageSize);
  }

  getSkills(page:any, size:any): void {
    console.log("SkillComponent -> getSkills -> page", page)
    this.skillService.getSkill(page, size).subscribe((skills: any) => {
    console.log("SkillComponent -> getSkills -> skills", skills)
      this.skills = skills.content;
      this.totalItem = skills.totalElements;
    });
  }

  getCurrenIndex = (event:any) => {
    this.pageIndex = event;
    this.getSkills(this.pageIndex, this.pageSize);
  }
}
