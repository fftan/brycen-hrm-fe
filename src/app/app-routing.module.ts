
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { EmployeeComponent } from './employee/get-employee/employee.component';
import { UpdateSkillComponent } from './skill/update-skill/update-skill.component';
import { SkillComponent } from './skill/get-skill/skill.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentComponent } from './department/get/department.component';
import { AddSkillComponent } from './skill/add-skill/add-skill.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { CreateComponent } from './department/create/create.component';

const routes: Routes = [
  // Department
  { path: 'brycen/department', component: DepartmentComponent },
  { path: 'brycen/add-department', component: CreateComponent },
  // Employee
  { path: 'brycen/employee', component: EmployeeComponent },
  { path: 'brycen/add-employee', component: AddEmployeeComponent },
  { path: 'brycen/profile', component: ProfileComponent },
  // Skill
  { path: 'brycen/skill', component: SkillComponent },
  { path: 'brycen/add-skill', component: AddSkillComponent },
  { path: 'brycen/update-skill', component: UpdateSkillComponent },
  // page default 
  { path: '', redirectTo: '/brycen/employee', pathMatch: 'full' },
  // Page not found
  { path: '**', component: PageNotFoundComponent },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  // },
  // {
  //   path: 'department', 
  //   loadChildren: () => import('./department/department.module').then(m => m.DepartmentsModule)
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
