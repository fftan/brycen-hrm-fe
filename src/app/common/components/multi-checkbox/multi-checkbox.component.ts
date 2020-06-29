import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MultiCheckBoxService } from './multi-checkbox.service';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-multi-checkbox',
  templateUrl: './multi-checkbox.component.html',
  styleUrls: ['./multi-checkbox.component.css']
})
export class MultiCheckboxComponent implements OnInit, OnChanges, DoCheck {
  // Input 
  @Input() localArray: [];
  @Input() arrayFromUrl: string;
  @Input() showCheckedItem = false;

  // OutPut
  @Output() allItem = new EventEmitter<any[]>();
  @Output() item = new EventEmitter<{}>();

  skills: [];

  checked = true;

  dataRequest = [];

  constructor(
    private multiCheckboxService: MultiCheckBoxService
  ) { }

  // Lifecycle
  ngOnChanges(changes: SimpleChanges): void {
    this.testSkills();
  }

  ngOnInit(): void { }
  ngDoCheck(): void { }

  // API Get
  testSkills(): void {
    let urlSkill = this.arrayFromUrl;
    if (urlSkill && urlSkill.length > 0) {
      this.multiCheckboxService.getSkills(urlSkill).subscribe(
        (data: any) => {
          this.skills = data;
        }
      )
    } else {
      this.skills = this.localArray;
    }
  }

  // Logic Func
  onChangeValue = (event: any) => {
    const name = event.target.name;
    const value = event.target.checked;
    const findName = this.skills.find(x => x['name'] === name);

    if (findName['name'] === name && value === true) {
      this.dataRequest.push(findName);
      if (this.showCheckedItem === true) {
        this.item.emit(findName);
      }
    }

    if (findName['name'] === name && value === false) {
      const itemIndex = this.dataRequest.findIndex(x => x === findName)
      this.dataRequest.splice(itemIndex, 1);
    }
    this.allItem.emit(this.dataRequest);
  }
}
