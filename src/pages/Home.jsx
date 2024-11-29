import  { useState, createContext } from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";

export const SelectionProvider = createContext();
const Home = () => {
  const options = ["Blog", "Tags"];
  const [selection, setSelection] = useState(options[0]);
  return (
    <SelectionProvider.Provider value={{ selection, setSelection, options }}>
      <section className="min-h-screen gap-10 px-4 sm:px-8  md:px-16  lg:px-32 xl:px-64 flex flex-col bg-black text-white p-4 font-mono">
        <Navbar />
        <Hero />
      <h3 className="text-xl text-white font-bold">Latest</h3>
      </section>
    </SelectionProvider.Provider>
  );
};

export default Home;