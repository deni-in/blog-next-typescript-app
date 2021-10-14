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
      console.log(response.data)
      dispatch({
        type: PostActionTypes.FETCH_POSTS_SUCCESS,
        payload: response.data
      });
    } catch (e) {
      dispatch({ type: PostActionTypes.FETCH_POSTS_ERROR, payload: e.message });
    }
  };
};
