import { FC, ReactElement } from "react";

const TextField: FC = (): ReactElement => {
  return <input data-testid="input" className="w-auto h-auto" />;
};

export default TextField;
