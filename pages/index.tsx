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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          <li>
            <Link href="/">
              <a>Landing</a>
            </Link>
          </li>
          <li>
            <Link href="/example-1">
              <a>
                MUI AccountCircleIcon, AddShoppingCartIcon, AlarmIcon, AppsIcon
                , DeleteIcon, PhotoCamera, SendIcon, Box, Button, IconButton,
                Stack, FormControl, FormHelperText, InputLabel, MenuItem,
                Select, Switch, TextField, 
              </a>
            </Link>
          </li>
          <li>
            <Link href="/example-2">
              <a>MUI Box, ButtonBase, Typography</a>
            </Link>
          </li>
          <li>
            <Link href="/example-3">
              <a>
                MUI Typography, StyledRating, Button, Rating, SendIcon,
                FavoriteBorderIcon, FavoriteIcon
              </a>
            </Link>
          </li>
          <li>
            <Link href="/example-4">
              <a>MUI TableContainer, Table, TableCell, TableRow</a>
            </Link>
          </li>
          <li>
            <Link href="/example-5">
              <a>MUI: Card, CardContent, ,Typography</a>
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
