import { AfterViewInit, Component, EventEmitter, HostBinding, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { PAGE_CACHE_KEY, SortOrder } from '@core/utils/contants';
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
export class DataTableComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() data: any[] = [];
  @Input() columns: DataTableColumn[] = [];
  @Input() pageSize: number = 9;
  @Input() total: number = 0;
  @Input() enableCache: boolean = true;
  @Input() @HostBinding('class.visible') visibility: boolean = false;

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

  ngAfterViewInit(): void {
    this.setCache();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.data){
      this.setCache();
    }
    if(changes.columns && changes.columns.currentValue){
      /* init sort state */
      this.initSortState(changes.columns.currentValue);
    }
  }

  paginationPageChanged(page){
    if(this.enableCache && this._cache.has(this.id, `${PAGE_CACHE_KEY}_${page}`)){
      this.data = this._cache.get(this.id, `${PAGE_CACHE_KEY}_${page}`);
      this.applySort();
    }else{
      this.onDataTablePageChanged.emit(page);
    }
  }

  sortColumn(column, order){
    this.data = this.sortData(column, order);
  }

  private initSortState(columns){
    let sortColumn = _.find(columns, (column)=> column.sortable && column.order);
    if(sortColumn){
      this.sortState = {
        column: sortColumn.id,
        order: sortColumn.order || SortOrder.Asc
      }
      this.applySort();
    }
  }
  private applySort(){
    if(this.sortState){
      this.data = this.sortData(this.sortState.column, this.sortState.order);
    }
  }

  private setCache(){
    if(this.enableCache && this.dataTablePagination){
      this._cache.set(this.id, `${PAGE_CACHE_KEY}_${this.dataTablePagination.currentPage}`, this.data)
    }
    this.applySort();
  }

  private sortData(column, order){
    this.sortState = {
      column, order
    }
    return _.orderBy(this.data, (row) => String(row[column]).toLocaleLowerCase(), order)
  }


  ngOnDestroy(): void {
    if(this.enableCache){
      this._cache.clear(this.id)
    }
  }
}
