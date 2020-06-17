import { RoleService } from './../role.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  data = {
    name: ''
  };
  validateResult = '';

  validateValue = {
    name: '',
  }

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
  }

  onChangeValue(event: any) {
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case 'name':
        this.data.name = value;
        break;
      default:
        break;
    }
  }

  addRole = (data) => {
    if (!data.name) {
      this.validateValue.name = 'Please enter name';
      this.validateResult = 'error';
      return;
    }

    this.validateValue.name = '';
    this.validateResult = '';
    this.roleService.addRole(data).subscribe(
      (data: any) => {
        alert('successfully!')
      },
      err => {
      console.log("AddRoleComponent -> addRole -> err", err)
      }
    )
  }
}
