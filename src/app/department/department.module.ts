// import { NzGridModule } from 'ng-zorro-antd/grid';
// import { NzDividerModule } from 'ng-zorro-antd/divider';
// import { NzTableModule } from 'ng-zorro-antd/table';
// import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzFormModule } from 'ng-zorro-antd/form';
// import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
// import { NzSelectModule } from 'ng-zorro-antd/select';
// import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
// import { RouterModule, Routes } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DepartmentComponent } from './get/department.component';
// import { CreateComponent } from './create/create.component';

// const routes: Routes = [
//     {
//         path: 'department', component: DepartmentComponent, children: [
//             {
//                 path: '',
//                 redirectTo: '/department',
//                 pathMatch: 'full'
//             },
//             {
//                 path: 'department/add', component: CreateComponent
//             },
//         ]
//     }
// ]

// @NgModule({
//     declarations: [
//         DepartmentComponent,
//         CreateComponent
//     ],
//     imports: [
//         BrowserModule,
//         FormsModule,
//         HttpClientModule,
//         BrowserAnimationsModule,
//         CommonModule,
//         RouterModule.forChild(routes),
//         NzMenuModule,
//         NzLayoutModule,
//         NzTableModule,
//         NzDividerModule,
//         NzButtonModule,
//         NzGridModule,
//         NzDatePickerModule,
//         NzSelectModule,
//         NzDropDownModule,
//         NzFormModule,
//     ],
//     providers: [],
//     bootstrap: [DepartmentComponent]
// })
// export class DepartmentsModule { }