import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTableComponent } from '..';

import { DataTableCellComponent } from './components/data-table-cell/data-table-cell.component';
import { DataTablePaginationComponent } from './components/data-table-pagination/data-table-pagination.component';

@NgModule({
  declarations: [
    DataTableComponent,
    DataTablePaginationComponent,
    DataTableCellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule { }
