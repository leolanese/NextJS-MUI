import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

function Example3() {
  return (
    <div>
      <hr></hr>
      <h2>Custom icon and color</h2>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Custom icon and color</Typography>

        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />

        <Typography component="legend">10 stars</Typography>

        <Rating name="customized-10" defaultValue={2} max={10} />
      </Box>

      <hr></hr>
      <h2>Button categories</h2>
      <div style={{ margin: 30 }}>
        <Button variant="text" color="primary">
          Hello World
        </Button>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Button variant="outlined" color="primary">
          Hello World
        </Button>
      </div>

      <hr></hr>
      <h2>Button & SVG</h2>
      <div style={{ margin: 30 }}>
        <div>
          <Button variant="text" color="primary">
            Hello World
          </Button>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <Button variant="outlined" color="primary">
            Hello World
          </Button>
        </div>
        <div>
          <Button color="primary" disabled>
            Hello World
          </Button>
          <Button variant="outlined" color="primary" startIcon={<SendIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Example3;
