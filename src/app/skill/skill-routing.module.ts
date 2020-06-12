import { UpdateSkillComponent } from './update-skill/update-skill.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { SkillComponent } from './get-skill/skill.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: SkillComponent,
    },
    {
        path: 'add',
        component: AddSkillComponent
    },
    {
        path: 'update',
        component: UpdateSkillComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SkillRoutingModule { }