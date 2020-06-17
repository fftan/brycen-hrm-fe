import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeProjectComponent } from './get-type/type-project.component';
import { AddTypeComponent } from './add-type/add-type.component';

const routes: Routes = [
    {
        path: '',
        component: TypeProjectComponent
    },
    {
        path: 'add',
        component: AddTypeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TypeRoutingRoutingModule {}
