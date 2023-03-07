import Head from "next/head";
import Nav from "components/nav/Nav";
import Footer from "components/footer/Footer";
import styles from "./_homePage.module.scss";
import ListItem from "components/listItem/ListItem";
import { IFileProps } from "types/types";

export interface HomePageProps {
  [key: string]: IFileProps[];
}

const HomePage = ({ blog, projects, books, cv }: HomePageProps) => {
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
          <div className={styles.blurb}>
            <p>
              I'm just a dreamer and geek.<br />
              My main interest is <strong>coding, science and fantasy</strong>,<br />
              I believe that's way will make our world better,<br />
              So let's rock it.🚀
            </p>

          </div>
          <h2 className={styles.section}>CVs</h2>
          <ListItem list={cv} />
          <h2 className={styles.section}>Articles</h2>
          <ListItem list={blog} />
          <h2 className={styles.section}>Projects</h2>
          <ListItem list={projects} />
          <h2 className={styles.section}>Books</h2>
          <ListItem list={books} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
