import { formatDistance, subDays } from 'date-fns'
import { Link } from 'react-router-dom';

const Blogcard = ({ blogData }) => {
    const createdDate = new Date(blogData.createdAt);
    const date = formatDistance(subDays(createdDate, 1), new Date(), { addSuffix: true });
    return (
        <div className="flex flex-col gap-2 w-3/4 ">
            <div className='flex items-center justify-between'>
                <Link to={/posts/ + blogData.title}>
                    <h1 className="text-2xl text-slate-200 font-bold hover:cursor-pointer">{blogData.title}</h1>
                </Link>
                <span className="text-base font-light text-slate-300">{date}</span>
            </div>
            <div className="text-xl text-slate-200 line-clamp-4">{blogData.content}</div>
        </div>
    )
}

export default Blogcard;
