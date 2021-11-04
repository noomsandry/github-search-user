import { createAction, props } from "@ngrx/store";

const module = '[USER PAGE]';

export const UserActionTypes = {
  SEARCH_USER_REQUESTED : `${ module } Search user requested`,
}

export const searchUserRequested = createAction(UserActionTypes.SEARCH_USER_REQUESTED, props<{ username: string}>());
