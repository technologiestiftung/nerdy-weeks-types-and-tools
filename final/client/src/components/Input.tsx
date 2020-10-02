import React from "react";
import { style } from "../lib/style";
export const Input: React.FC<{
  changeHandler: (event: React.ChangeEvent<any>) => void;
}> = ({ changeHandler, children }) => {
  return (
    <>
      <form style={style}>
        <label htmlFor="text">Add some food</label>
        <br />
        <input
          type="text"
          id="text"
          placeholder="your favorite food"
          onChange={changeHandler}
        ></input>
        <br />

        {children}
      </form>
    </>
  );
};
