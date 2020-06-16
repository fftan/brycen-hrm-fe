
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

// Components
import { PermissionComponent } from './get-permisson/permission.component';
import { AddPermissionComponent } from './add-permission/add-permission.component';
import { UpdatePermissionComponent } from './update-permission/update-permission.component';

const routes: Routes = [
    {
        path: '',
        component: PermissionComponent,
    },
    {
        path: 'add',
        component: AddPermissionComponent
    },
    {
        path: 'update',
        component: UpdatePermissionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PermissionRoutingModule {}
