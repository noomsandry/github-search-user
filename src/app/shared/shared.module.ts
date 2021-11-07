import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from './components/data-table/data-table.module';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DataTableModule,
    NgbToastModule
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    DataTableModule,
    ToastComponent
  ]
})
export class SharedModule { }
