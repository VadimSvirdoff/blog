import Link from "next/link";
import styles from "./_nav.module.scss";

interface INav {
  disableReturnToHome?: boolean;
  name?: string;
}

export default function Nav({ disableReturnToHome, name }: INav) {
  return (
    <nav className={styles.flex}>
      <p className={styles.logo}>
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
      {disableReturnToHome
        ? <ul>
          <li className={styles.navItem}>
            <Link href="/">
              <a className={styles.link}>Home</a>
            </Link>
          </li>
        </ul>
        : null}
    </nav>
  );
}
