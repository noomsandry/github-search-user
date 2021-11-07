import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { DEFAULT_SEARCH_USER_CRITERIA } from '@core/utils/contants';
import { UserActions } from '@pages/user/store/user.action';
import { SearchUserCriteria } from '@core/interfaces/user.interface';

@Component({
  selector: 'app-search-user-view',
  templateUrl: './search-user-view.component.html',
  styleUrls: ['./search-user-view.component.scss']
})
export class SearchUserViewComponent implements OnInit {
  public criteria: SearchUserCriteria;
  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  getResultPage(page){
  }

  searchLogin(login){
    this.criteria = { ...DEFAULT_SEARCH_USER_CRITERIA, q: login };
    this.sendRequest();
  }

  searchPage(page){
    this.criteria = {
      ...this.criteria,
      page
    }
    this.sendRequest();
  }

  reset(){
    this.criteria = DEFAULT_SEARCH_USER_CRITERIA;
    this.store.dispatch(UserActions.searchUserReset());
  }

  sendRequest(){
    this.store.dispatch(UserActions.searchUserRequested({ criteria:  this.criteria }));
  }

}
