import { useContext } from "react";
import { NextPage } from "next";
import { HomeTranslationContext } from "../contexts/TranslationsContexts";
import styles from "./Boxes.module.scss";
import Box from "./Box";

interface Props {}

const Boxes: NextPage<Props> = () => {
  const homeTranslationContext = useContext(HomeTranslationContext);

  return (
    <section>
      <div className={`container ${styles.wrapper}`}>
        <Box
          imagePath="/static/images/yoda1.jpg"
          imageAlt="Yoda"
          title={homeTranslationContext.box_1_title}
          desc={homeTranslationContext.box_1_desc}
        />
        <Box
          imagePath="/static/images/yoda2.jpg"
          imageAlt="Yoda"
          title={homeTranslationContext.box_2_title}
          desc={homeTranslationContext.box_2_desc}
        />
        <Box
          imagePath="/static/images/yoda3.jpg"
          imageAlt="Yoda"
          title={homeTranslationContext.box_3_title}
          desc={homeTranslationContext.box_3_desc}
        />
      </div>
    </section>
  );
};

export default Boxes;
