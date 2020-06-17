import { EmployeeSkillService } from './employee-skill.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-skill',
  templateUrl: './employee-skill.component.html',
  styleUrls: ['./employee-skill.component.css']
})
export class EmployeeSkillComponent implements OnInit {

  arrInput: Array<{ idSkill: number, skill: string, idLevel: number, level: string }> = [
    { idSkill: 0, skill: `skill0`, idLevel: 0, level: `level0` }
  ];

  skillsSuggest = [];

  levelsSuggest = [];

  selectedValue = [];

  constructor(private empSkillService: EmployeeSkillService) { }

  ngOnInit(): void {
    this.getSkill();
    this.getLevel();
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

  // removeInput = (item, event) => {
  //   console.log("EmployeeSkillComponent -> removeInput -> item", item)
  //   console.log("EmployeeSkillComponent -> removeInput -> event", event)
  //   if (this.arrInput.length > 1) {
  //     this.arrInput.splice(item, 1);
  //   }
  // }

  // addInput = () => {
  //   this.lengthInput = this.lengthInput + 1;
  //   this.arrInput.push(this.lengthInput);
  // }

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const idSkill = this.arrInput.length > 0 ? this.arrInput[this.arrInput.length - 1].idSkill + 1 : 0;
    const idLevel = this.arrInput.length > 0 ? this.arrInput[this.arrInput.length - 1].idLevel + 1 : 0;
    console.log("EmployeeSkillComponent -> addField -> idLevel", idLevel)
    console.log("EmployeeSkillComponent -> addField -> id", idSkill)

    const control = {
      idSkill,
      idLevel,
      skill: `skill${idSkill}`,
      level: `level${idLevel}`,
    };
    const index = this.arrInput.push(control);
    console.log(this.arrInput[this.arrInput.length - 1]);
  }

  removeField(i: { idSkill: number; skill: string; idLevel: number; level: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.arrInput.length > 1) {
      const index = this.arrInput.indexOf(i);
      this.arrInput.splice(index, 1);
      console.log(this.arrInput);
    }
  }
}
