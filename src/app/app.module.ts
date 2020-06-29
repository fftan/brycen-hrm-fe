import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ant design
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { IconsProviderModule } from './icons-provider.module';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrycenComponent } from './brycen/brycen.component';
import { TaskComponent } from './task/get-task/task.component';
import { RoleComponent } from './role/get-role/role.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillComponent } from './skill/get-skill/skill.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { CreateComponent } from './department/create/create.component';
import { StatusComponent } from './status/get-status/status.component';
import { UpdateComponent } from './department/update/update.component';
import { AddSkillComponent } from './skill/add-skill/add-skill.component';
import { DepartmentComponent } from './department/get/department.component';
import { DashboardComponent } from './brycen/dashboard/dashboard.component';
import { AddStatusComponent } from './status/add-status/add-status.component';
import { AddTypeComponent } from './type-project/add-type/add-type.component';
import { UpdateTaskComponent } from './task/update-task/update-task.component';
import { EmployeeComponent } from './employee/get-employee/employee.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateSkillComponent } from './skill/update-skill/update-skill.component';
import { TypeProjectComponent } from './type-project/get-type/type-project.component';
import { PermissionComponent } from './permission/get-permisson/permission.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { UpdateStatusComponent } from './status/update-status/update-status.component';
import { EmployeeSkillComponent } from './profile/employee-skill/employee-skill.component';
import { AddPermissionComponent } from './permission/add-permission/add-permission.component';
import { UpdatePermissionComponent } from './permission/update-permission/update-permission.component';
import { LevelComponent } from './level/get-level/level.component';
import { AddLevelComponent } from './level/add-level/add-level.component';
import { authInterceptorProviders } from './common/helpers/auth.interceptor';
import { MultiCheckboxComponent } from './common/components/multi-checkbox/multi-checkbox.component';

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
    // Type of project
    TypeProjectComponent,
    AddTypeComponent,
    // Level
    LevelComponent,
    AddLevelComponent,
    MultiCheckboxComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // ant design
    NzMenuModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzTableModule,
    NzLayoutModule,
    NzButtonModule,
    NzSelectModule,
    NzDividerModule,
    NzDropDownModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzPaginationModule,
    IconsProviderModule,
    NzAutocompleteModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
