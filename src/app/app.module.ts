import { UpdateSkillComponent } from './skill/update-skill/update-skill.component';
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

// Components
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { StatusComponent } from './status/status.component';
import { SkillComponent } from './skill/get-skill/skill.component';
import { RoleComponent } from './role/role.component';
import { PermissionComponent } from './permission/permission.component';
import { EmployeeComponent } from './employee/get-employee/employee.component';
import { AddSkillComponent } from './skill/add-skill/add-skill.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DepartmentComponent,
    LoginComponent,
    TaskComponent,
    StatusComponent,
    SkillComponent,
    RoleComponent,
    PermissionComponent,
    EmployeeComponent,
    AddSkillComponent,
    UpdateSkillComponent,
    AddEmployeeComponent
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
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
