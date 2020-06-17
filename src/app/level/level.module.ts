import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { LevelRoutingModule } from './level-routing.module';
import { LevelComponent } from './get-level/level.component';

registerLocaleData(en);

@NgModule({
    declarations: [
    ],
    imports: [
    LevelRoutingModule,
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [LevelComponent]
  })
  export class LevelModule { }
