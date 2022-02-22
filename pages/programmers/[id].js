export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((programmer) => {
    return {
      params: { id: programmer.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { programmer: data },
  };
};

const Details = ({ programmer }) => {
  return (
    <div>
      <h1>Name: {programmer.name}</h1>
      <p>Email: {programmer.email}</p>
      <p>Website: {programmer.website}</p>
      <p>City: {programmer.address.city}</p>
    </div>
  );
};

export default Details;
