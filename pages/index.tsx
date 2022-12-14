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
              <a>
                MUI AccountCircleIcon, AddShoppingCartIcon, AlarmIcon, AppsIcon
                , DeleteIcon, PhotoCamera, SendIcon, Box, Button, IconButton,
                Stack, FormControl, FormHelperText, InputLabel, MenuItem,
                Select, Switch, TextField,
              </a>
            </Link>
          </li>

          <li>
            <Link href="/example/example-2">
              <a>MUI Box, ButtonBase, Typography</a>
            </Link>
          </li>

          <li>
            <Link href="/example/example-3">
              <a>
                MUI Typography, StyledRating, Button, Rating, SendIcon,
                FavoriteBorderIcon, FavoriteIcon
              </a>
            </Link>
          </li>

          <li>
            <Link href="/example/example-4">
              <a>MUI TableContainer, Table, TableCell, TableRow</a>
            </Link>
          </li>
          <li>
            <Link href="/example/example-5">
              <a>MUI: Card, CardContent, ,Typography</a>
            </Link>
          </li>

          <li>
            <Link href="/example/example-6">
              <a>
                MUI: FormControl, Autocomplete, Typography, SvgIcon,
                SvgIconProps, Container, Link, CssBaseline, OutlinedInput
              </a>
            </Link>
          </li>

          <li>
            <Link href="/example/example-7">
              <a>
                MUI: Autocomplete, Typography, FormControl, InputLabel,
                ListItemText, MenuItem, OutlinedInput, Select, CssBaseline
              </a>
            </Link>
          </li>

          <li>
            <Link href="/example/example-8">
              <a>
                MUI: Autocomplete, Paper, TextField, CssBaseline, Grid, Stack,
                Stack, Box, Paper
              </a>
            </Link>
          </li>

          <li>
            <Link href="/example/example-9">
              <a>
                MUI: Fetching API data, Table, TableContainer, TableHead,
                TableRow, TableBody, TableCell
              </a>
            </Link>
          </li>

          <li>
            <Link href="/example/example-10">
              <a>MUI: Fetching API data</a>
            </Link>
          </li>

          <li>
            <Link href="/example/example-11">
              <a>MUI: Dynamic imports, with and without SSR</a>
            </Link>
          </li>

          <li>
            <Link href="/example/example-12">
              <a>MUI: Dynamic imports for libraries</a>
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
