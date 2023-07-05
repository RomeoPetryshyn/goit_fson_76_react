import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/posts/operations";
import { deletePostItem } from "../../redux/posts/slice";
import { getPosts } from "../../redux/posts/selectors";

function Content() {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector(getPosts);
    if (isLoading) {
        return 'Loading! Spinner...'
    }
    if (error) {
        return 'Error: ' + error;
    }

    const handlePostDelete = () => {
        const postId = Number(inputRef.current.value);
        dispatch(deletePost(postId));
    }
    return <>
        <div style={{marginBottom: 40}}>
            <input ref={inputRef} type="text" placeholder="Enter post ID to delete"/>
            <button onClick={handlePostDelete}>Delete post by ID</button>
        </div>
        <ul>
            {items.map(({ title, body, id }) => {
                return <li key={`post-item-${id}`}>
                    <div style={{fontWeight: 'bold'}}>Id: {id}</div>
                    <div>Title: {title}</div>
                    <div>Body: {body}</div>
                </li>
            })}
        </ul>
    </>;
}

export default Content;