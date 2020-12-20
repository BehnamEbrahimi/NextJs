import { useContext } from "react";
import { NextPage } from "next";
import { HomeTranslationContext } from "../contexts/TranslationsContexts";
import styles from "./Showcase.module.scss";

interface Props {}

const Showcase: NextPage<Props> = () => {
  const homeTranslationContext = useContext(HomeTranslationContext);

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h1>{homeTranslationContext.slogan}</h1>
        <p>{homeTranslationContext.text}</p>
      </div>
    </section>
  );
};

export default Showcase;
