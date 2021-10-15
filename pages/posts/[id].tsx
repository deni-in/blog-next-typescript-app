import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchOnePost } from "../../store/action-creators/post";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Header from "../../components/Header";
import { AppWrapper } from "../index";
import Post from "../../components/Post";
import Preloader from "../../components/Preloader";

export default function () {
  const dispatch = useDispatch();
  const { query } = useRouter();

  const { post, loading } = useTypedSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchOnePost(query.id));
  }, []);
  return (
    <AppWrapper>
      <Header />
      {loading ? (
        <Preloader />
      ) : (
        <Post title={post.title} body={post.body} id={post.id} />
      )}
    </AppWrapper>
  );
}
