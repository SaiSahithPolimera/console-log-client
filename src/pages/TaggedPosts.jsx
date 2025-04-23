import { useParams } from 'react-router-dom'
import { LoadingIcon } from '../components/Icons';
import BlogCard from '../components/BlogCard';
import { useQuery } from '@tanstack/react-query';
import { fetchPostsByTagName } from '../api/posts';

const TaggedPosts = () => {
    const { tag } = useParams();
    const { data: postData, isLoading, error } = useQuery({
        queryKey: ['TaggedPosts'],
        queryFn: () => fetchPostsByTagName(tag)
    })

    if (isLoading) {
        return <section className='bg-black min-h-screen text-white flex items-center justify-center'>
            <LoadingIcon />
        </section>
    }

    return (
        <section className='bg-black min-h-screen flex flex-col gap-4 py-4 lg:px-64 px-6'>
            <h3 className="text-xl text-white font-bold">Posts tagged with: #{tag}</h3>
            <div className=" flex flex-col gap-4">
                {
                    error && <span className="text-red-500 bg-stone-200 px-2 py-2 rounded-lg self-center"> 😶 {error}</span>
                }
                {postData &&
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