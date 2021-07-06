import Head from "next/head";
import Link from "next/link";
import path from "path";
import matter from "gray-matter";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { promises as fs } from "fs";
import styles from "../styles/index.module.scss";

interface Blog {
  slug: string;
  title: string;
  publishedDate: string;
}

interface Project {
  slug: string;
  title: string;
  publishedDate: string;
}

interface Props {
  blogs: Blog[];
  projects: Project[];
}

export default function Home({ blogs, projects }: Props) {
  return (
    <div>
      <Head>
        <title>Vadym Svyrydov</title>
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
              Hi, I'm <strong>Vadym</strong> — a software developer based out
              of Austin, TX. I enjoy working with Javascript on both the client
              and server to craft memorable front-end experiences.
            </p>
            <p>
              This portfolio is built from scratch with <strong>Next.js</strong>{" "}
              and a library called{" "}
              <code>
                <a
                  href="https://github.com/hashicorp/next-mdx-remote"
                  target="_blank" rel="noreferrer"
                >
                  next-mdx-remote
                </a>
              </code>
              . It allows you to write Markdown and focus on the{" "}
              <em>content</em> of your portfolio.
            </p>
          </div>
          <h2 className={styles.section}>Articles</h2>
          {blogs.map((blog) => {
            return (
              <div key={blog.slug} className={styles.postCard}>
                <Link href={blog.slug}>
                  <a className={styles.link}>
                    <h3 className={styles.postTitle}>{blog.title}</h3>
                  </a>
                </Link>
                <p>
                  {new Intl.DateTimeFormat("default", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(blog.publishedDate))}
                </p>
              </div>
            );
          })}
          <h2 className={styles.section}>Projects</h2>
          {projects.map((project) => {
            return (
              <div key={project.slug} className={styles.postCard}>
                <Link href={project.slug}>
                  <a className={styles.link}>
                    <h3 className={styles.postTitle}>{project.title}</h3>
                  </a>
                </Link>
                <p>
                  {new Intl.DateTimeFormat("default", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(project.publishedDate))}
                </p>
              </div>
            );
          })}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const blogDirectory = path.join(process.cwd(), "content/blogs");
  const projectDirectory = path.join(process.cwd(), "content/projects");
  const blogFileNames = await fs.readdir(blogDirectory);
  const projectFileNames = await fs.readdir(projectDirectory);

  const blogs = await Promise.all(
    blogFileNames.map(async (filename) => {
      const filePath = path.join(blogDirectory, filename);
      const fileContent = await fs.readFile(filePath, "utf8");
      const { data } = matter(fileContent);
      /**
       * @todo if data.status === "draft, do not show"
       */
      const { title, publishedDate } = data;
      const slug = `/blog/${data.slug}`;
      return { slug, title, publishedDate };
    })
  );

  const projects = await Promise.all(
    projectFileNames.map(async (filename) => {
      const filePath = path.join(projectDirectory, filename);
      const fileContent = await fs.readFile(filePath, "utf8");
      const { data } = matter(fileContent);
      /**
       * @todo if data.status === "draft, do not show"
       */
      const { title, publishedDate } = data;
      const slug = `/project/${data.slug}`;
      return { slug, title, publishedDate };
    })
  );

  return { props: { blogs, projects } };
}
