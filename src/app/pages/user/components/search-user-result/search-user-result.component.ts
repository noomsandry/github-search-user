import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { DataTableColumn } from '@shared/components/data-table/data-table.interface';
import { SortOrder } from '@core/utils/contants';
import { User } from '@core/interfaces/user.interface';


@Component({
  selector: 'app-search-user-result',
  templateUrl: './search-user-result.component.html',
  styleUrls: ['./search-user-result.component.scss']
})
export class SearchUserResultComponent implements OnInit, OnDestroy {
  @Input() users: User[];
  @Input() totalUsers: number;
  @Input() loading: boolean;
  @Input() submited: boolean;

  @Output() onResultPageChanged = new EventEmitter();

  public columnDefs: DataTableColumn[] = [
    {
      id: "avatar_url",
      title : "Avatar Url",
      width: 40,
      sortable: true,
      valueGetter: ({ data }) => `<a href='${ data.avatar_url }' target='_blank'>${ data.avatar_url }</a>`
    },
    {
      id: "login",
      title : "Login",
      width: 30,
      sortable: true,
      order: SortOrder.Asc
    },
    {
      id: "type",
      title: "Type",
      width: 30,
      sortable: true,
    }
  ];


  constructor() {
  }

  ngOnInit(): void {

  }

  resultPageChanged(page){
    this.onResultPageChanged.emit(page)
  }

  ngOnDestroy(): void {
  }

}
