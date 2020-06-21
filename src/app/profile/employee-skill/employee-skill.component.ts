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

  data = {
    empSkill: []
  };

  constructor(
    private empSkillService: EmployeeSkillService,
    private tokenService: TokenStorageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getSkill();
    this.getLevel();
    // this.getDataByEmployeeId();
    this.myForm = this.fb.group({
      data: this.fb.array([
        this.fb.group({
          employee: { id: this.tokenService.getUser().id },
          skill: this.fb.group({
            id: this.fb.control(0)
          }),
          level: this.fb.group({
            id: this.fb.control(0)
          })
        })
      ])
    });

  }

  get skillForms() {
    const skillForm = this.myForm.get('data') as FormArray;
    return skillForm;
  }

  getSkill(): void {
    this.empSkillService.getSkill().subscribe(
      (data: any) => {
        this.skillsSuggest = data;
      }
    );
  }

  getLevel(): void {
    this.empSkillService.getLevel().subscribe(
      (data: any) => {
        this.levelsSuggest = data;
      }
    );
  }

  saveSkill(): void {
    this.data.empSkill = this.skillForms.value;
    this.empSkillService.saveSkill(this.data).subscribe(
      () => alert('successfully'),
      err => {
        console.log("EmployeeSkillComponent -> saveSkill -> err", err)
      }
    );
  }

  // getDataByEmployeeId(): void {
  //   console.log("EmployeeSkillComponent -> getDataByEmployeeId -> this.tokenService.getUser().id", this.tokenService.getUser().id)
  //   this.empSkillService.getDataByEmployeeId(this.tokenService.getUser().id).subscribe(
  //     (data: any) => {
  //       console.log("EmployeeSkillComponent -> getDataByEmployeeId -> data", data);

  //       (<FormGroup>this.myForm).setValue(data, { onlySelf: true });
  //     },
  //     err => {
  //       console.log("EmployeeSkillComponent -> getDataByEmployeeId -> err", err)

  //     }
  //   )
  // }

  // Form control
  addForm() {
    const record = this.fb.group({
      skill: this.fb.group({
        id: this.fb.control(0)
      }),
      level: this.fb.group({
        id: this.fb.control(0)
      }),
      employee: this.fb.group({
        id: this.fb.control(this.tokenService.getUser().id)
      }),
    });

    this.skillForms.push(record);
  }

  deleteForm(i) {
    console.log("EmployeeSkillComponent -> deleteForm -> i", i)
    this.skillForms.removeAt(i)
  }
}
