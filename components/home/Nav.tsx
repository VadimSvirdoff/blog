import Link from "next/link";
import styles from "styles/components/_nav.module.scss";

export default function Nav() {
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
