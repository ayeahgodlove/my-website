import { action } from "typesafe-actions";
import { postActionsCreators, postActionTypes } from "./post.type";
import { appThunk } from "../root-reducer";
import { UpdateMode } from "../../models/common/update-mode.enum";
import { IPost } from "../../models/post/post.model";
import { postService } from "../../services/post/post.service";

export const fetchPostsRequest = (): postActionsCreators => {
  return action(postActionTypes.POSTS_FETCH_REQUEST);
};

export const fetchPostsSuccess = (posts: IPost[]): postActionsCreators =>
  action(postActionTypes.POSTS_FETCH_SUCCESS, posts);

export const fetchPostsError = (message: string): postActionsCreators =>
  action(postActionTypes.POSTS_FETCH_ERROR, message);

export const fetchPostsAsync = (): appThunk => async (dispatch) => {
  dispatch(fetchPostsRequest());
  await postService
    .fetchPost()
    .then((posts) => {
      dispatch(fetchPostsSuccess(posts.data.items));
    })
    .catch((error) => dispatch(fetchPostsError(error.message)));
};

export const setActivePost = (post: IPost): postActionsCreators =>
  action(postActionTypes.POST_SET_ACTIVE, post);

export const setPostUpdateMode = (
  updateMode: UpdateMode
): postActionsCreators =>
  action(postActionTypes.POST_SET_UPDATE_MODE, updateMode);

export const postResetIsloading = (): postActionsCreators =>
  action(postActionTypes.POST_RESET_ISLOADING);
