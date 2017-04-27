import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassComponent } from './class/class.component';
import { ClassFormComponent } from './class-form/class-form.component';



export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'classes',
        pathMatch: 'full',
    },
    {
        path: 'classes',
        component: ClassComponent
    },
     {
        path: 'classes/new',
        component: ClassFormComponent,
    },
    {
        path: 'classes/:id',
        component: ClassFormComponent,
        //canActivate: [AuthGuard],
    }

    // otherwise redirect to home
    //{ path: '**', redirectTo: 'admin/carmake' }


    //  {
    //     path: 'supplier',
    //     component: AdminLayoutComponent,
    //     //canActivate: [AuthGuard],
    //     data: {
    //         title: 'Supplier'
    //     },
    //     children: [
    //         {
    //             path: '',
    //             loadChildren: './supplier/supplier.module#SupplierModule'
    //         }
    //     ]
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }