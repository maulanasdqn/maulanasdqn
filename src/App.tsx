import { FC, Fragment, ReactElement } from "react";
import ReactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
const App: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <section className="items-center flex justify-center w-full h-screen flex-col">
        <img data-testid="React Logo" width={400} src={ReactLogo} alt="react-logo" />
        <h1 className="text-black-900 text-2xl font-sans">Hello there</h1>
        <span className="font-sans">this is my personal web</span>
        <h1 className="text-black-900 text-4xl font-sans">Maulana Sodiqin</h1>
      </section>
    </Fragment>
  );
};

export default App;
