import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchOnePost} from "../../store/action-creators/post";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export default function () {
    const dispatch = useDispatch()
    const {query} = useRouter()

    const { post, error, loading } = useTypedSelector((state) => state.post);

    useEffect(() => {
        dispatch(fetchOnePost(query.id))
    }, [])
    return(
        <div>
            <div>Title {post.title}</div>
            <div>body {post.body}</div>
            <div>id {post.id}</div>
        </div>
    )
}