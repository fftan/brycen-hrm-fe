
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

// Components
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './get-task/task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
    {
        path: '',
        component: TaskComponent,
    },
    {
        path: 'add',
        component: AddTaskComponent
    },
    {
        path: 'update',
        component: UpdateTaskComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TaskRoutingModule {}
