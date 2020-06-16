import en from '@angular/common/locales/en';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './get-employee/employee.component';

registerLocaleData(en);

@NgModule({
    declarations: [
    ],
    imports: [
    EmployeeRoutingModule,
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [EmployeeComponent]
  })
  export class EmployeeModule { }