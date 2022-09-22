import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AlarmIcon from "@mui/icons-material/Alarm";
import AppsIcon from "@mui/icons-material/Apps";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import FormControl from '@mui/material/FormControl';
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import * as React from 'react';

import {pink} from "@mui/material/colors";
import {alpha,styled} from "@mui/material/styles";

function handleKeyPress(e) {
  var key = e.key;
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    e.preventDefault();
  } else {
    console.log("You pressed a key: " + key);
  }
}

function Example1() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  const GreenSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: pink[600],
      "&:hover": {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: pink[600],
    },
  }));

  const label = { inputProps: { "aria-label": "Color switch demo" } };
  
  return (
    <>
      <Back></Back>
      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Basic button</h2>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Text button</h2>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Contained button</h2>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>disableElevation</h2>
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Outlined button</h2>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Handling clicks</h2>
        <Button
          onClick={() => {
            alert("clicked");
          }}
        >
          Click me
        </Button>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Colour</h2>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Sizes</h2>
        <Box sx={{ "& button": { m: 1 } }}>
          <div>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
          <div>
            <Button variant="outlined" size="small">
              Small
            </Button>
            <Button variant="outlined" size="medium">
              Medium
            </Button>
            <Button variant="outlined" size="large">
              Large
            </Button>
          </div>
          <div>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="medium">
              Medium
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
          </div>
        </Box>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Upload button</h2>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Buttons with icons and label</h2>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Icons</h2>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to access">
          <AppsIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to access">
          <AccountCircleIcon />
        </IconButton>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Icons sizes</h2>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Icons Colours</h2>
        <IconButton aria-label="DeleteIcon" color="secondary">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="DeleteIcon" color="success">
          <DeleteIcon />
        </IconButton>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>DropDown options</h2>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>FormControl & InputLabel</h2>
        <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
          <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-disabled-label"
            id="demo-simple-select-disabled"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} error>
          <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-error-label"
            id="demo-simple-select-error"
            value={age}
            label="Age"
            onChange={handleChange}
            renderValue={(value) => `⚠️  - ${value}`}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Error</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-readonly-label"
            id="demo-simple-select-readonly"
            value={age}
            label="Age"
            onChange={handleChange}
            inputProps={{ readOnly: true }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Read only</FormHelperText>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={age}
            label="Age *"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Switch</h2>
        <Switch {...label} defaultChecked />
        <Switch {...label} defaultChecked color="secondary" />
        <Switch {...label} defaultChecked color="warning" />
        <Switch {...label} defaultChecked color="default" />
        <GreenSwitch {...label} defaultChecked />
      </div>

      <div style={{ margin: 30 }}>
        <hr></hr>
        <h2>Textfield</h2>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Outlined secondary"
            color="secondary"
            focused
            onKeyPress={(e) => handleKeyPress(e)}
          />
          <TextField
            label="Filled success"
            variant="filled"
            color="success"
            focused
          />
          <TextField
            label="Standard warning"
            variant="standard"
            color="warning"
            focused
          />
        </Box>
      </div>
    </>
  );
}

export default Example1;
