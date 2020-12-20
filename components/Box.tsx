import { NextPage } from "next";
import styles from "./Box.module.scss";

interface Props {
  title: string;
  desc: string;
  imagePath: string;
  imageAlt: string;
}

const Box: NextPage<Props> = ({ title, desc, imagePath, imageAlt }) => {
  return (
    <div className={styles.wrapper}>
      <img src={imagePath} alt={imageAlt} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Box;
