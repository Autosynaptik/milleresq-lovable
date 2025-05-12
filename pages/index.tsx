import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing page with choices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome</h1>

        <div className={styles.choiceGrid}>
          <button className={styles.choiceButton} onClick={() => window.location.href = '/find'}>Find</button>
          <button className={styles.choiceButton}>Search</button>
          <button className={styles.choiceButton}>Host</button>
        </div>
      </main>
    </div>
  );
};

export default Home;