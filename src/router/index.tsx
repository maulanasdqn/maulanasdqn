import { FC, ReactElement } from "react";
import { Routes, Route } from "react-router-dom";

const Router: FC = (): ReactElement => {
  return (
    <Routes>
      <Route element={<></>} path={"/"} />
      <Route element={<></>} path={"/about"} />
      <Route element={<></>} path={"/projects"} />
      <Route element={<></>} path={"/services"} />
      <Route element={<></>} path={"*"} />
    </Routes>
  );
};

export default Router;
