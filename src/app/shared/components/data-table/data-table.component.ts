import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { PAGE_CACHE_KEY } from '@core/utils/contants';
import { Utils } from '@core/utils/utils';
import { DataTablePaginationComponent } from './components/data-table-pagination/data-table-pagination.component';
import { DataTableColumn } from './data-table.interface';
import { DataTableCacheService } from './services/data-table.cache';
import * as _ from 'lodash';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  @Input() columns: DataTableColumn[] = [];
  @Input() pageSize: number = 9;
  @Input() total: number = 0;
  @Input() enableCache: boolean = true;
  @Output() onDataTablePageChanged = new EventEmitter();
  @ViewChild('dataTablePagination') dataTablePagination: DataTablePaginationComponent;
  id = Utils.generateId();
  sortState: {
    column: string,
    order: string
  }
  constructor(private _cache:DataTableCacheService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes && changes.data && this.total !== 0 && this.enableCache){
      this._cache.set(this.id, `${PAGE_CACHE_KEY}_${this.dataTablePagination.currentPage}`, this.data)
    }else{
      this._cache.clear(this.id)
    }
    this.checkSort();
  }


  paginationPageChanged(page){
    if(this.enableCache && this._cache.has(this.id, `${PAGE_CACHE_KEY}_${page}`)){
      this.data = this._cache.get(this.id, `${PAGE_CACHE_KEY}_${page}`);
      this.checkSort();
    }else{
      this.onDataTablePageChanged.emit(page);
    }
  }

  sort(column, order){
    this.data = this.sortData(column, order);
  }

  sortData(column, order){
    this.sortState = {
      column, order
    }
    return _.orderBy(this.data, column, order)
  }

  checkSort(){
    if(this.sortState){
      this.data = this.sortData(this.sortState.column, this.sortState.order);
    }
  }

}
