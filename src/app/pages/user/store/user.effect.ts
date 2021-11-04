import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { switchMap, map, catchError } from 'rxjs/operators'
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { UserService } from "@core/services/user.service";
import { UserActions } from "@pages/user/store/user.action";
@Injectable()
export class UserEffects {

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.searchUserRequested),
      switchMap(({ username }) => this.userService.searchUserByname(username).pipe(
        map((users) => UserActions.searchUserSuccess({ users })),
        catchError(errorMessage => {
          return of(UserActions.searchUserFail({ errorMessage }))
        })
      ))
    ))
  ;

  constructor(
    private actions$: Actions,
    private store: Store,
    private userService:UserService
  ){}
}
