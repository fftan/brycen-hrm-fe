import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NgModule } from '@angular/core';

// Components
import { PermissionRoutingModule } from './permission-routing.module';
import { PermissionComponent } from './get-permisson/permission.component';

registerLocaleData(en)

@NgModule({
    declarations: [],
    imports: [
        PermissionRoutingModule
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [PermissionComponent],
})
export class PermissionModule { }