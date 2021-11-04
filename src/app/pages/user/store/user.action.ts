import { User } from "@core/interfaces/user.interface";
import { createAction, props } from "@ngrx/store";

const page = '[USER PAGE]';

const UserActionTypes = {
  SEARCH_USER_REQUESTED : `${ page } Search user requested`,
  SEARCH_USER_SUCCESS : `${ page } Search user success`,
  SEARCH_USER_FAIL : `${ page } Search user fail`,
}

const searchUserRequested = createAction(UserActionTypes.SEARCH_USER_REQUESTED, props<{ username: string}>());
const searchUserSuccess = createAction(UserActionTypes.SEARCH_USER_SUCCESS, props<{ users: User[]}>());
const searchUserFail = createAction(UserActionTypes.SEARCH_USER_FAIL, props<{ errorMessage: string}>());

export const UserActions = {
  searchUserRequested,
  searchUserSuccess,
  searchUserFail
}

