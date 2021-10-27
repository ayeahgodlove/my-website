import { UpdateMode } from "../../models/common/update-mode.enum";
import { IPost } from "../../models/post/post.model";

export enum postActionTypes {
  POSTS_FETCH_REQUEST = "POSTS_FETCH_REQUEST",
  POSTS_FETCH_SUCCESS = "POSTS_FETCH_SUCCESS",
  POSTS_FETCH_ERROR = "POSTS_FETCH_ERROR",
  POST_EDIT_SUCCESS = "POST_EDIT_SUCCESS",
  POST_ADD_SUCCESS = "POST_ADD_SUCCESS",
  POST_SET_ACTIVE = "POST_SET_ACTIVE",
  POST_SET_UPDATE_MODE = "POST_SET_UPDATE_MODE",
  POST_RESET_ISLOADING = "POST_RESET_ISLOADING",
}

interface FetchPostsRequestAction {
  type: typeof postActionTypes.POSTS_FETCH_REQUEST;
}

interface FetchPostsSuccessAction {
  type: typeof postActionTypes.POSTS_FETCH_SUCCESS;
  payload: any;
}

interface FetchPostsFailureAction {
  type: typeof postActionTypes.POSTS_FETCH_ERROR;
  payload: string;
}

interface AddPostsSuccessAction {
  type: typeof postActionTypes.POST_ADD_SUCCESS;
  payload: IPost;
}

interface EditPostsSuccessAction {
  type: typeof postActionTypes.POST_EDIT_SUCCESS;
  payload: IPost;
}

interface PostsSetActiveAction {
  type: typeof postActionTypes.POST_SET_ACTIVE;
  payload: IPost;
}

interface PostsResetIsloadingAction {
  type: typeof postActionTypes.POST_RESET_ISLOADING;
}

interface PostsSetUpdateModeAction {
  type: typeof postActionTypes.POST_SET_UPDATE_MODE;
  payload: UpdateMode;
}

export type postActionsCreators =
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction
  | AddPostsSuccessAction
  | EditPostsSuccessAction
  | PostsSetActiveAction
  | PostsSetUpdateModeAction
  | PostsResetIsloadingAction;
