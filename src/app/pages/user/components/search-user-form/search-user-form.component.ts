import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserActions } from '@pages/user/store/user.action';

@Component({
  selector: 'app-search-user-form',
  templateUrl: './search-user-form.component.html',
  styleUrls: ['./search-user-form.component.scss']
})
export class SearchUserFormComponent implements OnInit {
  public username: FormControl = new FormControl('', Validators.required);
  public submited: boolean = false;
  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  search($event){
    this.submited = true;
    $event.preventDefault();
    this.store.dispatch(UserActions.searchUserRequested({ username: this.username.value }))
  }
}
