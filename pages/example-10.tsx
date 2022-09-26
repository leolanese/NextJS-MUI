import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/people", fetcher);

  console.table(data);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {/* {
        
      data.map((p: Person) => (
        <PersonComponent key={p.id} person={p} />
      ))} */}
    </ul>
  );
}
