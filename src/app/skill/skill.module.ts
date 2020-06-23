import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { SkillRoutingModule } from './skill-routing.module';
import { SkillComponent } from './get-skill/skill.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NgModule } from '@angular/core';

registerLocaleData(en);

@NgModule({
    declarations: [
    ],
    imports: [
        SkillRoutingModule,
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [SkillComponent]
})
export class SkillModule { }
