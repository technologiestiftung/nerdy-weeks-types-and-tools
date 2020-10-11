import React from "react";
export const Output: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="output">
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
};
