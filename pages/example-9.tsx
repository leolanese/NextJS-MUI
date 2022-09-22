import Link from "next/link";

const Example9 = () => {
  return (
    <>
      <h1>Fetching API data NextJS</h1>
      <ul>
        <li>
          getStaticProps :<Link href={"/albums"}>Albums Page</Link>
        </li>
        <li>
          getStaticPaths :<Link href={"/users/1"}>User</Link>
        </li>
        <li>
          getServerSideProps :<Link href={"/posts"}>Posts Page</Link>
        </li>
      </ul>
      
    </>
  );
};

export default Example9;
