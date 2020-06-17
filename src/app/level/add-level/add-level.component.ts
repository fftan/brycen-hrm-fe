import { LevelService } from './../level.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.css']
})
export class AddLevelComponent implements OnInit {

  data = {
    name: '',
    description: ''
  }

  validateResult = '';

  validateValue = {
    name: '',
  }

  constructor(private levelService: LevelService) { }

  ngOnInit(): void {
  }

  onChangeValue(event: any) {
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case 'name':
        this.data.name = value;
        break;
      case 'description':
        this.data.description = value;
        break;
      default:
        break;
    }
  }

  addLevel = (data) => {
    if (!data.name) {
      this.validateValue.name = 'Please enter name';
      this.validateResult = 'error';
      return;
    }

    this.validateValue.name = '';
    this.validateResult = '';
    this.levelService.addLevel(data).subscribe(
      () => alert('successfully'),
      err => {
        console.log("AddLevelComponent -> addLevel -> err", err)
      }
    )
  }
}
