import { FC, ReactElement } from "react";

type ButtonProps = {
  text: string;
  className: string;
};

const Button: FC<ButtonProps> = ({ text, className }): ReactElement => {
  return <button className={className}>{text}</button>;
};

export default Button;
