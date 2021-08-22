import Head from "next/head";
import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "styles/pages/_index.module.scss";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Books from "modules/home/Books";

export interface SlagProps {
  slug: string;
  title: string;
  publishedDate: string;
}

export interface HomePageProps {
  blogs: SlagProps[];
  projects: SlagProps[];
  books: SlagProps[];
  }

const HomePage = ({ blogs, projects, books }: HomePageProps) => {
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
          <h2 className={styles.section}>Articles</h2>
          <Blogs blogs={blogs} />
          <h2 className={styles.section}>Projects</h2>
          <Projects projects={projects} />
          <h2 className={styles.section}>Books</h2>
          <Books books={books} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
