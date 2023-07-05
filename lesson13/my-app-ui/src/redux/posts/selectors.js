export const getPosts = (state) => {
    return {
        items: state.posts.items,
        isLoading: state.posts.isLoading,
        error: state.posts.error
    }
}