import { SlagProps } from './HomePage';
// import styles from "styles/pages/_index.module.scss";
import Link from "next/link";
import { formatDate } from 'utils/time';

type Projects = { projects: SlagProps[] }

const Projects = ({ projects }: Projects) => (
    <>
        {projects.map(({ slug, title, publishedDate }) => {
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

export default Projects
