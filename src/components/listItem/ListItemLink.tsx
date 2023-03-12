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
                <Link href={slug} className={styles.link}>
                    <h3 className={styles.postTitle}>{title}</h3>
                </Link>
            )

        case "info":
            return (
                <h3 className={styles.postTitle}>
                    <b>{title}</b>
                </h3>
            )

        default:
            return <></>
    }

}