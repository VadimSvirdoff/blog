import { SlagProps } from './HomePage';
import Link from "next/link";
import styles from "styles/pages/_index.module.scss";
import { formatDate } from 'utils/time';

type Blogs = { blogs: SlagProps[] }


const Blog = ({ blogs }: Blogs) => (
  <>
    {blogs.map(({ slug, title, publishedDate }) => {
      return (
        <div key={slug} className={styles.postCard}>
          <Link href={slug}>
            <a className={styles.link}>
              <h3 className={styles.postTitle}>{title}</h3>
            </a>
          </Link>
          <p>
            {formatDate({ publishedDate })}
          </p>
        </div>
      );
    })}
  </>
)

export default Blog
