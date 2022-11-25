import { FC, ReactElement } from "react";

const Button: FC = (): ReactElement => {
  return <button data-testid="button" className="text-2xl w-auto h-auto"></button>;
};

export default Button;
