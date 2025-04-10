import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  let name = "kim";
  let link = "http://naver.com";
  return (
    <div className={styles.page}>
      <h1 className="red">안녕안녕</h1>
      <p>{name}</p>
      <a href={link}>링크</a>
      <a href={link}>링크링크</a>
    </div>
  );
}
