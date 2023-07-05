import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/posts/selectors";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { fetchPosts } from "../../redux/posts/operations";

function Content() {
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector(getPosts);
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    console.log({ items, isLoading, error });

    return <div>
        I am Content
    </div>
}

export default Content;