import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LoadingIcon } from '../components/Icons';
import BlogCard from '../components/BlogCard';

const TaggedPosts = () => {
    const { tag } = useParams();
    const [postData, setPostData] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const URL = import.meta.env.VITE_BASE_URL;
    const fetchPostsByTagName = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${URL}/tags/${tag}`)
            const data = await response.json();
            if (data) {
                setPostData(data.posts);
                setError("");
            }
            else {
                setError("Error retrieving post data");
            }
            setIsLoading(false);
        }
        catch (err) {
            setIsLoading(false);
            console.error(err);
            setError("Error retrieving post data");
        }
    }
    useEffect(() => {
        fetchPostsByTagName();
    }, [tag])
    return (
        <section className='bg-black min-h-screen flex flex-col gap-4 py-4 lg:px-64'>
            <h3 className="text-xl text-white font-bold">Posts tagged with: #{tag}</h3>
            <div className=" flex flex-col gap-4">
                {isLoading && <span className="self-center text-white"><LoadingIcon /></span>}
                {
                    error && <span className="text-red-500 bg-stone-200 px-2 py-2 rounded-lg self-center"> 😶 {error}</span>
                }
                {postData.length > 0 && error === "" &&
                    postData.map((post) => (
                        <div key={post.id} className="flex flex-col gap-12 w-full">
                            <BlogCard blogData={post} />
                            <hr className="w-full border-green-800 last-of-type:hidden" />
                        </div>
                    ))}
            </div>
        </section>
    )
}

export default TaggedPosts;