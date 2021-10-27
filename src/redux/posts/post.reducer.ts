import { Reducer } from "redux";
import { postActionTypes, postActionsCreators } from "./post.type";
import { emptyPost, IPostState } from "../../models/post/post.model";
import { UpdateMode } from "../../models/common/update-mode.enum";

export const INITIAL_STATE: IPostState = {
  posts: [],
  errors: undefined,
  post: emptyPost,
  isLoading: false,
  initialFetch: true,
  updateMode: UpdateMode.NONE,
};

const reducer: Reducer<IPostState> = (
  state = INITIAL_STATE,
  action: postActionsCreators
): IPostState => {
  switch (action.type) {
    case postActionTypes.POSTS_FETCH_REQUEST: {
      return { ...state, isLoading: true };
    }
    case postActionTypes.POSTS_FETCH_SUCCESS: {
      console.log("Testing: ", action.payload.data.items);
      return {
        ...state,
        isLoading: false,
        initialFetch: false,
        posts: action.payload.data.items,
      };
    }
    case postActionTypes.POST_SET_ACTIVE: {
      return {
        ...state,
        post: action.payload,
      };
    }
    case postActionTypes.POST_RESET_ISLOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case postActionTypes.POST_SET_UPDATE_MODE: {
      return {
        ...state,
        updateMode: action.payload,
      };
    }
    case postActionTypes.POSTS_FETCH_ERROR: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    default:
      return state;
  }
};

export { reducer as postReducer };
