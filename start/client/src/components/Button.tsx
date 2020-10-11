import React from "react";
export const Button: React.FC<{
  clickHandler: (event: React.ChangeEvent<any>) => void;
}> = ({ clickHandler, children }) => {
  return <button onClick={clickHandler}>{children}</button>;
};
