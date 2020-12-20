import { useContext } from "react";
import { NextPage } from "next";
import styles from "./Showcase.module.scss";
import { HomeTranslationContext } from "../contexts/TranslationsContexts";

interface Props {}

const Showcase: NextPage<Props> = () => {
  const homeTranslationContext = useContext(HomeTranslationContext);

  return (
    <section>
      <div className="container">
        <h1>{homeTranslationContext.slogan}</h1>
        <p>{homeTranslationContext.text}</p>
      </div>
    </section>
  );
};

export default Showcase;
