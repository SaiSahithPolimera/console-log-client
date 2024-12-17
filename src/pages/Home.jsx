import { useState, createContext, useEffect } from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import { LoadingIcon } from "../components/Icons";
import BlogCard from "../components/BlogCard";
import Tags from "../components/Tags";

export const SelectionProvider = createContext();
const Home = () => {
  const options = ["Blog", "Tags"];
  const URL = import.meta.env.VITE_BASE_URL;
  const [selection, setSelection] = useState(options[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchPostData = () => {
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          setPostData(res);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    };
    const fetchTagData = () => {
      fetch(`${URL}/tags`)
        .then((res) => res.json())
        .then((res) => {
          setTags(res.tags);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    }
    fetchPostData();
    fetchTagData();
  }, [URL]);

  return (
    <SelectionProvider.Provider value={{ selection, setSelection, options }}>
      <section className="min-h-screen gap-10 flex flex-col bg-black p-4 font-sans text-slate-300 lg:px-64">
        <Navbar />
        {
          selection === "Blog" ?
            <>
              <Hero />
              <h3 className="text-xl text-white font-bold">Latest</h3>
              <div className=" flex flex-col gap-8">
                {isLoading && <LoadingIcon />}
                {postData &&
                  postData.map((post) => (
                    <div key={post.id} className="flex flex-col gap-12 w-full">
                      <BlogCard blogData={post} />
                      <hr className="w-full border-green-800 last-of-type:hidden"/>
                    </div>
                  ))}
              </div>
            </>
            :
            <Tags tags={tags} />
        }
      </section>
    </SelectionProvider.Provider>
  );
};

export default Home;