import { formatDistance, subDays } from 'date-fns'
import parse from "html-react-parser"

import { Link } from 'react-router-dom';

const BlogCard = ({ blogData }) => {
    const createdDate = new Date(blogData.createdAt);
    const date = formatDistance(subDays(createdDate, 1), new Date(), { addSuffix: true });
    return (
        <div className="flex flex-col gap-2 w-full ">
            <div className='flex items-center justify-between'>
                <Link to={/posts/ + blogData.title.split(" ").join("-")}>
                    <h1 className="text-2xl text-slate-200 font-bold hover:cursor-pointer">{blogData.title}</h1>
                </Link>
                <span className="text-sm font-light  text-slate-300">{date}</span>
            </div>
            <div className="text-md text-slate-300 line-clamp-4">{parse(blogData.content)}</div>
        </div>
    )
}

export default BlogCard;
