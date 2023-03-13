import Head from "next/head";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import styles from "./_homePage.module.scss";
import ListItem from "@/components/listItem/ListItem";
import { File } from "@/types/types";

export interface HomePageProps {
  [key: string]: File[];
}

const HomePage = ({ blog, books, cv }: HomePageProps) => {
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
              Welcome onboard!<br />
              If you are here that means that our interests are matched.<br />
              In blog you could find: articles with life stories, recomened books (feedbacks will be in the future), and cv with relevant expirience.<br />
              If you have some points for improvment, please contact me via email, every feedbacks metters.
            </p>
          </div>
          <h2 className={styles.section}>CVs</h2>
          <ListItem list={cv} />
          <h2 className={styles.section}>Articles</h2>
          <ListItem list={blog} />
          <h2 className={styles.section}>Books</h2>
          <ListItem list={books} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
