import Box from "@mui/material/Box";
import FormControl,{useFormControl} from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import Link from "next/link";
import * as React from "react";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "This field is being focused";
    }

    return "Helper text";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "200" }}>
        <OutlinedInput type="date" 
          onChange={(v) => console.log(v)} 
        />
        <MyFormHelperText />
      </FormControl>
    </Box>
  );
}

export function Back() {
    return (
      <Link href="/">Back</Link>
    );
}