import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectAll, UserState } from "@pages/user/store/user.reducer";

export const getRouteState =
  createFeatureSelector<UserState>('users');

const selectUsers = createSelector(getRouteState, selectAll);

export const UserSelectors = {
  selectUsers
}
