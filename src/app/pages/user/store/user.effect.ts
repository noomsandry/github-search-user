import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { switchMap, map, catchError } from 'rxjs/operators'
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { UserService } from "@core/services/user.service";
import { UserActions } from "@pages/user/store/user.action";
import { ToastService } from "@core/services/toast.service";
@Injectable()
export class UserEffects {

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.searchUserRequested),
      switchMap(({ criteria }) => this._userService.searchUser(criteria).pipe(
        map(({ users, total}) => {
          if(total === 0){
            this._toastService.show('No result found', {
              delay: 3000,
            });
          }
          return UserActions.searchUserSuccess({ users , total });
        }),
        catchError(errorMessage => {
          this._toastService.show('Failed to send request', {
            classname: 'bg-danger text-light',
            delay: 3000,
          });
          return of(UserActions.searchUserFail({ errorMessage }))
        })
      ))
    ))
  ;

  constructor(
    private actions$: Actions,
    private _userService:UserService,
    private _toastService: ToastService
  ){}
}
