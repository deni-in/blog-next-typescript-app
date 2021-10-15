export type Post = {
  title?: string,
  body?: string,
  id?: number
}

export interface PostState {
  posts: any[];
  loading: boolean;
  error: null | string;
  post: Post;
}

export enum PostActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",

  FETCH_ONE_POST = "FETCH_ONE_POST",
  FETCH_ONE_POST_SUCCESS = "FETCH_ONE_POST_SUCCESS",
  FETCH_ONE_POST_ERROR = "FETCH_ONE_POST_ERROR",
}

interface FetchPostsAction {
  type: PostActionTypes.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
  type: PostActionTypes.FETCH_POSTS_SUCCESS;
  payload: any;
}
interface FetchPostsErrorAction {
  type: PostActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}
interface FetchOnePostAction {
  type: PostActionTypes.FETCH_ONE_POST;
}
interface FetchOnePostSuccessAction {
  type: PostActionTypes.FETCH_ONE_POST_SUCCESS;
  payload: Object;
}
interface FetchOnePostErrorAction {
  type: PostActionTypes.FETCH_ONE_POST_ERROR;
  payload: string;
}

export type PostAction =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction
  | FetchOnePostAction
  | FetchOnePostSuccessAction
  | FetchOnePostErrorAction;
