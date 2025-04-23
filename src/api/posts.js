const URL = import.meta.env.VITE_BASE_URL;

export const fetchPosts = async () => {
    const response = await fetch(URL);
    const postData = await response.json();
    return postData;
};

export const fetchTagData = async () => {
    const response = await fetch(`${URL}/tags`);
    const { tags } = await response.json();
    return tags;
}

export const fetchPostData = async (title) => {
    const response = await fetch(`${URL}/post/${title}`);
    const { post } = await response.json();
    return post;
}

export const fetchPostsByTagName = async (tag) => {
    const response = await fetch(`${URL}/tags/${tag}`)
    const { posts } = await response.json();
    return posts;
}