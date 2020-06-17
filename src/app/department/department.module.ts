import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { DepartmentComponent } from './get/department.component';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { DepartmentRoutingModule } from './department-routing.module';

registerLocaleData(en);

@NgModule({
    declarations: [
    ],
    imports: [
    DepartmentRoutingModule,
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [DepartmentComponent]
  })
  export class DepartmentModule { }