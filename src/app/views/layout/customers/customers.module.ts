import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersItemComponent } from './customers-item/customers-item.component';
 
import { NgxPaginationModule } from 'ngx-pagination'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomersItemComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxPaginationModule,
    ClipboardModule
  ]
})
export class CustomersModule { }
