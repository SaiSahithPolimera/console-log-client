import { BracketsRounded } from "./Icons";
import { SelectionProvider } from "../pages/Home";
import { useContext } from "react";

const Navbar = () => {
  const { selection, options, setSelection } = useContext(SelectionProvider);

  return (
    <nav className="flex justify-between">
      <header className="tracking-widest hover:cursor-pointer flex items-center flex-row gap-1">
        <h1 className="font-semibold text-2xl first-letter:text-4xl">
          CONSOLE LOG
        </h1>
        <BracketsRounded />
      </header>

      <ul className="flex gap-3">
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
      </ul>
    </nav>
  );
};

export default Navbar;
