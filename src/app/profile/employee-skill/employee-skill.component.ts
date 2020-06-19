import { TokenStorageService } from './../../common/services/token-storage.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { EmployeeSkillService } from './employee-skill.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-skill',
  templateUrl: './employee-skill.component.html',
  styleUrls: ['./employee-skill.component.css']
})
export class EmployeeSkillComponent implements OnInit {

  myForm: FormGroup;

  skillsSuggest = [];

  levelsSuggest = [];

  selectedValue = [];

  user = [];

  data = [
    {
      skill: { id: 0 },
      level: { id: 0 },
      employee: { id: this.tokenService.getUser().id }
    }
  ]

  constructor(
    private empSkillService: EmployeeSkillService,
    private tokenService: TokenStorageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getSkill();
    this.getLevel();
    this.myForm = this.fb.group({
      data: this.fb.array([])
    })
  }

  getSkill(): void {
    this.empSkillService.getSkill().subscribe(
      (data: any) => {
        console.log("EmployeeSkillComponent -> getSkill -> data", data)
        this.skillsSuggest = data;
      }
    )
  }

  getLevel(): void {
    this.empSkillService.getLevel().subscribe(
      (data: any) => {
        console.log("EmployeeSkillComponent -> getLevel -> data", data)
        this.levelsSuggest = data;
      }
    )
  }

  saveSkill(): void {
    console.log("EmployeeSkillComponent -> saveSkill -> this.skillForms", this.skillForms)
    this.empSkillService.saveSkill(this.skillForms.value).subscribe(
      () => alert('successfully'),
      err => {
        console.log("EmployeeSkillComponent -> saveSkill -> err", err)
      }
    )
  }

  get skillForms() {
    const skillForm = this.myForm.get('data') as FormArray;
    return skillForm;
  }

  addForm() {

    const record = this.fb.group({ 
      skill: [{ id: 0 }],
      level: [{ id: 0 }],
      employee: this.tokenService.getUser().id
    })

    this.skillForms.push(record);
  }

  deleteForm(i) {
    console.log("EmployeeSkillComponent -> deleteForm -> i", i)
    this.skillForms.removeAt(i)
  }
}
