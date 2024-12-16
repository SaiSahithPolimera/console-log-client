import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Comments from '../components/Comments';
import { LoadingIcon } from '../components/Icons';
import Tags from '../components/Tags';


const BlogPost = () => {
  const { title } = useParams();
  const URL = import.meta.env.VITE_BASE_URL;
  const [postData, setPostData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchPostData = async (postTitle) => {
      try {
        setIsLoading(true);
        const response = await fetch(`${URL}/post/${postTitle}`);
        const data = await response.json();
        if (data.post.success) {
          setPostData(data.post.post);
          setIsLoading(false);
        }
      }
      catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }
    fetchPostData(title);
  })
  return (
    <section className="min-h-screen gap-10 px-64 items-start flex flex-col bg-black text-white p-4 font-sans">
      <h1 className='text-white text-xl self-start font-bold'>{postData.title}</h1>
      <div className='text-white text-base'>{postData.content}</div>
      <div className='flex gap-3 items-center'>
        {
          postData.tags &&
          <Tags tags={postData.tags} />
        }
      </div>
      {
        postData.comments ?
          <Comments comments={postData.comments} title={title} likeCount={postData.likeCount} />
          :
          isLoading && <LoadingIcon />
      }
      <div>
      </div>
    </section>
  )
}

export default BlogPost;