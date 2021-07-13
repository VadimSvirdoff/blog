import Head from "next/head";
import Nav from "components/Nav";
import Footer from "components/Footer";
import styles from "styles/pages/_index.module.scss";
import Projects from "./Projects";
import Blogs from "./Blogs";

export interface BlogProps {
    slug: string;
    title: string;
    publishedDate: string;
  }
  
export  interface ProjectProps {
    slug: string;
    title: string;
    publishedDate: string;
  }
  
export interface HomePageProps {
    blogs: BlogProps[];
    projects: ProjectProps[];
  }

const HomePage = ({ blogs, projects }: HomePageProps) => {
    return (
        <div>
      <Head>
        <title>👋 Hey, I'm Vadym Svyrydov</title>
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
              I'm just a dreamer and geek, who wants to make out world better. <br/>
              My main interest is <strong>coding and science</strong>, I believe that's way will save humanity,<br/>
              So let's rock it.🚀
            </p>
            
          </div>
          <h2 className={styles.section}>Articles</h2>
          <Blogs blogs={blogs}/>
          <h2 className={styles.section}>Projects</h2>
          <Projects projects={projects}/>
        </main>
        <Footer />
      </div>
    </div>
    )
}

export default HomePage
