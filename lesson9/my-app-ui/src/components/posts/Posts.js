import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getPosts } from "./../../api/jsonPlaceholderApi";

function Posts () {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setTimeout(async () => {
            try {
                const loadedPosts = await getPosts();
                setPosts(loadedPosts);
                setIsLoading(false);
            } catch(error) {
                setIsError(true);
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }
        }, 3000);
    }, []);

    console.log(posts);

    if (isLoading) {
        return 'Loading data...';
    }

    if (isError) {
        return 'Error while loading posts...';
    }

    return <>
        {posts.map(({ id, title }) => {
            return <div style={{margin: '10px 0'}} key={`post-item-${id}`}>
                <Link to={`/postdetails/${id}`}>{title}</Link>
            </div>
        })}
    </>
}

export default Posts;