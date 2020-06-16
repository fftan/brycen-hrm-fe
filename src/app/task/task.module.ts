import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NgModule } from '@angular/core';

// Components
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './get-task/task.component';

registerLocaleData(en)

@NgModule({
    declarations: [],
    imports: [
        TaskRoutingModule
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [TaskComponent],
})
export class TaskModule { }