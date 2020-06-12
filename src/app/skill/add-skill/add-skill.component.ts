import { SkillService } from './../skill.service';
import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';

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
  
  constructor(private skillService: SkillService) { }
  
  ngOnInit(): void {
  }

  addSkill = (name: string, level: number) => {
    if (name.length === 0) {
      this.isValidName = "Vui Lòng nhập tên";
      // this.isValidLevel = '';
      return;
    }

    // if (!level) {
    //   this.isValidLevel = 'Vui lòng nhập level';
    //   this.isValidName = '';
    //   return;
    // }

    this.isValidName = '';
    // this.isValidLevel = '';
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

  // onChangeLevel(event: any) {
  //   this.levelValue = event.target.value;
  // }
}
