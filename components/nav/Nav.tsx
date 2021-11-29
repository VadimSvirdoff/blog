import Link from "next/link";
import styles from "./_nav.module.scss";

interface INav {
  navLinkType?: string;
  name?: string;
}

export default function Nav({ navLinkType, name }: INav) {
  switch (navLinkType) {
    case "CUSTOM_NAV_LINK":
      return (
        <nav className={styles.flex}>
          <p className={styles.logo}>
              <a>{name}</a>
          </p>
        </nav>
      );

    default:
      return (
        <nav className={styles.flex}>
          <p className={styles.logo}>
            <Link href="/">
              <a>Vadym Svyrydov</a>
            </Link>
          </p>
          <ul>
            <li className={styles.navItem}>
              <Link href="/">
                <a className={styles.link}>Home</a>
              </Link>
            </li>
          </ul>
        </nav>
      );
  }

}
