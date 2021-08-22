import { SlagProps } from './HomePage';
import Link from "next/link";
import styles from "styles/pages/_index.module.scss";

type Blogs = { blogs: SlagProps[] }


const Blog = ({ blogs }: Blogs) => (
  <>
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
  </>
)

export default Blog
