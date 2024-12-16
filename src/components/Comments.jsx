import toast, { Toaster } from 'react-hot-toast';
import { useRef } from 'react';
import { LikeIcon } from '../components/Icons';


const Comments = ({ comments, title, likeCount }) => {
    const commentRef = useRef();
    const addComment = async () => {
        if (commentRef.current.value !== "") {

            try {
                const fetchURL = `${URL}/posts/${title}/comment?comment=${commentRef.current.value.split(" ").join("-")}`;
                const response = await fetch(fetchURL);
                const data = await response.json();
                if (data.message) {
                    toast.error(data.message);
                    commentRef.current.value = "";
                }
            }
            catch (err) {
                console.error(err);
                toast.error("Error occurred while adding comment!")
            }
        }
        else {
            toast.error("Please type something")
        }
    }
    return (
        <div className='flex flex-col p-1 w-full gap-2'>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>Comments</h1>
                <div className='flex gap-1 items-center'><button className=' cursor-pointer hover:scale-110 ease-in-out duration-150'><LikeIcon /></button><span>{likeCount > 0 ? likeCount : 1}</span></div>
            </div>
            <div className='flex flex-col gap-1'>{comments.map((comment) => <div className='text-slate-300' key={comment.id} >{comment.message.split("\"")}</div>)}</div>
            <div className='flex flex-col items-start gap-3'>
                <input onKeyUp={(e) => (e.key === "Enter") && addComment()} type="text" ref={commentRef} className='bg-slate-200 outline-none caret-black text-black w-3/4 rounded-md px-3 py-2' />
                <button className='bg-green-600 rounded-lg  px-2 py-1 hover:bg-green-700 ease-in-out duration-150' onClick={addComment}>Add comment</button>
            </div>
            <Toaster />
        </div>
    )
}

export default Comments;