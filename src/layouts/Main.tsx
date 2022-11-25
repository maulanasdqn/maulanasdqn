import { FC, ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }): ReactElement => {
  return <section className="flex flex-col items-center justify-center">{children}</section>;
};

export default MainLayout;
