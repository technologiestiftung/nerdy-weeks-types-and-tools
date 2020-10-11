import React from "react";

export const Input: React.FC<{
  changeHandler: (event: React.ChangeEvent<any>) => void;
}> = ({ children, changeHandler }) => {
  return (
    <form>
      <label htmlFor="text">Add your food</label>
      <input
        placeholder="Type your favorite food"
        type="text"
        id="text"
        onChange={changeHandler}
      />
      <br />
      {children}
    </form>
  );
};
