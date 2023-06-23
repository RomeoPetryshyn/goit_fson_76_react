import { getPost } from "../../api/jsonPlaceholderApi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PostDetails() {
    const { postId } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [post, setPost] = useState();

    useEffect(() => {
        setTimeout(async () => {
            try {
                const loadedPost = await getPost(postId);
                console.log(loadedPost);
                setPost(loadedPost);
                setIsLoading(false);
            } catch(error) {
                setIsError(true);
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }
        }, 3000);
    }, []);

    if (isLoading) {
        return 'Loading post data...';
    }

    if (isError) {
        return 'Error while loading post information...';
    }

    console.log(post);

    return <div>
        <div>Post id: {post.id}</div>
        <div>Post title: {post.title}</div>
        <div>Post body: {post.body}</div>
    </div>
}

export default PostDetails;