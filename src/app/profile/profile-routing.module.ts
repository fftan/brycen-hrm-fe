import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { EmployeeSkillComponent } from './employee-skill/employee-skill.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent
    },
    {
        path: 'add-skill',
        component: EmployeeSkillComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
