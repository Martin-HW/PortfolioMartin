import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Martin&apos;s Portfolio | Home</title>
        <meta name="keywords" content="portfolio" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.textHome}>
          “I’m not a great programmer; I’m just a good programmer with great
          habits.” by Kent Beck.
        </p>
        <p className={styles.textHome}>
          “Good programmers use their brains, but good guidelines save us having
          to think out every case.” by Francis Glassborow.
        </p>
        <p className={styles.textHome}>
          “The most disastrous thing that you can ever learn is your first
          programming language” by Alan Kay.
        </p>
        <p className={styles.textHome}>
          “A language that doesn’t affect the way you think about programming is
          not worth knowing” by Alan Perlis.
        </p>
        <p className={styles.textHome}>
          “Walking on water and developing software from a specification are
          easy if both are frozen.” by Edward V. Berard.
        </p>
        <Link href="/programmers/">
          <a className={styles.btn}>Programmers List</a>
        </Link>
      </div>
    </>
  );
}
