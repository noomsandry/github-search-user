import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";

import { LoadingState } from "@core/utils/contants";
import { User } from "@core/interfaces/user.interface";
import { UserActions } from "./user.action";

export interface UserState extends EntityState<User> {
  loadingState: LoadingState,
  errorMessage: string,
  total: number;
  submited: boolean
}

function selectUserLogin(user: User): string {
  return user.login;
}

const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserLogin,
});

const initialState: UserState = adapter.getInitialState({
  loadingState: LoadingState.Init,
  errorMessage: '',
  total: 0,
  submited: false,
});

const reducer = createReducer(initialState,
  on(UserActions.searchUserRequested, (state) => {
    return {
      ...state,
      loadingState: LoadingState.Loading
    }
  }),

  on(UserActions.searchUserSuccess, (state, { users, total }) => {
    let setState =  adapter.setAll(users, { ... state, loadingState: LoadingState.Loaded });
    return {
      ...setState,
      total,
      submited: true
    }
  }),

  on(UserActions.searchUserFail, (state, { errorMessage }) => {
    return { ... state, loadingState: LoadingState.Loaded, errorMessage, submited: true   }
  }),

  on(UserActions.searchUserReset, (state) => {
    let removeState =  adapter.removeAll({ ...state});
    return {
      ...removeState,
      total: 0,
      submited: false
    }
  })
);

export function userReducer(state, action) {
  return reducer(state, action);
}

export const { selectAll, selectEntities, selectIds, selectTotal } =  adapter.getSelectors();
