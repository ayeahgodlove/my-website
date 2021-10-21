import { createSelector } from "reselect";
import { rootState } from "../root-reducer";

export const getTokenState = (state: rootState) => state.token;

export const getToken = createSelector(
  [getTokenState],
  state => state.token
);

export const getTokenLoading = createSelector(
  [getTokenState],
  state => state.isLoading
);

export const getTokenInitialFetch = createSelector(
  [getTokenState],
  state => state.initialFetch
);
