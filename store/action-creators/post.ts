import { PostAction, PostActionTypes } from "../../types/post";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.FETCH_POSTS });
      const response = await axios.get(
        "https://simple-blog-api.crew.red/posts"
      );
      dispatch({
        type: PostActionTypes.FETCH_POSTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({ type: PostActionTypes.FETCH_POSTS_ERROR, payload: e.message });
    }
  };
};

export const fetchOnePost = (id) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.FETCH_ONE_POST });
      const response = await axios.get(
        `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`
      );
      dispatch({
        type: PostActionTypes.FETCH_ONE_POST_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_ONE_POST_ERROR,
        payload: e.message,
      });
    }
  };
};

export const addPost = (title, body) => {
  return async (dispatch: Dispatch<PostAction>) => {
    const json = JSON.stringify({
      title: title,
      body: body,
    });
    try {
      dispatch({ type: PostActionTypes.ADD_POST });
      const response = await axios.post(
        "https://simple-blog-api.crew.red/posts",
        json,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: PostActionTypes.ADD_POST_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({ type: PostActionTypes.ADD_POST_ERROR, payload: e.message });
    }
  };
};
