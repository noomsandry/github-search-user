import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-data-table-header',
  templateUrl: './data-table-header.component.html',
  styleUrls: ['./data-table-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataTableHeaderComponent implements OnInit {
  @Input() value;
  constructor() { }
  ngOnInit(): void {
  }
}
