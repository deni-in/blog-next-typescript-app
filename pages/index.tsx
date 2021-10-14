import { Provider, useDispatch } from "react-redux";
import { store } from "../store";
import { useEffect } from "react";
import { fetchPosts } from "../store/action-creators/post";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Link from "next/link";

export default function Index() {
  const dispatch = useDispatch();

  const { posts, error, loading } = useTypedSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <Provider store={store}>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Provider>
  );
}
