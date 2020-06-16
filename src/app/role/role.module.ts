import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NgModule } from '@angular/core';

// Components
import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './get-role/role.component';

registerLocaleData(en)

@NgModule({
    declarations: [],
    imports: [
        RoleRoutingModule
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [RoleComponent],
})
export class RoleModule { }
