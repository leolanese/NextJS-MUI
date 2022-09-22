
export const getStaticProps = async (ctx) => {
  // ctx will contain request parameters
  const { params } = ctx;

  // We will destructure id from the parameters
  const userId = params.id;

  // Fetching user data
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const userData = await res.json();

  // Sending data to the page via props
  return {
    props: {
      user: userData,
    },
  };
};

export const getStaticPaths = () => {
  // Specifying all the routes to be
  // pre-rendered by next js
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
      { params: { id: "8" } },
      { params: { id: "9" } },
      { params: { id: "10" } },
    ],
    fallback: false,
  };
};

const User = ({ user }) => {
  return (
    <>
      <h1>User {user.id}</h1>
      <h2>Name : {user.name}</h2>
      <h2>Email : {user.email}</h2>
    </>
  );
};

export default User;
