import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { withTranslation } from "../i18n";
import translator from "../utils/translator";
import {
  FooterTranslationContext,
  footerTranslationKeys,
} from "../contexts/TranslationsContexts";

interface Props {
  readonly t: TFunction;
}

const Footer: NextPage<Props> = ({ t }) => (
  <FooterTranslationContext.Provider
    value={translator(t, footerTranslationKeys) as any}
  >
    <footer>
      <p>{t("description")}</p>
    </footer>
  </FooterTranslationContext.Provider>
);

export default withTranslation("footer")(Footer);
