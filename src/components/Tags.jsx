import { TagsIcon } from "./Icons";


const Tags = ({ tags }) => {
    return (

        <ul className="flex gap-1">
            <TagsIcon />
            {
                tags.map((tag) => <li className="bg-slate-800 px-2 py-1 rounded-lg hover:bg-slate-900 ease-in-out duration-150 cursor-pointer" key={tag.name}>{tag.name}</li>)
            }
        </ul>
    )
}

export default Tags;