import { createSelector } from "reselect";
import { rootState } from "../root-reducer";

export const getPosts = (state: rootState) => state.post;

export const getAllPosts = createSelector([getPosts], (state) => state.posts);

export const getPostsLoading = createSelector(
  [getPosts],
  (state) => state.isLoading
);

export const getPostsInitialFetch = createSelector(
  [getPosts],
  (state) => state.initialFetch
);

export const getActivePost = createSelector([getPosts], (state) => state.post);

export const getPostUpdateMode = createSelector(
  [getPosts],
  (state) => state.updateMode
);
