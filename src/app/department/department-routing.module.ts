import { UpdateComponent } from './update/update.component';
import { DepartmentComponent } from './get/department.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
    {
        path: '',
        component: DepartmentComponent,
    },
    {
        path: 'add',
        component: CreateComponent
    },
    {
        path: 'update',
        component: UpdateComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentRoutingModule { }