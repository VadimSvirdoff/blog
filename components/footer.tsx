import styles from "../styles/layout/_footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <hr className={styles.line} />
      <p className={styles.contact}>
        GitHub{" "}
        <a href="https://github.com/VadimSvirdoff" target="_blank" rel="noreferrer">
          @VadimSvirdoff
        </a>
      </p>
      <p className={styles.contact}>
        Email{" "}
          <a href='#'>avangardsv@gmail.com</a>
      </p>
      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} Vadym Svyrydov
      </p>
    </footer>
  );
}
