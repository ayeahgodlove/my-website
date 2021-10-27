import { rootState } from "../../redux/root-reducer";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { IPost } from "../../models/post/post.model";
import * as postActions from "../../redux/posts/post.actions";
import { UpdateMode } from "../../models/common/update-mode.enum";

const usePost = () => {
  const posts = useSelector<rootState, IPost[]>((state) => state.post.posts);

  const isLoading = useSelector<rootState, boolean>(
    (state) => state.post.isLoading
  );
  const initialFetch = useSelector<rootState, boolean>(
    (state) => state.post.isLoading
  );
  const post = useSelector<rootState, IPost>((state) => state.post.post);
  const updateMode = useSelector<rootState, UpdateMode>(
    (state) => state.post.updateMode
  );

  const dispatch = useDispatch();

  const loadPosts = useCallback(() => {
    if (initialFetch) {
      dispatch(postActions.fetchPostsAsync());
    }
  }, [dispatch, initialFetch]);

  console.log("loadPosts: ", loadPosts());

  const setPost = (post: IPost) => {
    dispatch(postActions.setActivePost(post));
  };

  const setUpdateMode = (updateMode: UpdateMode) => {
    dispatch(postActions.setPostUpdateMode(updateMode));
  };

  useEffect(() => {
    loadPosts();
  }, [post, posts, isLoading, initialFetch, loadPosts]);

  return {
    post,
    posts,
    isLoading,
    initialFetch,
    updateMode,
    setUpdateMode,
    setPost,
  };
};

export { usePost };
