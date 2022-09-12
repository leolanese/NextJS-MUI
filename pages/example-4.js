import "@fontsource/roboto";
import Button from "@mui/material/Button";
import {useState} from "react";

function Example3() {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ margin: 30 }}>
      <h1>{counter}</h1>
      <Button
        onClick={() => setCounter(counter + 1)}
        color="primary"
        variant="contained"
      >
        Increment
      </Button>
      -
      <Button
        onClick={() => setCounter(counter - 1)}
        color="primary"
        variant="contained"
      >
        Decrement
      </Button>
    </div>
  );
}

export default Example3;
