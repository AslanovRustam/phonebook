import styles from "./s.module.css";
import phone from "../images/telephone.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to your personal phonebook app</h1>
      <img className={styles.phone} src={phone} alt="phone" />
    </div>
  );
}
