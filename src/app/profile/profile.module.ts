import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';

// Components
import { ProfileComponent } from './profile.component';

registerLocaleData(en);

@NgModule({
    declarations: [
    ],
    imports: [
    ProfileRoutingModule,
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [ProfileComponent]
  })
  export class ProfileModule { }