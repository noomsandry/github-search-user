import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { User } from '@core/interfaces/user.interface';
import { DEFAULT_SEARCH_USER_CRITERIA } from '@core/utils/contants';
import { UserActions } from '@pages/user/store/user.action';
import { SearchUserCriteria } from '@core/interfaces/user.interface';
import { UserSelectors } from '@pages/user/store/user.selector';

@Component({
  selector: 'app-search-user-view',
  templateUrl: './search-user-view.component.html',
  styleUrls: ['./search-user-view.component.scss']
})
export class SearchUserViewComponent implements OnInit, OnDestroy {
  public criteria: SearchUserCriteria;
  public users$: Observable<User[]>;
  public totalUsers$: Observable<number>;
  public loading$: Observable<boolean>;
  public submited$: Observable<boolean>;

  private _unsubscribeAll: Subject<any>;

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

  searchLogin(login){
    this.criteria = { ...DEFAULT_SEARCH_USER_CRITERIA, q: login };
    this.sendRequest();
  }

  loadPage(page){
    this.criteria = {
      ...this.criteria,
      page
    }
    this.sendRequest();
  }

  reset(){
    this.criteria = DEFAULT_SEARCH_USER_CRITERIA;
    this._store.dispatch(UserActions.searchUserReset());
  }

  sendRequest(){
    this._store.dispatch(UserActions.searchUserRequested({ criteria:  this.criteria }));
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
