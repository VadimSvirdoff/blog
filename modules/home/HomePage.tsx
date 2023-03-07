import Head from "next/head";
import Nav from "components/nav/Nav";
import Footer from "components/footer/Footer";
import styles from "./_homePage.module.scss";
import ListItem from "components/listItem/ListItem";
import { IFileProps } from "types/types";

export interface HomePageProps {
  [key: string]: IFileProps[];
}

const renderList = (pages: HomePageProps) => (
  Object.entries(pages).map(page => (
    <>
      <h2 className={styles.section}>{page[0]}</h2>
      <ListItem list={page[1]} />
    </>
  ))
)

const HomePage = (pages: HomePageProps) => {
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
          {renderList(pages)}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
