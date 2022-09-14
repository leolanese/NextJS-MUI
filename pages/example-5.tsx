import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import type {InferGetStaticPropsType} from "next";
import type {Repository} from "../types/github";

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const data: Repository = await res.json();
  return {
    props: {
      stars: data.stargazers_count,
      full_name: data.full_name,
    },
  };
}

export default function IndexPage({
  stars,
  full_name,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log({ stars, full_name });
  return (
    <>
      <div style={{ margin: 30 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 34 }}
              color="text.secondary"
              gutterBottom
            >
              {full_name} has {stars} ⭐️
            </Typography>

            <Typography variant="body2" color="text.secondary">
              By default, we use the combination of a div 
              element and a background image to display the media.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Button</Button>
            <Button size="small">Button</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
