import { NextPage } from "next";
import Image from "next/image";
import styles from "./Box.module.scss";

interface Props {
  title: string;
  desc: string;
  imagePath: string;
  imageAlt: string;
}

const Box: NextPage<Props> = ({ title, desc, imagePath, imageAlt }) => {
  return (
    <div>
      <Image src={imagePath} alt={imageAlt} width={500} height={500} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Box;
