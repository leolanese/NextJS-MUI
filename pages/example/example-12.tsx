import {useState} from "react";
import {Back} from 'utility/Back';
import styles from "../../styles/Home.module.css";

export default function Home() {
  const [search, setSearch] = useState("");
  let [response, setResponse] = useState([]);
  const api_url = `https://api.github.com/search/users?q=${search}&per_page=5`;

  return (
    <>
      <div className={styles.main}>
        <Back />
        <h2>Dynamic imports for libraries</h2>
        <div>
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
              const res = await axios.get(api_url).then((res) => setResponse(res));
            }}
          >
            Search for GitHub users
          </button>
          
          <h3>[{search}]</h3>
          <ul>
           {response?.data ? (
              response &&
              response?.data.items.map((item, index) => (
                <li key={index}>
                  <p>{item.login}</p>
                </li>
              ))
            ) : (
              <p>No Results</p>
            )}
          </ul>
 
        </div>
      </div>
    </>
  );
}
