import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { BrycenComponent } from './brycen.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: BrycenComponent,
        children: [
            {
                path: '',
                redirectTo: 'department',
                pathMatch: 'full'
            },
            {
                path: 'department',
                loadChildren: () => import('../department/department.module').then(m => m.DepartmentModule)
            },
            {
                path: 'employee',
                loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule)
            },
            {
                path: 'skill',
                loadChildren: () => import('../skill/skill.module').then(m => m.SkillModule)
            }
        ]
    },

    {
        path: 'profile',
        component: ProfileComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrycenRoutingModule { }
