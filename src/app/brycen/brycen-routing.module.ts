import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { BrycenComponent } from './brycen.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeSkillComponent } from './employee-skill/employee-skill.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: BrycenComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
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
            },
            {
                path: 'task',
                loadChildren: () => import('../task/task.module').then(m => m.TaskModule)
            },
            {
                path: 'status',
                loadChildren: () => import('../status/status.module').then(m => m.StatusModule)
            },
            {
                path: 'role',
                loadChildren: () => import('../role/role.module').then(m => m.RoleModule)
            },
            {
                path: 'permission',
                loadChildren: () => import('../permission/permission.module').then(m => m.PermissionModule)
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'add-skill',
                component: EmployeeSkillComponent
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrycenRoutingModule { }
