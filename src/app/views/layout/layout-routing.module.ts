import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/services/guard/auth-guard.service';
// import { DynamicFormComponent } from '../reusable/dynamic-form/dynamic-form.component';
// import { WizardComponent } from '../reusable/wizard/wizard.component';
import { LayoutComponent } from './layout.component';
import { NotifierComponent } from './notifier/notifier.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';


const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    {
      path: "",
      pathMatch: "full",
      redirectTo: "customers"
    },
    { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },

    {path:'unauthorized', component:UnauthorizedComponent}, 
     ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
