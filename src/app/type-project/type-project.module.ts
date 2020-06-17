import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypeRoutingRoutingModule } from './type-project-routing.module';
import { TypeProjectComponent } from './get-type/type-project.component';

registerLocaleData(en)

@NgModule({
    declarations: [],
    imports: [
        TypeRoutingRoutingModule
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [TypeProjectComponent],
})
export class TypeProjectModule { }