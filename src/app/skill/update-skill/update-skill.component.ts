import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { Skill } from '../skill';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {


  data = {
    id: 0,
    name: '',
  }

  dataId = 0;

  isValidId = '';
  isValidName = '';
  param = {};

  constructor(
    private skillService: SkillService,
    private router: Router,
    private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    this.dataId = id;
  }

  updateSkill = (data) => {

    if (data.name.length === 0) {
      this.isValidName = "Vui Lòng nhập tên";
      this.isValidId = '';
      return;
    }

    this.isValidId = '';
    this.isValidName = '';
    data.id = this.dataId;
    this.skillService.updateSkill(data as Skill).subscribe(
      skill => {
        alert(`Create new successfully! ${skill.name}`)
      },
      err => {
        alert(`Error is: ${err}`)
      },
    )
  }

  onChangeName(event: any) {
    this.data.name = event.target.value;
  }
}
