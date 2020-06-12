import { EmployeeComponent } from './get-employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
    },
    {
        path: 'add',
        component: AddEmployeeComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }