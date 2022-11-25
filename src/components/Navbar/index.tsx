import { FC, ReactElement } from "react";
import Logo from "../../assets/react.svg";
import Button from "../Button";
const Navbar: FC = (): ReactElement => {
  return (
    <header
      data-testid="header-nav"
      className="font-lato items-center p-4 h-auto w-full mb-5 bg-gray-800"
    >
      <nav className="flex flex-row justify-between px-5 items-center">
        <img width="40" className="h-10" src={Logo} alt="Logo" />
        <ul className="flex flex-row justify-around gap-x-5 font-bold text-lg text-white list-none">
          <li className="cursor-pointer hover:underline decoration-blue-300">Home</li>
          <li className="cursor-pointer hover:underline decoration-blue-300">About</li>
          <li className="cursor-pointer hover:underline decoration-blue-300">Projects</li>
        </ul>
        <Button
          text="Hire Me"
          className="inline-block font-lato px-6 py-2.5 bg-blue-300 text-gray-800 font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-400 hover:shadow-lg focus:shadow-lg focus:outline-none transition duration-150 ease-in-out"
        />
      </nav>
    </header>
  );
};

export default Navbar;
