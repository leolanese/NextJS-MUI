import useSWR from "swr";
import {Back} from "utility/Back";
import {Person} from "../../interfaces";
import PersonComponent from "../../utility/Person";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Example10 = () => {
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
};


export default Example10;
