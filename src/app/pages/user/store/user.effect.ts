import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { switchMap, map, catchError } from 'rxjs/operators'
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { UserService } from "@core/services/user.service";
import { UserActions } from "@pages/user/store/user.action";
@Injectable()
export class UserEffects {

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.searchUserRequested),
      switchMap(({ criteria }) => this._userService.searchUser(criteria).pipe(
        map(({ users, total}) => {
          return UserActions.searchUserSuccess({ users , total });
        }),
        catchError(errorMessage => {
          return of(UserActions.searchUserFail({ errorMessage }))
        })
      ))
    ))
  ;

  constructor(
    private actions$: Actions,
    private _userService:UserService,
  ){}
}
