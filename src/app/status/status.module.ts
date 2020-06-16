import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NgModule } from '@angular/core';

// Components
import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './get-status/status.component';

registerLocaleData(en)

@NgModule({
    declarations: [],
    imports: [
        StatusRoutingModule
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [StatusComponent],
})
export class StatusModule { }