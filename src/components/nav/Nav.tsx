import Link from "next/link";
import styles from "./_nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.flex}>
      <p className={styles.logo}>
        <Link href="/">
          Vadym Svyrydov
        </Link>
      </p>
      <ul>
        <li className={styles.navItem}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
