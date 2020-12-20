import { NextPage } from "next";
import { Link } from "../i18n";
import styles from "./MenuItem.module.scss";

interface Props {
  text: string;
  to: string;
  active: boolean;
}

const MenuItem: NextPage<Props> = ({ text, to, active }) => {
  return (
    <Link href={to}>
      <a className={`${styles.link} ${active ? "highlight" : ""}`}>{text}</a>
    </Link>
  );
};

export default MenuItem;
