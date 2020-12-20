import { TFunction } from "next-i18next";
import { withTranslation } from "../i18n";
import translator from "../utils/translator";
import {
  NotFoundTranslationContext,
  notFoundTranslationKeys,
} from "../contexts/TranslationsContexts";
import Layout from "../components/Layout";

const Custom404 = ({ t }: { readonly t: TFunction }) => {
  return (
    <Layout title="Error">
      <NotFoundTranslationContext.Provider
        value={translator(t, notFoundTranslationKeys) as any}
      >
        <h1>{t("msg")}</h1>
      </NotFoundTranslationContext.Provider>
    </Layout>
  );
};

export default withTranslation("404")(Custom404);
