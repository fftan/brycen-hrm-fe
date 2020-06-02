import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { EmployeeComponent } from './employee/get-employee/employee.component';
import { UpdateSkillComponent } from './skill/update-skill/update-skill.component';
import { SkillComponent } from './skill/get-skill/skill.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentComponent } from './department/department.component';
import { AddSkillComponent } from './skill/add-skill/add-skill.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

const routes: Routes = [
  { path: 'department', component: DepartmentComponent },
  // Employee
  { path: 'employee', component: EmployeeComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  // Skill
  { path: 'skill', component: SkillComponent },
  { path: 'add-skill', component: AddSkillComponent },
  { path: 'update-skill', component: UpdateSkillComponent },
  // Page not found
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
