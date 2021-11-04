import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataTableColumn } from '../../data-table.interface';

@Component({
  selector: 'app-data-table-cell',
  templateUrl: './data-table-cell.component.html',
  styleUrls: ['./data-table-cell.component.scss']
})
export class DataTableCellComponent implements OnInit {
  @Input() column: DataTableColumn;
  @Input() value: string;
  @Input() className:string;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.onClick.emit();
  }

}
