
export const getStaticProps = async () => {
  // Fetching data from jsonplaceholder.
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  let allAlbums = await res.json();

  // Sending fetched data to the page component via props.
  return {
    props: {
      allAlbums: allAlbums.map((album) => album.title),
    },
  };
};

const Albums = ({ allAlbums }) => {
  return (
    <div>
      <h1>All Albums</h1>
      {allAlbums.map((album, idx) => (
        <div key={idx}>{album}</div>
      ))}
    </div>
  );
};

export default Albums;
