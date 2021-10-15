import { Provider, useDispatch } from "react-redux";
import { store } from "../store";
import { useEffect } from "react";
import { fetchPosts } from "../store/action-creators/post";
import { useTypedSelector } from "../hooks/useTypedSelector";
import styled from "styled-components";
import Header from "../components/Header";
import PostsList from "../components/PostsList";
import Preloader from "../components/Preloader";

export const AppWrapper = styled.div`
  max-width: 1140px;
  margin: auto;
`;

export default function Index() {
  const dispatch = useDispatch();

  const { posts, loading } = useTypedSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <Provider store={store}>
      <AppWrapper>
        <Header />
        {loading ? <Preloader /> : <PostsList posts={posts} />}
      </AppWrapper>
    </Provider>
  );
}
