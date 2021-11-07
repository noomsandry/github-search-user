import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-data-table-pagination',
  templateUrl: './data-table-pagination.component.html',
  styleUrls: ['./data-table-pagination.component.scss']
})
export class DataTablePaginationComponent implements OnInit, OnChanges {
  public currentPage = 1;
  public nbPage;

  @Input() pageSize;
  @Input() total;
  @Output() onChange = new EventEmitter();

  constructor() {
    this.computeNbPage();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes){
      this.computeNbPage();
    }
  }

  computeNbPage(){
    this.nbPage = Math.ceil(this.total / this.pageSize);
  }

  nextPage(){
    if(this.currentPage < this.nbPage){
      this.currentPage++;
      this.onChange.emit(this.currentPage);
    }
  }

  prevPage(){
    if(this.currentPage > 1){
      this.currentPage--;
      this.onChange.emit(this.currentPage);
    }
  }
}
