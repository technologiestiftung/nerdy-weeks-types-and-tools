import React from "react";
import { Headline } from "./components/Headline";
import { Output } from "./components/Output";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ApiResponse, getFoods } from "./lib/requests";
function App() {
  const [inputFood, setInputFood] = React.useState<string | undefined>(
    undefined
  );
  const [data, setData] = React.useState<ApiResponse | undefined>(undefined);

  React.useEffect(() => {
    getFoods("/api/foods")
      .then((json) => {
        setData(json);
        const oneFood =
          json.fruits.data[Math.floor(Math.random() * json.fruits.data.length)];
        setInputFood(oneFood);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Headline inputFood={inputFood} />
      <Input
        changeHandler={(event) => {
          event.preventDefault();
          console.log("change on  input");
        }}
      >
        <Button
          clickHandler={(event) => {
            event.preventDefault();
            console.log("clicked");
          }}
        >
          Submit
        </Button>
      </Input>
      <Output data={data} />
    </div>
  );
}

export default App;
