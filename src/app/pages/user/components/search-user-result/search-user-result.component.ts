import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { User } from '@core/interfaces/user.interface';
import { UserSelectors } from '@pages/user/store/user.selector';
import { takeUntil } from 'rxjs/operators';
import { DataTableColumn } from '@shared/components/data-table/data-table.interface';


@Component({
  selector: 'app-search-user-result',
  templateUrl: './search-user-result.component.html',
  styleUrls: ['./search-user-result.component.scss']
})
export class SearchUserResultComponent implements OnInit, OnDestroy {
  public users$: Observable<User[]>
  public totalUsers$: Observable<number>
  private _unsubscribeAll: Subject<any>;
  public columnDefs: DataTableColumn[] = [
    {
      id: "avatar_url",
      title : "Avatar",
      width: 40
    },
    {
      id: "login",
      title : "Login",
      width: 30
    },
    {
      id: "type",
      title: "Type",
      width: 30
    }
  ];

  @Output() onResultPageChanged = new EventEmitter();

  constructor(private _store:Store) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.users$ = this._store.pipe(
      takeUntil(this._unsubscribeAll),
      select(UserSelectors.selectUsers))

    this.totalUsers$ = this._store.pipe(
      takeUntil(this._unsubscribeAll),
      select(UserSelectors.selectTotalUsers))
  }

  resultPageChanged(page){
    this.onResultPageChanged.emit(page)
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
