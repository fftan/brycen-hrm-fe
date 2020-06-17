import { TypeService } from './../type-project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {

  data = {
    type: '',
  };
  validateResult = '';

  validateValue = {
    type: '',
  }

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
  }

  onChangeValue(event: any) {
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case 'type':
        this.data.type = value;
        break;
      default:
        break;
    }
  }

  checkTypeField = (data) => {

    if (!data.type) {
      this.validateValue.type = 'Please enter name';
      this.validateResult = 'error';
      return;
    }

    this.validateValue.type = '';
    this.validateResult = '';
  }

  addType = (data) => {
    this.typeService.addType(data).subscribe(
      () => alert('successfully!'),
      err => {
      console.log("AddTypeComponent -> addType -> err", err)
        
      }
    )
  }
}
