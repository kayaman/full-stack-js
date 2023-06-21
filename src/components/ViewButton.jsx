import styles from "./viewbutton.module.css";
import Link from "next/link";

const ViewButton = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default ViewButton;
