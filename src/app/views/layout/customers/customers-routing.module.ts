import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersItemComponent } from './customers-item/customers-item.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent  , children: [
   { path: '', component: CustomersListComponent },  
   { path: 'customer-item/:id', component: CustomersItemComponent }, 


]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
