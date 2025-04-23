import { useState, createContext } from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import { LoadingIcon } from "../components/Icons";
import BlogCard from "../components/BlogCard";
import Tags from "../components/Tags";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts, fetchTagData } from "../api/posts";

export const SelectionProvider = createContext();

const Home = () => {

  const options = ["Blog", "Tags"];

  const [selection, setSelection] = useState(options[0]);

  const { data: postData, error, isLoading } = useQuery({
    queryKey: ["PostsData"],
    queryFn: fetchPosts
  })

  const { data: tags } = useQuery({
    queryKey: ["TagData"],
    queryFn: fetchTagData
  })

  return (
    <SelectionProvider.Provider value={{ selection, setSelection, options }}>
      <section className="min-h-screen gap-10 flex flex-col bg-black p-4 font-sans text-slate-300 lg:px-64">
        <Navbar />
        {
          selection === "Blog" ?
            <>
              <Hero />
              <h3 className="md:text-xl text-2xl text-white font-bold">Latest</h3>
              <div className=" flex flex-col gap-8">
                {isLoading && <LoadingIcon />}
                {
                  error && <span className="text-red-500 bg-stone-200 px-2 py-2 rounded-lg self-center"> 😶 {error}</span>
                }
                {postData && postData.length > 0 &&
                  postData.map((post) => (
                    <div key={post.id} className="flex flex-col gap-12 w-full">
                      <BlogCard blogData={post} />
                      <hr className="w-full border-green-800 last-of-type:hidden" />
                    </div>
                  ))}
              </div>
            </>
            :
            tags && <Tags tags={tags} />
        }
      </section>
    </SelectionProvider.Provider>
  );
};

export default Home;