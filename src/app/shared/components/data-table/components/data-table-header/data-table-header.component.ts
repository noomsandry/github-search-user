import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { SortOrder } from '@core/utils/contants';

@Component({
  selector: 'app-data-table-header',
  templateUrl: './data-table-header.component.html',
  styleUrls: ['./data-table-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataTableHeaderComponent implements OnInit {

  sortingClassName = ''

  @Input() value;
  @Input() sortable;
  @Input() order;
  @Input() set sorting(value){
    if(!value){
      this.sortingClassName = "";
    }else{
      this.checkClassName();
    }
  };
  @Output() onSort = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }

  checkClassName(){
    if(this.order){
      this.onSort.emit(this.order);
      this.sortingClassName = `sorting_${this.order}`
    }
  }

  sort(){
    if(this.sortable){
      const newOrder = this.order === SortOrder.Asc ? SortOrder.Desc: SortOrder.Asc;
      this.sortingClassName = `sorting_${newOrder}`
      this.order = newOrder;
      this.onSort.emit(newOrder)
    }
  }
}
