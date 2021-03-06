import { BrycenRoutingModule } from './brycen-routing.module';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NgModule } from '@angular/core';

// Components
import { BrycenComponent } from './brycen.component';

registerLocaleData(en);

@NgModule({
    declarations: [
    ],
    imports: [
    BrycenRoutingModule,
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [BrycenComponent]
  })
  export class BrycenModule { }