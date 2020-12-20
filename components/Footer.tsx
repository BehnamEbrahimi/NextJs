import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { withTranslation } from "../i18n";
import translator from "../utils/translator";
import {
  FooterTranslationContext,
  footerTranslationKeys,
} from "../contexts/TranslationsContexts";
import styles from "./Footer.module.scss";

interface Props {
  readonly t: TFunction;
}

const Footer: NextPage<Props> = ({ t }) => (
  <FooterTranslationContext.Provider
    value={translator(t, footerTranslationKeys) as any}
  >
    <footer className={styles.wrapper}>
      <p>{t("text")}</p>
    </footer>
  </FooterTranslationContext.Provider>
);

export default withTranslation("footer")(Footer);
