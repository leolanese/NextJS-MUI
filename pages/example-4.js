import "@fontsource/roboto";
import Button from "@mui/material/Button";
import Image from "next/future/image";
import {useState} from "react";
import img from "../imgs/test.png";

function Example3() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Counter</h2>
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

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Images</h2>
        <Image src={img} width={520} height={280} />
      </div>
    </div>
  );
}

export default Example3;
