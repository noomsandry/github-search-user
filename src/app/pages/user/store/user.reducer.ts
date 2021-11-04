import { User } from "@core/interfaces/user.interface";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";

import { LoadingState } from "@core/utils/contants";
import { UserActions } from "./user.action";

export interface UserState extends EntityState<User> {
  loadingState: LoadingState,
  errorMessage: string
}

function selectUserLogin(user: User): string {
  return user.login;
}

const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserLogin,
});

const initialState: UserState = adapter.getInitialState({
  loadingState: LoadingState.Init,
  errorMessage: ''
});

const reducer = createReducer(initialState,
  on(UserActions.searchUserRequested, (state) => {
    return {
      ...state,
      loadingState: LoadingState.Loading
    }
  }),

  on(UserActions.searchUserSuccess, (state, { users }) => {
    return adapter.setAll(users, { ... state, loadingState: LoadingState.Loaded })
  }),

  on(UserActions.searchUserFail, (state, { errorMessage }) => {
    return { ... state, loadingState: LoadingState.Loaded, errorMessage }
  }),

  on(UserActions.searchUserReset, (state) => {
    return adapter.removeAll({ ...state})
  })
);

export function userReducer(state, action) {
  return reducer(state, action);
}

export const { selectAll, selectEntities, selectIds, selectTotal } =  adapter.getSelectors();
