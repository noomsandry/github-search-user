import { Component, Input, OnInit } from '@angular/core';
import { DataTableColumn } from './data-table.interface';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() columns: DataTableColumn[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
