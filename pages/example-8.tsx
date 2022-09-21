import {Autocomplete,CssBaseline,Paper,TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import {styled} from "@mui/material/styles";
import {useState} from "react";
import {films} from 'utility/films';


const CustomPaper = ({ children, ...paperProps }) => (
  <Paper elevation={15} {...paperProps} className="customAutoComplete">
    {children}
  </Paper>
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Example8() {
  
  const [values, setValues] = useState([]);

  return (
    <>
      <div style={{ margin: 30 }}>
        <h1>Multi Option</h1>
        <Stack spacing={3} sx={{ width: 500 }}>
          <Autocomplete
            openOnFocus
            id={"autocomplete"}
            disableClearable
            multiple
            disableCloseOnSelect
            isOptionEqualToValue={(o, v) => o.title == v.title}
            renderInput={(params) => (
              <TextField {...params} placeholder={"Select a movie"} />
            )}
            onChange={(e, selected) => {
              setValues(selected);
            }}
            getOptionLabel={(option) => `(${option?.year}) ${option?.title}`}
            options={[...films]}
            value={values}
            groupBy={(option) => option?.year ?? ""}
            PaperComponent={CustomPaper}
          />
        </Stack>
      </div>

      <CssBaseline />

      <div style={{ margin: 30 }}>
        <h1>Grid</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Item style={{ height: "40vh" }}>xs=4</Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>xs=4</Item>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={8}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item>xs=6</Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>xs=6</Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>xs=12</Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>xs=12</Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>xs=12</Item>
                </Grid>
                <Grid item xs={2.3}>
                  <Item>2</Item>
                </Grid>
                <Grid item xs={2.3}>
                  <Item>2</Item>
                </Grid>
                <Grid item xs={2.3}>
                  <Item>2</Item>
                </Grid>
                <Grid item xs={2.3}>
                  <Item>2</Item>
                </Grid>
                <Grid item xs={2.3}>
                  <Item>2</Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>xs=12</Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>xs=12</Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>

      <CssBaseline />
    </>
  );
}

export default Example8;
