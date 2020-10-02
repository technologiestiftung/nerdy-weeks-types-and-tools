import React from "react";

function App() {
  return (
    <div className="App">
      <h1>The favorite food is</h1>
      <h2>input food</h2>
      <form>
        <label htmlFor="method">HTTP Method</label>
        <select name="method" id="method">
          <option value="GET">GET</option>
          <option value="GET">POST</option>
        </select>
        <br />
        <label htmlFor="text">Add your food</label>
        <input type="text" id="text" />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div className="output">
        <pre>
          <code>JSON.stringify(data, null, 2)</code>
        </pre>
      </div>
    </div>
  );
}

export default App;
