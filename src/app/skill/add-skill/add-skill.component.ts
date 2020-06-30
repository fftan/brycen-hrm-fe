import { SkillService } from './../skill.service';
import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';

import { url } from '../../common/helpers/defineUrl';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  nameValue = '';
  levelValue = 0;
  isValidName = '';
  isValidLevel = '';

  skills: [];

  props = {
    urlSkill: `${url.skillUrl}/list`,
    name: 'sdsdsdsdsds'
  }

  data = [];
  checkedItem = {};

  constructor(private skillService: SkillService) {

  }

  ngOnInit(): void {
    this.getSkills(1, 2);
  }

  getSkills(page: any, size: any): void {
    this.skillService.getSkill(page, size).subscribe((skills: any) => {
      this.skills = skills.content;
    });
  }

  addSkill = (name: string, level: number) => {
    if (name.length === 0) {
      this.isValidName = "Vui Lòng nhập tên";
      return;
    }

    this.isValidName = '';
    this.skillService.addSkill({ name } as Skill).subscribe(
      skill => {
        alert(`Create new successfully! ${skill.name}`)
      },
      err => {
        alert(`Error is: ${err}`)
      },
    )
  }

  onChangeName(event: any) {
    this.nameValue = event.target.value;
  }

  // OutPut from multi-checkbox component
  dataRequest = (data) => {
    this.data = data;
  }

  onCheckedItem = (item) => {
    if (item) {
      this.checkedItem = item;
    }
  }
}
