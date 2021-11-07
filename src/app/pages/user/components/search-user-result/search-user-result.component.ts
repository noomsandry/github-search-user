import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { User } from '@core/interfaces/user.interface';
import { UserSelectors } from '@pages/user/store/user.selector';
import { takeUntil } from 'rxjs/operators';
import { DataTableColumn } from '@shared/components/data-table/data-table.interface';
import { SortOrder } from '@core/utils/contants';


@Component({
  selector: 'app-search-user-result',
  templateUrl: './search-user-result.component.html',
  styleUrls: ['./search-user-result.component.scss']
})
export class SearchUserResultComponent implements OnInit, OnDestroy {
  public users$: Observable<User[]>;
  public totalUsers$: Observable<number>;
  public loading$: Observable<boolean>;
  public submited$: Observable<boolean>;
  private _unsubscribeAll: Subject<any>;
  public columnDefs: DataTableColumn[] = [
    {
      id: "avatar_url",
      title : "Avatar Url",
      width: 40,
      sortable: true,
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

    this.loading$ = this._store.pipe(
      takeUntil(this._unsubscribeAll),
      select(UserSelectors.selectLoading))

    this.submited$ = this._store.pipe(
      takeUntil(this._unsubscribeAll),
      select(UserSelectors.selectSubmited))
  }

  resultPageChanged(page){
    this.onResultPageChanged.emit(page)
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
