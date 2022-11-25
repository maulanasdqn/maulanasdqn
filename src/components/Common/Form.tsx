import { FC, FormEventHandler, ReactNode, ReactElement } from "react";

interface Props {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  children?: ReactNode;
}

const Form: FC<Props> = ({ onSubmit, children }): ReactElement => {
  return (
    <form onSubmit={onSubmit} data-testid="form" className="w-auto h-auto">
      {children}
    </form>
  );
};

export default Form;
