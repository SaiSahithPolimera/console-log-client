import { useState, createContext, useEffect } from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import { LoadingIcon } from "../components/Icons";
import Blogcard from "../components/Blogcard";

export const SelectionProvider = createContext();
const Home = () => {
  const options = ["Blog", "Tags"];
  const URL = import.meta.env.VITE_BASE_URL;
  const [selection, setSelection] = useState(options[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const fetchPostData = () => {
      fetch(URL).then((res) => res.json()).then((res) => {
        setPostData(res)
        setIsLoading(false);
      }).catch((err) => console.error(err));
    }
    fetchPostData();
  })
  return (
    <SelectionProvider.Provider value={{ selection, setSelection, options }}>
      <section className="min-h-screen gap-10 px-4 sm:px-8  md:px-16  lg:px-32 xl:px-64 flex flex-col bg-black text-white p-4 font-mono">
        <Navbar />
        <Hero />
        <h3 className="text-xl text-white font-bold">Latest</h3>
        <div className="w-full flex flex-col gap-8">
          {
            isLoading && <LoadingIcon />
          }
          {
            postData &&


            postData.map((post) => <><Blogcard key={post} blogData={post} /> <hr className="w-3/4 border-green-800 last:hidden" /> </>)

          }
        </div>
      </section>
    </SelectionProvider.Provider>
  );
};

export default Home;