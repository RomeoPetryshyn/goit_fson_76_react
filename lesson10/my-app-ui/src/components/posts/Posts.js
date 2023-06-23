import { useState, useEffect } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import { getPosts } from "./../../api/jsonPlaceholderApi";

function Posts () {
    const [searchParams, setSearchParams] = useSearchParams();
    const postName = searchParams.get("postName");

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [posts, setPosts] = useState([]);

    // const setSearchHandler = ({postNameInput, typeInput}) => {
    //     if (postNameInput) {
    //         setSearchParams({ type, postName: postNameInput });
    //     }
    //     if (typeInput) {
    //         setSearchParams({ type: typeInput, postName });
    //     }
    // }

    // useEffect(() => {
    //     const filteredPosts = posts.filter(({ title }) => {
    //         return title.includes(postName);
    //     });
    //     setPosts(filteredPosts);
    // }, [postName]);

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
        <h1>Search Posts</h1>
        <input
            type="text"
            value={postName}
            onChange={e => setSearchParams({ postName: e.target.value })}
        />
        {/* <input
            type="text"
            value={type}
            onChange={e => setSearchHandler({ typeInput: e.target.value })}
        /> */}
        <div style={{ margin: 30 }}></div>
        {posts.map(({ id, title }) => {
            return <div style={{margin: '10px 0'}} key={`post-item-${id}`}>
                <Link to={`/postdetails/${id}`}>{title}</Link>
            </div>
        })}
    </>
}

export default Posts;