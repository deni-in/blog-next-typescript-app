import { PostAction, PostActionTypes, PostState } from "../../types/post";

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
  post: {},
};

export const postReducer = (
  state = initialState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return {
        loading: true,
        error: null,
        posts: [],
        post: {},
      };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        error: null,
        posts: action.payload,
        post: {},
      };
    case PostActionTypes.FETCH_POSTS_ERROR:
      return {
        loading: false,
        posts: [],
        error: action.payload,
        post: {},
      };
    case PostActionTypes.FETCH_ONE_POST:
      return {
        loading: true,
        posts: state.posts,
        error: null,
        post: {},
      };
    case PostActionTypes.FETCH_ONE_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        posts: state.posts,
        post: action.payload,
      };
    case PostActionTypes.FETCH_ONE_POST_ERROR:
      return {
        loading: false,
        posts: state.posts,
        error: action.payload,
        post: {},
      };
    case PostActionTypes.ADD_POST:
      return {
        loading: true,
        posts: state.posts,
        error: null,
        post: {},
      };
    case PostActionTypes.ADD_POST_SUCCESS:
      return {
        loading: false,
        posts: [...state.posts, action.payload],
        error: null,
        post: {},
      };
    case PostActionTypes.ADD_POST_ERROR:
      return {
        loading: false,
        posts: state.posts,
        error: action.payload,
        post: {},
      };
    default:
      return state;
  }
};
