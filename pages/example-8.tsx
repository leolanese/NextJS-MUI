import {Autocomplete,CssBaseline,Paper,TextField} from "@mui/material";
import Stack from '@mui/material/Stack';
import {useState} from "react";
import {films} from 'utility/films';

const CustomPaper = ({ children, ...paperProps }) => (
  <Paper elevation={15} {...paperProps} className="customAutoComplete">
    {children}
  </Paper>
);

function Example8() {
  
  const [values, setValues] = useState([]);

  return (
    <>
      <div style={{ margin: 30 }}>
        <Stack spacing={3} sx={{ width: 500 }}>
          <Autocomplete
            openOnFocus
            id={"autocomplete"}
            disableClearable
            multiple
            disableCloseOnSelect
            id="tags-standard"
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
            componentsProps={{ paper: { elevation: 12 } }}
          />
        </Stack>
        <CssBaseline />
      </div>
    </>
  );
}

export default Example8;
