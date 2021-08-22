import { SlagProps } from './HomePage';
import styles from "styles/pages/_index.module.scss";

type Books = { books: SlagProps[] }

const Books = ({ books }: Books) => (
    <>
        {books.map(({ slug, title, publishedDate }) => {
            return (
                <div key={slug} className={styles.postCard}>
                        <h3 className={styles.link}>
                            <b className={styles.postTitle}>{title}</b>
                        </h3>
                    <p>
                        {new Intl.DateTimeFormat("default", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }).format(new Date(publishedDate))}
                    </p>
                </div>
            );
        })}
    </>
)

export default Books
