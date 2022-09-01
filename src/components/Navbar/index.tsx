import { FC, ReactElement } from "react";

const Navbar: FC = (): ReactElement => {
  return (
    <header
      data-testid="header-nav"
      className="items-center p-4 h-auto w-auto bg-gray-800"
    ></header>
  );
};

export default Navbar;
