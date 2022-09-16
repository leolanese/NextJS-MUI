import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import * as React from "react";
import {variants} from 'utility/variants';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Example7() {
  const [variantName, setVariantName] = React.useState([
    {
      id: 11,
      name: "Nintendo",
      slug: "nintendo",
      type: "SubMain",
      locale: "en",
      created_at: "2021-11-15T08:30:22.000Z",
      updated_at: "2021-11-15T08:30:22.000Z"
    },
    {
      id: 10,
      name: "Xbox",
      slug: "xbox",
      type: "SubMain",
      locale: "en",
      created_at: "2021-11-15T08:30:08.000Z",
      updated_at: "2021-11-15T08:30:08.000Z",
    },
  ]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const preventDuplicate = value.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i
    );
    setVariantName(
      // On autofill we get a the stringified value.
      typeof preventDuplicate === "string"
        ? preventDuplicate.split(",")
        : preventDuplicate
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={variantName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.map((x) => x.name).join(", ")}
          MenuProps={MenuProps}
        >
          {variants.map((variant) => (
            <MenuItem key={variant.id} value={variant}>
              <Checkbox checked={variantName.indexOf(variant) > -1} />
              <ListItemText primary={variant.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Example7;