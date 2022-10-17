import {useState} from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [search, setSearch] = useState("");
  let [response, setResponse] = useState([]);
  const api_url = `https://api.github.com/search/users?q=${search}&per_page=5`;

  return (
    <div className={styles.main}>
      <input
        type="text"
        placeholder="Search Github Users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={async () => {
          // dynamically load the axios dependency
          const axios = (await import("axios")).default;
          const res = await axios.get(api_url).then((res) => {
            setResponse(res);
          });
        }}
      >
        Search for GitHub users
      </button>

      <div>
        <h1>{search} Results</h1>
        <ul>
          {response?.data ? (
            response &&
            response?.data.items.map((item, index) => (
              <span key={index}>
                <p>{item.login}</p>
              </span>
            ))
          ) : (
            <p>No Results</p>
          )}
        </ul>
      </div>
    </div>
  );
}
