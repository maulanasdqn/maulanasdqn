import { FC, ReactElement, ReactNode } from "react";

interface Props {
  cols?: string;
  rows?: string;
  children: ReactNode;
  gap?: string;
}

const GridLayout: FC<Props> = ({ children, cols = "4", rows = "2", gap = "4" }): ReactElement => {
  return (
    <section className={`grid grid-cols-${cols} grid-rows-${rows} gap-${gap}`}>{children}</section>
  );
};

export default GridLayout;
