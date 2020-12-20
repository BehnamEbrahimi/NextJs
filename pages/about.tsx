import { TFunction } from "next-i18next";
import { withTranslation } from "../i18n";
import translator from "../utils/translator";
import {
  AboutTranslationContext,
  aboutTranslationKeys,
} from "../contexts/TranslationsContexts";
import Layout from "../components/Layout";

const About = ({ t }: { readonly t: TFunction }) => {
  return (
    <Layout title="About">
      <AboutTranslationContext.Provider
        value={translator(t, aboutTranslationKeys) as any}
      >
        <p>{t("text")}</p>
      </AboutTranslationContext.Provider>
    </Layout>
  );
};

About.getInitialProps = async () => {
  return {
    namespacesRequired: ["about", "header", "footer"],
  };
};

export default withTranslation("about")(About);
