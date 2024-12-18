import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom'
import Comments from '../components/Comments';
import toast from "react-hot-toast"
import { LoadingIcon } from '../components/Icons';
import Tags from '../components/Tags';

const BlogPost = () => {
  const { title } = useParams();
  const URL = import.meta.env.VITE_BASE_URL;
  const [postData, setPostData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const commentRef = useRef("");

  const fetchPostData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${URL}/post/${title}`);
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
  }, [title, URL])
  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);

  const addComment = async () => {
    if (commentRef.current.value !== "") {
      const toastID = toast.loading("Adding comment");
      try {
        const URL = import.meta.env.VITE_BASE_URL;
        const fetchURL = `${URL}/posts/${title}/comment?comment=${commentRef.current.value}`;
        const response = await fetch(fetchURL, { method: 'GET', credentials: 'include' });
        const data = await response.json();
        console.log(data);
        if (data.message) {
          toast.dismiss(toastID);
          toast.error(data.message);
        }
        if (data.success) {
          toast.success(data.success);
          fetchPostData();
        }
        toast.dismiss(toastID);
        commentRef.current.value = "";
      }
      catch (err) {
        toast.dismiss(toastID);
        console.error(err);
        commentRef.current.value = "";
        toast.error("Error occurred while adding comment!")
      }
    }
    else {
      toast.error("Please type something")
    }
  }
  return (
    <section className="min-h-screen gap-10 lg:px-64 items-start flex flex-col bg-black text-white p-4 font-sans">
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
          <Comments comments={postData.comments} commentRef={commentRef} addComment={addComment} likeCount={postData.likeCount} />
          :
          isLoading && <LoadingIcon />
      }
      <div>
      </div>
    </section>
  )
}

export default BlogPost;