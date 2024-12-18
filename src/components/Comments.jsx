import { Toaster } from 'react-hot-toast';
import { LikeIcon } from '../components/Icons';

const Comments = ({ comments, likeCount, addComment, commentRef }) => {
    return (
        <div className='flex flex-col p-1 w-full gap-2'>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>Comments</h1>
                <div className='flex gap-1 items-center'><button className=' cursor-pointer hover:scale-110 ease-in-out duration-150'><LikeIcon /></button><span>{likeCount > 0 ? likeCount : 1}</span></div>
            </div>
            <div className='flex flex-col items-start gap-3'>
                <input onKeyUp={(e) => (e.key === "Enter") && addComment()} type="text" ref={commentRef} className='bg-slate-200 outline-none caret-black text-black w-3/4 rounded-md px-3 py-2' />
                <button className='bg-green-600 rounded-lg  px-2 py-1 hover:bg-green-700 ease-in-out duration-150' onClick={addComment}>Add comment</button>
            </div>
            <div className='flex flex-col items-start gap-2'>{comments.map((comment) => <> <div className='cursor-pointer flex flex-col gap-1 w-auto text-white px-2 py-1 rounded-lg' key={comment.message} ><span >@{comment.username}</span><span>{comment.message}</span></div> <hr className='w-full border[1px] border-slate-600 last:hidden' /> </>)}</div>
            <Toaster />
        </div>
    )
}

export default Comments;