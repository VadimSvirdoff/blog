import Head from "next/head";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import styles from "./_homePage.module.scss";
import ListItem from "@/components/listItem/ListItem";
import { File } from "@/types/types";

export interface HomePageProps {
  [key: string]: File[];
}

const HomePage = ({ blog, project, books, cv }: HomePageProps) => {
  return (
    <div>
      <Head>
        <title>👋 Home Page</title>
        <meta
          name="description"
          content="Full stack developer building apps that make problems go away."
        />
      </Head>
      <div className={styles.container}>
        <main>
          <Nav />
          <div className={styles.blurb}></div>
          <h2 className={styles.section}>CVs</h2>
          <ListItem list={cv} />
          <h2 className={styles.section}>Articles</h2>
          <ListItem list={blog} />
          <h2 className={styles.section}>Projects</h2>
          <ListItem list={project} />
          <h2 className={styles.section}>Books</h2>
          <ListItem list={books} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
