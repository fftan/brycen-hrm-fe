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

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkill().subscribe(skills => this.skills = skills);
  }
}
