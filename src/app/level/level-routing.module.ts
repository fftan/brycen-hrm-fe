import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LevelComponent } from './get-level/level.component';
import { AddLevelComponent } from './add-level/add-level.component';

const routes: Routes = [
    {
        path: '',
        component: LevelComponent
    },
    {
        path: 'add',
        component: AddLevelComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LevelRoutingModule { }