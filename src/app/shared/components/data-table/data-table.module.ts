import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTableComponent } from '..';

import { DataTableCellComponent } from './components/data-table-cell/data-table-cell.component';
import { DataTablePaginationComponent } from './components/data-table-pagination/data-table-pagination.component';
import { DataTableHeaderComponent } from './components/data-table-header/data-table-header.component';

@NgModule({
  declarations: [
    DataTableComponent,
    DataTablePaginationComponent,
    DataTableCellComponent,
    DataTableHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule { }
