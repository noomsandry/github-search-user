import { AfterViewInit, Component, EventEmitter, HostBinding, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
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
export class DataTableComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() data: any[] = [];
  @Input() columns: DataTableColumn[] = [];
  @Input() pageSize: number = 9;
  @Input() total: number = 0;
  @Input() enableCache: boolean = true;
  @Output() onDataTablePageChanged = new EventEmitter();
  @ViewChild('dataTablePagination') dataTablePagination: DataTablePaginationComponent;
  @Input() @HostBinding('class.visible') visibility: boolean = false;
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
    if(changes && changes.data){
      this.setCache();
    }
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
    return _.orderBy(this.data, (row) => String(row[column]).toLocaleLowerCase(), order)
  }

  checkSort(){
    if(this.sortState){
      this.data = this.sortData(this.sortState.column, this.sortState.order);
    }
  }

  setCache(){
    if(this.enableCache && this.dataTablePagination){
      this._cache.set(this.id, `${PAGE_CACHE_KEY}_${this.dataTablePagination.currentPage}`, this.data)
    }
    this.checkSort();
  }

  ngOnDestroy(): void {
    if(this.enableCache){
      this._cache.clear(this.id)
    }
  }

}
