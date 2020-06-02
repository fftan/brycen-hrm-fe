import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { Skill } from '../skill';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {
  data = {
    id: 0,
    name: '',
    level: 0,
  }
  isValidId = '';
  isValidName = '';
  isValidLevel = '';

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
  }

  updateSkill = (data) => {
    if (!data.id) {
      this.isValidId = "Vui Lòng id";
      this.isValidName = '';
      this.isValidLevel = '';
      return;
    }

    if (data.name.length === 0) {
      this.isValidName = "Vui Lòng nhập tên";
      this.isValidId = '';
      this.isValidLevel = '';
      return;
    }

    if (!data.level) {
      this.isValidLevel = 'Vui lòng nhập level';
      this.isValidName = '';
      this.isValidId = '';
      return;
    }

    this.isValidId = '';
    this.isValidName = '';
    this.isValidLevel = '';
    this.skillService.updateSkill(data as Skill).subscribe(
      skill => {
        alert(`Create new successfully! ${skill.name}`)
      },
      err => {
        alert(`Error is: ${err}`)
      },
    )
  }

  onChangeId(event: any) {
    this.data.id = event.target.value;
  }

  onChangeName(event: any) {
    this.data.name = event.target.value;
  }

  onChangeLevel(event: any) {
    this.data.level = event.target.value;
  }
}
