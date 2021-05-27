import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <a href="/api/chrome">
          Hit <code>/api/chrome</code> to test!
        </a>
      </h1>
    </div>
  );
}
