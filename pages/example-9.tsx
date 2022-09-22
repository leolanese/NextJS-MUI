import Link from "next/link";
import {Back} from 'utility/helper';

const Example9 = () => {
  return (
    <>
      <div style={{ margin: 30 }}>
        <Back />
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
      </div>
    </>
  );
};

export default Example9;
