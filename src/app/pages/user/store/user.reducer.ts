import { User } from "@core/interfaces/user.interface";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer } from "@ngrx/store";

interface State extends EntityState<User> {
}

function selectUserLogin(user: User): string {
  return user.login;
}

const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserLogin,
});

const initialState: State = adapter.getInitialState({});

const reducer = createReducer(initialState);

export function userReducer(state, action) {
  return reducer(state, action);
}
