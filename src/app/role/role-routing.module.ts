
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

// Components
import { RoleComponent } from './get-role/role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { UpdateRoleComponent } from './update-role/update-role.component';

const routes: Routes = [
    {
        path: '',
        component: RoleComponent,
    },
    {
        path: 'add',
        component: AddRoleComponent
    },
    {
        path: 'update',
        component: UpdateRoleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoleRoutingModule {}
