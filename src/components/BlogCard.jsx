import { formatDistance, subDays } from 'date-fns'
import parse from "html-react-parser"
import { Link } from 'react-router-dom';

const BlogCard = ({ blogData }) => {
    const createdDate = new Date(blogData.createdAt);
    const date = formatDistance(subDays(createdDate, 1), new Date(), { addSuffix: true });
    return (
        <div className="flex flex-col gap-2 w-full ">
            <div className='flex md:flex-row flex-col gap-1 md:items-center md:justify-between items-start'>
                <Link to={/posts/ + blogData.title.split(" ").join("-")}>
                    <h1 className="lg:text-2xl text-xl text-slate-200 font-bold hover:cursor-pointer">{blogData.title}</h1>
                </Link>
                <span className="md:text-sm text-center text-xs font-light text-slate-300 ">{date}</span>
            </div>
            <div className="text-md text-slate-300 line-clamp-3">{parse(blogData.content)}</div>
        </div>
    )
}

export default BlogCard;
