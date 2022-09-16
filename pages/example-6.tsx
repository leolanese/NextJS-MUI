import {Autocomplete,Container,CssBaseline,TextField} from "@mui/material";
import Link from "@mui/material/Link";
import SvgIcon,{SvgIconProps} from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/system";
import {films} from 'utility/data';

function LightBulbIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

function Containers() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "blue", height: "10vh" }} />
      </Container>
    </>
  );
}

function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={films}
      sx={{ width: 300 }}
      onChange={(a, b) => console.log(b.year)}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

function Example6() {
    return (
      <div style={{ margin: 30 }}>
        <h2>Typography, SVG & Link</h2>
        <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary">
          <LightBulbIcon sx={{ mr: 1, verticalAlign: "middle" }} />
          Learning NextJS and MUI:{" "}
          <Link href="https://www.leolanese.com">links</Link> with examples!
          <LightBulbIcon sx={{ mr: 1, verticalAlign: "middle" }} />
        </Typography>

        <h2>Container & Box</h2>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: "blue", height: "1px" }} />
        </Container>

        <h2>Combobox</h2>
        <ComboBox />
      </div>
    );
};

export default Example6;
