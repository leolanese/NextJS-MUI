import "@fontsource/roboto";
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App + MUI examples</title>
        <meta name="description" content="NextJS & MUI with examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>NextJS & MUI</h2>
        <ul>
          <li>
            <Link href="/example/example-1">
                MUI AccountCircleIcon, AddShoppingCartIcon, AlarmIcon, AppsIcon
                , DeleteIcon, PhotoCamera, SendIcon, Box, Button, IconButton,
                Stack, FormControl, FormHelperText, InputLabel, MenuItem,
                Select, Switch, TextField,
            </Link>
          </li>

          <li>
            <Link href="/example/example-2">
              MUI Box, ButtonBase, Typography
            </Link>
          </li>

          <li>
            <Link href="/example/example-3">
                MUI Typography, StyledRating, Button, Rating, SendIcon,
                FavoriteBorderIcon, FavoriteIcon
            </Link>
          </li>

          <li>
            <Link href="/example/example-4">
              MUI TableContainer, Table, TableCell, TableRow
            </Link>
          </li>
          <li>
            <Link href="/example/example-5">
              MUI: Card, CardContent, ,Typography
            </Link>
          </li>

          <li>
            <Link href="/example/example-6">
                MUI: FormControl, Autocomplete, Typography, SvgIcon,
                SvgIconProps, Container, Link, CssBaseline, OutlinedInput
            </Link>
          </li>

          <li>
            <Link href="/example/example-7">
                MUI: Autocomplete, Typography, FormControl, InputLabel,
                ListItemText, MenuItem, OutlinedInput, Select, CssBaseline
            </Link>
          </li>

          <li>
            <Link href="/example/example-8">
                MUI: Autocomplete, Paper, TextField, CssBaseline, Grid, Stack,
                Stack, Box, Paper
            </Link>
          </li>

          <li>
            <Link href="/example/example-9">
                MUI: Fetching API data, Table, TableContainer, TableHead,
                TableRow, TableBody, TableCell
            </Link>
          </li>

          <li>
            <Link href="/example/example-10">
              MUI: Fetching API data
            </Link>
          </li>

          <li>
            <Link href="/example/example-11">
              MUI: Dynamic imports, with and without SSR
            </Link>
          </li>

          <li>
            <Link href="/example/example-12">
              MUI: Dynamic imports for libraries
            </Link>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
