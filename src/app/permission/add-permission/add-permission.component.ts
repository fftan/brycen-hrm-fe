import { PermissionService } from './../permission.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.css']
})
export class AddPermissionComponent implements OnInit {

  data = {
    name: '',
    description: '',
  }

  validateResult = '';

  validateValue = {
    name: '',
  }

  constructor(private permissionService: PermissionService) { }

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

  addPermission = (data) => {
    // Validate
    if (!data.name) {
      this.validateValue.name = 'Please enter name';
      this.validateResult = 'error';
      return;
    }

    this.validateValue.name = '';
    this.validateResult = '';

    // Post data
    this.permissionService.addPermission(data).subscribe(
      () => alert('successfully'),
      err => {
        console.log("AddStatusComponent -> addStatus -> err", err)
      }
    )
  }
}
