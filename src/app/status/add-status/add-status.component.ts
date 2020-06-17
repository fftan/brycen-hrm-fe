import { StatusService } from './../status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.css']
})
export class AddStatusComponent implements OnInit {

  data = {
    name: '',
    change_date: Date,
  }

  validateResult = '';

  validateValue = {
    name: '',
  }

  constructor(private statusService: StatusService) { }

  ngOnInit(): void {
  }

  onChangeValue(event: any) {
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case 'name':
        this.data.name = value;
        break;
      case 'change_date':
        this.data.change_date = value;
        break;
      default:
        break;
    }
  }

  addStatus = (data) => {
    console.log("AddStatusComponent -> addStatus -> data", data)
    // Validate
    if (!data.name) {
      this.validateValue.name = 'Please enter name';
      this.validateResult = 'error';
      return;
    }

    this.validateValue.name = '';
    this.validateResult = '';

    // Post data
    this.statusService.addStatus(data).subscribe(
      () => alert('successfully'),
      err => {
        console.log("AddStatusComponent -> addStatus -> err", err)
      }
    )
  }
}
