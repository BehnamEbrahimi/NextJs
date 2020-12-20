import { useContext } from "react";
import { NextPage } from "next";
import { AboutTranslationContext } from "../contexts/TranslationsContexts";
import styles from "./Main.module.scss";

interface Props {}

const Main: NextPage<Props> = () => {
  const aboutTranslationContext = useContext(AboutTranslationContext);

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <article>
          <h1>{aboutTranslationContext.title}</h1>
          <p>{aboutTranslationContext.text}</p>
          <p className="dark">{aboutTranslationContext.text}</p>
        </article>

        <aside className="dark">
          <h3>{aboutTranslationContext.title_aside}</h3>
          <p>{aboutTranslationContext.text_aside}</p>
        </aside>
      </div>
    </section>
  );
};

export default Main;
