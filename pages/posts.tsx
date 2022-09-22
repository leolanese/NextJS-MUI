
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


export const getServerSideProps = async (ctx) => {
  // ctx is the context object which contains the request,
  // response and props passed to the page.

  // fetching data from jsonplaceholder.
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let allPosts = await res.json();

  // Sending fetched data to the page component via props.
  return {
    props: {
      allPosts: allPosts.map((post) => post.title),
    },
  };
};

const Posts = ({ allPosts }) => {
  console.table(allPosts);
  
  return (
    <div>
      <h1>All Posts</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {allPosts.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {row}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Posts;
