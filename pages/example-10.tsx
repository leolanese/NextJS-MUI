import useSWR from "swr";
import {Back} from "utility/helper";
import {Person} from "../interfaces";
import PersonComponent from "../utility/Person";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/people", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.table(data);

  return (
    <>
      <div style={{ margin: 30 }}>
        <Back />
        <h1>NextJS Api Routes</h1>
        <ul>
          {data.map((p: Person) => (
            <PersonComponent key={p.id} person={p} />
          ))}
        </ul>
      </div>
    </>
  );
}
