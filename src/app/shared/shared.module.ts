import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTableModule } from './components/data-table/data-table.module';

@NgModule({
  declarations: [

  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DataTableModule
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    DataTableModule
  ]
})
export class SharedModule { }
