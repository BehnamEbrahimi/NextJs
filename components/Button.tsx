import { NextPage } from "next";
import styles from "./Button.module.scss";

interface Props {
  text: string;
}

const Button: NextPage<Props> = ({ text }) => {
  return (
    <button type="button" className={`${styles.error} important`}>
      {text}
    </button>
  );
};

export default Button;
