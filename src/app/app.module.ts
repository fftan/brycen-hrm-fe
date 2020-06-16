import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ant design
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { IconsProviderModule } from './icons-provider.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

// Components
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/get/department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/get-task/task.component';
import { StatusComponent } from './status/get-status/status.component';
import { SkillComponent } from './skill/get-skill/skill.component';
import { RoleComponent } from './role/get-role/role.component';
import { PermissionComponent } from './permission/get-permisson/permission.component';
import { EmployeeComponent } from './employee/get-employee/employee.component';
import { AddSkillComponent } from './skill/add-skill/add-skill.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { CreateComponent } from './department/create/create.component';
import { UpdateComponent } from './department/update/update.component';
import { UpdateSkillComponent } from './skill/update-skill/update-skill.component';
import { BrycenComponent } from './brycen/brycen.component';
import { EmployeeSkillComponent } from './brycen/employee-skill/employee-skill.component';
import { ProfileComponent } from './brycen/profile/profile.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { UpdateTaskComponent } from './task/update-task/update-task.component';
import { AddStatusComponent } from './status/add-status/add-status.component';
import { UpdateStatusComponent } from './status/update-status/update-status.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';
import { AddPermissionComponent } from './permission/add-permission/add-permission.component';
import { UpdatePermissionComponent } from './permission/update-permission/update-permission.component';
import { DashboardComponent } from './brycen/dashboard/dashboard.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
    // login
    LoginComponent,
    // department
    UpdateComponent,
    CreateComponent,
    DepartmentComponent,
    // employee
    EmployeeComponent,
    AddEmployeeComponent,
    // permission
    PermissionComponent,
    AddPermissionComponent,
    UpdatePermissionComponent,
    // role
    AddRoleComponent,
    UpdateRoleComponent,
    RoleComponent,
    // skill
    SkillComponent,
    AddSkillComponent,
    UpdateSkillComponent,
    // status
    StatusComponent,
    AddStatusComponent,
    UpdateStatusComponent,
    // task
    TaskComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    // brycen
    BrycenComponent,
    // profile
    ProfileComponent,
    // skill of employee
    EmployeeSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // ant design
    NzMenuModule,
    NzLayoutModule,
    IconsProviderModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzGridModule,
    NzDatePickerModule,
    NzSelectModule,
    NzDropDownModule,
    NzFormModule,
    NzPaginationModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
