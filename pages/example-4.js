import "@fontsource/roboto";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from "next/future/image";
import {useState} from "react";
import img from "../imgs/test.png";

function createData(index = 0, tutorial = '', link = '') {
    return { index, tutorial, link }
}
  
const rows = [
    createData(1,'A','1',),
    createData(2,'B','2',),
    createData(3,'C',
'3',
    ),
]

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

      <div>
           <div
                className="head"
                style={{
                    width: 'fit-content',
                    margin: 'auto',
                }}
            >
                <h1
                    style={{
                        color: 'green',
                    }}
                >
                    GeeksforGeeks
                </h1>
                <strong>React MUI TableContainer API</strong>
            </div>
  
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Sl. No.</TableCell>
                            <TableCell align="center">
                                Tutorial(Center Align)</TableCell>
                            <TableCell>Link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.index}
                                </TableCell>
                                <TableCell align="center">
                                    {row.tutorial}</TableCell>
                                <TableCell>
                                    <a href={row.link} target="_blank">
                                        {row.link}
                                    </a>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    </div>
  );
}

export default Example3;
