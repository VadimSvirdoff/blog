import { ProjectProps } from './HomePage';
import styles from "styles/pages/_index.module.scss";
import Link from "next/link";

type Projects = { projects: ProjectProps[] }

const Projects = ({ projects }: Projects) => (
    <>
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
    </>
)

export default Projects
