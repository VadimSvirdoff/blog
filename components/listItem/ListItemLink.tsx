import Link from "next/link";
import styles from "./_listItem.module.scss";

interface ListItemLink {
    title: string;
    titleType: string;
    slug?: string;
}

export const ListItemLink = ({ title, titleType = "link", slug = "#" }: ListItemLink) => {
    switch (titleType) {
        case "link":
            return (
                <Link href={slug}>
                    <a className={styles.link}>
                        <h3 className={styles.postTitle}>{title}</h3>
                    </a>
                </Link>
            )

        case "info":
            return (
                <h3>
                    <b className={styles.postTitle}>{title}</b>
                </h3>
            )

        default:
            return <></>
    }

}