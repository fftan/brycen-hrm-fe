import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

// Components
import { StatusComponent } from './get-status/status.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { AddStatusComponent } from './add-status/add-status.component';

const routes: Routes = [
    {
        path: '',
        component: StatusComponent
    },
    {
        path: 'add',
        component: AddStatusComponent
    },
    {
        path:'update',
        component: UpdateStatusComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StatusRoutingModule {}
