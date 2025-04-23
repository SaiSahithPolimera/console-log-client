import { BracketsRounded, CloseIcon, NavIcon } from "./Icons";
import { SelectionProvider } from "../pages/Home";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { selection, options, setSelection } = useContext(SelectionProvider);
  const [active, setActive] = useState(false);
  return (
    <nav className="flex  justify-between items-center">
      <header className="tracking-widest hover:cursor-pointer flex items-center flex-row gap-1">
        <h1 className="font-semibold text-2xl first-letter:text-4xl">
          CONSOLE LOG
        </h1>
        <BracketsRounded />
      </header>
      <button className="md:hidden" onClick={() => setActive(!active)}>
        <NavIcon />
      </button>
      <ul
        className={`md:flex gap-3 md:items-center items-start md:p-0 p-8 transition-all duration-300 
            ${active ? 'absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-start items-start ' : 'hidden'}`}
      >
        <button className={`${active ? 'block' : 'hidden'}`} onClick={() => setActive(!active)}>
          < CloseIcon />
        </button>
        {options.map((option) => (
          <li
            key={option}
            onClick={() => setSelection(option)}
            className={`text-xl p-1 transition ease-in-out duration-150 hover:cursor-pointer ${option === selection ? "text-green-800" : ""
              }`}
          >
            {option}
          </li>
        ))}
        <Link to={"/login"} className="text-xl flex gap-2 items-center text-white/80" >
          Login</Link>
      </ul>
    </nav >
  );
};

export default Navbar;
