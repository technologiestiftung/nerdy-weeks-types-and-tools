import React from "react";

// export function Headline() {
//   return <h1>Headline</h1>
// }
export const Headline: React.FC<{ inputFood?: string }> = ({ inputFood }) => {
  return (
    <>
      <h1>The favorite food is</h1>
      <h2>{inputFood ? inputFood : "Waiting"}</h2>
    </>
  );
};
