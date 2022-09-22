import "@fontsource/roboto";
import {TableSortLabel} from "@mui/material";
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
import {Back} from 'utility/helper';
import img from "../imgs/test.png";

function createData1(index = 0, tutorial = '', link = '') {
    return { index, tutorial, link }
}
  
const rows1 = [
    createData1(1,'A','1',),
    createData1(2,'B','2',),
    createData1(3,'C','3',),
]

function createData2(number, item, qty, price) {
  return { number, item, qty, price };
}

const rows2 = [
  createData2(1, "Apple", 5, 3),
  createData2(2, "Orange", 2, 2),
  createData2(3, "Grapes", 3, 1),
  createData2(4, "Tomato", 2, 1.6),
  createData2(5, "Mango", 1.5, 4)
];

function Example4() {
  const [counter, setCounter] = useState(0);

  const [rowData, setRowData] = useState(rows2);
  const [orderDirection, setOrderDirection] = useState("asc");

  const sortArray = (arr, orderBy) => {
    switch (orderBy) {
      case "asc":
      default:
        return arr.sort((a, b) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        );
      case "desc":
        return arr.sort((a, b) =>
          a.price < b.price ? 1 : b.price < a.price ? -1 : 0
        );
    }
  };

  const handleSortRequest = () => {
    setRowData(sortArray(rows2, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <Back></Back>
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

      <div style={{ margin: 30 }}>
        <hr></hr>
        <div
          className="head"
          style={{
            width: "fit-content",
            margin: "auto",
          }}
        >
          <h1>React MUI Table</h1>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Sl. No.</TableCell>
                <TableCell align="center">Tutorial(Center Align)</TableCell>
                <TableCell>Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row1, index) => (
                <TableRow key={row1.index}>
                  <TableCell component="th" scope="row">
                    {row1.index}
                  </TableCell>
                  <TableCell align="center">{row1.tutorial}</TableCell>
                  <TableCell>
                    <a href={row1.link} target="_blank">
                      {row1.link}
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h1>Table sorting</h1>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">S.No</TableCell>

                <TableCell align="center">Item</TableCell>

                <TableCell align="center">Quantity&nbsp;(kg)</TableCell>

                <TableCell align="center" onClick={handleSortRequest}>
                  <TableSortLabel active={true} direction={orderDirection}>
                    Price&nbsp;($)
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowData.map((row) => (
                <TableRow key={row.number}>
                  <TableCell component="th" scope="row" align="center">
                    {row.number}
                  </TableCell>
                  <TableCell align="center">{row.item}</TableCell>
                  <TableCell align="center">{row.qty}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        
    </>
  );
}

export default Example4;
