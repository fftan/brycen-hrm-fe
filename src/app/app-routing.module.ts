
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'brycen',
    loadChildren: () => import('./brycen/brycen.module').then(m => m.BrycenModule)
  }

  // // Department
  // { path: 'brycen/department', component: DepartmentComponent },
  // { path: 'brycen/add-department', component: CreateComponent },
  // // Employee
  // { path: 'brycen/employee', component: EmployeeComponent },
  // { path: 'brycen/add-employee', component: AddEmployeeComponent },
  // { path: 'brycen/profile', component: ProfileComponent },
  // // Skill
  // { path: 'brycen/skill', component: SkillComponent },
  // { path: 'brycen/add-skill', component: AddSkillComponent },
  // { path: 'brycen/update-skill', component: UpdateSkillComponent },
  // // page default 
  // { path: '', redirectTo: '/brycen/employee', pathMatch: 'full' },
  // // Page not found
  // { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
