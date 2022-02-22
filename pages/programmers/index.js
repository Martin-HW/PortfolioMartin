import styles from "../../styles/Programmers.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { programmers: data },
  };
};

const Programmers = ({ programmers }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>All Programmers</h1>
      {programmers.map((programmer) => (
        <Link href={"/programmers/" + programmer.id} key={programmer.id}>
          <a className={styles.single}>
            <h3>{programmer.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Programmers;
